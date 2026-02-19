// CONFIGURATION: Ganti dengan nomor WhatsApp kamu
const MY_NUMBER = "6282258057099"; 

const AVAILABILITY_CONFIG = {
    package_family_2d1n: {
        unavailableDates: [
            "2026-02-20",
            "2026-02-21",
            "2026-02-28",
            "2026-03-07"
        ]
    },
    rental_innova_reborn: {
        unavailableDates: [
            "2026-02-18",
            "2026-02-22",
            "2026-03-01",
            "2026-03-08"
        ]
    }
};

const INDONESIAN_MONTHS = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

const INDONESIAN_DAYS_SHORT = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const LANG_STORAGE_KEY = "lotus_lang";
const LOTUS_TRANSLATIONS = {
    id: {
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.packages": "Paket",
        "nav.rental": "Rental",
        "nav.contact": "Kontak",
        "nav.contact_us": "Hubungi Kami",
        "loader.subtitle": "Menyiapkan perjalanan Bali Anda",
        "footer.copyright": "Â© 2026 Lotus Bali Tour & Travel. Semua hak dilindungi.",
        "footer.brand_label": "Lotus Bali",
        "footer.brand_subtitle": "Private Tour & Travel",
        "footer.tagline": "Lotus Bali menghadirkan pengalaman wisata privat dengan sentuhan premium, itinerary fleksibel, dan layanan support yang responsif.",
        "footer.registered": "Terdaftar resmi dengan No. NIB 8120105950765",
        "footer.contact_title": "Kontak Kami",
        "footer.address": "Jl. Darmawangsa, Pondok Kampial Permai, Ling Anca, Kel. Benoa, Kec. Kuta Selatan",
        "footer.email": "info@lotusbali.travel",
        "footer.phone": "+62 859 6020 2022",
        "footer.whatsapp": "+62 859 6020 2022",
        "footer.info_title": "Info Lainnya",
        "footer.link.motor": "Sewa Motor Bali",
        "footer.link.car": "Harga Sewa Mobil Lotus",
        "footer.link.watersport": "Paket Watersport Bali",
        "footer.link.rafting": "Paket Rafting Bali",
        "footer.follow_title": "Ikuti Kami",
        "footer.privacy": "Kebijakan privasi & penggunaan data tersedia untuk menjamin kenyamanan Anda.",
        "label.start_from_idr": "Mulai IDR",
        "alert.package_required": "Mohon lengkapi data wajib booking paket.",
        "alert.package_pick_car": "Silakan pilih salah satu mobil terlebih dahulu atau pilih opsi tanpa sewa mobil.",
        "alert.detail_package_required": "Mohon lengkapi data wajib booking terlebih dahulu.",
        "alert.detail_package_pick_car": "Silakan pilih mobil atau pilih opsi tanpa sewa mobil.",
        "alert.rental_required": "Mohon lengkapi data wajib booking rental terlebih dahulu.",
        "alert.availability_date": "Silakan pilih tanggal ketersediaan terlebih dahulu.",
        "alert.contact_required": "Harap isi Nama dan Pesan Anda.",
        "floating.whatsapp": "Chat WhatsApp",
        "floating.whatsapp_aria": "Buka chat WhatsApp Lotus Bali",
        "faq.eyebrow": "FAQ",
        "faq.title": "Pertanyaan Yang Sering Ditanyakan",
        "faq.subtitle": "Kalau masih ada yang belum jelas, kirim pertanyaan Anda lewat WhatsApp.",
        "faq.q1": "Apa saja yang sudah termasuk di harga paket tour?",
        "faq.a1": "Umumnya sudah termasuk mobil + driver, BBM, parkir area standar, dan itinerary sesuai paket. Detail lengkap ada di halaman detail paket.",
        "faq.q2": "Apakah bisa custom itinerary sesuai request?",
        "faq.a2": "Bisa. Anda bisa kirim area tujuan, durasi, dan preferensi trip, lalu tim kami bantu susun rute terbaik.",
        "faq.q3": "Bagaimana sistem booking dan pembayarannya?",
        "faq.a3": "Booking dilakukan via WhatsApp. Setelah data trip dikonfirmasi, Anda akan menerima detail pembayaran beserta ringkasan pesanan.",
        "faq.q4": "Apakah ada biaya tambahan overtime?",
        "faq.a4": "Ada, jika durasi layanan melebihi ketentuan paket/rental. Besaran overtime diinformasikan transparan sebelum konfirmasi final.",
        "faq.q5": "Bisa jemput di bandara atau hotel?",
        "faq.a5": "Bisa. Kami melayani penjemputan dari bandara, hotel, villa, atau titik temu lain sesuai kesepakatan."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.packages": "Packages",
        "nav.rental": "Rental",
        "nav.contact": "Contact",
        "nav.contact_us": "Contact Us",
        "loader.subtitle": "Preparing your Bali trip",
        "footer.copyright": "Â© 2026 Lotus Bali Tour & Travel. All rights reserved.",
        "footer.brand_label": "Lotus Bali",
        "footer.brand_subtitle": "Private Tour & Travel",
        "footer.tagline": "Lotus Bali delivers private travel experiences with a premium touch, flexible itineraries, and responsive support.",
        "footer.registered": "Registered officially with No. NIB 8120105950765",
        "footer.contact_title": "Contact Us",
        "footer.address": "Jl. Darmawangsa, Pondok Kampial Permai, Ling Anca, Kel. Benoa, Kec. Kuta Selatan",
        "footer.email": "info@lotusbali.travel",
        "footer.phone": "+62 859 6020 2022",
        "footer.whatsapp": "+62 859 6020 2022",
        "footer.info_title": "More Info",
        "footer.link.motor": "Bali Motorbike Rental",
        "footer.link.car": "Lotus Car Rental Rates",
        "footer.link.watersport": "Bali Watersport Packages",
        "footer.link.rafting": "Bali Rafting Packages",
        "footer.follow_title": "Follow Us",
        "footer.privacy": "Privacy policy & data usage are available to ensure your comfort.",
        "label.start_from_idr": "Starting from IDR",
        "alert.package_required": "Please complete all required package booking fields.",
        "alert.package_pick_car": "Please choose a car first or select no car rental.",
        "alert.detail_package_required": "Please complete all required booking fields first.",
        "alert.detail_package_pick_car": "Please choose a car or select no car rental.",
        "alert.rental_required": "Please complete all required rental booking fields first.",
        "alert.availability_date": "Please select an available date first.",
        "alert.contact_required": "Please fill in your Name and Message.",
        "floating.whatsapp": "Chat WhatsApp",
        "floating.whatsapp_aria": "Open Lotus Bali WhatsApp chat",
        "faq.eyebrow": "FAQ",
        "faq.title": "Frequently Asked Questions",
        "faq.subtitle": "If anything is still unclear, send your question via WhatsApp.",
        "faq.q1": "What is included in the tour package price?",
        "faq.a1": "It usually includes car + driver, fuel, standard area parking, and an itinerary based on the package. Full details are available on the package detail page.",
        "faq.q2": "Can I request a custom itinerary?",
        "faq.a2": "Yes. Share your destination area, trip duration, and preferences, and our team will help arrange the best route.",
        "faq.q3": "How do booking and payment work?",
        "faq.a3": "Booking is handled through WhatsApp. Once trip details are confirmed, you will receive payment details and an order summary.",
        "faq.q4": "Is there an overtime charge?",
        "faq.a4": "Yes, if service duration exceeds the package/rental terms. Overtime rates are informed transparently before final confirmation.",
        "faq.q5": "Can you pick us up from the airport or hotel?",
        "faq.a5": "Yes. We provide pickup from the airport, hotel, villa, or another agreed meeting point."
    }
};
const PAGE_TRANSLATIONS = {
    "index.html": {
        title: {
            id: "Lotus Bali - Private Tour & Travel Premium",
            en: "Lotus Bali - Premium Private Tours & Travel"
        },
        entries: [
            { selector: "header.ocean-hero p.inline-flex", text: { id: "Ocean View Bali Experience", en: "Ocean View Bali Experience" } },
            { selector: "header.ocean-hero h1", html: { id: 'Keindahan Bali, <span class="text-sky-300">Lebih Dekat</span> Dari Sebelumnya', en: 'Bali Beauty, <span class="text-sky-300">Closer</span> Than Ever' } },
            { selector: "header.ocean-hero p.text-sky-50\\/90", text: { id: "Nikmati perjalanan private dengan pemandangan pantai, tebing, dan budaya Bali yang dikurasi agar setiap hari terasa istimewa.", en: "Enjoy private journeys with curated beaches, cliffs, and Balinese culture so each day feels special." } },
            { selector: "header.ocean-hero .flex.flex-wrap.gap-4.mb-12 a:nth-child(1)", text: { id: "Lihat Paket Tour", en: "Explore Tour Packages" } },
            { selector: "header.ocean-hero .flex.flex-wrap.gap-4.mb-12 a:nth-child(2)", text: { id: "Cek Sewa Mobil", en: "Check Car Rental" } },
            { selector: "header.ocean-hero .grid.grid-cols-3 > div:nth-child(1) p.text-xs", text: { id: "Trip Terselesaikan", en: "Completed Trips" } },
            { selector: "header.ocean-hero .grid.grid-cols-3 > div:nth-child(2) p.text-xs", text: { id: "Rating Tamu", en: "Guest Rating" } },
            { selector: "header.ocean-hero .grid.grid-cols-3 > div:nth-child(3) p.text-xs", text: { id: "Support WhatsApp", en: "WhatsApp Support" } },
            { selector: "section.container:nth-of-type(1) article:nth-child(1) h3", text: { id: "Panorama Tebing Uluwatu", en: "Uluwatu Cliff Panorama" } },
            { selector: "section.container:nth-of-type(1) article:nth-child(2) h3", text: { id: "Pantai Bali Saat Senja", en: "Bali Beach at Sunset" } },
            { selector: "section.container:nth-of-type(1) article:nth-child(3) h3", text: { id: "Nuansa Laut Tropis Bali", en: "Bali Tropical Sea Vibes" } },
            { selector: "section.container:nth-of-type(2) article:nth-child(1) h3", text: { id: "Itinerary Personal", en: "Personalized Itinerary" } },
            { selector: "section.container:nth-of-type(2) article:nth-child(1) p.text-slate-600", text: { id: "Rute dibuat sesuai ritme liburan keluarga, honeymoon, atau grup corporate.", en: "Routes are tailored for family holidays, honeymoons, or corporate groups." } },
            { selector: "section.container:nth-of-type(2) article:nth-child(2) h3", text: { id: "Armada Nyaman", en: "Comfortable Fleet" } },
            { selector: "section.container:nth-of-type(2) article:nth-child(2) p.text-slate-600", text: { id: "Unit Avanza, Innova, dan Hiace dengan standar kebersihan serta kenyamanan premium.", en: "Avanza, Innova, and Hiace units with premium cleanliness and comfort standards." } },
            { selector: "section.container:nth-of-type(2) article:nth-child(3) h3", text: { id: "Fast Response", en: "Fast Response" } },
            { selector: "section.container:nth-of-type(2) article:nth-child(3) p.text-slate-600", text: { id: "Konfirmasi jadwal, kebutuhan khusus, dan update perjalanan via WhatsApp real-time.", en: "Real-time schedule confirmation, special requests, and trip updates via WhatsApp." } },
            { selector: "section.container:nth-of-type(3) p.text-xs.uppercase", text: { id: "Signature Experience", en: "Signature Experience" } },
            { selector: "section.container:nth-of-type(3) h2.heading-font", text: { id: "Program Favorit Tamu Lotus", en: "Lotus Guest Favorite Programs" } },
            { selector: "section.container:nth-of-type(3) a.hidden.md\\:inline-flex", text: { id: "Lihat Semua", en: "View All" } },
            { selector: "section.container:nth-of-type(4) p.uppercase", text: { id: "Start Your Bali Plan", en: "Start Your Bali Plan" } },
            { selector: "section.container:nth-of-type(4) h2.heading-font", text: { id: "Tinggal Pilih Tanggal, Kami Siapkan Detailnya", en: "Choose the Date, We Handle the Details" } },
            { selector: "section.container:nth-of-type(4) p.text-teal-50\\/90", text: { id: "Kirim kebutuhan trip Anda dan tim Lotus akan kirim draft itinerary plus estimasi biaya hari yang sama.", en: "Share your trip needs and the Lotus team will send a draft itinerary plus a same-day cost estimate." } },
            { selector: "section.container:nth-of-type(4) a:nth-child(1)", text: { id: "Pilih Paket", en: "Choose Package" } },
            { selector: "section.container:nth-of-type(4) a:nth-child(2)", text: { id: "Hubungi Tim", en: "Contact Team" } },
            { selector: "section.container:nth-of-type(3) article:nth-child(1) h3", text: { id: "Family Escape 2D1N", en: "Family Escape 2D1N" } },
            { selector: "section.container:nth-of-type(3) article:nth-child(1) p", text: { id: "Kombinasi pantai, budaya, dan kuliner dengan ritme santai untuk keluarga.", en: "A mix of beaches, culture, and culinary spots with a relaxed pace for families." } },
            { selector: "section.container:nth-of-type(3) article:nth-child(1) a", text: { id: "Pelajari Paket", en: "Learn Package" } },
            { selector: "section.container:nth-of-type(3) article:nth-child(2) h3", text: { id: "Private Car + Driver", en: "Private Car + Driver" } },
            { selector: "section.container:nth-of-type(3) article:nth-child(2) p", text: { id: "Layanan sewa mobil full-day dan half-day dengan driver profesional.", en: "Full-day and half-day car rental service with professional drivers." } },
            { selector: "section.container:nth-of-type(3) article:nth-child(2) a", text: { id: "Cek Harga Rental", en: "Check Rental Rates" } },
            { selector: "section.container:nth-of-type(3) article:nth-child(3) h3", text: { id: "Custom Luxury Route", en: "Custom Luxury Route" } },
            { selector: "section.container:nth-of-type(3) article:nth-child(3) p", text: { id: "Susun itinerary khusus untuk honeymoon, photoshoot, atau retreat privat.", en: "Create a custom itinerary for honeymoon, photoshoot, or private retreat." } },
            { selector: "section.container:nth-of-type(3) article:nth-child(3) a", text: { id: "Diskusi Rencana", en: "Discuss Plan" } }
        ]
    },
    "about.html": {
        title: { id: "Tentang Lotus Bali", en: "About Lotus Bali" },
        entries: [
            { selector: "main section:nth-of-type(1) p", text: { id: "Our Story", en: "Our Story" } },
            { selector: "main section:nth-of-type(1) h1", text: { id: "Cerita Di Balik Lotus Bali", en: "The Story Behind Lotus Bali" } },
            { selector: "main section:nth-of-type(1) p.max-w-3xl", text: { id: "Lotus lahir dari tim lokal Bali yang ingin mengubah pengalaman travel menjadi lebih personal, rapi, dan nyaman. Kami menangani detail kecil agar tamu bisa fokus menikmati momen.", en: "Lotus was founded by a local Bali team that wanted travel to feel more personal, organized, and comfortable. We handle the details so guests can enjoy the moments." } },
            { selector: "main section:nth-of-type(2) h2.text-2xl", text: { id: "Misi Kami", en: "Our Mission" } },
            { selector: "main section:nth-of-type(2) p.text-slate-600.leading-relaxed", text: { id: "Memberikan layanan tour & travel yang terasa privat, aman, dan efisien untuk tamu domestik maupun internasional.", en: "Deliver private, safe, and efficient tour & travel services for local and international guests." } },
            { selector: "main section:nth-of-type(3) h2.text-3xl", text: { id: "Nilai Yang Kami Jaga", en: "Values We Uphold" } },
            { selector: "main section:nth-of-type(4) h2.heading-font", text: { id: "Bangun Itinerary Anda Bersama Lotus", en: "Build Your Itinerary with Lotus" } },
            { selector: "main section:nth-of-type(4) p.text-teal-50\\/90", text: { id: "Konsultasi gratis untuk menentukan durasi, rute, dan kendaraan paling cocok.", en: "Free consultation to choose the best duration, route, and vehicle." } },
            { selector: "main section:nth-of-type(4) a", text: { id: "Hubungi Tim Lotus", en: "Contact Lotus Team" } },
            { selector: "main section:nth-of-type(2) .grid.gap-4 > div:nth-child(1) p.font-bold", text: { id: "Hospitality Lokal", en: "Local Hospitality" } },
            { selector: "main section:nth-of-type(2) .grid.gap-4 > div:nth-child(1) p.text-sm", text: { id: "Pendekatan ramah dan fleksibel khas Bali dalam setiap itinerary.", en: "Friendly and flexible Balinese-style approach in every itinerary." } },
            { selector: "main section:nth-of-type(2) .grid.gap-4 > div:nth-child(2) p.font-bold", text: { id: "Eksekusi Presisi", en: "Precision Execution" } },
            { selector: "main section:nth-of-type(2) .grid.gap-4 > div:nth-child(2) p.text-sm", text: { id: "Jadwal jelas, titik jemput tepat waktu, dan update cepat via WhatsApp.", en: "Clear schedule, on-time pickup, and quick updates via WhatsApp." } },
            { selector: "main section:nth-of-type(2) .grid.gap-4 > div:nth-child(3) p.font-bold", text: { id: "Kenyamanan Premium", en: "Premium Comfort" } },
            { selector: "main section:nth-of-type(2) .grid.gap-4 > div:nth-child(3) p.text-sm", text: { id: "Armada terawat, driver profesional, dan ritme perjalanan tidak terburu-buru.", en: "Well-maintained fleet, professional drivers, and a relaxed travel pace." } },
            { selector: "main section:nth-of-type(3) article:nth-child(1) h3", text: { id: "Trust First", en: "Trust First" } },
            { selector: "main section:nth-of-type(3) article:nth-child(1) p", text: { id: "Komunikasi terbuka, biaya transparan, dan rekomendasi yang realistis.", en: "Open communication, transparent pricing, and realistic recommendations." } },
            { selector: "main section:nth-of-type(3) article:nth-child(2) h3", text: { id: "Local Insight", en: "Local Insight" } },
            { selector: "main section:nth-of-type(3) article:nth-child(2) p", text: { id: "Spot populer plus hidden gems dengan timing terbaik tiap area Bali.", en: "Popular spots plus hidden gems with the best timing for each Bali area." } },
            { selector: "main section:nth-of-type(3) article:nth-child(3) h3", text: { id: "Time Efficient", en: "Time Efficient" } },
            { selector: "main section:nth-of-type(3) article:nth-child(3) p", text: { id: "Perjalanan efektif tanpa mengorbankan pengalaman dan quality time.", en: "Efficient trips without sacrificing experience and quality time." } }
        ]
    },
    "packages.html": {
        title: { id: "Paket Tour Bali - Lotus", en: "Bali Tour Packages - Lotus" },
        entries: [
            { selector: "main section:nth-of-type(1) p.text-xs", text: { id: "Pilihan Paket", en: "Package Options" } },
            { selector: "main section:nth-of-type(1) h1", text: { id: "Pilih Paket Yang Kamu Suka", en: "Choose Your Favorite Package" } },
            { selector: "main section:nth-of-type(1) p.max-w-3xl", html: { id: "Halaman ini khusus untuk melihat pilihan paket dan ringkasan singkat. Untuk detail lengkap + form booking, klik tombol <strong>Lihat Detail & Booking</strong>.", en: "This page is for viewing package options and short summaries. For full details + booking form, click <strong>View Details & Book</strong>." } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) a", text: { id: "Lihat Detail & Booking", en: "View Details & Book" } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) a", text: { id: "Lihat Detail & Booking", en: "View Details & Book" } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) a", text: { id: "Lihat Detail & Booking", en: "View Details & Book" } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) p:nth-of-type(2)", html: { id: '<i class="fa-regular fa-clock text-teal-700 mr-2"></i>Durasi 2 Hari 1 Malam', en: '<i class="fa-regular fa-clock text-teal-700 mr-2"></i>Duration 2 Days 1 Night' } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) p:nth-of-type(3)", html: { id: '<i class="fa-solid fa-list-check text-teal-700 mr-2"></i>Highlight: GWK, Pandawa, Tanah Lot', en: '<i class="fa-solid fa-list-check text-teal-700 mr-2"></i>Highlights: GWK, Pandawa, Tanah Lot' } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) h3", text: { id: "Paket Tour Hemat 2H1M", en: "Budget Tour Package 2D1N" } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p:nth-of-type(2)", html: { id: '<i class="fa-regular fa-clock text-teal-700 mr-2"></i>Durasi 3 Hari 2 Malam', en: '<i class="fa-regular fa-clock text-teal-700 mr-2"></i>Duration 3 Days 2 Nights' } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p:nth-of-type(3)", html: { id: '<i class="fa-solid fa-list-check text-teal-700 mr-2"></i>Highlight: Uluwatu, Kintamani, Bedugul', en: '<i class="fa-solid fa-list-check text-teal-700 mr-2"></i>Highlights: Uluwatu, Kintamani, Bedugul' } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) h3", text: { id: "Paket Tour Hemat 3H2M", en: "Budget Tour Package 3D2N" } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(2)", html: { id: '<i class="fa-regular fa-clock text-teal-700 mr-2"></i>Durasi 4 Hari 3 Malam', en: '<i class="fa-regular fa-clock text-teal-700 mr-2"></i>Duration 4 Days 3 Nights' } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(3)", html: { id: '<i class="fa-solid fa-list-check text-teal-700 mr-2"></i>Highlight: Ubud, Nusa Dua, Jimbaran', en: '<i class="fa-solid fa-list-check text-teal-700 mr-2"></i>Highlights: Ubud, Nusa Dua, Jimbaran' } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) h3", text: { id: "Paket Tour Hemat 4H3M", en: "Budget Tour Package 4D3N" } }
        ]
    },
    "rental.html": {
        title: { id: "Rental Mobil Bali - Lotus", en: "Bali Car Rental - Lotus" },
        entries: [
            { selector: "main section:nth-of-type(1) p.text-xs", text: { id: "Pilihan Armada", en: "Fleet Options" } },
            { selector: "main section:nth-of-type(1) h1", text: { id: "Pilih Mobil Rental Favorit Anda", en: "Choose Your Favorite Rental Car" } },
            { selector: "main section:nth-of-type(1) p.max-w-3xl", html: { id: "Halaman ini khusus daftar mobil dan ringkasan singkat. Untuk detail lengkap dan pengisian form booking, klik tombol <strong>Lihat Detail & Booking</strong>.", en: "This page lists vehicles and short summaries. For full details and booking form, click <strong>View Details & Book</strong>." } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) a", text: { id: "Lihat Detail & Booking", en: "View Details & Book" } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) a", text: { id: "Lihat Detail & Booking", en: "View Details & Book" } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) a", text: { id: "Lihat Detail & Booking", en: "View Details & Book" } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) p:nth-of-type(1)", html: { id: '<i class="fa-solid fa-user-group text-teal-700 mr-2"></i>Kapasitas 4-5 orang', en: '<i class="fa-solid fa-user-group text-teal-700 mr-2"></i>Capacity 4-5 persons' } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) p:nth-of-type(2)", html: { id: '<i class="fa-solid fa-suitcase text-teal-700 mr-2"></i>2 koper medium', en: '<i class="fa-solid fa-suitcase text-teal-700 mr-2"></i>2 medium suitcases' } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) p:nth-of-type(3)", html: { id: '<i class="fa-solid fa-car-side text-teal-700 mr-2"></i>Cocok untuk city tour hemat', en: '<i class="fa-solid fa-car-side text-teal-700 mr-2"></i>Great for budget city tours' } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p:nth-of-type(1)", html: { id: '<i class="fa-solid fa-user-group text-teal-700 mr-2"></i>Kapasitas 5-6 orang', en: '<i class="fa-solid fa-user-group text-teal-700 mr-2"></i>Capacity 5-6 persons' } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p:nth-of-type(2)", html: { id: '<i class="fa-solid fa-suitcase text-teal-700 mr-2"></i>3 koper medium', en: '<i class="fa-solid fa-suitcase text-teal-700 mr-2"></i>3 medium suitcases' } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p:nth-of-type(3)", html: { id: '<i class="fa-solid fa-car-side text-teal-700 mr-2"></i>Paling nyaman untuk keluarga', en: '<i class="fa-solid fa-car-side text-teal-700 mr-2"></i>Most comfortable for families' } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(1)", html: { id: '<i class="fa-solid fa-user-group text-teal-700 mr-2"></i>Kapasitas 8-14 orang', en: '<i class="fa-solid fa-user-group text-teal-700 mr-2"></i>Capacity 8-14 persons' } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(2)", html: { id: '<i class="fa-solid fa-suitcase text-teal-700 mr-2"></i>Bagasi besar', en: '<i class="fa-solid fa-suitcase text-teal-700 mr-2"></i>Large luggage space' } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(3)", html: { id: '<i class="fa-solid fa-car-side text-teal-700 mr-2"></i>Ideal untuk rombongan', en: '<i class="fa-solid fa-car-side text-teal-700 mr-2"></i>Ideal for groups' } }
        ]
    },
    "contact.html": {
        title: { id: "Kontak Lotus Bali", en: "Contact Lotus Bali" },
        entries: [
            { selector: "main section:nth-of-type(1) p.text-xs", text: { id: "Contact Concierge", en: "Contact Concierge" } },
            { selector: "main section:nth-of-type(1) h1", text: { id: "Konsultasi Perjalanan Anda", en: "Consult Your Trip Plan" } },
            { selector: "main section:nth-of-type(1) p.max-w-3xl", text: { id: "Sampaikan rencana liburan, tanggal, dan kebutuhan khusus. Tim Lotus akan menyiapkan rekomendasi itinerary yang paling cocok.", en: "Share your holiday plan, dates, and special needs. The Lotus team will prepare the best itinerary recommendation." } },
            { selector: "label[for='name']", text: { id: "Nama Lengkap", en: "Full Name" } },
            { selector: "label[for='service']", text: { id: "Layanan yang Diinginkan", en: "Desired Service" } },
            { selector: "label[for='message']", text: { id: "Pesan Anda", en: "Your Message" } },
            { selector: "#name", placeholder: { id: "Contoh: Andi Saputra", en: "Example: John Doe" } },
            { selector: "#message", placeholder: { id: "Tulis rencana atau pertanyaan Anda...", en: "Write your plan or question..." } },
            { selector: "#service option:nth-child(1)", text: { id: "Paket Tour Keluarga", en: "Family Tour Package" } },
            { selector: "#service option:nth-child(2)", text: { id: "Sewa Mobil Innova", en: "Innova Car Rental" } },
            { selector: "#service option:nth-child(3)", text: { id: "Custom Tour (Lainnya)", en: "Custom Tour (Other)" } },
            { selector: "button[onclick='sendContactWA()']", text: { id: "KIRIM VIA WHATSAPP", en: "SEND VIA WHATSAPP" } },
            { selector: "main section:nth-of-type(2) article:nth-child(1) p.text-sm", text: { id: "Fast response untuk booking, perubahan jadwal, dan kebutuhan on-trip.", en: "Fast response for booking, schedule changes, and on-trip needs." } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p.text-xs", text: { id: "Lokasi Operasional", en: "Operating Area" } },
            { selector: "main section:nth-of-type(2) article:nth-child(2) p.text-sm", text: { id: "Menjangkau area Bali Selatan, Tengah, Timur, hingga transfer lintas destinasi.", en: "Covers South, Central, and East Bali, including cross-destination transfers." } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) h3", text: { id: "Jam Layanan", en: "Service Hours" } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(1)", text: { id: "Setiap Hari: 07.00 - 22.00 WITA", en: "Daily: 07:00 - 22:00 WITA" } },
            { selector: "main section:nth-of-type(2) article:nth-child(3) p:nth-of-type(2)", text: { id: "Emergency Support tersedia untuk tamu aktif.", en: "Emergency support is available for active guests." } }
        ]
    },
    "detail-package.html": {
        title: { id: "Detail Paket - Lotus Bali", en: "Package Details - Lotus Bali" },
        entries: [
            { selector: "main section:nth-of-type(1) a", html: { id: '<i class="fa-solid fa-arrow-left"></i> Kembali ke daftar paket', en: '<i class="fa-solid fa-arrow-left"></i> Back to package list' } },
            { selector: "main section:nth-of-type(2) p.text-xs", text: { id: "Detail Paket", en: "Package Detail" } },
            { selector: "main section:nth-of-type(2) .mb-5 > p", text: { id: "Highlight Pengalaman", en: "Experience Highlights" } },
            { selector: "main section:nth-of-type(2) .mb-4 p strong", text: { id: "Cocok Untuk:", en: "Best For:" } },
            { selector: "main section:nth-of-type(2) .bg-teal-50 p", html: { id: "<strong>Catatan:</strong> Harga di atas merupakan harga mulai per orang. Total biaya akan disesuaikan jumlah peserta dan request tambahan.", en: "<strong>Note:</strong> The price above is a starting price per person. Total cost depends on group size and additional requests." } },
            { selector: "main section:nth-of-type(3) h2", text: { id: "Ringkasan Program", en: "Program Summary" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(1) h3", text: { id: "Itinerary", en: "Itinerary" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(2) h3", text: { id: "Termasuk", en: "Includes" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(3) h3", text: { id: "Belum Termasuk", en: "Excludes" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(4) h3", text: { id: "Ketentuan & Info", en: "Terms & Info" } },
            { selector: "main section:nth-of-type(4) h2", text: { id: "Form Booking Paket", en: "Package Booking Form" } },
            { selector: "label[for='dpName']", text: { id: "Nama Lengkap", en: "Full Name" } },
            { selector: "label[for='dpPhone']", text: { id: "No. WhatsApp", en: "WhatsApp Number" } },
            { selector: "label[for='dpDate']", text: { id: "Tanggal Tour", en: "Tour Date" } },
            { selector: "label[for='dpParticipants']", text: { id: "Jumlah Peserta", en: "Number of Participants" } },
            { selector: "label[for='dpPickup']", text: { id: "Lokasi Jemput", en: "Pickup Location" } },
            { selector: "#dpPickup", placeholder: { id: "Contoh: Hotel area Kuta / Bandara Ngurah Rai", en: "Example: Kuta area hotel / Ngurah Rai Airport" } },
            { selector: "main section:nth-of-type(4) .p-5.rounded-2xl > p", text: { id: "Butuh sewa mobil juga?", en: "Need car rental too?" } },
            { selector: "input[name='dpNeedCar'][value='yes'] + span", text: { id: "Ya, saya ingin sewa mobil", en: "Yes, I need car rental" } },
            { selector: "input[name='dpNeedCar'][value='no'] + span", text: { id: "Tidak, skip saja", en: "No, skip it" } },
            { selector: "#dpCarRentalSection h3", text: { id: "Pilih Mobil Favorit", en: "Choose Your Preferred Car" } },
            { selector: "#dpCarRentalSection > .mb-4 p", text: { id: "Klik salah satu mobil di bawah untuk memilihnya.", en: "Click one of the cars below to select it." } },
            { selector: "label[for='dpCarDuration']", text: { id: "Durasi Sewa Mobil", en: "Car Rental Duration" } },
            { selector: "#dpCarDuration option:nth-child(1)", text: { id: "Half Day (6 Jam)", en: "Half Day (6 Hours)" } },
            { selector: "#dpCarDuration option:nth-child(2)", text: { id: "Full Day (10 Jam)", en: "Full Day (10 Hours)" } },
            { selector: "label[for='dpCarNote']", text: { id: "Catatan Sewa Mobil (Opsional)", en: "Car Rental Note (Optional)" } },
            { selector: "#dpCarNote", placeholder: { id: "Contoh: perlu child seat / kapasitas bagasi", en: "Example: need child seat / luggage capacity" } },
            { selector: "label[for='dpNote']", text: { id: "Catatan Tambahan (Opsional)", en: "Additional Notes (Optional)" } },
            { selector: "#dpNote", placeholder: { id: "Contoh: prefer itinerary santai, ada lansia, dll.", en: "Example: relaxed itinerary, with elderly guests, etc." } },
            { selector: "button[type='submit'].w-full.bg-teal-600", text: { id: "KIRIM DATA BOOKING KE WHATSAPP", en: "SEND BOOKING DATA TO WHATSAPP" } },
            { selector: "#dpCarRentalSection article:nth-child(1) p.text-xs", text: { id: "Ideal untuk city tour keluarga kecil.", en: "Ideal for small family city tours." } },
            { selector: "#dpCarRentalSection article:nth-child(1) p.text-sm", text: { id: "Mulai IDR 650.000 / 10 jam", en: "Starting from IDR 650,000 / 10 hours" } },
            { selector: "#dpCarRentalSection article:nth-child(2) p.text-xs", text: { id: "Paling nyaman untuk trip antar area Bali.", en: "Most comfortable for inter-area Bali trips." } },
            { selector: "#dpCarRentalSection article:nth-child(2) p.text-sm", text: { id: "Mulai IDR 900.000 / 10 jam", en: "Starting from IDR 900,000 / 10 hours" } },
            { selector: "#dpCarRentalSection article:nth-child(3) p.text-xs", text: { id: "Cocok untuk rombongan 8-14 orang.", en: "Suitable for groups of 8-14 people." } },
            { selector: "#dpCarRentalSection article:nth-child(3) p.text-sm", text: { id: "Mulai IDR 1.300.000 / 10 jam", en: "Starting from IDR 1,300,000 / 10 hours" } }
        ]
    },
    "detail-rental.html": {
        title: { id: "Detail Rental Mobil - Lotus Bali", en: "Car Rental Details - Lotus Bali" },
        entries: [
            { selector: "main section:nth-of-type(1) a", html: { id: '<i class="fa-solid fa-arrow-left"></i> Kembali ke daftar mobil', en: '<i class="fa-solid fa-arrow-left"></i> Back to vehicle list' } },
            { selector: "main section:nth-of-type(2) p.text-xs", text: { id: "Detail Mobil", en: "Vehicle Detail" } },
            { selector: "main section:nth-of-type(2) .p-4 p strong", text: { id: "Paling Cocok Untuk:", en: "Best For:" } },
            { selector: "main section:nth-of-type(3) h2", text: { id: "Spesifikasi & Ketentuan", en: "Specifications & Terms" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(1) h3", text: { id: "Spesifikasi Mobil", en: "Car Specifications" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(2) h3", text: { id: "Fasilitas Layanan", en: "Service Facilities" } },
            { selector: "main section:nth-of-type(3) .grid > div:nth-child(3) h3", text: { id: "Ketentuan Rental", en: "Rental Terms" } },
            { selector: "main section:nth-of-type(4) h2", text: { id: "Form Booking Rental", en: "Rental Booking Form" } },
            { selector: "label[for='drName']", text: { id: "Nama Lengkap", en: "Full Name" } },
            { selector: "label[for='drPhone']", text: { id: "No. WhatsApp", en: "WhatsApp Number" } },
            { selector: "label[for='drDate']", text: { id: "Tanggal Rental", en: "Rental Date" } },
            { selector: "label[for='drDuration']", text: { id: "Durasi Rental", en: "Rental Duration" } },
            { selector: "#drDuration option:nth-child(1)", text: { id: "Pilih Durasi", en: "Select Duration" } },
            { selector: "#drDuration option:nth-child(2)", text: { id: "Half Day (6 Jam)", en: "Half Day (6 Hours)" } },
            { selector: "#drDuration option:nth-child(3)", text: { id: "Full Day (10 Jam)", en: "Full Day (10 Hours)" } },
            { selector: "label[for='drServiceType']", text: { id: "Jenis Layanan", en: "Service Type" } },
            { selector: "#drServiceType option:nth-child(1)", text: { id: "Pilih Layanan", en: "Select Service" } },
            { selector: "#drServiceType option:nth-child(2)", text: { id: "Dengan Driver", en: "With Driver" } },
            { selector: "#drServiceType option:nth-child(3)", text: { id: "Lepas Kunci (jika tersedia)", en: "Self Drive (if available)" } },
            { selector: "label[for='drArea']", text: { id: "Area Tujuan", en: "Destination Area" } },
            { selector: "#drArea", placeholder: { id: "Contoh: Ubud / Kintamani / Nusa Dua", en: "Example: Ubud / Kintamani / Nusa Dua" } },
            { selector: "label[for='drPickup']", text: { id: "Lokasi Jemput", en: "Pickup Location" } },
            { selector: "#drPickup", placeholder: { id: "Contoh: Hotel area Kuta / Bandara Ngurah Rai", en: "Example: Kuta area hotel / Ngurah Rai Airport" } },
            { selector: "label[for='drNote']", text: { id: "Catatan Tambahan (Opsional)", en: "Additional Notes (Optional)" } },
            { selector: "#drNote", placeholder: { id: "Contoh: butuh child seat, jumlah koper, dll.", en: "Example: need child seat, number of luggage, etc." } },
            { selector: "button[type='submit'].w-full.bg-teal-600", text: { id: "KIRIM BOOKING RENTAL KE WHATSAPP", en: "SEND RENTAL BOOKING TO WHATSAPP" } }
        ]
    }
};

const DETAIL_PACKAGE_TRANSLATIONS = {
    "2h1m": {
        price: 739714,
        oldPrice: "IDR 839,614",
        name: { id: "Paket Tour Hemat 2H1M", en: "Budget Tour Package 2D1N" },
        duration: { id: "2 Hari 1 Malam", en: "2 Days 1 Night" },
        location: { id: "Bali, Indonesia", en: "Bali, Indonesia" },
        description: {
            id: "Paket favorit untuk tamu dengan waktu singkat yang ingin tetap menikmati kombinasi panorama, budaya, dan kuliner Bali dalam ritme santai.",
            en: "A favorite package for guests with limited time who still want to enjoy Bali's scenery, culture, and culinary highlights at a relaxed pace."
        },
        highlights: {
            id: ["Sunset Spot", "Budaya Bali", "Kuliner Lokal", "Private Tour"],
            en: ["Sunset Spot", "Balinese Culture", "Local Cuisine", "Private Tour"]
        },
        suitableFor: {
            id: "Pasangan, keluarga kecil, dan first timer yang ingin explore Bali secara efisien.",
            en: "Couples, small families, and first-time visitors who want to explore Bali efficiently."
        },
        itinerary: {
            id: [
                "Hari 1: Jemput bandara, GWK, Pantai Pandawa, sunset dinner.",
                "Hari 2: Tanah Lot, Joger, Krisna oleh-oleh, transfer airport."
            ],
            en: [
                "Day 1: Airport pickup, GWK, Pandawa Beach, sunset dinner.",
                "Day 2: Tanah Lot, Joger, Krisna souvenir center, airport transfer."
            ]
        },
        includes: {
            id: ["Hotel 1 malam", "Mobil private + driver", "Makan sesuai program", "Air mineral", "Tiket masuk destinasi utama"],
            en: ["1-night hotel", "Private car + driver", "Meals as per program", "Mineral water", "Main attraction entrance tickets"]
        },
        excludes: {
            id: ["Tiket pesawat", "Pengeluaran pribadi", "Tiket spot opsional"],
            en: ["Flight tickets", "Personal expenses", "Optional activity tickets"]
        },
        terms: {
            id: [
                "Harga berlaku minimum 2 peserta.",
                "Penyesuaian harga saat high season/libur nasional.",
                "Request upgrade hotel tersedia (biaya tambahan).",
                "Perubahan itinerary H-1 menyesuaikan kondisi lapangan."
            ],
            en: [
                "Price applies for a minimum of 2 participants.",
                "Price adjustments may apply during high season/public holidays.",
                "Hotel upgrade requests are available (additional cost).",
                "Itinerary changes on H-1 depend on on-site conditions."
            ]
        }
    },
    "3h2m": {
        price: 1045000,
        oldPrice: "IDR 1,144,900",
        name: { id: "Paket Tour Hemat 3H2M", en: "Budget Tour Package 3D2N" },
        duration: { id: "3 Hari 2 Malam", en: "3 Days 2 Nights" },
        location: { id: "Bali, Indonesia", en: "Bali, Indonesia" },
        description: {
            id: "Program 3 hari yang lebih variatif: pantai selatan, dataran tinggi, dan spot ikonik Bali dalam satu rangkaian yang nyaman.",
            en: "A more varied 3-day program covering south beaches, highlands, and iconic Bali spots in one comfortable trip."
        },
        highlights: {
            id: ["Pantai Selatan", "Kintamani View", "Coffee Stop", "Oleh-oleh Center"],
            en: ["South Beaches", "Kintamani View", "Coffee Stop", "Souvenir Center"]
        },
        suitableFor: {
            id: "Keluarga, grup kecil, dan tamu yang ingin itinerary seimbang antara santai dan eksplorasi.",
            en: "Families, small groups, and guests who want a balanced itinerary between leisure and exploration."
        },
        itinerary: {
            id: [
                "Hari 1: Uluwatu, Pantai Melasti, dinner seafood Jimbaran.",
                "Hari 2: Kintamani, coffee plantation, Tegallalang.",
                "Hari 3: Bedugul, Tanah Lot, pusat oleh-oleh."
            ],
            en: [
                "Day 1: Uluwatu, Melasti Beach, Jimbaran seafood dinner.",
                "Day 2: Kintamani, coffee plantation, Tegallalang.",
                "Day 3: Bedugul, Tanah Lot, souvenir center."
            ]
        },
        includes: {
            id: ["Hotel 2 malam", "Mobil private + driver", "Makan sesuai program", "BBM + parkir", "Dokumentasi basic trip"],
            en: ["2-night hotel", "Private car + driver", "Meals as per program", "Fuel + parking", "Basic trip documentation"]
        },
        excludes: {
            id: ["Tiket pesawat", "Laundry", "Tip guide/driver"],
            en: ["Flight tickets", "Laundry", "Guide/driver tips"]
        },
        terms: {
            id: [
                "Jam operasional tour mengikuti durasi paket.",
                "Tujuan dapat diprioritaskan sesuai preferensi tamu.",
                "Biaya masuk aktivitas optional ditanggung peserta.",
                "Surcharge berlaku untuk area luar coverage standar."
            ],
            en: [
                "Tour operating hours follow package duration.",
                "Destinations can be prioritized based on guest preferences.",
                "Optional activity entrance fees are borne by participants.",
                "Surcharges apply for areas outside standard coverage."
            ]
        }
    },
    "4h3m": {
        price: 1320000,
        oldPrice: "IDR 1,419,900",
        name: { id: "Paket Tour Hemat 4H3M", en: "Budget Tour Package 4D3N" },
        duration: { id: "4 Hari 3 Malam", en: "4 Days 3 Nights" },
        location: { id: "Bali, Indonesia", en: "Bali, Indonesia" },
        description: {
            id: "Paket paling lengkap untuk tamu yang ingin merasakan pengalaman Bali lebih mendalam, dengan jadwal fleksibel dan kenyamanan tetap terjaga.",
            en: "The most complete package for guests who want a deeper Bali experience with a flexible schedule and consistent comfort."
        },
        highlights: {
            id: ["Multi-Region Tour", "Temple Experience", "Beach & Nature", "Flexible Plan"],
            en: ["Multi-Region Tour", "Temple Experience", "Beach & Nature", "Flexible Plan"]
        },
        suitableFor: {
            id: "Family trip panjang, company outing, dan tamu yang ingin coverage destinasi lebih luas.",
            en: "Long family trips, company outings, and guests who want broader destination coverage."
        },
        itinerary: {
            id: [
                "Hari 1: Jimbaran, GWK, Pantai Dreamland.",
                "Hari 2: Ubud Art Village, Kintamani, Tirta Empul.",
                "Hari 3: Nusa Dua, watersport optional, sunset dinner.",
                "Hari 4: Free time, transfer airport."
            ],
            en: [
                "Day 1: Jimbaran, GWK, Dreamland Beach.",
                "Day 2: Ubud Art Village, Kintamani, Tirta Empul.",
                "Day 3: Nusa Dua, optional watersport, sunset dinner.",
                "Day 4: Free time, airport transfer."
            ]
        },
        includes: {
            id: ["Hotel 3 malam", "Mobil private + driver", "Makan sesuai program", "Dokumentasi basic", "Welcome snack & mineral water"],
            en: ["3-night hotel", "Private car + driver", "Meals as per program", "Basic documentation", "Welcome snack & mineral water"]
        },
        excludes: {
            id: ["Tiket pesawat", "Aktivitas watersport", "Pengeluaran personal"],
            en: ["Flight tickets", "Watersport activities", "Personal expenses"]
        },
        terms: {
            id: [
                "Rekomendasi destinasi dapat disesuaikan cuaca harian.",
                "Tambahan aktivitas premium tersedia by request.",
                "Durasi overtime dikenakan sesuai ketentuan armada.",
                "Kebijakan refund mengikuti termin pembayaran."
            ],
            en: [
                "Destination recommendations can be adjusted based on daily weather.",
                "Additional premium activities are available by request.",
                "Overtime duration is charged according to fleet policy.",
                "Refund policy follows payment terms."
            ]
        }
    }
};

const DETAIL_RENTAL_TRANSLATIONS = {
    avanza: {
        name: { id: "Toyota Avanza", en: "Toyota Avanza" },
        category: { id: "Compact Family MPV", en: "Compact Family MPV" },
        basePrice: { id: "Mulai IDR 650.000 / 10 jam", en: "Starting from IDR 650,000 / 10 hours" },
        summary: { id: "Pilihan ekonomis untuk city tour Bali dengan kabin tetap nyaman.", en: "An economical choice for Bali city tours with a comfortable cabin." },
        description: { id: "Avanza cocok untuk tamu yang ingin mobil fleksibel, hemat, dan tetap nyaman untuk perjalanan harian di area Bali Selatan hingga Tengah.", en: "Avanza is ideal for guests who want a flexible, efficient, and comfortable car for daily trips across South to Central Bali." },
        idealFor: { id: "Pasangan, keluarga kecil, city tour, dan itinerary point-to-point.", en: "Couples, small families, city tours, and point-to-point itineraries." },
        specs: { id: ["Kapasitas 4-5 penumpang", "Bagasi 2 koper medium", "AC dingin dan interior bersih", "Cocok untuk rute city & short trip"], en: ["Capacity 4-5 passengers", "2 medium suitcases", "Cold AC and clean interior", "Ideal for city & short trips"] },
        facilities: { id: ["Driver ramah dan berpengalaman", "BBM dan parkir area standar", "Air mineral selama perjalanan", "Support koordinasi WhatsApp"], en: ["Friendly and experienced driver", "Fuel and standard area parking", "Mineral water during trip", "WhatsApp coordination support"] },
        terms: { id: ["Full Day: 10 jam dalam area utama Bali", "Half Day: 6 jam", "Overtime: 10% per jam", "Luar area tertentu dikenakan biaya tambahan"], en: ["Full Day: 10 hours in main Bali area", "Half Day: 6 hours", "Overtime: 10% per hour", "Additional fee for certain out-of-area routes"] }
    },
    innova: {
        name: { id: "Toyota Innova Reborn", en: "Toyota Innova Reborn" },
        category: { id: "Premium Family MPV", en: "Premium Family MPV" },
        basePrice: { id: "Mulai IDR 900.000 / 10 jam", en: "Starting from IDR 900,000 / 10 hours" },
        summary: { id: "Unit favorit untuk keluarga yang ingin space lega dan perjalanan nyaman.", en: "A favorite unit for families who want spacious comfort." },
        description: { id: "Innova Reborn menawarkan kenyamanan terbaik untuk perjalanan antarkota di Bali, terutama jika membawa orang tua, anak, atau bagasi lebih banyak.", en: "Innova Reborn offers top comfort for intercity Bali trips, especially with parents, children, or more luggage." },
        idealFor: { id: "Family trip, tamu corporate, dan perjalanan full-day lintas area.", en: "Family trips, corporate guests, and full-day cross-area travel." },
        specs: { id: ["Kapasitas 5-6 penumpang", "Bagasi 3 koper medium", "Suspensi nyaman untuk long trip", "Ideal untuk rute antar area Bali"], en: ["Capacity 5-6 passengers", "3 medium suitcases", "Comfortable suspension for long trips", "Ideal for cross-area Bali routes"] },
        facilities: { id: ["Driver profesional dengan local insight", "BBM dan parkir area standar", "Air mineral dan tisu di mobil", "Fleksibel stop photo spot"], en: ["Professional driver with local insight", "Fuel and standard area parking", "Mineral water and tissues in car", "Flexible photo stops"] },
        terms: { id: ["Full Day: 10 jam dalam area utama Bali", "Half Day: 6 jam", "Overtime: 10% per jam", "Luar area tertentu dikenakan biaya tambahan"], en: ["Full Day: 10 hours in main Bali area", "Half Day: 6 hours", "Overtime: 10% per hour", "Additional fee for certain out-of-area routes"] }
    },
    hiace: {
        name: { id: "Toyota Hiace", en: "Toyota Hiace" },
        category: { id: "Group Transport", en: "Group Transport" },
        basePrice: { id: "Mulai IDR 1.300.000 / 10 jam", en: "Starting from IDR 1,300,000 / 10 hours" },
        summary: { id: "Solusi terbaik untuk rombongan dan corporate outing dengan kapasitas besar.", en: "The best solution for groups and corporate outings with larger capacity." },
        description: { id: "Hiace menjadi opsi utama untuk grup besar agar perjalanan tetap satu kendaraan, koordinasi mudah, dan suasana trip lebih kompak.", en: "Hiace is the top option for large groups to keep everyone in one vehicle for easier coordination and a more compact trip." },
        idealFor: { id: "Rombongan keluarga besar, komunitas, gathering, dan outing kantor.", en: "Large family groups, communities, gatherings, and office outings." },
        specs: { id: ["Kapasitas 8-14 penumpang", "Bagasi besar untuk perlengkapan grup", "Kabin tinggi dan lega", "Cocok untuk family/group trip"], en: ["Capacity 8-14 passengers", "Large luggage space for group equipment", "High and spacious cabin", "Great for family/group trips"] },
        facilities: { id: ["Driver berpengalaman handle group trip", "BBM dan parkir area standar", "Mikrofon basic untuk briefing singkat", "Support arrangement multi-stop destination"], en: ["Experienced driver for group trips", "Fuel and standard area parking", "Basic mic for short briefing", "Support for multi-stop destination arrangement"] },
        terms: { id: ["Full Day: 10 jam dalam area utama Bali", "Half Day: 6 jam", "Overtime: 10% per jam", "Luar area tertentu dikenakan biaya tambahan"], en: ["Full Day: 10 hours in main Bali area", "Half Day: 6 hours", "Overtime: 10% per hour", "Additional fee for certain out-of-area routes"] }
    }
};

function applyDetailPackageLanguage(lang = getCurrentLanguage()) {
    if (!document.querySelector("[data-detail-package-page]")) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const key = params.get("paket") || "2h1m";
    const data = DETAIL_PACKAGE_TRANSLATIONS[key] || DETAIL_PACKAGE_TRANSLATIONS["2h1m"];
    const resolvedLang = lang === "en" ? "en" : "id";

    const packageName = document.getElementById("detailPackageName");
    const packageMeta = document.getElementById("detailPackageMeta");
    const packagePrice = document.getElementById("detailPackagePrice");
    const packageOldPrice = document.getElementById("detailPackageOldPrice");
    const packageDescription = document.getElementById("detailPackageDescription");
    const packageHighlights = document.getElementById("detailPackageHighlights");
    const packageSuitable = document.getElementById("detailPackageSuitable");
    const itineraryList = document.getElementById("detailPackageItinerary");
    const includesList = document.getElementById("detailPackageIncludes");
    const excludesList = document.getElementById("detailPackageExcludes");
    const termsList = document.getElementById("detailPackageTerms");

    if (!packageName || !packageMeta || !packagePrice || !packageOldPrice || !packageDescription || !packageHighlights || !packageSuitable || !itineraryList || !includesList || !excludesList || !termsList) {
        return;
    }

    packageName.textContent = data.name[resolvedLang];
    packageMeta.textContent = `${data.duration[resolvedLang]} - ${data.location[resolvedLang]}`;
    packagePrice.textContent = `IDR ${formatIDR(data.price)}`;
    packageOldPrice.textContent = data.oldPrice;
    packageDescription.textContent = data.description[resolvedLang];
    packageSuitable.textContent = data.suitableFor[resolvedLang];
    packageHighlights.innerHTML = data.highlights[resolvedLang]
        .map((item) => `<span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">${item}</span>`)
        .join("");

    itineraryList.innerHTML = data.itinerary[resolvedLang].map((item) => `<li>${item}</li>`).join("");
    includesList.innerHTML = data.includes[resolvedLang].map((item) => `<li>${item}</li>`).join("");
    excludesList.innerHTML = data.excludes[resolvedLang].map((item) => `<li>${item}</li>`).join("");
    termsList.innerHTML = data.terms[resolvedLang].map((item) => `<li>${item}</li>`).join("");

    const packageNameInput = document.getElementById("dpPackageName");
    const packageDurationInput = document.getElementById("dpPackageDuration");
    const packagePriceInput = document.getElementById("dpPackagePrice");
    if (packageNameInput) {
        packageNameInput.value = data.name[resolvedLang];
    }
    if (packageDurationInput) {
        packageDurationInput.value = data.duration[resolvedLang];
    }
    if (packagePriceInput) {
        packagePriceInput.value = String(data.price);
    }
}

function applyDetailRentalLanguage(lang = getCurrentLanguage()) {
    if (!document.querySelector("[data-detail-rental-page]")) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const key = params.get("mobil") || "innova";
    const data = DETAIL_RENTAL_TRANSLATIONS[key] || DETAIL_RENTAL_TRANSLATIONS.innova;
    const resolvedLang = lang === "en" ? "en" : "id";

    const nameEl = document.getElementById("detailRentalName");
    const categoryEl = document.getElementById("detailRentalCategory");
    const priceEl = document.getElementById("detailRentalPrice");
    const summaryEl = document.getElementById("detailRentalSummary");
    const descriptionEl = document.getElementById("detailRentalDescription");
    const idealForEl = document.getElementById("detailRentalIdealFor");
    const specsEl = document.getElementById("detailRentalSpecs");
    const facilitiesEl = document.getElementById("detailRentalFacilities");
    const termsEl = document.getElementById("detailRentalTerms");

    if (!nameEl || !categoryEl || !priceEl || !summaryEl || !descriptionEl || !idealForEl || !specsEl || !facilitiesEl || !termsEl) {
        return;
    }

    nameEl.textContent = data.name[resolvedLang];
    categoryEl.textContent = data.category[resolvedLang];
    priceEl.textContent = data.basePrice[resolvedLang];
    summaryEl.textContent = data.summary[resolvedLang];
    descriptionEl.textContent = data.description[resolvedLang];
    idealForEl.textContent = data.idealFor[resolvedLang];
    specsEl.innerHTML = data.specs[resolvedLang].map((item) => `<li>${item}</li>`).join("");
    facilitiesEl.innerHTML = data.facilities[resolvedLang].map((item) => `<li>${item}</li>`).join("");
    termsEl.innerHTML = data.terms[resolvedLang].map((item) => `<li>${item}</li>`).join("");

    const carNameInput = document.getElementById("drCarName");
    const categoryInput = document.getElementById("drCategory");
    const basePriceInput = document.getElementById("drBasePrice");
    if (carNameInput) {
        carNameInput.value = data.name[resolvedLang];
    }
    if (categoryInput) {
        categoryInput.value = data.category[resolvedLang];
    }
    if (basePriceInput) {
        basePriceInput.value = data.basePrice[resolvedLang];
    }
}

function getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split("/").pop();
    return filename || "index.html";
}

function applyPageTranslations(lang) {
    const pageName = getCurrentPageName();
    const config = PAGE_TRANSLATIONS[pageName];
    if (!config) {
        return;
    }

    if (config.title?.[lang]) {
        document.title = config.title[lang];
    }

    config.entries.forEach((entry) => {
        const element = document.querySelector(entry.selector);
        if (!element) {
            return;
        }
        if (entry.html?.[lang]) {
            element.innerHTML = entry.html[lang];
        } else if (entry.text?.[lang]) {
            element.textContent = entry.text[lang];
        } else if (entry.placeholder?.[lang]) {
            element.setAttribute("placeholder", entry.placeholder[lang]);
        }
    });

    applyDetailPackageLanguage(lang);
    applyDetailRentalLanguage(lang);
}

function getCurrentLanguage() {
    try {
        return localStorage.getItem(LANG_STORAGE_KEY) === "en" ? "en" : "id";
    } catch (error) {
        return "id";
    }
}

function t(key, lang = getCurrentLanguage()) {
    return LOTUS_TRANSLATIONS[lang]?.[key] || LOTUS_TRANSLATIONS.id[key] || key;
}

function applyLanguage(lang) {
    const resolvedLang = lang === "en" ? "en" : "id";

    try {
        localStorage.setItem(LANG_STORAGE_KEY, resolvedLang);
    } catch (error) {
        // Ignore storage errors (private mode / blocked storage).
    }

    document.documentElement.setAttribute("lang", resolvedLang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key) {
            return;
        }
        el.textContent = t(key, resolvedLang);
    });

    applyPageTranslations(resolvedLang);
    document.dispatchEvent(new CustomEvent("lotus:language-change", { detail: { lang: resolvedLang } }));

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
        const isActive = button.getAttribute("data-lang-switch") === resolvedLang;
        button.classList.toggle("bg-white", isActive);
        button.classList.toggle("text-sky-900", isActive);
        button.classList.toggle("shadow-sm", isActive);
        button.classList.toggle("text-white/85", !isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

function initLanguageSwitcher() {
    const buttons = document.querySelectorAll("[data-lang-switch]");
    if (!buttons.length) {
        return;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang-switch");
            applyLanguage(selectedLang);
        });
    });

    applyLanguage(getCurrentLanguage());
}

