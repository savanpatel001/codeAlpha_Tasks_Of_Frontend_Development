// ============================================
//   VibeWave Music Player — app.js
// ============================================

const songs = [
  // ── LOVE SONGS (1–35) ──
  { id:1,  title:"Tum Hi Ho",            artist:"Arijit Singh",       category:"love",     emoji:"💖", duration:262 },
  { id:2,  title:"Raabta",               artist:"Arijit Singh",       category:"love",     emoji:"💕", duration:258 },
  { id:3,  title:"Tera Ban Jaunga",       artist:"Akhil Sachdeva",     category:"love",     emoji:"🌹", duration:231 },
  { id:4,  title:"Kesariya",             artist:"Arijit Singh",       category:"love",     emoji:"🧡", duration:274 },
  { id:5,  title:"Ae Dil Hai Mushkil",   artist:"Arijit Singh",       category:"love",     emoji:"💔", duration:289 },
  { id:6,  title:"Pal",                  artist:"Arijit Singh",       category:"love",     emoji:"🌸", duration:268 },
  { id:7,  title:"Hawayein",             artist:"Arijit Singh",       category:"love",     emoji:"🌬️", duration:295 },
  { id:8,  title:"Mere Naam Tu",         artist:"Abhay Jodhpurkar",   category:"love",     emoji:"💞", duration:271 },
  { id:9,  title:"Dil Diyan Gallan",     artist:"Atif Aslam",         category:"love",     emoji:"❤️", duration:245 },
  { id:10, title:"Agar Tum Saath Ho",    artist:"Arijit Singh",       category:"love",     emoji:"💑", duration:302 },
  { id:11, title:"Channa Mereya",        artist:"Arijit Singh",       category:"love",     emoji:"🌙", duration:278 },
  { id:12, title:"Phir Bhi Tumko Chahungo",artist:"Arijit Singh",     category:"love",     emoji:"🫀", duration:256 },
  { id:13, title:"Ilahi",               artist:"Arijit Singh",       category:"love",     emoji:"✨", duration:264 },
  { id:14, title:"Kaun Tujhe",           artist:"Palak Muchhal",      category:"love",     emoji:"🌺", duration:243 },
  { id:15, title:"Gerua",               artist:"Arijit Singh",       category:"love",     emoji:"🏔️", duration:276 },
  { id:16, title:"Tujhse Pyar Hai",      artist:"Darshan Raval",      category:"love",     emoji:"💗", duration:238 },
  { id:17, title:"Pehla Pyar",           artist:"KK",                 category:"love",     emoji:"🥀", duration:249 },
  { id:18, title:"Saware",              artist:"Arijit Singh",       category:"love",     emoji:"💫", duration:267 },
  { id:19, title:"O Sanam",              artist:"Lucky Ali",          category:"love",     emoji:"🎵", duration:221 },
  { id:20, title:"Bheegi Bheegi Raaton Mein", artist:"Adnan Sami",   category:"love",     emoji:"🌧️", duration:258 },
  { id:21, title:"Tere Liye",            artist:"Atif Aslam",         category:"love",     emoji:"💝", duration:241 },
  { id:22, title:"Tumse Hi",             artist:"Mohit Chauhan",      category:"love",     emoji:"💓", duration:253 },
  { id:23, title:"Sun Raha Hai",         artist:"Ankit Tiwari",       category:"love",     emoji:"🎶", duration:234 },
  { id:24, title:"Teri Mitti",           artist:"B Praak",            category:"love",     emoji:"🌿", duration:281 },
  { id:25, title:"Khairiyat",            artist:"Arijit Singh",       category:"love",     emoji:"🌼", duration:272 },
  { id:26, title:"Bekhayali",            artist:"Sachet Tandon",      category:"love",     emoji:"🥺", duration:296 },
  { id:27, title:"Main Rahoon Ya Na Rahoon", artist:"Armaan Malik",   category:"love",     emoji:"🌟", duration:259 },
  { id:28, title:"Ik Vaari Aa",          artist:"Arijit Singh",       category:"love",     emoji:"🕊️", duration:248 },
  { id:29, title:"Woh Lamhe",            artist:"Atif Aslam",         category:"love",     emoji:"⏳", duration:237 },
  { id:30, title:"Mileya Mileya",        artist:"Mohit Chauhan",      category:"love",     emoji:"💭", duration:265 },
  { id:31, title:"Tu Jaane Na",          artist:"Atif Aslam",         category:"love",     emoji:"🌊", duration:247 },
  { id:32, title:"Raat Bhar",            artist:"Arijit Singh",       category:"love",     emoji:"🌙", duration:252 },
  { id:33, title:"Sunn Raha Hai Na Tu",  artist:"Shreya Ghoshal",     category:"love",     emoji:"👂", duration:243 },
  { id:34, title:"Tumhare Hi Rahenge Hum",artist:"Armaan Malik",      category:"love",     emoji:"🤍", duration:238 },
  { id:35, title:"Aankhon Mein Teri",    artist:"KK",                 category:"love",     emoji:"👁️", duration:264 },

  // ── MAFIA / GANGSTER SONGS (36–68) ──
  { id:36, title:"Bhoomi",              artist:"Divine",             category:"mafia",    emoji:"🔥", duration:218 },
  { id:37, title:"Mere Gully Mein",      artist:"Divine & Naezy",     category:"mafia",    emoji:"🏙️", duration:197 },
  { id:38, title:"Biggest Rush",         artist:"Divine",             category:"mafia",    emoji:"💣", duration:224 },
  { id:39, title:"Farak",               artist:"Karma",              category:"mafia",    emoji:"⚔️", duration:208 },
  { id:40, title:"Kaam 25",             artist:"Divine",             category:"mafia",    emoji:"🎯", duration:213 },
  { id:41, title:"D Se Dance",           artist:"Honey Singh",        category:"mafia",    emoji:"🕶️", duration:231 },
  { id:42, title:"Brown Rang",           artist:"Honey Singh",        category:"mafia",    emoji:"🟫", duration:228 },
  { id:43, title:"Angreji Beat",         artist:"Gippy Grewal",       category:"mafia",    emoji:"🥊", duration:219 },
  { id:44, title:"Dilli Wali",           artist:"Yo Yo Honey Singh",  category:"mafia",    emoji:"🗡️", duration:241 },
  { id:45, title:"Lungi Dance",          artist:"Honey Singh",        category:"mafia",    emoji:"🕺", duration:226 },
  { id:46, title:"Raftaar",             artist:"Raftaar",            category:"mafia",    emoji:"🚨", duration:207 },
  { id:47, title:"Swag Mera Desi",       artist:"Badshah",            category:"mafia",    emoji:"💰", duration:215 },
  { id:48, title:"Paagal",              artist:"Badshah",            category:"mafia",    emoji:"🤪", duration:203 },
  { id:49, title:"Kala Chashma",        artist:"Badshah",            category:"mafia",    emoji:"😎", duration:219 },
  { id:50, title:"Mercy",               artist:"Badshah",            category:"mafia",    emoji:"🙏", duration:198 },
  { id:51, title:"DJ Wale Babu",         artist:"Badshah",            category:"mafia",    emoji:"🎧", duration:224 },
  { id:52, title:"Garmi",               artist:"Badshah & Neha",     category:"mafia",    emoji:"🌡️", duration:217 },
  { id:53, title:"She Move It Like",     artist:"Badshah",            category:"mafia",    emoji:"💃", duration:211 },
  { id:54, title:"Wakhra Swag",          artist:"Navv Inder",         category:"mafia",    emoji:"🔱", duration:228 },
  { id:55, title:"Or Kaur Ni",           artist:"Amrit Maan",         category:"mafia",    emoji:"🩸", duration:232 },
  { id:56, title:"Jatt Da Muqabala",     artist:"Sidhu Moosewala",    category:"mafia",    emoji:"👊", duration:241 },
  { id:57, title:"295",                 artist:"Sidhu Moosewala",    category:"mafia",    emoji:"🔫", duration:259 },
  { id:58, title:"So High",             artist:"Sidhu Moosewala",    category:"mafia",    emoji:"🚀", duration:248 },
  { id:59, title:"Dollar",              artist:"Sidhu Moosewala",    category:"mafia",    emoji:"💵", duration:237 },
  { id:60, title:"Legend",              artist:"Sidhu Moosewala",    category:"mafia",    emoji:"👑", duration:263 },
  { id:61, title:"Bambiha Bole",         artist:"Amrit Maan",         category:"mafia",    emoji:"🗣️", duration:245 },
  { id:62, title:"Gangster's Paradise",  artist:"Coolio",             category:"mafia",    emoji:"💀", duration:241 },
  { id:63, title:"Power Trip",           artist:"J. Cole",            category:"mafia",    emoji:"⚡", duration:297 },
  { id:64, title:"HUMBLE",              artist:"Kendrick Lamar",     category:"mafia",    emoji:"🃏", duration:177 },
  { id:65, title:"God's Plan",           artist:"Drake",              category:"mafia",    emoji:"🙌", duration:198 },
  { id:66, title:"Sicko Mode",           artist:"Travis Scott",       category:"mafia",    emoji:"🌀", duration:312 },
  { id:67, title:"Rockstar",             artist:"Post Malone",        category:"mafia",    emoji:"🌠", duration:218 },
  { id:68, title:"SAD!",                artist:"XXXTENTACION",       category:"mafia",    emoji:"😢", duration:166 },

  // ── GUJARATI SONGS (69–100) ──
  { id:69,  title:"Nonstop Garba",       artist:"Falguni Pathak",     category:"gujarati", emoji:"🌟", duration:312 },
  { id:70,  title:"Mara Dholna",         artist:"Falguni Pathak",     category:"gujarati", emoji:"🥁", duration:287 },
  { id:71,  title:"Maine Payal Hai Chhankai",artist:"Falguni Pathak", category:"gujarati", emoji:"💃", duration:264 },
  { id:72,  title:"O Jaana",             artist:"Falguni Pathak",     category:"gujarati", emoji:"🎉", duration:271 },
  { id:73,  title:"Dholi Taro Dhol Baaje",artist:"Kavita Krishnamurthy",category:"gujarati",emoji:"🪘", duration:298 },
  { id:74,  title:"Sanedo",             artist:"Osman Mir",          category:"gujarati", emoji:"🌺", duration:243 },
  { id:75,  title:"Radha Rani",          artist:"Devang Patel",       category:"gujarati", emoji:"🙏", duration:256 },
  { id:76,  title:"Tu Mane Kem Bhuli Gayi",artist:"Kirtidan Gadhvi", category:"gujarati", emoji:"😔", duration:238 },
  { id:77,  title:"Chogada",            artist:"Darshan Raval",      category:"gujarati", emoji:"🎵", duration:231 },
  { id:78,  title:"Halo Halo Garba",    artist:"Hemant Chauhan",     category:"gujarati", emoji:"🔔", duration:318 },
  { id:79,  title:"Rang De Tu Mohe",    artist:"Kailash Kher",       category:"gujarati", emoji:"🎨", duration:261 },
  { id:80,  title:"Jignesh Joshi Garba",artist:"Jignesh Kaviraj",    category:"gujarati", emoji:"✨", duration:334 },
  { id:81,  title:"Kem Cho",            artist:"Vikram Thakor",      category:"gujarati", emoji:"👋", duration:246 },
  { id:82,  title:"Na Ja Pardesi",      artist:"Vikram Thakor",      category:"gujarati", emoji:"🚶", duration:253 },
  { id:83,  title:"Mamta Ka Anchal",    artist:"Hemant Chauhan",     category:"gujarati", emoji:"👩", duration:271 },
  { id:84,  title:"Vaat Vaat Ma",       artist:"Kirtidan Gadhvi",    category:"gujarati", emoji:"🌄", duration:264 },
  { id:85,  title:"Aavya Koi Aavya",    artist:"Geeta Rabari",       category:"gujarati", emoji:"🎊", duration:248 },
  { id:86,  title:"Mara Piya",          artist:"Geeta Rabari",       category:"gujarati", emoji:"💑", duration:237 },
  { id:87,  title:"Tari Aankhno Afini", artist:"Aditya Gadhvi",      category:"gujarati", emoji:"👁️", duration:259 },
  { id:88,  title:"Keshu Kevo Rang Layo",artist:"Aditya Gadhvi",     category:"gujarati", emoji:"🌸", duration:243 },
  { id:89,  title:"Chhori Gham Na Kar", artist:"Nayan Trivedi",      category:"gujarati", emoji:"😊", duration:228 },
  { id:90,  title:"Prem Nu Paagalpan",  artist:"Nayan Trivedi",      category:"gujarati", emoji:"😝", duration:241 },
  { id:91,  title:"Jay Jay Garvi Gujarat",artist:"Purushottam Upadhyay",category:"gujarati",emoji:"🦁", duration:287 },
  { id:92,  title:"Navi Navi Preet",    artist:"Asha Bhosle",        category:"gujarati", emoji:"💞", duration:263 },
  { id:93,  title:"Shiyado",            artist:"Darshan Raval",      category:"gujarati", emoji:"🌊", duration:247 },
  { id:94,  title:"Bijli Na Chamka",    artist:"Tejal Thakor",       category:"gujarati", emoji:"⚡", duration:256 },
  { id:95,  title:"Morliyo",            artist:"Ustad Bismillah Khan",category:"gujarati", emoji:"🪈", duration:312 },
  { id:96,  title:"Rudi Rudi",          artist:"Hemant Chauhan",     category:"gujarati", emoji:"🌷", duration:278 },
  { id:97,  title:"Tame Raho Dur",      artist:"Kamlesh Barot",      category:"gujarati", emoji:"🥺", duration:243 },
  { id:98,  title:"Lagan Lagi Re",      artist:"Kirtidan Gadhvi",    category:"gujarati", emoji:"🔥", duration:267 },
  { id:99,  title:"Rass Garba",         artist:"Falguni Pathak",     category:"gujarati", emoji:"💫", duration:341 },
  { id:100, title:"Navratri Special",   artist:"Various Artists",    category:"gujarati", emoji:"🎆", duration:420 }
];

