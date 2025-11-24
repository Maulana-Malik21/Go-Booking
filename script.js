// === DATA VENUES ===
const venuesData = {
    'asatu': {
        name: 'ASATU ARENA CIKINI',
        loc: 'Menteng, Jakarta Pusat',
        price: 1050000,
        img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&q=80',
        type: 'Mini Soccer',
        description: 'Lapangan mini soccer outdoor dengan rumput sintetis berkualitas tinggi dan standar FIFA. Dilengkapi dengan pencahayaan yang optimal untuk pertandingan malam hari.',
        facilities: ['Rumput Sintetis Standar FIFA', 'Pencahayaan LED', 'Tribun Penonton', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Mushola'],
        location: 'Jl. Cikini Raya No. 25, Menteng, Jakarta Pusat',
        area: '40m x 20m',
        length: '40 meter',
        number: 'Lapangan 1'
    },
    'permata': {
        name: 'ALAPANGAN PERMATA HIJAU',
        loc: 'Permata Hijau, Jakarta Selatan',
        price: 1080000,
        img: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?w=1200&q=80',
        type: 'Mini Soccer',
        description: 'Venue futsal indoor dengan lapangan berkualitas tinggi dan fasilitas lengkap. Cocok untuk latihan maupun pertandingan.',
        facilities: ['Lantai Vinyl Berkualitas', 'AC', 'Pencahayaan Optimal', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. Permata Hijau Raya No. 15, Jakarta Selatan',
        area: '38m x 18m',
        length: '38 meter',
        number: 'Lapangan Utama'
    },
    'tarena': {
        name: 'T ARENA',
        loc: 'Jakarta Selatan',
        price: 250000,
        img: 'https://images.unsplash.com/photo-1562924601-b2bb895eb075?w=1200&q=80',
        type: 'Futsal',
        description: 'Arena futsal dengan multiple court dan fasilitas modern. Terletak di lokasi strategis dengan akses mudah.',
        facilities: ['3 Lapangan Futsal', 'AC', 'Pencahayaan LED', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. TB Simatupang No. 45, Jakarta Selatan',
        area: '25m x 15m',
        length: '25 meter',
        number: 'Lapangan A, B, C'
    },
    'koci': {
        name: 'KOCI SOCCER FIELD',
        loc: 'Depok',
        price: 600000,
        img: 'https://images.unsplash.com/photo-1505250469679-253c7377f1d3?w=1200&q=80',
        type: 'Soccer',
        description: 'Lapangan sepak bola full size dengan rumput alami dan fasilitas lengkap. Cocok untuk pertandingan resmi maupun latihan.',
        facilities: ['Rumput Alami', 'Pencahayaan Stadion', 'Tribun Penonton', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Mushola'],
        location: 'Jl. Margonda Raya No. 125, Depok',
        area: '105m x 68m',
        length: '105 meter',
        number: 'Lapangan Utama'
    },
    'bai': {
        name: 'BAI SOCCER FIELD',
        loc: 'Bandung',
        price: 800000,
        img: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&q=80',
        type: 'Soccer',
        description: 'Lapangan sepak bola dengan view pegunungan yang indah. Dilengkapi dengan rumput sintetis berkualitas tinggi.',
        facilities: ['Rumput Sintetis Berkualitas', 'Pencahayaan Optimal', 'Tribun Penonton', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Kafe'],
        location: 'Jl. Sersan Bajuri No. 88, Bandung',
        area: '100m x 64m',
        length: '100 meter',
        number: 'Lapangan 1'
    },
    'bandung': {
        name: 'BANDUNG ELEKTRIK',
        loc: 'Bandung',
        price: 125000,
        img: 'https://images.unsplash.com/photo-1558365849-6a8d75d84fc4?w=1200&q=80',
        type: 'Badminton',
        description: 'Gedung bulutangkis dengan 8 lapangan dan fasilitas modern. Cocok untuk latihan maupun turnamen.',
        facilities: ['8 Lapangan Badminton', 'AC', 'Pencahayaan Optimal', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. Cihampelas No. 120, Bandung',
        area: '13.4m x 6.1m',
        length: '13.4 meter',
        number: 'Lapangan 1-8'
    },
    'ganesha': {
        name: 'GANESHA TENNIS',
        loc: 'Jakarta Timur',
        price: 100000,
        img: 'https://images.unsplash.com/photo-1595435934249-fddf8f7d2e60?w=1200&q=80',
        type: 'Tennis',
        description: 'Kompleks tenis dengan 5 lapangan berkualitas. Dilengkapi dengan fasilitas lengkap untuk kenyamanan bermain.',
        facilities: ['5 Lapangan Tennis', 'Pencahayaan Optimal', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Pro Shop'],
        location: 'Jl. Pemuda No. 45, Jakarta Timur',
        area: '23.77m x 10.97m',
        length: '23.77 meter',
        number: 'Lapangan 1-5'
    },
    'padel': {
        name: 'PADEL CAFE',
        loc: 'Jakarta Selatan',
        price: 450000,
        img: 'https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?w=1200&q=80',
        type: 'Padel',
        description: 'Venue padel tennis pertama di Jakarta dengan konsep cafe yang nyaman. Cocok untuk bersantai sambil berolahraga.',
        facilities: ['2 Lapangan Padel', 'AC', 'Pencahayaan Optimal', 'Cafe', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. Kemang Raya No. 12, Jakarta Selatan',
        area: '20m x 10m',
        length: '20 meter',
        number: 'Lapangan 1 & 2'
    },
    'dna': {
        name: 'DNA ARENA CINERE',
        loc: 'Depok',
        price: 900000,
        img: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1200&q=80',
        type: 'Soccer',
        description: 'Lapangan sepak bola dengan rumput sintetis berkualitas tinggi. Dilengkapi dengan fasilitas modern untuk kenyamanan bermain.',
        facilities: ['Rumput Sintetis Berkualitas', 'Pencahayaan LED', 'Tribun Penonton', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Mushola'],
        location: 'Jl. Cinere Raya No. 55, Depok',
        area: '100m x 64m',
        length: '100 meter',
        number: 'Lapangan Utama'
    },
    'iti': {
        name: 'ITI STADION ARENA',
        loc: 'Tangerang Selatan',
        price: 850000,
        img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80',
        type: 'Soccer',
        description: 'Stadion mini dengan kapasitas penonton 500 orang. Cocok untuk pertandingan antar komunitas maupun perusahaan.',
        facilities: ['Rumput Sintetis Berkualitas', 'Pencahayaan Stadion', 'Tribun Penonton 500 Kursi', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Mushola'],
        location: 'Jl. BSD Grand Boulevard, Tangerang Selatan',
        area: '95m x 60m',
        length: '95 meter',
        number: 'Lapangan Utama'
    },
    'bintaro': {
        name: 'BINTARO SOCCER FIELD',
        loc: 'Jakarta Selatan',
        price: 950000,
        img: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=1200&q=80',
        type: 'Soccer',
        description: 'Lapangan sepak bola full size di kawasan Bintaro. Dilengkapi dengan rumput alami dan fasilitas lengkap.',
        facilities: ['Rumput Alami Berkualitas', 'Pencahayaan Optimal', 'Tribun Penonton', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Mushola'],
        location: 'Jl. Bintaro Permai Raya, Jakarta Selatan',
        area: '105m x 68m',
        length: '105 meter',
        number: 'Lapangan Utama'
    },
    // Tambahan venue baru
    'sportiva': {
        name: 'SPORTIVA ARENA',
        loc: 'Jakarta Barat',
        price: 750000,
        img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80',
        type: 'Futsal',
        description: 'Arena futsal modern dengan 3 lapangan indoor berkualitas. Cocok untuk latihan maupun turnamen.',
        facilities: ['3 Lapangan Futsal', 'AC', 'Pencahayaan LED', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. Daan Mogot No. 125, Jakarta Barat',
        area: '25m x 15m',
        length: '25 meter',
        number: 'Lapangan A, B, C'
    },
    'elite': {
        name: 'ELITE FUTSAL CENTER',
        loc: 'Tangerang',
        price: 300000,
        img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
        type: 'Futsal',
        description: 'Pusat futsal dengan 4 lapangan berkualitas dan fasilitas lengkap. Terletak di lokasi strategis.',
        facilities: ['4 Lapangan Futsal', 'AC', 'Pencahayaan Optimal', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. Gatot Subroto No. 88, Tangerang',
        area: '25m x 15m',
        length: '25 meter',
        number: 'Lapangan 1-4'
    },
    'badmintonplus': {
        name: 'BADMINTON PLUS',
        loc: 'Bekasi',
        price: 80000,
        img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80',
        type: 'Badminton',
        description: 'Gedung bulutangkis dengan 8 lapangan dan sistem booking online. Fasilitas modern dan nyaman.',
        facilities: ['8 Lapangan Badminton', 'AC', 'Pencahayaan Optimal', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet'],
        location: 'Jl. Jend. Ahmad Yani No. 150, Bekasi',
        area: '13.4m x 6.1m',
        length: '13.4 meter',
        number: 'Lapangan 1-8'
    },
    'tenniscity': {
        name: 'TENNIS CITY',
        loc: 'Jakarta Utara',
        price: 120000,
        img: 'https://images.unsplash.com/photo-1595435934249-fddf8f7d2e60?w=1200&q=80',
        type: 'Tennis',
        description: 'Kompleks tenis dengan 6 lapangan berkualitas. Dilengkapi dengan pelatih profesional untuk semua level.',
        facilities: ['6 Lapangan Tennis', 'Pencahayaan Optimal', 'Kantin', 'Parkir Luas', 'Kamar Ganti', 'Toilet', 'Pro Shop'],
        location: 'Jl. Yos Sudarso No. 75, Jakarta Utara',
        area: '23.77m x 10.97m',
        length: '23.77 meter',
        number: 'Lapangan 1-6'
    }
};

// State Global
let currentVenueId = null;
let currentPrice = 0;
let selectedSlots = []; // Array of {id, price, date, time}

// QR Polling state
let qrPollingInterval = null;
let qrCountdownTimer = null;
let qrSecondsLeft = 60;
let qrcodeInstance = null;
let currentTransactionId = null;

// === AUTH (LocalStorage) ===
// === AUTH (LocalStorage) ===

function showLoginModal() {
    // Tutup modal register jika terbuka
    const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    if (registerModal) registerModal.hide();
    
    // Tampilkan modal login
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

function showRegisterModal() {
    // Tutup modal login jika terbuka
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    if (loginModal) loginModal.hide();
    
    // Tampilkan modal register
    const modal = new bootstrap.Modal(document.getElementById('registerModal'));
    modal.show();
}

function loginUser() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if(!email || !password) {
        alert('Lengkapi semua field login.');
        return;
    }

    // Cek apakah user sudah terdaftar
    const users = JSON.parse(localStorage.getItem('gelora_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if(!user) {
        alert('Email atau password salah.');
        return;
    }

    // Simpan user yang login
    localStorage.setItem('gelora_current_user', JSON.stringify(user));

    // Update navbar
    updateAuthUI();

    // Close modal
    const modalEl = document.getElementById('loginModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if(modal) modal.hide();
    
    alert('Login berhasil!');

    // Opsional: Jika data profil (username) masih kosong, langsung buka halaman profil
    if (!user.username && typeof showProfile === 'function') {
        showProfile();
    }
}

function registerUser() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('register-confirm-password').value.trim();

    if(!name || !email || !password || !confirmPassword) {
        alert('Lengkapi semua field pendaftaran.');
        return;
    }

    if(password !== confirmPassword) {
        alert('Konfirmasi password tidak sesuai.');
        return;
    }

    // Cek apakah email sudah terdaftar
    const users = JSON.parse(localStorage.getItem('gelora_users') || '[]');
    if(users.find(u => u.email === email)) {
        alert('Email sudah terdaftar. Silakan login.');
        return;
    }

    // Simpan user baru dengan template data profil kosong
    const newUser = { 
        name, 
        email, 
        password,
        username: '',
        phone: '',
        gender: '',
        dobMonth: '',
        dobYear: '',
        dobDate: '',
        sports: []
    };

    users.push(newUser);
    localStorage.setItem('gelora_users', JSON.stringify(users));

    // PERUBAHAN ALUR: Tidak ada auto-login di sini.
    // 1. Tutup Modal Register
    const modalEl = document.getElementById('registerModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if(modal) modal.hide();
    
    // 2. Tampilkan pesan sukses
    alert('Pendaftaran berhasil! Silakan login dengan akun baru Anda.');

    // 3. Buka Modal Login agar user login manual
    showLoginModal();
}

function logoutUser() {
    localStorage.removeItem('gelora_current_user');
    updateAuthUI();
    
    // Opsional: Kembali ke home setelah logout
    if (typeof goHome === 'function') goHome();
}

function getCurrentUser() {
    try {
        const u = localStorage.getItem('gelora_current_user');
        if(!u) return null;
        return JSON.parse(u);
    } catch(e){
        return null;
    }
}

function updateAuthUI() {
    const container = document.getElementById('nav-auth-area');
    const user = getCurrentUser();
    container.innerHTML = '';

    if(user) {
        // show dropdown with name + logout
        container.className = 'nav-item dropdown';
        container.innerHTML = `
            <a class="nav-link dropdown-toggle text-uppercase" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hi, ${escapeHtml(user.name)}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="#" onclick="showProfile()">Profil Saya</a></li>
                <li><a class="dropdown-item" href="#" onclick="showMyBooking()">My Booking</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="logoutUser()">Logout</a></li>
            </ul>
        `;
    } else {
        // show login link
        container.className = 'nav-item';
        container.innerHTML = `<a class="nav-link" href="javascript:void(0)" id="btnShowLogin" onclick="showLoginModal()">LOGIN</a>`;
    }
}

function escapeHtml(unsafe) {
    return unsafe.replace(/[&<"'>]/g, function(m) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]; });
}

// === NAVIGATION ===
function openBooking(id) {
    const data = venuesData[id];
    if (!data) return;

    currentVenueId = id;
    currentPrice = data.price;
    
    // Populate Data
    document.getElementById('detail-title').innerText = data.name;
    document.getElementById('detail-loc').innerText = `${data.loc} (${data.type})`;
    document.getElementById('detail-img').src = data.img;

    // Populate About Tab
    document.getElementById('venue-description').innerText = data.description;
    document.getElementById('venue-location').innerText = data.location;
    document.getElementById('venue-area').innerText = data.area;
    document.getElementById('venue-length').innerText = data.length;
    document.getElementById('venue-number').innerText = data.number;
    
    // Populate Facilities
    const facilitiesList = document.getElementById('venue-facilities');
    facilitiesList.innerHTML = '';
    data.facilities.forEach(facility => {
        const li = document.createElement('li');
        li.className = 'mb-1';
        li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${facility}`;
        facilitiesList.appendChild(li);
    });

    // Reset Selection
    selectedSlots = [];
    updateCartAndCheckout();

    // Generate Schedule
    renderSchedule();

    // Switch Views
    document.getElementById('view-home').classList.add('d-none');
    document.getElementById('view-venue-list').classList.add('d-none');
    document.getElementById('view-activity').classList.add('d-none');
    document.getElementById('view-list-venue').classList.add('d-none');
    document.getElementById('view-booking').classList.remove('d-none');
    window.scrollTo(0, 0);
}

function goHome() {
    document.getElementById('view-booking').classList.add('d-none');
    document.getElementById('view-venue-list').classList.add('d-none');
    document.getElementById('view-activity').classList.add('d-none');
    document.getElementById('view-list-venue').classList.add('d-none');
    document.getElementById('view-home').classList.remove('d-none');
    window.scrollTo(0, 0);
}

function showVenueList() {
    document.getElementById('view-home').classList.add('d-none');
    document.getElementById('view-booking').classList.add('d-none');
    document.getElementById('view-activity').classList.add('d-none');
    document.getElementById('view-list-venue').classList.add('d-none');
    document.getElementById('view-venue-list').classList.remove('d-none');
    
    // Render venue list
    const container = document.getElementById('venue-list-container');
    container.innerHTML = '';
    
    Object.keys(venuesData).forEach(venueId => {
        const venue = venuesData[venueId];
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';
        col.innerHTML = `
            <div class="card venue-card" onclick="openBooking('${venueId}')">
                <img src="${venue.img}" class="card-img-top" alt="${venue.name}">
                <div class="card-body">
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-loc">${venue.loc} - ${venue.type}</div>
                    <div class="venue-price">Harga mulai ${formatRupiah(venue.price)}</div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
    
    window.scrollTo(0, 0);
}

function showActivity() {
    document.getElementById('view-home').classList.add('d-none');
    document.getElementById('view-booking').classList.add('d-none');
    document.getElementById('view-venue-list').classList.add('d-none');
    document.getElementById('view-list-venue').classList.add('d-none');
    document.getElementById('view-activity').classList.remove('d-none');
    window.scrollTo(0, 0);
}

function showListYourVenue() {
    document.getElementById('view-home').classList.add('d-none');
    document.getElementById('view-booking').classList.add('d-none');
    document.getElementById('view-venue-list').classList.add('d-none');
    document.getElementById('view-activity').classList.add('d-none');
    document.getElementById('view-list-venue').classList.remove('d-none');
    window.scrollTo(0, 0);
}

function switchTab(tabName) {
    // Update active tab
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show corresponding content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// === SCHEDULE LOGIC ===
function formatRupiah(num) {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        minimumFractionDigits: 0 
    }).format(num);
}

function changeVenueType() {
    const select = document.getElementById('field-select');
    if (select.value === 'field2') {
        currentPrice = Math.floor(venuesData[currentVenueId].price * 0.8);
    } else {
        currentPrice = venuesData[currentVenueId].price;
    }
    selectedSlots = [];
    updateCartAndCheckout();
    renderSchedule();
}

function renderSchedule() {
    const container = document.getElementById('schedule-grid');
    container.innerHTML = '';

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const today = new Date();



    // Generate 7 Hari
    for (let i = 0; i < 7; i++) {
        let d = new Date(today);
        d.setDate(today.getDate() + i);
        
        let dateNum = d.getDate();
        let monthShort = d.toLocaleString('default', { month: 'short' });
        let dateStr = `${dateNum} ${monthShort}`;
        let dayName = days[d.getDay()];

        let col = document.createElement('div');
        col.className = 'day-column';

        // Header Kolom
        col.innerHTML = `
            <div class="day-header">
                <div class="day-date">${dateStr}</div>
                <div class="day-name">${dayName}</div>
            </div>
        `;

        // Generate Jam 08:00 - 23:00
        for (let h = 8; h < 23; h++) {
            let start = h < 10 ? `0${h}.00` : `${h}.00`;
            let end = (h + 1) < 10 ? `0${h + 1}.00` : `${h + 1}.00`;
            let timeStr = `${start} - ${end}`;
            let slotId = `${dateStr}-${start}`;

            // Random Booked Logic (30% chance)
            let isBooked = Math.random() < 0.3;
            
            let slotHtml = `
                <div class="time-slot ${isBooked ? 'booked' : ''}" 
                        onclick="toggleSlot(this, '${slotId}', '${dateStr}', '${timeStr}')">
                    <div class="slot-top">
                        <i class="fas fa-plus-circle icon-plus"></i>
                        <span class="slot-date-small">${dateStr}</span>
                    </div>
                    <span class="slot-time">${timeStr}</span>
                    <span class="slot-price">${formatRupiah(currentPrice)}</span>
                    <span class="slot-status">${isBooked ? 'Booked' : 'Available'}</span>
                </div>
            `;
            col.innerHTML += slotHtml;
        }
        container.appendChild(col);
    }
}

// === INTERACTION ===
function toggleSlot(el, id, date, time) {
    if (el.classList.contains('booked')) return;

    if (el.classList.contains('selected')) {
        // Unselect
        el.classList.remove('selected');
        selectedSlots = selectedSlots.filter(s => s.id !== id);
    } else {
        // Select
        el.classList.add('selected');
        selectedSlots.push({ id, price: currentPrice, date, time });
    }
    updateCartAndCheckout();
}

function updateCartAndCheckout() {
    const bar = document.getElementById('checkout-bar');
    const cartBadge = document.getElementById('nav-cart-badge');
    const slotCount = document.getElementById('slot-count');
    const totalPrice = document.getElementById('total-price');

    // Hitung Total
    let total = selectedSlots.reduce((acc, item) => acc + item.price, 0);

    // Update Navbar Cart
    if (selectedSlots.length > 0) {
        cartBadge.style.display = 'inline-block';
        cartBadge.innerText = selectedSlots.length;
    } else {
        cartBadge.style.display = 'none';
    }

    // Update Sticky Bar
    slotCount.innerText = selectedSlots.length;
    totalPrice.innerText = formatRupiah(total);

    if (selectedSlots.length > 0) {
        bar.classList.add('active');
    } else {
        bar.classList.remove('active');
    }
}

// === PAYMENT FLOW ===
function showPaymentModal() {
    const modal = new bootstrap.Modal(document.getElementById('paymentModal'));
    document.getElementById('modal-venue-name').innerText = venuesData[currentVenueId].name;
    
    let listHtml = '';
    let total = 0;
    selectedSlots.forEach(s => {
        listHtml += `<div>${s.date} | ${s.time} - ${formatRupiah(s.price)}</div>`;
        total += s.price;
    });
    
    document.getElementById('modal-items').innerHTML = listHtml;
    document.getElementById('modal-total').innerText = formatRupiah(total);
    modal.show();
}

// open QR modal and start auto-detect simulation
function openQrPayment() {
    const user = getCurrentUser();
    if(!user) {
        // require login
        alert('Silakan login terlebih dahulu sebelum melakukan pembayaran.');
        showLoginModal();
        return;
    }

    // close payment summary if open
    const pmEl = document.getElementById('paymentModal');
    const pmInst = bootstrap.Modal.getInstance(pmEl);
    if(pmInst) pmInst.hide();

    // build transaction (simulated)
    const txnId = 'TXN-' + Date.now();
    currentTransactionId = txnId;

    // amount
    let amount = selectedSlots.reduce((acc, item) => acc + item.price, 0);
    if(amount <= 0) {
        alert('Pilih minimal 1 slot sebelum melakukan pembayaran.');
        return;
    }

    // Generate QR payload (simulasi QRIS-like string)
    const payload = JSON.stringify({
        txn: txnId,
        venue: currentVenueId,
        user: user.email,
        amount: amount,
        createdAt: new Date().toISOString()
    });

    // show modal
    const modal = new bootstrap.Modal(document.getElementById('qrPaymentModal'));
    modal.show();

    // render QR
    renderQr(payload, amount);

    // start auto-polling simulation (auto detect paid)
    startQrPollingSim(txnId);
}

function renderQr(payload, amount) {
    const container = document.getElementById('qrContainer');
    container.innerHTML = '';
    // destroy previous qr if any
    qrcodeInstance = new QRCode(container, {
        text: payload,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('qr-amount').innerText = formatRupiah(amount);
    document.getElementById('qr-status').innerText = 'Menunggu pembayaran...';
    document.getElementById('qr-time-left').innerText = 60;
    qrSecondsLeft = 60;
}

// AUTO-DETECT SIMULATION
function startQrPollingSim(txnId) {
    stopQrPolling(); // clear existing

    // Simulate: after random 7-18s, payment completes automatically (simulate merchant/payment processor)
    const autoPayDelay = Math.floor(Math.random() * 12) + 7; // 7..18 sec
    let elapsed = 0;

    // countdown display
    qrCountdownTimer = setInterval(() => {
        qrSecondsLeft--;
        document.getElementById('qr-time-left').innerText = qrSecondsLeft;
        if(qrSecondsLeft <= 0) {
            // expired
            stopQrPolling();
            document.getElementById('qr-status').innerText = 'QR expired. Silakan coba ulang.';
        }
    }, 1000);

    // polling interval to 'check' status (simulated)
    qrPollingInterval = setInterval(() => {
        elapsed++;
        // if elapsed reaches autoPayDelay => mark paid
        if(elapsed >= autoPayDelay) {
            // mark payment success
            onPaymentSuccess(txnId);
        } else {
            // still waiting - update status dots
            document.getElementById('qr-status').innerText = 'Menunggu pembayaran' + '.'.repeat((elapsed % 3) + 1);
        }
    }, 1000);
}

function stopQrPolling() {
    if(qrPollingInterval) {
        clearInterval(qrPollingInterval);
        qrPollingInterval = null;
    }
    if(qrCountdownTimer) {
        clearInterval(qrCountdownTimer);
        qrCountdownTimer = null;
    }
}

// manual simulate (for developer/testing)
function simulateManualPaid() {
    if(!currentTransactionId) return;
    onPaymentSuccess(currentTransactionId);
}

function onPaymentSuccess(txnId) {
    // ensure only once
    if(!qrPollingInterval && !qrCountdownTimer) return;

    stopQrPolling();
    document.getElementById('qr-status').innerText = 'Pembayaran berhasil ✅';
    document.getElementById('qr-time-left').innerText = 0;

    // === LOGIKA PENYIMPANAN KE MY BOOKING ===
    const currentUser = getCurrentUser();
    
    if (currentUser) {
        // 1. Buat Objek Booking Baru
        const newBooking = {
            id: txnId,
            venueName: venuesData[currentVenueId].name,
            venueImg: venuesData[currentVenueId].img,
            items: selectedSlots, // Menyimpan slot yang dipilih {date, time, price}
            totalPrice: selectedSlots.reduce((acc, item) => acc + item.price, 0),
            bookingDate: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            status: 'Lunas'
        };

        // 2. Ambil data users dari LocalStorage
        const users = JSON.parse(localStorage.getItem('gelora_users') || '[]');
        const userIndex = users.findIndex(u => u.email === currentUser.email);

        if (userIndex !== -1) {
            // 3. Pastikan array bookingHistory ada
            if (!users[userIndex].bookingHistory) {
                users[userIndex].bookingHistory = [];
            }

            // 4. Push booking baru ke history (paling depan/atas)
            users[userIndex].bookingHistory.unshift(newBooking);

            // 5. Simpan kembali ke LocalStorage
            localStorage.setItem('gelora_users', JSON.stringify(users));
            
            // Update juga current user di session
            currentUser.bookingHistory = users[userIndex].bookingHistory;
            localStorage.setItem('gelora_current_user', JSON.stringify(currentUser));
        }
    }

    // === UI UPDATE ===
    setTimeout(() => {
        const modalEl = document.getElementById('qrPaymentModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if(modal) modal.hide();

        alert('Pembayaran Berhasil! Cek tiket Anda di menu My Booking.');

        // Reset state cart
        selectedSlots = [];
        updateCartAndCheckout();
        currentTransactionId = null;
        
        // Langsung arahkan ke halaman My Booking
        showMyBooking();
        
    }, 900);
}

// === FILTER LOGIC ===

// 1. Fungsi untuk menampilkan list venue (Dipanggil saat menu VENUE diklik)
function showVenueList() {
    document.getElementById('view-home').classList.add('d-none');
    document.getElementById('view-booking').classList.add('d-none');
    document.getElementById('view-activity').classList.add('d-none');
    document.getElementById('view-list-venue').classList.add('d-none');
    document.getElementById('view-venue-list').classList.remove('d-none');
    
    // Reset filter ke default saat halaman dibuka
    document.getElementById('filter-city').value = 'all';
    document.getElementById('filter-type').value = 'all';
    document.getElementById('filter-price').value = 'all';

    // Render semua venue (ambil semua keys dari data)
    renderVenueCards(Object.keys(venuesData));
    
    window.scrollTo(0, 0);
}

// 2. Fungsi inti untuk menerapkan filter
function applyFilters() {
    const cityVal = document.getElementById('filter-city').value;
    const typeVal = document.getElementById('filter-type').value;
    const priceVal = document.getElementById('filter-price').value;

    // Filter logic
    const filteredIds = Object.keys(venuesData).filter(id => {
        const venue = venuesData[id];
        let matchCity = false;
        let matchType = false;
        let matchPrice = false;

        // Cek Kota (Case insensitive search)
        if (cityVal === 'all') {
            matchCity = true;
        } else {
            // Mencari string kota di dalam lokasi venue (misal "Jakarta" ada di "Menteng, Jakarta Pusat")
            matchCity = venue.loc.toLowerCase().includes(cityVal.toLowerCase());
        }

        // Cek Tipe Olahraga
        if (typeVal === 'all') {
            matchType = true;
        } else {
            // Khusus Sepak Bola kita gabungkan Soccer dan Mini Soccer
            if (typeVal === 'Soccer') {
                matchType = venue.type.includes('Soccer') || venue.type.includes('Mini Soccer');
            } else if (typeVal === 'Tennis') {
                // Mencakup Tennis dan Padel
                matchType = venue.type.includes('Tennis') || venue.type.includes('Padel');
            } else {
                matchType = venue.type === typeVal;
            }
        }

        // Cek Harga
        if (priceVal === 'all') {
            matchPrice = true;
        } else {
            const p = venue.price;
            if (priceVal === 'range1' && p <= 200000) matchPrice = true;
            else if (priceVal === 'range2' && p > 200000 && p <= 500000) matchPrice = true;
            else if (priceVal === 'range3' && p > 500000 && p <= 1000000) matchPrice = true;
            else if (priceVal === 'range4' && p > 1000000) matchPrice = true;
        }

        // Venue harus memenuhi SEMUA kriteria (AND logic)
        return matchCity && matchType && matchPrice;
    });

    // Render hasil filter
    renderVenueCards(filteredIds);
}

// 3. Helper Function untuk merender kartu HTML
function renderVenueCards(venueIds) {
    const container = document.getElementById('venue-list-container');
    container.innerHTML = '';

    if (venueIds.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">Venue tidak ditemukan</h5>
                <p class="text-muted small">Coba ubah filter pencarian Anda.</p>
            </div>
        `;
        return;
    }
    
    venueIds.forEach(venueId => {
        const venue = venuesData[venueId];
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';
        
        // Animasi fade in sederhana
        col.style.animation = 'fadeIn 0.5s';
        
        col.innerHTML = `
            <div class="card venue-card h-100" onclick="openBooking('${venueId}')">
                <img src="${venue.img}" class="card-img-top" alt="${venue.name}">
                <div class="card-body">
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-loc text-muted mb-2" style="font-size:12px">
                        <i class="fas fa-map-marker-alt me-1"></i> ${venue.loc}
                    </div>
                    <div class="badge bg-light text-dark border mb-2">${venue.type}</div>
                    <div class="venue-price">Mulai ${formatRupiah(venue.price)} / jam</div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

function showMyBooking() {
    // Cek Login
    const user = getCurrentUser();
    if (!user) {
        alert("Silakan login untuk melihat riwayat booking.");
        showLoginModal();
        return;
    }

    // Switch View
    document.getElementById('view-home').classList.add('d-none');
    document.getElementById('view-booking').classList.add('d-none');
    document.getElementById('view-venue-list').classList.add('d-none');
    document.getElementById('view-activity').classList.add('d-none');
    document.getElementById('view-list-venue').classList.add('d-none');
    document.getElementById('view-profile').classList.add('d-none');
    
    document.getElementById('view-my-booking').classList.remove('d-none');
    window.scrollTo(0, 0);

    // Render List
    const listContainer = document.getElementById('my-booking-list');
    const emptyState = document.getElementById('empty-booking-state');
    
    // Ambil history dari user object (pastikan update dari localStorage users jika perlu sinkronisasi ketat)
    // Disini kita ambil simpel dari currentUser session
    const history = user.bookingHistory || [];

    listContainer.innerHTML = '';

    if (history.length === 0) {
        emptyState.classList.remove('d-none');
    } else {
        emptyState.classList.add('d-none');
        
        history.forEach(booking => {
            // Generate detail slot HTML
            let slotsHtml = '';
            booking.items.forEach(slot => {
                slotsHtml += `<span class="badge bg-light text-dark border me-1 mb-1">${slot.date} (${slot.time})</span>`;
            });

            const cardHtml = `
                <div class="booking-history-card">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${booking.venueImg}" class="img-fluid rounded" style="height: 80px; width:100%; object-fit: cover;">
                        </div>
                        <div class="col-md-6">
                            <h5 class="fw-bold mb-1">${booking.venueName}</h5>
                            <div class="text-muted small mb-2">Order ID: #${booking.id}</div>
                            <div class="mb-2">
                                ${slotsHtml}
                            </div>
                            <div class="small text-muted">Dipesan pada: ${booking.bookingDate}</div>
                        </div>
                        <div class="col-md-4 text-md-end mt-3 mt-md-0">
                            <div class="booking-status status-paid d-inline-block mb-2">${booking.status}</div>
                            <h5 class="fw-bold text-primary">${formatRupiah(booking.totalPrice)}</h5>
                           <button class="btn btn-sm btn-outline-primary mt-1" onclick="showETicket('${booking.id}')">Lihat E-Tiket</button>
                        </div>
                    </div>
                </div>
            `;
            listContainer.innerHTML += cardHtml;
        });
    }
}

// === E-TICKET LOGIC ===
function showETicket(bookingId) {
    const user = getCurrentUser();
    if (!user || !user.bookingHistory) return;

    // 1. Cari data booking berdasarkan ID
    const booking = user.bookingHistory.find(b => b.id === bookingId);
    if (!booking) {
        alert("Data tiket tidak ditemukan.");
        return;
    }

    // 2. Isi data ke dalam Modal HTML
    document.getElementById('ticket-venue-name').innerText = booking.venueName;
    document.getElementById('ticket-id').innerText = '#' + booking.id;
    
    // Kita cari lokasi venue dari data master (venuesData)
    // Mencari key venue berdasarkan nama venue yang disimpan di history
    // (Cara ini agak manual, idealnya simpan venueId juga di history)
    let venueLoc = "Lokasi Venue";
    for (const [key, val] of Object.entries(venuesData)) {
        if (val.name === booking.venueName) {
            venueLoc = val.loc;
            break;
        }
    }
    document.getElementById('ticket-location').innerText = venueLoc;

    // Render list jadwal
    const slotsContainer = document.getElementById('ticket-slots');
    slotsContainer.innerHTML = '';
    booking.items.forEach(slot => {
        const div = document.createElement('div');
        div.className = "d-flex justify-content-between border-bottom pb-1 mb-1";
        div.innerHTML = `
            <span class="fw-bold small">${slot.date}</span>
            <span class="small">${slot.time}</span>
        `;
        slotsContainer.appendChild(div);
    });

    // 3. Generate QR Code Unik
    const qrContainer = document.getElementById('ticket-qr-code');
    qrContainer.innerHTML = ''; // Bersihkan QR lama
    
    // Isi QR Code: Gabungan ID Booking + User
    const qrData = JSON.stringify({
        id: booking.id,
        user: user.email,
        valid: true
    });

    new QRCode(qrContainer, {
        text: qrData,
        width: 150,
        height: 150
    });

    // 4. Tampilkan Modal
    const modal = new bootstrap.Modal(document.getElementById('eTicketModal'));
    modal.show();
}

// === INIT ===
document.addEventListener('DOMContentLoaded', function() {
    // init booking date
    document.getElementById('booking-date').valueAsDate = new Date();
    // auth UI
    updateAuthUI();
});