function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDateLabel(date) {
    return `${date.getDate()} ${INDONESIAN_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function isPastDate(candidateDate, today) {
    const candidate = new Date(candidateDate.getFullYear(), candidateDate.getMonth(), candidateDate.getDate());
    const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return candidate < now;
}

function initAvailabilityCalendars() {
    const calendars = document.querySelectorAll("[data-availability-calendar]");
    if (!calendars.length) {
        return;
    }

    const today = new Date();
    const firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    calendars.forEach((calendarRoot) => {
        const bookingKey = calendarRoot.dataset.bookingKey;
        const calendarGrid = calendarRoot.querySelector("[data-calendar-grid]");
        const monthLabel = calendarRoot.querySelector("[data-calendar-month]");
        const prevButton = calendarRoot.querySelector("[data-calendar-prev]");
        const nextButton = calendarRoot.querySelector("[data-calendar-next]");
        const selectedLabel = calendarRoot.querySelector("[data-selected-date]");
        const selectedInput = calendarRoot.querySelector("[data-selected-date-input]");

        if (!bookingKey || !calendarGrid || !monthLabel || !prevButton || !nextButton || !selectedLabel || !selectedInput) {
            return;
        }

        const unavailable = new Set((AVAILABILITY_CONFIG[bookingKey]?.unavailableDates || []).map((date) => date.trim()));
        let visibleMonth = new Date(firstMonth);

        function renderCalendar() {
            monthLabel.textContent = `${INDONESIAN_MONTHS[visibleMonth.getMonth()]} ${visibleMonth.getFullYear()}`;
            calendarGrid.innerHTML = "";

            INDONESIAN_DAYS_SHORT.forEach((dayName) => {
                const dayHeader = document.createElement("div");
                dayHeader.className = "text-xs font-bold uppercase tracking-wide text-gray-400 text-center";
                dayHeader.textContent = dayName;
                calendarGrid.appendChild(dayHeader);
            });

            const firstDayIndex = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1).getDay();
            const totalDays = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();

            for (let i = 0; i < firstDayIndex; i += 1) {
                const spacer = document.createElement("div");
                spacer.className = "h-11";
                calendarGrid.appendChild(spacer);
            }

            for (let dateNumber = 1; dateNumber <= totalDays; dateNumber += 1) {
                const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), dateNumber);
                const dateKey = formatDateKey(date);
                const isUnavailable = unavailable.has(dateKey);
                const isPast = isPastDate(date, today);

                const dayButton = document.createElement("button");
                dayButton.type = "button";
                dayButton.className = "availability-day h-11 rounded-xl text-sm font-semibold border";
                dayButton.textContent = String(dateNumber);

                if (isPast || isUnavailable) {
                    dayButton.classList.add("bg-gray-100", "text-gray-400", "border-gray-200", "cursor-not-allowed");
                    dayButton.disabled = true;
                } else {
                    dayButton.classList.add("available", "bg-white", "text-gray-700", "border-gray-200", "hover:border-teal-300", "hover:text-teal-700");
                    dayButton.addEventListener("click", () => {
                        calendarRoot.querySelectorAll(".availability-day.selected").forEach((button) => {
                            button.classList.remove("selected", "bg-teal-600", "text-white", "border-teal-600");
                            button.classList.add("bg-white", "text-gray-700", "border-gray-200");
                        });

                        dayButton.classList.remove("bg-white", "text-gray-700", "border-gray-200");
                        dayButton.classList.add("selected", "bg-teal-600", "text-white", "border-teal-600");

                        selectedInput.value = dateKey;
                        selectedLabel.textContent = formatDateLabel(date);
                        selectedLabel.classList.remove("text-gray-500");
                        selectedLabel.classList.add("text-teal-700");
                    });
                }

                calendarGrid.appendChild(dayButton);
            }
        }

        prevButton.addEventListener("click", () => {
            visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
            renderCalendar();
        });

        nextButton.addEventListener("click", () => {
            visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
            renderCalendar();
        });

        renderCalendar();
    });
}

function initMobileMenu() {
    const toggleButtons = document.querySelectorAll("[data-mobile-toggle]");
    if (!toggleButtons.length) {
        return;
    }

    toggleButtons.forEach((button) => {
        const targetId = button.getAttribute("data-mobile-toggle");
        const panel = document.getElementById(targetId);
        if (!panel) {
            return;
        }

        button.addEventListener("click", () => {
            const isHidden = panel.classList.contains("hidden");
            panel.classList.toggle("hidden", !isHidden);
            button.setAttribute("aria-expanded", isHidden ? "true" : "false");
        });
    });
}

function formatIDR(amount) {
    return new Intl.NumberFormat("id-ID").format(amount);
}

function buildPackageMessage(data) {
    const lines = [
        "Halo Lotus Bali!",
        "",
        "*Permintaan Booking Paket Tour*",
        `*Paket:* ${data.packageName}`,
        `*Durasi:* ${data.packageDuration}`,
        `*Harga Mulai:* IDR ${formatIDR(data.packagePrice)}`,
        `*Nama:* ${data.name}`,
        `*WhatsApp:* ${data.phone}`,
        `*Tanggal Tour:* ${data.date}`,
        `*Jumlah Peserta:* ${data.participants} orang`,
        `*Lokasi Jemput:* ${data.pickup}`,
        `*Sewa Mobil:* ${data.needCar ? "Ya" : "Tidak"}`
    ];

    if (data.needCar) {
        lines.push(`*Pilihan Mobil:* ${data.carName}`);
        lines.push(`*Durasi Rental:* ${data.carDuration}`);
        lines.push(`*Biaya Mobil:* ${data.carPrice}`);
        lines.push(`*Catatan Mobil:* ${data.carNote || "-"}`);
    }

    lines.push(`*Catatan Tambahan:* ${data.note || "-"}`);
    lines.push("");
    lines.push("Mohon info ketersediaan dan total biayanya. Terima kasih.");

    return lines.join("\n");
}

function buildRentalMessage(data) {
    const lines = [
        "Halo Lotus Bali!",
        "",
        "*Permintaan Booking Rental Mobil*",
        `*Mobil:* ${data.carName}`,
        `*Kategori:* ${data.category}`,
        `*Harga Acuan:* ${data.basePrice}`,
        `*Nama:* ${data.name}`,
        `*WhatsApp:* ${data.phone}`,
        `*Tanggal Rental:* ${data.date}`,
        `*Durasi:* ${data.duration}`,
        `*Layanan:* ${data.serviceType}`,
        `*Lokasi Jemput:* ${data.pickup}`,
        `*Area Tujuan:* ${data.area}`,
        `*Catatan Tambahan:* ${data.note || "-"}`
    ];

    lines.push("");
    lines.push("Mohon info ketersediaan unit dan total biayanya. Terima kasih.");
    return lines.join("\n");
}

function initPackagesFlow() {
    const packagesRoot = document.querySelector("[data-packages-root]");
    if (!packagesRoot) {
        return;
    }

    const packageCards = packagesRoot.querySelectorAll("[data-package-card]");
    const packageTitle = document.querySelector("[data-package-title]");
    const packageMeta = document.querySelector("[data-package-meta]");
    const packageItinerary = document.querySelector("[data-package-itinerary]");
    const packageIncludes = document.querySelector("[data-package-includes]");
    const packageExcludes = document.querySelector("[data-package-excludes]");
    const selectedPackageInput = document.getElementById("selectedPackage");
    const selectedPackageDurationInput = document.getElementById("selectedPackageDuration");
    const selectedPackagePriceInput = document.getElementById("selectedPackagePrice");

    const needCarRadios = document.querySelectorAll("input[name='needCar']");
    const carSection = document.getElementById("carRentalSection");
    const carOptions = document.querySelectorAll("[data-vehicle-option]");
    const selectedCarInput = document.getElementById("selectedCar");
    const selectedCarPriceInput = document.getElementById("selectedCarPrice");
    const bookingForm = document.getElementById("packageBookingForm");

    if (!packageTitle || !packageMeta || !packageItinerary || !packageIncludes || !packageExcludes || !selectedPackageInput || !selectedPackageDurationInput || !selectedPackagePriceInput || !bookingForm) {
        return;
    }

    function renderPackageFromCard(card) {
        const name = card.dataset.name || "";
        const duration = card.dataset.duration || "";
        const price = card.dataset.price || "0";
        const location = card.dataset.location || "Bali";
        const itinerary = (card.dataset.itinerary || "").split("|").filter(Boolean);
        const includes = (card.dataset.includes || "").split("|").filter(Boolean);
        const excludes = (card.dataset.excludes || "").split("|").filter(Boolean);

        packageTitle.textContent = name;
        packageMeta.textContent = `${duration} â€¢ ${location} â€¢ ${t("label.start_from_idr")} ${formatIDR(Number(price))}`;
        packageItinerary.innerHTML = itinerary.map((item) => `<li>${item.trim()}</li>`).join("");
        packageIncludes.innerHTML = includes.map((item) => `<li>${item.trim()}</li>`).join("");
        packageExcludes.innerHTML = excludes.map((item) => `<li>${item.trim()}</li>`).join("");

        selectedPackageInput.value = name;
        selectedPackageDurationInput.value = duration;
        selectedPackagePriceInput.value = price;

        packageCards.forEach((otherCard) => otherCard.classList.remove("active"));
        card.classList.add("active");
    }

    packageCards.forEach((card, index) => {
        card.addEventListener("click", () => renderPackageFromCard(card));
        if (index === 0) {
            renderPackageFromCard(card);
        }
    });

    needCarRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            const showCar = radio.value === "yes" && radio.checked;
            carSection.classList.toggle("hidden", !showCar);
        });
    });

    carOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const carName = option.dataset.carName || "";
            const carPrice = option.dataset.carPrice || "";

            carOptions.forEach((other) => other.classList.remove("active"));
            option.classList.add("active");

            selectedCarInput.value = carName;
            selectedCarPriceInput.value = carPrice;
        });
    });

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const needCar = (document.querySelector("input[name='needCar']:checked")?.value || "no") === "yes";
        const name = document.getElementById("pkgName").value.trim();
        const phone = document.getElementById("pkgPhone").value.trim();
        const date = document.getElementById("pkgDate").value;
        const participants = document.getElementById("pkgParticipants").value.trim();
        const pickup = document.getElementById("pkgPickup").value.trim();
        const note = document.getElementById("pkgNote").value.trim();
        const carDuration = document.getElementById("carDuration").value;
        const carNote = document.getElementById("carNote").value.trim();

        if (!name || !phone || !date || !participants || !pickup) {
            alert(t("alert.package_required"));
            return;
        }

        if (needCar && !selectedCarInput.value) {
            alert(t("alert.package_pick_car"));
            return;
        }

        const message = buildPackageMessage({
            packageName: selectedPackageInput.value,
            packageDuration: selectedPackageDurationInput.value,
            packagePrice: Number(selectedPackagePriceInput.value || 0),
            name,
            phone,
            date,
            participants,
            pickup,
            needCar,
            carName: selectedCarInput.value,
            carDuration: carDuration || "-",
            carPrice: selectedCarPriceInput.value || "-",
            carNote,
            note
        });

        const text = encodeURIComponent(message);
        window.open(`https://wa.me/${MY_NUMBER}?text=${text}`, "_blank");
    });
}

