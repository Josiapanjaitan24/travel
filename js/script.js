/* ================================================================
   LOTUS BALI — Main JavaScript (ES6+)
   Architecture: Module-like IIFE pattern
   Features: i18n, Navbar, Slider, IntersectionObserver,
             Form Validation, WhatsApp API, Ripple
   ================================================================ */

'use strict';

/* ================================================================
   CONFIG
   ================================================================ */
const LB_CONFIG = {
  waNumber: '62817168742',      // ← REPLACE with real WhatsApp number
  sliderAutoDelay: 5500,          // ms between auto-slides
  revealThreshold: 0.12,
};

/* ================================================================
   i18n DICTIONARY
   All translatable strings with data-i18n keys
   ================================================================ */
const i18n = {
  id: {
    /* --- Global Nav --- */
    nav_home:    'Home',
    nav_tentang: 'Tentang Kami',
    nav_paket:   'Paket Wisata',
    nav_mobil:   'Pilihan Mobil',
    nav_hubungi: 'Hubungi',

    /* --- Home Hero --- */
    hero_badge:    '🌴 #1 Transport & Tour di Bali',
    hero_title:    'Jelajahi Bali dengan <span>Percaya Diri</span>',
    hero_subtitle: 'Lotus Bali menghadirkan armada kendaraan modern, driver profesional, dan paket wisata lengkap untuk pengalaman perjalanan terbaik Anda di Pulau Dewata.',
    hero_cta1:     'Pesan Sekarang',
    hero_cta2:     'Lihat Paket',
    hero_stat1_num: '500+',
    hero_stat1_lbl: 'Pelanggan Puas',
    hero_stat2_num: '50+',
    hero_stat2_lbl: 'Destinasi Wisata',
    hero_stat3_num: '8+',
    hero_stat3_lbl: 'Tahun Pengalaman',
    hero_scroll:    'Scroll ke bawah',

    /* --- Features --- */
    feat1_title: 'Driver Profesional',
    feat1_desc:  'Driver berpengalaman, ramah, mengenal rute terbaik Bali, dan siap menjadi pemandu wisata lokal Anda.',
    feat2_title: 'Harga Transparan',
    feat2_desc:  'Tidak ada biaya tersembunyi. Tarif sudah mencakup driver, BBM, parkir, dan asuransi perjalanan.',
    feat3_title: 'Layanan 24/7',
    feat3_desc:  'Tim kami siap melayani kapan saja – pagi, malam, hari libur. Hubungi kami via WhatsApp kapanpun.',

    /* --- Tentang --- */
    tentang_eyebrow: 'Siapa Kami',
    tentang_title:   'Tentang Lotus Bali',
    tentang_subtitle:'Mitra terpercaya perjalanan & transportasi di Bali sejak 2016',
    tentang_h3:      'Lebih dari 8 Tahun Melayani Wisatawan di Bali',
    tentang_p1:      'Lotus Bali adalah perusahaan jasa transportasi dan wisata yang berdiri sejak 2016. Kami hadir untuk memberikan pengalaman perjalanan terbaik – dari sewa kendaraan berpengemudi hingga paket wisata lengkap ke seluruh destinasi eksotis Bali.',
    tentang_p2:      'Dengan armada modern dan terawat, driver bersertifikat, serta layanan pelanggan 24 jam, kami memastikan setiap perjalanan Anda aman, nyaman, dan tak terlupakan.',
    visi_title: 'Visi',
    visi_desc:  'Menjadi penyedia jasa transportasi wisata terdepan di Bali yang mengutamakan keamanan, kenyamanan, dan kepuasan pelanggan.',
    misi_title: 'Misi',
    misi_desc:  'Memberikan layanan transportasi berkualitas premium dengan harga transparan, driver profesional, dan armada kendaraan terawat.',
    rating_label: 'Rating Pelanggan',

    /* --- Paket Wisata --- */
    paket_eyebrow:   'Jelajahi Bali',
    paket_title:     'Paket Wisata Populer',
    paket_subtitle:  'Pilih paket impian Anda dan biarkan kami mengurus semua detail perjalanan',

    t1_title: 'Ubud Full Day Tour',
    t1_desc:  'Tegalalang Rice Terrace, Monkey Forest, Ubud Palace, dan pasar tradisional eksotis.',
    t1_dur:   '8 Jam',
    t1_pax:   'Max 6 Pax',
    t1_price: 'Rp 550.000',
    t1_badge: 'Terpopuler',

    t2_title: 'Kintamani Volcano Tour',
    t2_desc:  'Panorama Gunung Batur & Danau Batur yang memukau, dengan makan siang restoran tepi danau.',
    t2_dur:   '9 Jam',
    t2_pax:   'Max 6 Pax',
    t2_price: 'Rp 600.000',
    t2_badge: 'Baru',

    t3_title: 'Tanah Lot Sunset Tour',
    t3_desc:  'Nikmati sunset romantis di Pura Tanah Lot dan eksplorasi premium Seminyak & Canggu.',
    t3_dur:   '7 Jam',
    t3_pax:   'Max 6 Pax',
    t3_price: 'Rp 500.000',

    t4_title: 'East Bali Spectacular',
    t4_desc:  'Pura Besakih (Ibu dari segala pura), Taman Ujung, pantai timur Bali yang masih asri.',
    t4_dur:   '10 Jam',
    t4_pax:   'Max 6 Pax',
    t4_price: 'Rp 700.000',

    t5_title: 'Nusa Penida Day Trip',
    t5_desc:  'Kelingking Beach, Angel\'s Billabong & Broken Beach di Nusa Penida yang spektakuler.',
    t5_dur:   '12 Jam',
    t5_pax:   'Max 4 Pax',
    t5_price: 'Rp 850.000',
    t5_badge: 'Hot Deal',

    t6_title: 'Bali Waterfall Explorer',
    t6_desc:  'Air terjun tersembunyi Bali – Sekumpul, Gitgit, Nungnung di hutan tropis yang sejuk.',
    t6_dur:   '10 Jam',
    t6_pax:   'Max 5 Pax',
    t6_price: 'Rp 650.000',

    from_lbl: 'Mulai dari',
    book_btn: 'Pesan Paket',

    /* --- Mobil --- */
    mobil_eyebrow:   'Armada Kami',
    mobil_title:     'Pilihan Kendaraan',
    mobil_subtitle:  'Semua sudah termasuk supir, BBM, dan asuransi. Armada terawat & berpendingin.',

    car_spec_cap:   'Kapasitas',
    car_spec_bag:   'Bagasi',
    car_spec_trans: 'Transmisi',
    car_spec_ac:    'AC',

    c1_name:  'Toyota Avanza',
    c1_desc:  'Pilihan ideal untuk keluarga kecil dan city tour. Nyaman untuk perjalanan sehari penuh di Bali.',
    c1_cap:   '6 Penumpang',
    c1_bag:   '3 Koper',
    c1_trans: 'Manual',
    c1_ac:    'Single Blower',

    c2_name:  'Toyota Innova Reborn',
    c2_desc:  'Premium dan lapang, ideal untuk keluarga besar atau group. Suspensi nyaman di segala medan.',
    c2_cap:   '7 Penumpang',
    c2_bag:   '4 Koper',
    c2_trans: 'Otomatis',
    c2_ac:    'Double Blower',

    c3_name:  'Toyota Alphard',
    c3_desc:  'Kemewahan VIP untuk perjalanan istimewa. Kursi kulit premium, entertainment system lengkap.',
    c3_cap:   '6 Penumpang',
    c3_bag:   '4 Koper',
    c3_trans: 'Otomatis',
    c3_ac:    'Dual Zone',

    c4_name:  'Toyota Hiace Premium',
    c4_desc:  'Minibus spacious untuk rombongan menengah. Kabin tinggi dan legroom ekstra luas.',
    c4_cap:   '14 Penumpang',
    c4_bag:   '8 Koper',
    c4_trans: 'Manual',
    c4_ac:    'Double Blower',

    c5_name:  'Isuzu Elf 20 Seat',
    c5_desc:  'Sempurna untuk rombongan besar – piknik, study tour, atau corporate outing.',
    c5_cap:   '20 Penumpang',
    c5_bag:   '10 Koper',
    c5_trans: 'Manual',
    c5_ac:    'Double Blower',

    c6_name:  'Bus Pariwisata 30 Seat',
    c6_desc:  'Bus lengkap dengan sound system, microphone, dan reclining seat untuk kenyamanan maksimal.',
    c6_cap:   '30 Penumpang',
    c6_bag:   '15+ Koper',
    c6_trans: 'Otomatis',
    c6_ac:    'Central AC',

    select_car_btn: 'Pilih Kendaraan',

    /* --- Testimoni --- */
    testi_eyebrow:  'Kata Mereka',
    testi_title:    'Testimoni Pelanggan',
    testi_subtitle: 'Lebih dari 500 pelanggan telah mempercayakan perjalanan Bali mereka kepada kami',
    testi1_quote:   '"Pelayanan luar biasa! Driver sangat ramah, tepat waktu, dan tahu semua tempat terbaik di Bali. Tur Ubud kami jadi pengalaman yang tak terlupakan!"',
    testi1_name:    'Sarah R.',
    testi1_origin:  'Jakarta, Indonesia',
    testi2_quote:   '"Booked the Alphard for our honeymoon – absolutely worth it! The car was spotless, the driver was incredibly helpful. 100% will use again."',
    testi2_name:    'James & Maria W.',
    testi2_origin:  'Sydney, Australia',
    testi3_quote:   '"Rombongan 25 orang kami dilayani dengan Bus Pariwisata mereka. Sangat tepat waktu, bersih, dan harganya kompetitif. Highly recommended!"',
    testi3_name:    'Budi P.',
    testi3_origin:  'Surabaya, Indonesia',
    testi4_quote:   '"The Nusa Penida trip was breathtaking! Well-organized from start to finish. Driver helped with bags and knew every best spot. 10/10!"',
    testi4_name:    'Lisa L.',
    testi4_origin:  'Singapore',
    testi5_quote:   '"Sudah 3x booking Lotus Bali dan selalu puas. Harga sesuai, kendaraan bersih, driver ontime. Tim yang sangat profesional!"',
    testi5_name:    'Rina K.',
    testi5_origin:  'Bandung, Indonesia',

    /* --- Gallery --- */
    gal_eyebrow: 'Galeri',
    gal_title:   'Momen Perjalanan Bersama Kami',
    g1_lbl: 'Tegalalang Rice Terrace',
    g2_lbl: 'Tanah Lot Temple',
    g3_lbl: 'Kintamani Volcano',
    g4_lbl: 'Nusa Penida Beach',
    g5_lbl: 'Sekumpul Waterfall',
    g6_lbl: 'Kecak Fire Dance',

    /* --- Contact --- */
    hubungi_eyebrow:   'Hubungi Kami',
    hubungi_title:     'Siap Membantu Perjalanan Anda',
    hubungi_subtitle:  'Kami siap melayani 24 jam sehari, 7 hari seminggu',
    addr_label:        'Alamat',
    addr_val:          'Jl. Sunset Road No. 88, Kuta, Badung, Bali 80361',
    wa_label:          'WhatsApp',
    email_label:       'Email',
    hours_label:       'Jam Operasional',
    hours_val:         '24 Jam / 7 Hari',

    /* --- Form --- */
    form_title:    '📋 Form Pemesanan',
    form_subtitle: 'Isi form & kami akan menghubungi Anda via WhatsApp dalam hitungan menit',
    lbl_name:      'Nama Lengkap *',
    lbl_phone:     'No. HP / WhatsApp *',
    lbl_email:     'Email',
    lbl_date:      'Tanggal Pickup *',
    lbl_car:       'Pilih Kendaraan *',
    lbl_tour:      'Paket Wisata',
    lbl_location:  'Lokasi Penjemputan *',
    lbl_pax:       'Jumlah Penumpang',
    lbl_msg:       'Pesan / Catatan',
    car_ph:        '-- Pilih Kendaraan --',
    tour_ph:       '-- Paket (Opsional) --',
    submit_btn:    '💬 Kirim via WhatsApp',
    err_name:      'Nama wajib diisi (min. 2 karakter).',
    err_phone:     'Nomor HP tidak valid.',
    err_date:      'Tanggal pickup wajib dipilih.',
    err_car:       'Pilih kendaraan terlebih dahulu.',
    err_location:  'Lokasi penjemputan wajib diisi.',
    err_email:     'Format email tidak valid.',

    /* --- Footer --- */
    ft_desc:    'Mitra terpercaya transportasi & wisata di Bali. Melayani dengan hati sejak 2016.',
    ft_menu:    'Menu',
    ft_paket:   'Paket Wisata',
    ft_contact: 'Kontak',
    ft_copy:    'Lotus Bali. All rights reserved.',
    ft_top:     'Kembali ke atas',

    /* --- Toast messages --- */
    toast_lang_id:  '🇮🇩 Bahasa diubah ke Indonesia',
    toast_lang_en:  '🇬🇧 Language changed to English',
    toast_car_sel:  '🚗 Kendaraan dipilih! Lengkapi form pemesanan.',
    toast_tour_sel: '✅ Paket dipilih! Lengkapi form pemesanan.',
    toast_wa_redir: '✅ Mengalihkan ke WhatsApp...',
    toast_form_err: '⚠️ Mohon lengkapi semua field yang diperlukan.',
  },

  en: {
    nav_home:    'Home',
    nav_tentang: 'About Us',
    nav_paket:   'Tour Packages',
    nav_mobil:   'Vehicle Options',
    nav_hubungi: 'Contact',

    hero_badge:    '🌴 #1 Transport & Tour in Bali',
    hero_title:    'Explore Bali with <span>Confidence</span>',
    hero_subtitle: 'Lotus Bali offers a modern fleet, professional drivers, and complete tour packages for the best travel experience on the Island of the Gods.',
    hero_cta1:     'Book Now',
    hero_cta2:     'View Packages',
    hero_stat1_num: '500+',
    hero_stat1_lbl: 'Happy Customers',
    hero_stat2_num: '50+',
    hero_stat2_lbl: 'Destinations',
    hero_stat3_num: '8+',
    hero_stat3_lbl: 'Years Experience',
    hero_scroll:    'Scroll down',

    feat1_title: 'Professional Drivers',
    feat1_desc:  'Experienced, friendly drivers who know Bali\'s best routes and can serve as knowledgeable local guides.',
    feat2_title: 'Transparent Pricing',
    feat2_desc:  'No hidden fees. Price includes driver, fuel, parking, and travel insurance for total peace of mind.',
    feat3_title: '24/7 Support',
    feat3_desc:  'Our team is ready to assist anytime – morning, night, or holidays. Reach us via WhatsApp anytime.',

    tentang_eyebrow: 'Who We Are',
    tentang_title:   'About Lotus Bali',
    tentang_subtitle:'Your trusted travel & transportation partner in Bali since 2016',
    tentang_h3:      'Over 8 Years Serving Travelers in Bali',
    tentang_p1:      'Lotus Bali is a transportation and tourism company established in 2016. We provide the best travel experiences — from chauffeur-driven vehicles to complete tour packages across all of Bali\'s exotic destinations.',
    tentang_p2:      'With a modern, well-maintained fleet, certified drivers, and 24-hour customer service, we ensure every journey is safe, comfortable, and unforgettable.',
    visi_title: 'Vision',
    visi_desc:  'To become the leading tourism transportation provider in Bali, prioritizing safety, comfort, and customer satisfaction above all.',
    misi_title: 'Mission',
    misi_desc:  'To deliver premium-quality transportation services with transparent pricing, professional drivers, and a well-maintained fleet.',
    rating_label: 'Customer Rating',

    paket_eyebrow:   'Explore Bali',
    paket_title:     'Popular Tour Packages',
    paket_subtitle:  'Choose your dream package and let us handle every detail of your journey',

    t1_title: 'Ubud Full Day Tour',
    t1_desc:  'Tegalalang Rice Terrace, Monkey Forest, Ubud Palace, and the exotic traditional market.',
    t1_dur:   '8 Hours',
    t1_pax:   'Max 6 Pax',
    t1_price: 'IDR 550,000',
    t1_badge: 'Most Popular',

    t2_title: 'Kintamani Volcano Tour',
    t2_desc:  'Breathtaking panorama of Mount Batur & Lake Batur, with lakeside restaurant lunch.',
    t2_dur:   '9 Hours',
    t2_pax:   'Max 6 Pax',
    t2_price: 'IDR 600,000',
    t2_badge: 'New',

    t3_title: 'Tanah Lot Sunset Tour',
    t3_desc:  'Romantic sunset at Tanah Lot Temple and premium exploration of Seminyak & Canggu.',
    t3_dur:   '7 Hours',
    t3_pax:   'Max 6 Pax',
    t3_price: 'IDR 500,000',

    t4_title: 'East Bali Spectacular',
    t4_desc:  'Besakih Temple (Mother Temple of Bali), Taman Ujung, pristine beaches of east Bali.',
    t4_dur:   '10 Hours',
    t4_pax:   'Max 6 Pax',
    t4_price: 'IDR 700,000',

    t5_title: 'Nusa Penida Day Trip',
    t5_desc:  'Kelingking Beach, Angel\'s Billabong & Broken Beach on spectacular Nusa Penida island.',
    t5_dur:   '12 Hours',
    t5_pax:   'Max 4 Pax',
    t5_price: 'IDR 850,000',
    t5_badge: 'Hot Deal',

    t6_title: 'Bali Waterfall Explorer',
    t6_desc:  'Hidden Bali waterfalls – Sekumpul, Gitgit, Nungnung in the cool tropical rainforest.',
    t6_dur:   '10 Hours',
    t6_pax:   'Max 5 Pax',
    t6_price: 'IDR 650,000',

    from_lbl: 'Starting from',
    book_btn: 'Book Package',

    mobil_eyebrow:   'Our Fleet',
    mobil_title:     'Vehicle Options',
    mobil_subtitle:  'All include driver, fuel, and insurance. Well-maintained & air-conditioned.',

    car_spec_cap:   'Capacity',
    car_spec_bag:   'Luggage',
    car_spec_trans: 'Transmission',
    car_spec_ac:    'AC',

    c1_name:  'Toyota Avanza',
    c1_desc:  'Ideal for small families and city tours. Comfortable for full-day exploration around Bali.',
    c1_cap:   '6 Passengers',
    c1_bag:   '3 Bags',
    c1_trans: 'Manual',
    c1_ac:    'Single Blower',

    c2_name:  'Toyota Innova Reborn',
    c2_desc:  'Premium and spacious, ideal for larger groups. Comfortable suspension for any terrain.',
    c2_cap:   '7 Passengers',
    c2_bag:   '4 Bags',
    c2_trans: 'Automatic',
    c2_ac:    'Double Blower',

    c3_name:  'Toyota Alphard',
    c3_desc:  'Ultimate VIP luxury for special journeys. Premium leather seats and full entertainment system.',
    c3_cap:   '6 Passengers',
    c3_bag:   '4 Bags',
    c3_trans: 'Automatic',
    c3_ac:    'Dual Zone',

    c4_name:  'Toyota Hiace Premium',
    c4_desc:  'Spacious minibus for medium groups. High cabin with generous extra legroom.',
    c4_cap:   '14 Passengers',
    c4_bag:   '8 Bags',
    c4_trans: 'Manual',
    c4_ac:    'Double Blower',

    c5_name:  'Isuzu Elf 20 Seat',
    c5_desc:  'Perfect for large groups – picnics, study tours, or corporate outings.',
    c5_cap:   '20 Passengers',
    c5_bag:   '10 Bags',
    c5_trans: 'Manual',
    c5_ac:    'Double Blower',

    c6_name:  'Tourist Bus 30 Seat',
    c6_desc:  'Full-featured bus with sound system, microphone, and reclining seats for maximum comfort.',
    c6_cap:   '30 Passengers',
    c6_bag:   '15+ Bags',
    c6_trans: 'Automatic',
    c6_ac:    'Central AC',

    select_car_btn: 'Select Vehicle',

    testi_eyebrow:  'Testimonials',
    testi_title:    'What Our Customers Say',
    testi_subtitle: 'Over 500 customers have trusted us with their Bali travel experiences',
    testi1_quote:   '"Outstanding service! The driver was so friendly, punctual, and knew all the best places in Bali. Our Ubud tour became an unforgettable experience!"',
    testi1_name:    'Sarah R.',
    testi1_origin:  'Jakarta, Indonesia',
    testi2_quote:   '"Booked the Alphard for our honeymoon – absolutely worth it! The car was spotless, the driver was incredibly helpful. 100% will use again."',
    testi2_name:    'James & Maria W.',
    testi2_origin:  'Sydney, Australia',
    testi3_quote:   '"Our group of 25 was served with their tour bus. Very punctual, clean, and competitively priced. Highly recommended for group travel!"',
    testi3_name:    'Budi P.',
    testi3_origin:  'Surabaya, Indonesia',
    testi4_quote:   '"The Nusa Penida trip was breathtaking! Well-organized from start to finish. Driver helped with bags and knew every best spot. 10/10!"',
    testi4_name:    'Lisa L.',
    testi4_origin:  'Singapore',
    testi5_quote:   '"3rd time booking with Lotus Bali and always satisfied. Great price, clean vehicle, on-time driver. Such a professional team!"',
    testi5_name:    'Rina K.',
    testi5_origin:  'Bandung, Indonesia',

    gal_eyebrow: 'Gallery',
    gal_title:   'Journey Moments With Us',
    g1_lbl: 'Tegalalang Rice Terrace',
    g2_lbl: 'Tanah Lot Temple',
    g3_lbl: 'Kintamani Volcano',
    g4_lbl: 'Nusa Penida Beach',
    g5_lbl: 'Sekumpul Waterfall',
    g6_lbl: 'Kecak Fire Dance',

    hubungi_eyebrow:   'Contact Us',
    hubungi_title:     'Ready to Help Your Journey',
    hubungi_subtitle:  'We are ready to serve 24 hours a day, 7 days a week',
    addr_label:        'Address',
    addr_val:          'Jl. Sunset Road No. 88, Kuta, Badung, Bali 80361',
    wa_label:          'WhatsApp',
    email_label:       'Email',
    hours_label:       'Operating Hours',
    hours_val:         '24 Hours / 7 Days',

    form_title:    '📋 Booking Form',
    form_subtitle: 'Fill the form & we\'ll contact you via WhatsApp within minutes',
    lbl_name:      'Full Name *',
    lbl_phone:     'Phone / WhatsApp *',
    lbl_email:     'Email',
    lbl_date:      'Pickup Date *',
    lbl_car:       'Select Vehicle *',
    lbl_tour:      'Tour Package',
    lbl_location:  'Pickup Location *',
    lbl_pax:       'Number of Passengers',
    lbl_msg:       'Message / Notes',
    car_ph:        '-- Select Vehicle --',
    tour_ph:       '-- Package (Optional) --',
    submit_btn:    '💬 Send via WhatsApp',
    err_name:      'Full name is required (min. 2 characters).',
    err_phone:     'Invalid phone number.',
    err_date:      'Pickup date is required.',
    err_car:       'Please select a vehicle.',
    err_location:  'Pickup location is required.',
    err_email:     'Invalid email format.',

    ft_desc:    'Your trusted transportation & tour partner in Bali. Serving with heart since 2016.',
    ft_menu:    'Menu',
    ft_paket:   'Tour Packages',
    ft_contact: 'Contact',
    ft_copy:    'Lotus Bali. All rights reserved.',
    ft_top:     'Back to top',

    toast_lang_id:  '🇮🇩 Bahasa diubah ke Indonesia',
    toast_lang_en:  '🇬🇧 Language changed to English',
    toast_car_sel:  '🚗 Vehicle selected! Complete the booking form.',
    toast_tour_sel: '✅ Package selected! Complete the booking form.',
    toast_wa_redir: '✅ Redirecting to WhatsApp...',
    toast_form_err: '⚠️ Please fill in all required fields.',
  }
};

