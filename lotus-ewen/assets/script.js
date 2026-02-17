// CONFIGURATION: Ganti dengan nomor WhatsApp kamu
const MY_NUMBER = "628123456789"; 

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
        packageMeta.textContent = `${duration} • ${location} • Mulai IDR ${formatIDR(Number(price))}`;
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
            alert("Mohon lengkapi data wajib booking paket.");
            return;
        }

        if (needCar && !selectedCarInput.value) {
            alert("Silakan pilih salah satu mobil terlebih dahulu atau pilih opsi tanpa sewa mobil.");
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

function initInteractiveCards() {
    const hoverCards = document.querySelectorAll(".section-shell, .package-card, .vehicle-option");
    if (!hoverCards.length) {
        return;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    hoverCards.forEach((card) => {
        card.classList.add("interactive-card");

        if (!finePointer) {
            return;
        }

        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty("--mx", `${x}%`);
            card.style.setProperty("--my", `${y}%`);
        });
    });
}

function initHeroParallax() {
    const hero = document.querySelector(".ocean-hero");
    if (!hero) {
        return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) {
        const handleScroll = () => {
            const shift = Math.min(window.scrollY * 0.12, 80);
            hero.style.setProperty("--hero-shift", `${shift}px`);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
    }

    if (window.matchMedia("(pointer: fine)").matches) {
        hero.addEventListener("pointermove", (event) => {
            const rect = hero.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            hero.style.setProperty("--hero-mx", `${x}%`);
            hero.style.setProperty("--hero-my", `${y}%`);
        });
    }
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

    const packageNameInput = document.getElementById("dpPackageName");
    const packageDurationInput = document.getElementById("dpPackageDuration");
    const packagePriceInput = document.getElementById("dpPackagePrice");

    if (!heroImage || !packageName || !packageMeta || !packagePrice || !packageOldPrice || !packageDescription || !packageHighlights || !packageSuitable || !itineraryList || !includesList || !excludesList || !termsList || !packageNameInput || !packageDurationInput || !packagePriceInput) {
        return;
    }

    heroImage.src = packageData.image;
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
            alert("Mohon lengkapi data wajib booking terlebih dahulu.");
            return;
        }

        if (needCar && selectedCarInput && !selectedCarInput.value) {
            alert("Silakan pilih mobil atau pilih opsi tanpa sewa mobil.");
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
            alert("Mohon lengkapi data wajib booking rental terlebih dahulu.");
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
            <p class="page-loader__subtitle">Preparing your Bali trip</p>
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

// Fungsi WhatsApp untuk Paket & Rental
function bookingWA(title, bookingKey) {
    let selectedDateText = "";

    if (bookingKey) {
        const selectedInput = document.querySelector(`[data-selected-date-input][data-booking-key="${bookingKey}"]`);
        if (selectedInput) {
            const selectedDateValue = selectedInput.value;
            if (!selectedDateValue) {
                alert("Silakan pilih tanggal ketersediaan terlebih dahulu.");
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
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    if (!name || !message) {
        alert("Harap isi Nama dan Pesan Anda.");
        return;
    }

    const waMessage = `Halo Lotus Bali!\n\n*Nama:* ${name}\n*Layanan:* ${service}\n*Pesan:* ${message}`;
    const text = encodeURIComponent(waMessage);
    window.open(`https://wa.me/${MY_NUMBER}?text=${text}`, '_blank');
}

// Navbar Scroll Effect
const nav = document.querySelector('nav');

if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/95', 'shadow-md', 'py-2');
            nav.classList.remove('bg-transparent', 'py-4');
        } else {
            nav.classList.remove('bg-white/95', 'shadow-md', 'py-2');
            nav.classList.add('bg-transparent', 'py-4');
        }
    });
}

initAvailabilityCalendars();
initMobileMenu();
initPackagesFlow();
initDetailPackagePage();
initDetailRentalPage();
initScrollReveal();
initInteractiveCards();
initHeroParallax();
initCtaGlow();
initPageLoaderTransitions();