function initScrollReveal() {
    const revealTargets = document.querySelectorAll(
        "header, section, footer, .section-shell, .package-card, .vehicle-option"
    );

    if (!revealTargets.length) {
        return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    revealTargets.forEach((el, index) => {
        el.classList.add("reveal-on-scroll");
        el.style.setProperty("--reveal-delay", `${(index % 8) * 55}ms`);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
}

function initCtaGlow() {
    const ctaElements = document.querySelectorAll(
        "a.bg-teal-600, button.bg-teal-600, a.bg-sky-500, button.bg-sky-500, a.bg-white.text-teal-700"
    );
    ctaElements.forEach((el) => el.classList.add("cta-glow"));
}

function initDetailPackagePage() {
    const detailPageRoot = document.querySelector("[data-detail-package-page]");
    if (!detailPageRoot) {
        return;
    }

    const packageCatalog = {
        "2h1m": {
            name: "Paket Tour Hemat 2H1M",
            duration: "2 Hari 1 Malam",
            location: "Bali, Indonesia",
            price: 739714,
            oldPrice: "IDR 839,614",
            image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80"
            ],
            description: "Paket favorit untuk tamu dengan waktu singkat yang ingin tetap menikmati kombinasi panorama, budaya, dan kuliner Bali dalam ritme santai.",
            highlights: ["Sunset Spot", "Budaya Bali", "Kuliner Lokal", "Private Tour"],
            suitableFor: "Pasangan, keluarga kecil, dan first timer yang ingin explore Bali secara efisien.",
            itinerary: [
                "Hari 1: Jemput bandara, GWK, Pantai Pandawa, sunset dinner.",
                "Hari 2: Tanah Lot, Joger, Krisna oleh-oleh, transfer airport."
            ],
            includes: [
                "Hotel 1 malam",
                "Mobil private + driver",
                "Makan sesuai program",
                "Air mineral",
                "Tiket masuk destinasi utama"
            ],
            excludes: [
                "Tiket pesawat",
                "Pengeluaran pribadi",
                "Tiket spot opsional"
            ],
            terms: [
                "Harga berlaku minimum 2 peserta.",
                "Penyesuaian harga saat high season/libur nasional.",
                "Request upgrade hotel tersedia (biaya tambahan).",
                "Perubahan itinerary H-1 menyesuaikan kondisi lapangan."
            ]
        },
        "3h2m": {
            name: "Paket Tour Hemat 3H2M",
            duration: "3 Hari 2 Malam",
            location: "Bali, Indonesia",
            price: 1045000,
            oldPrice: "IDR 1,144,900",
            image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1400&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
            ],
            description: "Program 3 hari yang lebih variatif: pantai selatan, dataran tinggi, dan spot ikonik Bali dalam satu rangkaian yang nyaman.",
            highlights: ["Pantai Selatan", "Kintamani View", "Coffee Stop", "Oleh-oleh Center"],
            suitableFor: "Keluarga, grup kecil, dan tamu yang ingin itinerary seimbang antara santai dan eksplorasi.",
            itinerary: [
                "Hari 1: Uluwatu, Pantai Melasti, dinner seafood Jimbaran.",
                "Hari 2: Kintamani, coffee plantation, Tegallalang.",
                "Hari 3: Bedugul, Tanah Lot, pusat oleh-oleh."
            ],
            includes: [
                "Hotel 2 malam",
                "Mobil private + driver",
                "Makan sesuai program",
                "BBM + parkir",
                "Dokumentasi basic trip"
            ],
            excludes: [
                "Tiket pesawat",
                "Laundry",
                "Tip guide/driver"
            ],
            terms: [
                "Jam operasional tour mengikuti durasi paket.",
                "Tujuan dapat diprioritaskan sesuai preferensi tamu.",
                "Biaya masuk aktivitas optional ditanggung peserta.",
                "Surcharge berlaku untuk area luar coverage standar."
            ]
        },
        "4h3m": {
            name: "Paket Tour Hemat 4H3M",
            duration: "4 Hari 3 Malam",
            location: "Bali, Indonesia",
            price: 1320000,
            oldPrice: "IDR 1,419,900",
            image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1400&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
            ],
            description: "Paket paling lengkap untuk tamu yang ingin merasakan pengalaman Bali lebih mendalam, dengan jadwal fleksibel dan kenyamanan tetap terjaga.",
            highlights: ["Multi-Region Tour", "Temple Experience", "Beach & Nature", "Flexible Plan"],
            suitableFor: "Family trip panjang, company outing, dan tamu yang ingin coverage destinasi lebih luas.",
            itinerary: [
                "Hari 1: Jimbaran, GWK, Pantai Dreamland.",
                "Hari 2: Ubud Art Village, Kintamani, Tirta Empul.",
                "Hari 3: Nusa Dua, watersport optional, sunset dinner.",
                "Hari 4: Free time, transfer airport."
            ],
            includes: [
                "Hotel 3 malam",
                "Mobil private + driver",
                "Makan sesuai program",
                "Dokumentasi basic",
                "Welcome snack & mineral water"
            ],
            excludes: [
                "Tiket pesawat",
                "Aktivitas watersport",
                "Pengeluaran personal"
            ],
            terms: [
                "Rekomendasi destinasi dapat disesuaikan cuaca harian.",
                "Tambahan aktivitas premium tersedia by request.",
                "Durasi overtime dikenakan sesuai ketentuan armada.",
                "Kebijakan refund mengikuti termin pembayaran."
            ]
        }
    };

    const params = new URLSearchParams(window.location.search);
    const selectedKey = params.get("paket");
    const fallbackKey = "2h1m";
    const packageData = packageCatalog[selectedKey] || packageCatalog[fallbackKey];

    const heroImage = document.getElementById("detailPackageImage");
    const packageName = document.getElementById("detailPackageName");
    const packageMeta = document.getElementById("detailPackageMeta");
    const packagePrice = document.getElementById("detailPackagePrice");
    const packageOldPrice = document.getElementById("detailPackageOldPrice");
    const packageDescription = document.getElementById("detailPackageDescription");
    const packageHighlights = document.getElementById("detailPackageHighlights");
    const packageSuitable = document.getElementById("detailPackageSuitable");
    const itineraryList = document.getElementById("detailPackageItinerary");
    const includesList = document.getElementById("detailPackageIncludes");
    const excludesList = document.getElementById("detailPackageExcludes");
    const termsList = document.getElementById("detailPackageTerms");
    const galleryContainer = document.getElementById("detailPackageGallery");
    const heroButton = document.getElementById("detailPackageHero");
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImage = document.getElementById("galleryLightboxImage");

    const packageNameInput = document.getElementById("dpPackageName");
    const packageDurationInput = document.getElementById("dpPackageDuration");
    const packagePriceInput = document.getElementById("dpPackagePrice");

    if (!heroImage || !packageName || !packageMeta || !packagePrice || !packageOldPrice || !packageDescription || !packageHighlights || !packageSuitable || !itineraryList || !includesList || !excludesList || !termsList || !packageNameInput || !packageDurationInput || !packagePriceInput) {
        return;
    }

    const galleryImages = Array.isArray(packageData.gallery) && packageData.gallery.length ? packageData.gallery : [packageData.image];
    heroImage.src = galleryImages[0];
    heroImage.alt = packageData.name;
    packageName.textContent = packageData.name;
    packageMeta.textContent = `${packageData.duration} - ${packageData.location}`;
    packagePrice.textContent = `IDR ${formatIDR(packageData.price)}`;
    packageOldPrice.textContent = packageData.oldPrice;
    packageDescription.textContent = packageData.description;
    packageSuitable.textContent = packageData.suitableFor;
    packageHighlights.innerHTML = packageData.highlights
        .map((item) => `<span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">${item}</span>`)
        .join("");

    itineraryList.innerHTML = packageData.itinerary.map((item) => `<li>${item}</li>`).join("");
    includesList.innerHTML = packageData.includes.map((item) => `<li>${item}</li>`).join("");
    excludesList.innerHTML = packageData.excludes.map((item) => `<li>${item}</li>`).join("");
    termsList.innerHTML = packageData.terms.map((item) => `<li>${item}</li>`).join("");

    packageNameInput.value = packageData.name;
    packageDurationInput.value = packageData.duration;
    packagePriceInput.value = String(packageData.price);

    if (galleryContainer) {
        galleryContainer.innerHTML = galleryImages
            .map((url, index) => {
                const activeClass = index === 0 ? "is-active" : "";
                return `
                    <button type="button" class="detail-gallery__thumb ${activeClass}" data-gallery-thumb data-gallery-src="${url}" data-gallery-index="${index}">
                        <img src="${url}" alt="${packageData.name} photo ${index + 1}" loading="lazy" decoding="async">
                    </button>
                `;
            })
            .join("");

        galleryContainer.querySelectorAll("[data-gallery-thumb]").forEach((button) => {
            button.addEventListener("click", () => {
                const src = button.getAttribute("data-gallery-src");
                const index = Number(button.getAttribute("data-gallery-index") || 0);
                if (!src) {
                    return;
                }
                heroImage.src = src;
                galleryContainer.querySelectorAll(".detail-gallery__thumb").forEach((thumb) => thumb.classList.remove("is-active"));
                button.classList.add("is-active");

            });
        });
    }

    if (lightbox && lightboxImage) {
        if (heroButton) {
            heroButton.addEventListener("click", () => {
                const currentIndex = galleryContainer?.querySelector(".detail-gallery__thumb.is-active")?.getAttribute("data-gallery-index");
                const index = Number(currentIndex || 0);
                lightboxImage.src = galleryImages[index];
                lightboxImage.dataset.index = String(index);
                lightbox.classList.add("is-open");
                lightbox.setAttribute("aria-hidden", "false");
            });
        }

        const closeButton = lightbox.querySelector(".gallery-lightbox__close");
        const prevButton = lightbox.querySelector(".gallery-lightbox__nav--prev");
        const nextButton = lightbox.querySelector(".gallery-lightbox__nav--next");

        const clampIndex = (value) => {
            const max = galleryImages.length - 1;
            if (value < 0) return max;
            if (value > max) return 0;
            return value;
        };

        const showIndex = (value) => {
            const nextIndex = clampIndex(value);
            const nextSrc = galleryImages[nextIndex];
            lightboxImage.src = nextSrc;
            lightboxImage.dataset.index = String(nextIndex);
        };

        const closeLightbox = () => {
            lightbox.classList.remove("is-open");
            lightbox.setAttribute("aria-hidden", "true");
        };

        closeButton?.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        prevButton?.addEventListener("click", () => {
            const current = Number(lightboxImage.dataset.index || 0);
            showIndex(current - 1);
        });
        nextButton?.addEventListener("click", () => {
            const current = Number(lightboxImage.dataset.index || 0);
            showIndex(current + 1);
        });

        document.addEventListener("keydown", (event) => {
            if (!lightbox.classList.contains("is-open")) {
                return;
            }
            if (event.key === "Escape") {
                closeLightbox();
            } else if (event.key === "ArrowLeft") {
                const current = Number(lightboxImage.dataset.index || 0);
                showIndex(current - 1);
            } else if (event.key === "ArrowRight") {
                const current = Number(lightboxImage.dataset.index || 0);
                showIndex(current + 1);
            }
        });
    }


    const needCarRadios = document.querySelectorAll("input[name='dpNeedCar']");
    const carSection = document.getElementById("dpCarRentalSection");
    const carOptions = document.querySelectorAll("[data-dp-vehicle-option]");
    const selectedCarInput = document.getElementById("dpSelectedCar");
    const selectedCarPriceInput = document.getElementById("dpSelectedCarPrice");
    const detailForm = document.getElementById("detailPackageBookingForm");

    needCarRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            const showCar = radio.checked && radio.value === "yes";
            if (carSection) {
                carSection.classList.toggle("hidden", !showCar);
            }
        });
    });

    carOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const carName = option.dataset.carName || "";
            const carPrice = option.dataset.carPrice || "";

            carOptions.forEach((other) => other.classList.remove("active"));
            option.classList.add("active");

            if (selectedCarInput) {
                selectedCarInput.value = carName;
            }
            if (selectedCarPriceInput) {
                selectedCarPriceInput.value = carPrice;
            }
        });
    });

    if (!detailForm) {
        return;
    }

    detailForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const needCar = (document.querySelector("input[name='dpNeedCar']:checked")?.value || "no") === "yes";
        const name = document.getElementById("dpName")?.value.trim() || "";
        const phone = document.getElementById("dpPhone")?.value.trim() || "";
        const date = document.getElementById("dpDate")?.value || "";
        const participants = document.getElementById("dpParticipants")?.value.trim() || "";
        const pickup = document.getElementById("dpPickup")?.value.trim() || "";
        const note = document.getElementById("dpNote")?.value.trim() || "";
        const carDuration = document.getElementById("dpCarDuration")?.value || "-";
        const carNote = document.getElementById("dpCarNote")?.value.trim() || "";

        if (!name || !phone || !date || !participants || !pickup) {
            alert(t("alert.detail_package_required"));
            return;
        }

        if (needCar && selectedCarInput && !selectedCarInput.value) {
            alert(t("alert.detail_package_pick_car"));
            return;
        }

        const message = buildPackageMessage({
            packageName: packageNameInput.value,
            packageDuration: packageDurationInput.value,
            packagePrice: Number(packagePriceInput.value || 0),
            name,
            phone,
            date,
            participants,
            pickup,
            needCar,
            carName: selectedCarInput?.value || "",
            carDuration,
            carPrice: selectedCarPriceInput?.value || "-",
            carNote,
            note
        });

        const text = encodeURIComponent(message);
        window.open(`https://wa.me/${MY_NUMBER}?text=${text}`, "_blank");
    });
}