// ── State ──
let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let volume = 0.8;
let filteredSongs = [...songs];
let activeCategory = "all";
let progressInterval = null;
let simulatedTime = 0;
let songCache = {}; // Cache fetched song URLs
let isLoadingAudio = false;

// ── DOM ──
const audio           = document.getElementById("audioPlayer");
const playPauseBtn    = document.getElementById("playPauseBtn");
const playIcon        = document.getElementById("playIcon");
const prevBtn         = document.getElementById("prevBtn");
const nextBtn         = document.getElementById("nextBtn");
const shuffleBtn      = document.getElementById("shuffleBtn");
const shuffleTopBtn   = document.getElementById("shuffleTopBtn");
const repeatBtn       = document.getElementById("repeatBtn");
const muteBtn         = document.getElementById("muteBtn");
const progressBar     = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");
const volumeBar       = document.getElementById("volumeBar");
const volumeContainer = document.getElementById("volumeContainer");
const volumeLabel     = document.getElementById("volumeLabel");
const currentTimeEl   = document.getElementById("currentTime");
const durationEl      = document.getElementById("duration");
const songTitle       = document.getElementById("songTitle");
const songArtist      = document.getElementById("songArtist");
const songEmoji       = document.getElementById("songEmoji");
const albumArt        = document.getElementById("albumArt");
const categoryBadge   = document.getElementById("categoryBadge");
const playlistEl      = document.getElementById("playlist");
const searchInput     = document.getElementById("searchInput");
const currentSongNum  = document.getElementById("currentSongNum");
const totalSongs      = document.getElementById("totalSongs");
const equalizer       = document.getElementById("equalizer");
const sidebar         = document.getElementById("sidebar");
const menuBtn         = document.getElementById("menuBtn");
const sidebarClose    = document.getElementById("sidebarClose");
const toast           = document.getElementById("toast");

