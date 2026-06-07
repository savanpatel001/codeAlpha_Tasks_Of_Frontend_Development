"""
VibeWave Server - Full song streaming via JioSaavn
Run: python server.py -> http://localhost:8080
"""
import http.server, urllib.request, urllib.parse, json, os, base64, socketserver
from pyDes import des, ECB, PAD_PKCS5

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))

def decrypt_url(encrypted_url):
    key = b'38346591'
    cipher = des(key, ECB, b'\0\0\0\0\0\0\0\0', pad=None, padmode=PAD_PKCS5)
    data = base64.b64decode(encrypted_url.strip())
    url = cipher.decrypt(data, padmode=PAD_PKCS5).decode('utf-8')
    url = url.replace('_96.mp4', '_320.mp4').replace('_96_p.mp4', '_320.mp4')
    return url

class VibeHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=DIR, **kw)

    def do_GET(self):
        p = self.path
        if p.startswith('/api/search?'): self.api_search()
        elif p.startswith('/api/song?'): self.api_song()
        elif p.startswith('/api/stream?'): self.api_stream()
        else: super().do_GET()

    def _fetch(self, url):
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        })
        return urllib.request.urlopen(req, timeout=15)

    def _json_ok(self, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(data if isinstance(data, bytes) else json.dumps(data).encode())

    def api_search(self):
        try:
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get('query',[''])[0]
            url = 'https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=' + urllib.parse.quote(q)
            with self._fetch(url) as r:
                self._json_ok(r.read())
        except Exception as e:
            self.send_error(500, str(e))

    def api_song(self):
        try:
            pid = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get('pid',[''])[0]
            url = 'https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=' + pid
            with self._fetch(url) as r:
                raw = r.read()
            data = json.loads(raw)
            for sid, info in data.items():
                enc = info.get('encrypted_media_url', '')
                if enc:
                    try:
                        info['decrypted_url'] = decrypt_url(enc)
                    except Exception as ex:
                        info['decrypted_url'] = ''
            self._json_ok(data)
        except Exception as e:
            self.send_error(500, str(e))

    def api_stream(self):
        try:
            url = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get('url',[''])[0]
            if not url:
                self.send_error(400, 'Missing url')
                return
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://www.jiosaavn.com/',
            }
            # Forward the Range header from the browser to support seeking and buffering
            range_header = self.headers.get('Range')
            if range_header:
                headers['Range'] = range_header

            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                self.send_response(resp.status)
                
                # Forward headers back to the browser
                for h in ['Content-Type', 'Content-Range', 'Content-Length', 'Accept-Ranges']:
                    val = resp.headers.get(h)
                    if val:
                        self.send_header(h, val)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                
                # Stream the chunks
                while True:
                    chunk = resp.read(64 * 1024)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
        except Exception as e:
            try: self.send_error(502, str(e))
            except: pass

    def log_message(self, fmt, *args):
        try: print(f"[{self.log_date_time_string()}] {fmt % args}")
        except: pass

class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

if __name__ == '__main__':
    print(f'VibeWave server at http://localhost:{PORT}')
    s = ThreadingHTTPServer(('', PORT), VibeHandler)
    try: s.serve_forever()
    except KeyboardInterrupt: print('Stopped.')