function initDetailRentalPage() {
    const detailRentalRoot = document.querySelector("[data-detail-rental-page]");
    if (!detailRentalRoot) {
        return;
    }

    const rentalCatalog = {
        avanza: {
            name: "Toyota Avanza",
            category: "Compact Family MPV",
            basePrice: "Mulai IDR 650.000 / 10 jam",
            image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&w=1400&q=80",
            summary: "Pilihan ekonomis untuk city tour Bali dengan kabin tetap nyaman.",
            description: "Avanza cocok untuk tamu yang ingin mobil fleksibel, hemat, dan tetap nyaman untuk perjalanan harian di area Bali Selatan hingga Tengah.",
            idealFor: "Pasangan, keluarga kecil, city tour, dan itinerary point-to-point.",
            specs: [
                "Kapasitas 4-5 penumpang",
                "Bagasi 2 koper medium",
                "AC dingin dan interior bersih",
                "Cocok untuk rute city & short trip"
            ],
            facilities: [
                "Driver ramah dan berpengalaman",
                "BBM dan parkir area standar",
                "Air mineral selama perjalanan",
                "Support koordinasi WhatsApp"
            ],
            terms: [
                "Full Day: 10 jam dalam area utama Bali",
                "Half Day: 6 jam",
                "Overtime: 10% per jam",
                "Luar area tertentu dikenakan biaya tambahan"
            ]
        },
        innova: {
            name: "Toyota Innova Reborn",
            category: "Premium Family MPV",
            basePrice: "Mulai IDR 900.000 / 10 jam",
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
            summary: "Unit favorit untuk keluarga yang ingin space lega dan perjalanan nyaman.",
            description: "Innova Reborn menawarkan kenyamanan terbaik untuk perjalanan antarkota di Bali, terutama jika membawa orang tua, anak, atau bagasi lebih banyak.",
            idealFor: "Family trip, tamu corporate, dan perjalanan full-day lintas area.",
            specs: [
                "Kapasitas 5-6 penumpang",
                "Bagasi 3 koper medium",
                "Suspensi nyaman untuk long trip",
                "Ideal untuk rute antar area Bali"
            ],
            facilities: [
                "Driver profesional dengan local insight",
                "BBM dan parkir area standar",
                "Air mineral dan tisu di mobil",
                "Fleksibel stop photo spot"
            ],
            terms: [
                "Full Day: 10 jam dalam area utama Bali",
                "Half Day: 6 jam",
                "Overtime: 10% per jam",
                "Luar area tertentu dikenakan biaya tambahan"
            ]
        },
        hiace: {
            name: "Toyota Hiace",
            category: "Group Transport",
            basePrice: "Mulai IDR 1.300.000 / 10 jam",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80",
            summary: "Solusi terbaik untuk rombongan dan corporate outing dengan kapasitas besar.",
            description: "Hiace menjadi opsi utama untuk grup besar agar perjalanan tetap satu kendaraan, koordinasi mudah, dan suasana trip lebih kompak.",
            idealFor: "Rombongan keluarga besar, komunitas, gathering, dan outing kantor.",
            specs: [
                "Kapasitas 8-14 penumpang",
                "Bagasi besar untuk perlengkapan grup",
                "Kabin tinggi dan lega",
                "Cocok untuk family/group trip"
            ],
            facilities: [
                "Driver berpengalaman handle group trip",
                "BBM dan parkir area standar",
                "Mikrofon basic untuk briefing singkat",
                "Support arrangement multi-stop destination"
            ],
            terms: [
                "Full Day: 10 jam dalam area utama Bali",
                "Half Day: 6 jam",
                "Overtime: 10% per jam",
                "Luar area tertentu dikenakan biaya tambahan"
            ]
        }
    };

    const params = new URLSearchParams(window.location.search);
    const selectedKey = params.get("mobil");
    const fallbackKey = "innova";
    const rentalData = rentalCatalog[selectedKey] || rentalCatalog[fallbackKey];

    const imageEl = document.getElementById("detailRentalImage");
    const nameEl = document.getElementById("detailRentalName");
    const categoryEl = document.getElementById("detailRentalCategory");
    const priceEl = document.getElementById("detailRentalPrice");
    const summaryEl = document.getElementById("detailRentalSummary");
    const descriptionEl = document.getElementById("detailRentalDescription");
    const idealForEl = document.getElementById("detailRentalIdealFor");
    const specsEl = document.getElementById("detailRentalSpecs");
    const facilitiesEl = document.getElementById("detailRentalFacilities");
    const termsEl = document.getElementById("detailRentalTerms");

    const carNameInput = document.getElementById("drCarName");
    const categoryInput = document.getElementById("drCategory");
    const basePriceInput = document.getElementById("drBasePrice");

    if (!imageEl || !nameEl || !categoryEl || !priceEl || !summaryEl || !descriptionEl || !idealForEl || !specsEl || !facilitiesEl || !termsEl || !carNameInput || !categoryInput || !basePriceInput) {
        return;
    }

    imageEl.src = rentalData.image;
    imageEl.alt = rentalData.name;
    nameEl.textContent = rentalData.name;
    categoryEl.textContent = rentalData.category;
    priceEl.textContent = rentalData.basePrice;
    summaryEl.textContent = rentalData.summary;
    descriptionEl.textContent = rentalData.description;
    idealForEl.textContent = rentalData.idealFor;
    specsEl.innerHTML = rentalData.specs.map((item) => `<li>${item}</li>`).join("");
    facilitiesEl.innerHTML = rentalData.facilities.map((item) => `<li>${item}</li>`).join("");
    termsEl.innerHTML = rentalData.terms.map((item) => `<li>${item}</li>`).join("");

    carNameInput.value = rentalData.name;
    categoryInput.value = rentalData.category;
    basePriceInput.value = rentalData.basePrice;

    const form = document.getElementById("detailRentalBookingForm");
    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("drName")?.value.trim() || "";
        const phone = document.getElementById("drPhone")?.value.trim() || "";
        const date = document.getElementById("drDate")?.value || "";
        const duration = document.getElementById("drDuration")?.value || "";
        const serviceType = document.getElementById("drServiceType")?.value || "";
        const pickup = document.getElementById("drPickup")?.value.trim() || "";
        const area = document.getElementById("drArea")?.value.trim() || "";
        const note = document.getElementById("drNote")?.value.trim() || "";

        if (!name || !phone || !date || !duration || !serviceType || !pickup || !area) {
            alert(t("alert.rental_required"));
            return;
        }

        const message = buildRentalMessage({
            carName: carNameInput.value,
            category: categoryInput.value,
            basePrice: basePriceInput.value,
            name,
            phone,
            date,
            duration,
            serviceType,
            pickup,
            area,
            note
        });

        const text = encodeURIComponent(message);
        window.open(`https://wa.me/${MY_NUMBER}?text=${text}`, "_blank");
    });
}