// ── Helpers ──
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2,"0")}`;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function getBadgeClass(category) {
  return { love:"love", mafia:"mafia", gujarati:"gujarati" }[category] || "";
}

// ── Render Playlist ──
function renderPlaylist() {
  const query = searchInput.value.toLowerCase().trim();
  filteredSongs = songs.filter(s => {
    const matchCat = activeCategory === "all" || s.category === activeCategory;
    const matchQ   = !query || s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query);
    return matchCat && matchQ;
  });

  totalSongs.textContent = filteredSongs.length;
  playlistEl.innerHTML = "";

  filteredSongs.forEach((song, idx) => {
    const li = document.createElement("li");
    li.className = "playlist-item" + (song.id === songs[currentIndex].id ? " active" : "");
    li.dataset.id = song.id;

    const isActive = song.id === songs[currentIndex].id;
    li.innerHTML = `
      <div class="item-num">${isActive && isPlaying
        ? `<div class="playing-wave"><span></span><span></span><span></span></div>`
        : idx + 1}</div>
      <div class="item-emoji">${song.emoji}</div>
      <div class="item-info">
        <div class="item-title">${song.title}</div>
        <div class="item-artist">${song.artist}</div>
      </div>
      <span class="item-badge badge-${song.category}">${song.category.toUpperCase()}</span>
    `;
    li.addEventListener("click", () => {
      const realIdx = songs.findIndex(s => s.id === song.id);
      loadSong(realIdx);
      playSong();
    });
    playlistEl.appendChild(li);
  });

  currentSongNum.textContent = currentIndex + 1;
}

// ── Load Song ──
function loadSong(index) {
  if (index < 0) index = songs.length - 1;
  if (index >= songs.length) index = 0;
  currentIndex = index;

  const song = songs[currentIndex];

  songTitle.textContent  = song.title;
  songArtist.textContent = song.artist;
  songEmoji.textContent  = song.emoji;
  categoryBadge.textContent = song.category.toUpperCase();
  categoryBadge.className = `song-category-badge ${song.category}`;

  // Album gradient per category
  const gradients = {
    love:     "linear-gradient(135deg, #3d0a2e, #7c1048, #3d0a2e)",
    mafia:    "linear-gradient(135deg, #1a0505, #5a0d0d, #1a0505)",
    gujarati: "linear-gradient(135deg, #2a1a00, #7a4500, #2a1a00)"
  };
  albumArt.style.background = gradients[song.category] || gradients.love;

  durationEl.textContent = formatTime(song.duration);
  simulatedTime = 0;
  progressBar.style.width = "0%";
  currentTimeEl.textContent = "0:00";

  // Stop current audio
  audio.pause();
  audio.currentTime = 0;

  // Fetch real song from JioSaavn
  fetchRealSong(song);

  renderPlaylist();
  scrollActiveIntoView();
}

// ── JioSaavn API via Local Proxy ──
async function fetchRealSong(song) {
  const cacheKey = song.id;
  if (songCache[cacheKey]) {
    audio.src = songCache[cacheKey].url;
    if (songCache[cacheKey].duration) {
      songs[currentIndex].duration = songCache[cacheKey].duration;
      durationEl.textContent = formatTime(songCache[cacheKey].duration);
    }
    if (isPlaying) audio.play().catch(()=>{});
    return;
  }
  isLoadingAudio = true;
  showToast('🔍 Loading: ' + song.title + '...');
  try {
    const q = encodeURIComponent(song.title + ' ' + song.artist);
    const res = await fetch('/api/search?query=' + q);
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch(e) {
      const m = text.match(/\{[\s\S]*\}/);
      data = m ? JSON.parse(m[0]) : null;
    }
    if (data && data.songs && data.songs.data && data.songs.data.length > 0) {
      const sid = data.songs.data[0].id;
      const res2 = await fetch('/api/song?pid=' + sid);
      const text2 = await res2.text();
      let det;
      try { det = JSON.parse(text2); } catch(e) {
        const m2 = text2.match(/\{[\s\S]*\}/);
        det = m2 ? JSON.parse(m2[0]) : null;
      }
      const info = det ? det[sid] : null;
      // Prefer decrypted full song URL, fallback to vlink preview
      const fullUrl = info ? info.decrypted_url : null;
      const fallbackUrl = info ? info.vlink : null;
      const audioUrl = fullUrl || fallbackUrl;
      if (info && audioUrl) {
        // Stream full song through local proxy to bypass CORS
        const streamUrl = '/api/stream?url=' + encodeURIComponent(audioUrl);
        const dur = parseInt(info.duration) || song.duration;
        songCache[cacheKey] = { url: streamUrl, duration: dur };
        if (songs[currentIndex].id === song.id) {
          audio.src = streamUrl;
          audio.volume = volume;
          audio.load();
          songs[currentIndex].duration = dur;
          durationEl.textContent = formatTime(dur);
          console.log('Full song:', song.title, fullUrl ? '320kbps' : 'preview');
        }
        showToast('🎵 Playing: ' + song.title);
      } else {
        showToast('⚠️ Song not available');
      }
    } else {
      showToast('⚠️ Song not found: ' + song.title);
    }
  } catch (err) {
    showToast('❌ Error loading song');
    console.error('Fetch error:', err);
  }
  isLoadingAudio = false;
}

function scrollActiveIntoView() {
  setTimeout(() => {
    const active = playlistEl.querySelector(".playlist-item.active");
    if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}

// ── Play / Pause ──
function playSong() {
  isPlaying = true;
  playIcon.textContent = "⏸";
  albumArt.classList.add("playing");
  equalizer.classList.add("active");
  // If audio is loaded, play it. Otherwise fetch it.
  if (audio.src && audio.readyState >= 2) {
    audio.volume = volume;
    audio.play().catch(e => console.error('Play error:', e));
  } else if (!isLoadingAudio) {
    fetchRealSong(songs[currentIndex]);
  }
  stopSimulatedProgress();
  renderPlaylist();
}

function pauseSong() {
  isPlaying = false;
  playIcon.textContent = "▶";
  albumArt.classList.remove("playing");
  equalizer.classList.remove("active");
  audio.pause();
  stopSimulatedProgress();
  renderPlaylist();
}

function togglePlay() {
  if (isPlaying) pauseSong();
  else playSong();
}

// ── Simulated Progress (since no real audio files) ──
function startSimulatedProgress() {
  stopSimulatedProgress();
  const song = songs[currentIndex];
  progressInterval = setInterval(() => {
    if (!isPlaying) return;
    simulatedTime += 1;
    if (simulatedTime >= song.duration) {
      simulatedTime = song.duration;
      stopSimulatedProgress();
      onSongEnd();
      return;
    }
    const pct = (simulatedTime / song.duration) * 100;
    progressBar.style.width = pct + "%";
    currentTimeEl.textContent = formatTime(simulatedTime);
  }, 1000);
}

function stopSimulatedProgress() {
  if (progressInterval) { clearInterval(progressInterval); progressInterval = null; }
}

function onSongEnd() {
  if (isRepeat) { simulatedTime = 0; playSong(); return; }
  nextSong();
}

// ── Next / Prev ──
function nextSong() {
  let idx;
  if (isShuffle) idx = Math.floor(Math.random() * songs.length);
  else idx = (currentIndex + 1) % songs.length;
  loadSong(idx);
  if (isPlaying) playSong();
}

function prevSong() {
  if (simulatedTime > 3) { simulatedTime = 0; progressBar.style.width = "0%"; currentTimeEl.textContent = "0:00"; return; }
  let idx;
  if (isShuffle) idx = Math.floor(Math.random() * songs.length);
  else idx = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(idx);
  if (isPlaying) playSong();
}

// ── Progress Click ──
function handleProgressClick(e) {
  const rect = progressContainer.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration && isFinite(audio.duration)) {
    audio.currentTime = pct * audio.duration;
  }
  simulatedTime = Math.floor(pct * songs[currentIndex].duration);
  progressBar.style.width = (pct * 100) + "%";
  currentTimeEl.textContent = formatTime(simulatedTime);
}

// ── Volume ──
function setVolume(pct) {
  volume = Math.max(0, Math.min(1, pct));
  audio.volume = volume;
  volumeBar.style.width = (volume * 100) + "%";
  volumeLabel.textContent = Math.round(volume * 100) + "%";
  muteBtn.textContent = volume === 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊";
  isMuted = volume === 0;
}

function handleVolumeClick(e) {
  const rect = volumeContainer.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  setVolume(pct);
}

function toggleMute() {
  if (isMuted) { setVolume(volume || 0.8); isMuted = false; }
  else { audio.volume = 0; volumeBar.style.width = "0%"; volumeLabel.textContent = "0%"; muteBtn.textContent = "🔇"; isMuted = true; }
}

// ── Toggle Shuffle / Repeat ──
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
  shuffleTopBtn.classList.toggle("active", isShuffle);
  showToast(isShuffle ? "🔀 Shuffle ON" : "🔀 Shuffle OFF");
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
  repeatBtn.textContent = isRepeat ? "🔂" : "🔁";
  showToast(isRepeat ? "🔂 Repeat ON" : "🔁 Repeat OFF");
}

// ── Category Tabs ──
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderPlaylist();
  });
});

// ── Search ──
searchInput.addEventListener("input", renderPlaylist);

// ── Sidebar ──
menuBtn.addEventListener("click", () => sidebar.classList.add("open"));
sidebarClose.addEventListener("click", () => sidebar.classList.remove("open"));

// ── Keyboard Shortcuts ──
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  switch(e.key) {
    case " ": e.preventDefault(); togglePlay(); break;
    case "ArrowRight": nextSong(); break;
    case "ArrowLeft":  prevSong(); break;
    case "ArrowUp":    setVolume(volume + 0.1); break;
    case "ArrowDown":  setVolume(volume - 0.1); break;
    case "m": case "M": toggleMute(); break;
    case "s": case "S": toggleShuffle(); break;
    case "r": case "R": toggleRepeat(); break;
  }
});

// ── Event Listeners ──
playPauseBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
shuffleBtn.addEventListener("click", toggleShuffle);
shuffleTopBtn.addEventListener("click", toggleShuffle);
repeatBtn.addEventListener("click", toggleRepeat);
muteBtn.addEventListener("click", toggleMute);
progressContainer.addEventListener("click", handleProgressClick);
volumeContainer.addEventListener("click", handleVolumeClick);

// Drag support for progress
let isDraggingProgress = false;
progressContainer.addEventListener("mousedown", e => { isDraggingProgress = true; handleProgressClick(e); });
document.addEventListener("mousemove", e => { if (isDraggingProgress) handleProgressClick(e); });
document.addEventListener("mouseup", () => { isDraggingProgress = false; });

// Drag support for volume
let isDraggingVolume = false;
volumeContainer.addEventListener("mousedown", e => { isDraggingVolume = true; handleVolumeClick(e); });
document.addEventListener("mousemove", e => { if (isDraggingVolume) handleVolumeClick(e); });
document.addEventListener("mouseup", () => { isDraggingVolume = false; });

// ── Audio element events ──
audio.addEventListener('timeupdate', () => {
  if (!audio.duration || !isPlaying) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = pct + '%';
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
  simulatedTime = audio.currentTime;
});
audio.addEventListener('ended', onSongEnd);
audio.addEventListener('loadedmetadata', () => {
  if (audio.duration && isFinite(audio.duration)) {
    durationEl.textContent = formatTime(audio.duration);
  }
});
// KEY FIX: Auto-play audio as soon as it's ready
audio.addEventListener('canplay', () => {
  if (isPlaying) {
    audio.volume = volume;
    audio.play().catch(e => console.error('Canplay error:', e));
  }
});
audio.addEventListener('error', (e) => {
  console.error('Audio error:', audio.error);
  showToast('❌ Audio failed to load');
});

// ── Init ──
setVolume(0.8);
loadSong(0);
showToast("🎵 Welcome to VibeWave!");