/* ================================================================
   STATE
   ================================================================ */
let currentLang = 'id';
let sliderIndex = 0;
let totalSlides = 0;
let autoSlideTimer = null;

/* ================================================================
   MODULE: Language / i18n
   ================================================================ */
const I18nModule = (() => {
  function apply(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        // Support innerHTML for keys with HTML tags
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.lang = lang;
  }

  function init() {
    document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;

        currentLang = lang;
        apply(lang);

        // Update active button state across all toggles on the page
        document.querySelectorAll('.lang-toggle__btn').forEach(b => {
          b.classList.toggle('lang-toggle__btn--active', b.dataset.lang === lang);
        });

        const toastKey = lang === 'id' ? 'toast_lang_id' : 'toast_lang_en';
        ToastModule.show(i18n[currentLang][toastKey]);
      });
    });

    // Initial apply
    apply(currentLang);
  }

  return { init, apply };
})();

/* ================================================================
   MODULE: Navbar
   ================================================================ */
const NavbarModule = (() => {
  function init() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const isInner = navbar.classList.contains('navbar--inner');
    if (!isInner) {
      navbar.classList.add('navbar--transparent');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          navbar.classList.remove('navbar--transparent');
          navbar.classList.add('navbar--solid');
        } else {
          navbar.classList.add('navbar--transparent');
          navbar.classList.remove('navbar--solid');
        }
      }, { passive: true });
    }

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');

    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('navbar__hamburger--open');
        menu.classList.toggle('navbar__menu--open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
      });

      // Close on link click
      menu.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('navbar__hamburger--open');
          menu.classList.remove('navbar__menu--open');
        });
      });

      // Close on outside click
      document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
          hamburger.classList.remove('navbar__hamburger--open');
          menu.classList.remove('navbar__menu--open');
        }
      });
    }

    // Active link highlighting
    highlightActiveLink();
  }

  function highlightActiveLink() {
    const path = window.location.pathname;
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const isActive = path.endsWith(href) || (path.endsWith('/') && href.includes('home')) ||
                       (href !== 'home.html' && path.includes(href.replace('.html', '')));
      link.classList.toggle('navbar__link--active', isActive);
    });
  }

  return { init };
})();