function initPageLoaderTransitions() {
    if (!document.body) {
        return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const loader = document.createElement("div");
    loader.className = "page-loader";
    loader.setAttribute("aria-hidden", "true");
    loader.innerHTML = `
        <div class="page-loader__inner">
            <p class="page-loader__logo">LOTUS</p>
            <p class="page-loader__subtitle">${t("loader.subtitle")}</p>
            <div class="page-loader__dots"><span></span><span></span><span></span></div>
            <div class="page-loader__bar"></div>
        </div>
    `;
    document.body.appendChild(loader);

    const activate = () => {
        loader.classList.add("is-active");
        document.body.classList.add("is-loading");
    };

    const deactivate = () => {
        loader.classList.remove("is-active");
        document.body.classList.remove("is-loading");
    };

    activate();
    window.setTimeout(deactivate, reducedMotion ? 80 : 380);

    window.addEventListener("pageshow", () => {
        deactivate();
    });

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");
        if (!link) {
            return;
        }

        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
            return;
        }

        if (link.hasAttribute("download")) {
            return;
        }

        if (link.target && link.target !== "_self") {
            return;
        }

        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
            return;
        }

        const destination = new URL(link.href, window.location.href);
        if (destination.origin !== window.location.origin) {
            return;
        }

        if (destination.href === window.location.href) {
            return;
        }

        event.preventDefault();
        activate();
        window.setTimeout(() => {
            window.location.href = destination.href;
        }, reducedMotion ? 0 : 360);
    });
}

function initFloatingWhatsAppButton() {
    if (!document.body || document.querySelector("[data-wa-float]")) {
        return;
    }

    const button = document.createElement("a");
    button.setAttribute("data-wa-float", "true");
    button.className = "wa-float";
    button.href = `https://wa.me/${MY_NUMBER}?text=${encodeURIComponent("Halo Lotus Bali! Saya ingin konsultasi paket atau rental.")}`;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.innerHTML = `<i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span data-wa-float-label>${t("floating.whatsapp")}</span>`;
    button.setAttribute("aria-label", t("floating.whatsapp_aria"));
    button.classList.add("wa-float-hidden");
    document.body.appendChild(button);

    const syncLabel = (lang = getCurrentLanguage()) => {
        const label = button.querySelector("[data-wa-float-label]");
        if (label) {
            label.textContent = t("floating.whatsapp", lang);
        }
        button.setAttribute("aria-label", t("floating.whatsapp_aria", lang));
    };

    document.addEventListener("lotus:language-change", (event) => {
        syncLabel(event.detail?.lang);
    });

    const updateVisibility = () => {
        const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScrollable <= 0) {
            button.classList.remove("wa-float-hidden");
            return;
        }

        const scrollRatio = window.scrollY / maxScrollable;
        button.classList.toggle("wa-float-hidden", scrollRatio < 0.15);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    syncLabel();
    updateVisibility();
}