/* ================================================================
   MODULE: Scroll Reveal (IntersectionObserver)
   ================================================================ */
const RevealModule = (() => {
  function init() {
    const targets = document.querySelectorAll('.js-reveal');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('js-reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: LB_CONFIG.revealThreshold });

    targets.forEach(el => observer.observe(el));
  }

  return { init };
})();

/* ================================================================
   MODULE: Counter Animation
   ================================================================ */
const CounterModule = (() => {
  function animateCounter(el) {
    const raw = el.textContent.trim();
    const suffix = raw.replace(/[\d,]/g, '');
    const target = parseInt(raw.replace(/\D/g, ''), 10);
    if (isNaN(target)) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function init() {
    const counters = document.querySelectorAll('.hero__stat-num');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  return { init };
})();

/* ================================================================
   MODULE: Testimonial Slider
   ================================================================ */
const SliderModule = (() => {
  let track, cards, dots, prevBtn, nextBtn;

  function getPerView() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function buildDots() {
    if (!dots) return;
    dots.innerHTML = '';
    const perView = getPerView();
    const pageCount = Math.ceil(totalSlides / perView);
    for (let i = 0; i < pageCount; i++) {
      const btn = document.createElement('button');
      btn.className = 'slider-dot' + (i === 0 ? ' slider-dot--active' : '');
      btn.setAttribute('aria-label', `Slide ${i + 1}`);
      btn.addEventListener('click', () => { goTo(i * perView); resetAuto(); });
      dots.appendChild(btn);
    }
  }

  function updateDots() {
    if (!dots) return;
    const perView = getPerView();
    const pageIndex = Math.floor(sliderIndex / perView);
    dots.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('slider-dot--active', i === pageIndex);
    });
  }

  function render() {
    if (!track) return;
    const perView = getPerView();
    const gap = 24;
    const containerW = track.parentElement.offsetWidth;
    const cardW = (containerW - gap * (perView - 1)) / perView;
    track.style.transform = `translateX(-${sliderIndex * (cardW + gap)}px)`;
    updateDots();
  }

  function goTo(index) {
    const perView = getPerView();
    const max = totalSlides - perView;
    sliderIndex = Math.max(0, Math.min(index, max));
    render();
  }

  function next() {
    const perView = getPerView();
    const max = totalSlides - perView;
    sliderIndex = sliderIndex >= max ? 0 : sliderIndex + 1;
    render();
  }

  function prev() {
    const perView = getPerView();
    const max = totalSlides - perView;
    sliderIndex = sliderIndex <= 0 ? max : sliderIndex - 1;
    render();
  }

  function startAuto() {
    autoSlideTimer = setInterval(next, LB_CONFIG.sliderAutoDelay);
  }

  function resetAuto() {
    clearInterval(autoSlideTimer);
    startAuto();
  }

  function initTouch() {
    if (!track) return;
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) { dx > 0 ? next() : prev(); resetAuto(); }
    });
  }

  function init() {
    track   = document.getElementById('testiTrack');
    dots    = document.getElementById('testiDots');
    prevBtn = document.getElementById('testiPrev');
    nextBtn = document.getElementById('testiNext');

    if (!track) return;

    cards = track.querySelectorAll('.testimonial-card');
    totalSlides = cards.length;

    buildDots();
    render();

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAuto(); });

    startAuto();
    initTouch();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { sliderIndex = 0; buildDots(); render(); }, 250);
    });
  }

  return { init };
})();

/* ================================================================
   MODULE: Ripple Effect
   ================================================================ */
const RippleModule = (() => {
  function init() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const size = Math.max(rect.width, rect.height) * 2;

        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${x - size/2}px;top:${y - size/2}px`;
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }
  return { init };
})();

/* ================================================================
   MODULE: Toast Notification
   ================================================================ */
const ToastModule = (() => {
  let timer;
  function show(msg, type = '') {
    let toast = document.getElementById('lb-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'lb-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    clearTimeout(timer);
    toast.textContent = msg;
    toast.className = 'toast' + (type ? ` toast--${type}` : '');
    // Force reflow
    void toast.offsetWidth;
    toast.classList.add('toast--visible');
    timer = setTimeout(() => toast.classList.remove('toast--visible'), 3200);
  }
  return { show };
})();

/* ================================================================
   MODULE: Card Quick-Select (Tour & Car)
   ================================================================ */
const CardModule = (() => {
  function init() {
    // Tour "Book" buttons
    document.querySelectorAll('[data-select-tour]').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.selectTour;
        const sel = document.getElementById('selectTour');
        if (sel) { setSelectValue(sel, val); }
        const bookingSection = document.getElementById('booking') || document.querySelector('.booking-form');
        if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        else navigateTo('hubungi.html');
        ToastModule.show(i18n[currentLang].toast_tour_sel, 'success');
      });
    });

    // Car "Select" buttons
    document.querySelectorAll('[data-select-car]').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.selectCar;
        const sel = document.getElementById('selectCar');
        if (sel) { setSelectValue(sel, val); }
        const bookingSection = document.getElementById('booking') || document.querySelector('.booking-form');
        if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        else navigateTo('hubungi.html');
        ToastModule.show(i18n[currentLang].toast_car_sel, 'success');
      });
    });
  }

  function setSelectValue(sel, val) {
    for (const opt of sel.options) {
      if (opt.value === val) { sel.value = val; break; }
    }
  }

  function navigateTo(page) {
    const base = window.location.href.split('/pages/')[0];
    window.location.href = `${base}/pages/${page}`;
  }

  return { init };
})();

/* ================================================================
   MODULE: Booking Form & WhatsApp
   ================================================================ */
const FormModule = (() => {
  function formatDate(str) {
    if (!str) return '-';
    const d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  function validateField(el) {
    const id = el.id;
    const t = i18n[currentLang];
    let errEl = el.parentElement.querySelector('.form-error-msg');
    let msg = '', valid = true;

    const val = el.value.trim();

    if (id === 'f_name') {
      if (!val || val.length < 2) { msg = t.err_name; valid = false; }
    } else if (id === 'f_phone') {
      const clean = val.replace(/\s/g,'');
      if (!clean || !/^\+?[\d]{8,15}$/.test(clean)) { msg = t.err_phone; valid = false; }
    } else if (id === 'f_email') {
      if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { msg = t.err_email; valid = false; }
    } else if (id === 'f_date') {
      if (!val) { msg = t.err_date; valid = false; }
    } else if (id === 'f_car') {
      if (!val) { msg = t.err_car; valid = false; }
    } else if (id === 'f_location') {
      if (!val) { msg = t.err_location; valid = false; }
    }

    if (errEl) { errEl.textContent = msg; errEl.classList.toggle('visible', !valid); }
    el.classList.toggle('is-error', !valid);
    return valid;
  }

  function validateAll() {
    const required = ['f_name', 'f_phone', 'f_date', 'f_car', 'f_location'];
    let allValid = true;
    required.forEach(id => {
      const el = document.getElementById(id);
      if (el && !validateField(el)) allValid = false;
    });
    const email = document.getElementById('f_email');
    if (email && email.value && !validateField(email)) allValid = false;
    return allValid;
  }

  function buildWAMessage(data) {
    const t = i18n[currentLang];
    return currentLang === 'id'
      ? `Halo Lotus Bali 🌸\n\nSaya ingin memesan:\n\n👤 *Nama:* ${data.name}\n📱 *No. HP:* ${data.phone}\n📧 *Email:* ${data.email || '-'}\n🚗 *Kendaraan:* ${data.car}\n🗺️ *Paket:* ${data.tour || 'Tidak dipilih'}\n📅 *Tanggal:* ${data.date}\n👥 *Penumpang:* ${data.pax || '-'}\n📍 *Penjemputan:* ${data.location}\n💬 *Catatan:* ${data.msg || '-'}\n\nMohon konfirmasi ketersediaan & harganya. Terima kasih! 🙏`
      : `Hello Lotus Bali 🌸\n\nI'd like to book:\n\n👤 *Name:* ${data.name}\n📱 *Phone:* ${data.phone}\n📧 *Email:* ${data.email || '-'}\n🚗 *Vehicle:* ${data.car}\n🗺️ *Package:* ${data.tour || 'Not selected'}\n📅 *Date:* ${data.date}\n👥 *Passengers:* ${data.pax || '-'}\n📍 *Pickup:* ${data.location}\n💬 *Notes:* ${data.msg || '-'}\n\nPlease confirm availability and pricing. Thank you! 🙏`;
  }

  function init() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    // Set min date
    const dateInput = document.getElementById('f_date');
    if (dateInput) {
      const today = new Date();
      dateInput.min = today.toISOString().split('T')[0];
    }

    // Real-time validation
    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('blur', () => validateField(el));
      el.addEventListener('input', () => { if (el.classList.contains('is-error')) validateField(el); });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateAll()) {
        ToastModule.show(i18n[currentLang].toast_form_err, 'error');
        const first = form.querySelector('.is-error');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const data = {
        name:     document.getElementById('f_name')?.value.trim(),
        phone:    document.getElementById('f_phone')?.value.trim(),
        email:    document.getElementById('f_email')?.value.trim(),
        car:      document.getElementById('f_car')?.value,
        tour:     document.getElementById('f_tour')?.value,
        date:     formatDate(document.getElementById('f_date')?.value),
        pax:      document.getElementById('f_pax')?.value,
        location: document.getElementById('f_location')?.value.trim(),
        msg:      document.getElementById('f_msg')?.value.trim(),
      };

      const message = buildWAMessage(data);
      const url = `https://wa.me/${LB_CONFIG.waNumber}?text=${encodeURIComponent(message)}`;

      ToastModule.show(i18n[currentLang].toast_wa_redir, 'success');
      setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 700);
    });
  }

  return { init };
})();

/* ================================================================
   MODULE: Gallery hover
   ================================================================ */
const GalleryModule = (() => {
  function init() {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
    });
  }
  return { init };
})();

/* ================================================================
   MODULE: Footer Year
   ================================================================ */
function setFooterYear() {
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ================================================================
   INIT — Boot everything
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  NavbarModule.init();
  I18nModule.init();
  RevealModule.init();
  CounterModule.init();
  SliderModule.init();
  RippleModule.init();
  CardModule.init();
  FormModule.init();
  GalleryModule.init();

  // Trigger reveal for above-fold elements
  setTimeout(() => {
    document.querySelectorAll('.js-reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('js-reveal--visible');
    });
  }, 120);
});