function initFaqAccordion() {
    const faqItems = document.querySelectorAll("[data-faq-item]");
    if (!faqItems.length) {
        return;
    }

    faqItems.forEach((item) => {
        const trigger = item.querySelector("[data-faq-trigger]");
        const panel = item.querySelector("[data-faq-panel]");
        const icon = item.querySelector("[data-faq-icon]");

        if (!trigger || !panel) {
            return;
        }

        trigger.addEventListener("click", () => {
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";
            trigger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
            panel.classList.toggle("hidden", isExpanded);

            if (icon) {
                icon.classList.toggle("fa-plus", isExpanded);
                icon.classList.toggle("fa-minus", !isExpanded);
            }
        });
    });
}

// Fungsi WhatsApp untuk Paket & Rental
function bookingWA(title, bookingKey) {
    let selectedDateText = "";

    if (bookingKey) {
        const selectedInput = document.querySelector(`[data-selected-date-input][data-booking-key="${bookingKey}"]`);
        if (selectedInput) {
            const selectedDateValue = selectedInput.value;
            if (!selectedDateValue) {
                alert(t("alert.availability_date"));
                return;
            }
            selectedDateText = `\n*Tanggal Dipilih:* ${selectedDateValue}`;
        }
    }

    const message = `Halo Lotus Bali!\n\nSaya ingin memesan: *${title}*${selectedDateText}\nMohon informasi ketersediaan dan total biayanya. Terima kasih.`;
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${MY_NUMBER}?text=${text}`, '_blank');
}

// Fungsi WhatsApp untuk Halaman Kontak
function sendContactWA() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email')?.value.trim() || "";
    const message = document.getElementById('message').value;

    if (!name || !message) {
        alert(t("alert.contact_required"));
        return;
    }

    const emailLine = email ? `\n*Email:* ${email}` : "";
    const waMessage = `Halo Lotus Bali!\n\n*Nama:* ${name}${emailLine}\n*Pesan:* ${message}`;
    const text = encodeURIComponent(waMessage);
    window.open(`https://wa.me/${MY_NUMBER}?text=${text}`, '_blank');
}

// Navbar Scroll Effect
const nav = document.querySelector('nav');

if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-2');
            nav.classList.remove('py-3');
        } else {
            nav.classList.remove('py-2');
            nav.classList.add('py-3');
        }
    });
}

initAvailabilityCalendars();
initMobileMenu();
initPackagesFlow();
initDetailPackagePage();
initDetailRentalPage();
initScrollReveal();
    // initInteractiveCards();
    // initHeroParallax();
initCtaGlow();
initLanguageSwitcher();
initFloatingWhatsAppButton();
initFaqAccordion();
initPageLoaderTransitions();



