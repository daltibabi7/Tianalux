// Tiana Lux State Management Engine
// Using LocalStorage for real-time reactivity and mock database persistence

const DATA_VERSION = "8.8"; // Bumped: added calLink for Cal.com integration

const DEFAULT_SERVICES = [
    // TIANA LOCS
    {
        id: "locs-1",
        category: "locs",
        name: "Traditional Locs Installation",
        description: "Begin your loc journey with expert traditional loc installation. Final price depends on hair length, density, desired size, and overall hair condition. A consultation helps us tailor the perfect plan for your hair.",
        duration: "8 hrs",
        durationMins: 480,
        price: 200,
        deposit: 50,
        requiresConsultation: true,
        image: "tiana-traditional-1.jpg",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-getting-her-hair-washed-in-a-salon-44358-large.mp4",
        calLink: "https://cal.com/tianalux/traditional-locs-installation"
    },
    {
        id: "locs-2",
        category: "locs",
        name: "Microlocs Installation",
        description: "Precision microloc installation crafted to perfection. Final price depends on consultation, hair density, hair length, and grid size. Consultation required.",
        duration: "Full Day",
        durationMins: 720,
        price: 600,
        deposit: 100,
        requiresConsultation: true,
        image: "photo_microlocs.jpg",
        video: "https://assets.mixkit.co/videos/preview/mixkit-hairdresser-styling-hair-of-a-woman-40483-large.mp4",
        calLink: "https://cal.com/tianalux"
    },
    {
        id: "locs-3",
        category: "locs",
        name: "Traditional Loc (startters loc)",
        description: "Professional loc retie and retwist service to maintain the health and shape of your locs. Final price depends on hair length, density, and amount of new growth.",
        duration: "3 hrs",
        durationMins: 180,
        price: 100,
        deposit: 25,
        requiresConsultation: true,
        image: "tiana-traditional-2.jpg",
        video: "",
        calLink: "https://cal.com/tianalux/traditional-loc-retie-retwist-consultation"
    },
    {
        id: "locs-4",
        category: "locs",
        name: "Microlocs Retie",
        description: "Expert microloc retie service to keep your microlocs looking fresh and well-maintained. Final price depends on density, size, and time required.",
        duration: "8 hrs",
        durationMins: 480,
        price: 200,
        deposit: 50,
        requiresConsultation: true,
        image: "media__1782125029494.jpg",
        video: "",
        calLink: "https://cal.com/tianalux/microlocs-retie-consultation"
    },
    {
        id: "locs-5",
        category: "locs",
        name: "Hair Wash",
        description: "A thorough, professional hair wash using premium products to cleanse and nourish your scalp and hair. No deposit required; book directly.",
        duration: "1 hr",
        durationMins: 60,
        price: 30,
        deposit: 0,
        requiresConsultation: false,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        video: "",
        calLink: "https://cal.com/tianalux"
    },
    {
        id: "locs-6",
        category: "locs",
        name: "Cornrows",
        description: "Beautifully crafted cornrows tailored to your style preferences. Final price depends on style, length, and complexity. Consultation recommended.",
        duration: "1 hr",
        durationMins: 60,
        price: 50,
        deposit: 20,
        requiresConsultation: true,
        image: "tiana-locs-5.jpg",
        video: "",
        calLink: "https://cal.com/tianalux/cornrows-consultation"
    },
    {
        id: "locs-7",
        category: "locs",
        name: "Luxury Pedicure",
        description: "A luxury pedicure service designed to leave feet clean, refreshed, and beautifully groomed. Book your appointment directly; no consultation needed.",
        duration: "2 hrs",
        durationMins: 120,
        price: 50,
        deposit: 20,
        requiresConsultation: false,
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&auto=format&fit=crop&q=80",
        video: "",
        calLink: "https://cal.com/tianalux"
    },

    // BROWS BY TIANA
    {
        id: "brows-1",
        category: "brows",
        name: "Ombré Brows",
        description: "Semi-permanent powder brows designed to enhance shape, definition, and symmetry. A beautiful, long-lasting brow transformation tailored to your features.",
        duration: "4 hrs",
        durationMins: 240,
        price: 200,
        deposit: 50,
        requiresConsultation: false,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-makeup-artist-applying-eyebrow-makeup-44363-large.mp4",
        calLink: "https://cal.com/tianalux/15min"
    },
    {
        id: "brows-2",
        category: "brows",
        name: "Ombré Brow Touch-Up",
        description: "This touch-up price applies only to clients whose original Ombré Brows were done by Brows by Tiana. Clients from another artist will be charged as a new Ombré Brow service.",
        duration: "2.5 hrs",
        durationMins: 150,
        price: 100,
        deposit: 30,
        requiresConsultation: false,
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&auto=format&fit=crop&q=80",
        video: "",
        calLink: "https://cal.com/tianalux/ombre-brow-touch-up"
    }
];

const DEFAULT_PORTFOLIO = [
    {
        id: "port-1",
        category: "locs",
        title: "Loc Installation & Grooming",
        description: "6 months progression of instant locs installation using human hair extensions.",
        image: "tiana-traditional-2.jpg",
        type: "image"
    },
    {
        id: "port-2",
        category: "brows",
        title: "Ombre Powder Brows Alignment",
        description: "Perfect gradient shading from light bulbs to defined dark arches.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        type: "image"
    },
    {
        id: "port-3",
        category: "locs",
        title: "Precision Microlocs Installation",
        description: "Beautifully crafted and tidy microloc grid installation.",
        image: "tiana-locs-2.jpg",
        type: "image"
    },
    {
        id: "port-4",
        category: "nails",
        title: "Luxury Gold Foil Nail Art",
        description: "French tips embellished with 24k gold foil accents on acrylic extensions.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80",
        type: "image"
    },
    {
        id: "port-5",
        category: "lashes",
        title: "Volume Lashes Dramatic Set",
        description: "Full volume 5D lashes showing dramatic yet lightweight fluffiness.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80",
        type: "image"
    },
    {
        id: "port-6",
        category: "nails",
        title: "Champagne Nude Extensions",
        description: "Handpainted chrome details on coffin gel nails.",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-showing-her-manicure-44362-large.mp4",
        type: "video"
    }
];

const DEFAULT_TESTIMONIALS = [
    {
        id: "test-1",
        name: "Amara K.",
        location: "St. John's, NL",
        rating: 5,
        comment: "Christiana is absolutely incredible! She did my traditional locs and the result was breathtaking. The whole experience felt so personal and luxurious, leaving me feeling like a completely new woman. TianaLux is the real deal in Newfoundland.",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-smiling-after-a-beauty-treatment-44361-large.mp4"
    },
    {
        id: "test-2",
        name: "Sophia M.",
        location: "St. John's, NL",
        rating: 5,
        comment: "I got my Ombré Brows done at Brows by Tiana and I'm obsessed! Christiana took her time to map out the perfect shape for my face. The semi-permanent results are gorgeous; I get compliments every single day.",
        video: ""
    },
    {
        id: "test-3",
        name: "Chloe D.",
        location: "St. John's, NL",
        rating: 5,
        comment: "My microloc installation was done so beautifully, with unmatched precision and detail. TianaLux made the whole process comfortable and fun. I'm booked for my retie already!",
        video: ""
    }
];

const DEFAULT_BLOGS = [
    {
        id: "blog-1",
        title: "The Ultimate Guide to Starter Locs Maintenance",
        category: "Loc Care",
        summary: "Important routines, washing schedules, and organic oils to use when embarking on your starter locs journey.",
        content: `Embarking on a loc journey is a beautiful decision. However, the starter stage is crucial. During the first 1 to 3 months, your locs are delicate and prone to unraveling.
        
        Here are 3 key tips from Tiana Lux for starter loc maintenance:
        1. **Avoid Frequent Washing**: Wash only once every 3 to 4 weeks using a stocking cap to protect the coils. Use a residue-free shampoo.
        2. **Moisturize Correctly**: Avoid heavy waxes or petroleum products. Opt for light botanical rosewater mist and jojoba oil.
        3. **Protect at Night**: Always wear a satin or silk bonnet to lock in moisture and prevent lint accumulation.
        
        Stay confident, trust the process, and visit our Toronto house for professional steam treatments!`,
        date: "June 15, 2026",
        image: "tiana-locs-2.jpg"
    },
    {
        id: "blog-2",
        title: "How to Extend Your Brow Lamination Lifespan",
        category: "Brows",
        summary: "Maximize your fluffy brow look for up to 8 weeks with these professional post-treatment rules.",
        content: `Brow lamination gives you that dreamy, full, brushed-up brow look. But how do you keep it looking fresh for 6-8 weeks?
        
        First 24 Hours:
        - Keep brows completely dry. No sweat, steam, or face washing.
        - Avoid sleeping on your face to prevent crimping.
        
        Daily Care:
        - Apply a drop of castor oil or keratin brow serum every night to keep hairs hydrated.
        - Brush them in place each morning using a clean spoolie brush.`,
        date: "June 10, 2026",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: "blog-3",
        title: "5 Nail Health Tips Between Acrylic Sets",
        category: "Nail Care",
        summary: "Keep your natural nails strong, flexible, and hydrated even with regular extensions.",
        content: `Acrylics look stunning, but your natural nails need care too.
        
        1. Never peel or pick extensions off; always professional soak off.
        2. Apply cuticle oil twice daily. Cuticle hydration stimulates healthy nail growth.
        3. Take a 1-week break every 3 months. Use a keratin nail strengthener during the break.
        4. Wear gloves when using household cleaning products.`,
        date: "June 05, 2026",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80"
    }
];

const DEFAULT_BOOKINGS = [
    {
        id: "book-101",
        clientName: "Amara K.",
        clientEmail: "amara@example.com",
        clientPhone: "+1 (416) 555-0199",
        serviceId: "locs-2",
        serviceName: "Premium Loc Retwist & Style",
        date: "2026-06-25",
        time: "10:00 AM",
        notes: "Barrels style please.",
        status: "Approved",
        amountPaid: 50,
        paymentType: "Deposit Only",
        paymentDate: "2026-06-18",
        receiptNo: "TX-2026-0988"
    },
    {
        id: "book-102",
        clientName: "Sophia M.",
        clientEmail: "sophia@example.com",
        clientPhone: "+1 (905) 555-0144",
        serviceId: "brows-1",
        serviceName: "Luxury Brow Sculpt & Tint",
        date: "2026-06-28",
        time: "02:00 PM",
        notes: "Prefer threading over waxing.",
        status: "Approved",
        amountPaid: 80,
        paymentType: "Full Payment",
        paymentDate: "2026-06-18",
        receiptNo: "TX-2026-0989"
    }
];

const DEFAULT_INQUIRIES = [
    {
        id: "inq-1",
        name: "Jessica Jones",
        email: "jessica@example.com",
        phone: "+1 (647) 555-0112",
        message: "Hi, do you offer bridal packages for loc styling and makeup for a party of 5? Thanks!",
        date: "2026-06-17",
        status: "Unread"
    }
];

class StateManager {
    constructor() {
        this.initializeState();
    }

    initializeState() {
        // Force-reset static content when data version changes
        const storedVersion = localStorage.getItem("tiana_data_version");
        if (storedVersion !== DATA_VERSION) {
            localStorage.removeItem("tiana_services");
            localStorage.removeItem("tiana_testimonials");
            localStorage.removeItem("tiana_blogs");
            localStorage.removeItem("tiana_portfolio");
            localStorage.setItem("tiana_data_version", DATA_VERSION);
        }

        if (!localStorage.getItem("tiana_services")) {
            localStorage.setItem("tiana_services", JSON.stringify(DEFAULT_SERVICES));
        }
        if (!localStorage.getItem("tiana_portfolio")) {
            localStorage.setItem("tiana_portfolio", JSON.stringify(DEFAULT_PORTFOLIO));
        }
        if (!localStorage.getItem("tiana_testimonials")) {
            localStorage.setItem("tiana_testimonials", JSON.stringify(DEFAULT_TESTIMONIALS));
        }
        if (!localStorage.getItem("tiana_blogs")) {
            localStorage.setItem("tiana_blogs", JSON.stringify(DEFAULT_BLOGS));
        }
        if (!localStorage.getItem("tiana_bookings")) {
            localStorage.setItem("tiana_bookings", JSON.stringify(DEFAULT_BOOKINGS));
        }
        if (!localStorage.getItem("tiana_inquiries")) {
            localStorage.setItem("tiana_inquiries", JSON.stringify(DEFAULT_INQUIRIES));
        }
        if (!localStorage.getItem("tiana_client")) {
            localStorage.setItem("tiana_client", JSON.stringify({
                name: "Amara K.",
                email: "amara@example.com",
                phone: "+1 (416) 555-0199"
            }));
        }
    }

    // Getters
    getServices() {
        return JSON.parse(localStorage.getItem("tiana_services"));
    }

    getPortfolio() {
        return JSON.parse(localStorage.getItem("tiana_portfolio"));
    }

    getTestimonials() {
        return JSON.parse(localStorage.getItem("tiana_testimonials"));
    }

    getBlogs() {
        return JSON.parse(localStorage.getItem("tiana_blogs"));
    }

    getBookings() {
        return JSON.parse(localStorage.getItem("tiana_bookings"));
    }

    getInquiries() {
        return JSON.parse(localStorage.getItem("tiana_inquiries"));
    }

    getClient() {
        return JSON.parse(localStorage.getItem("tiana_client"));
    }

    // Setters / Actions
    updateServices(services) {
        localStorage.setItem("tiana_services", JSON.stringify(services));
        this.triggerUpdate();
    }

    updateService(serviceId, updatedFields) {
        const services = this.getServices();
        const index = services.findIndex(s => s.id === serviceId);
        if (index !== -1) {
            services[index] = { ...services[index], ...updatedFields };
            this.updateServices(services);
        }
    }

    addService(service) {
        const services = this.getServices();
        services.push(service);
        this.updateServices(services);
    }

    addPortfolioItem(item) {
        const portfolio = this.getPortfolio();
        portfolio.unshift(item);
        localStorage.setItem("tiana_portfolio", JSON.stringify(portfolio));
        this.triggerUpdate();
    }

    addBooking(booking) {
        const bookings = this.getBookings();
        bookings.unshift(booking);
        localStorage.setItem("tiana_bookings", JSON.stringify(bookings));
        this.triggerUpdate();
    }

    updateBookingStatus(bookingId, status) {
        const bookings = this.getBookings();
        const index = bookings.findIndex(b => b.id === bookingId);
        if (index !== -1) {
            bookings[index].status = status;
            localStorage.setItem("tiana_bookings", JSON.stringify(bookings));
            this.triggerUpdate();
        }
    }

    addInquiry(inquiry) {
        const inquiries = this.getInquiries();
        inquiries.unshift(inquiry);
        localStorage.setItem("tiana_inquiries", JSON.stringify(inquiries));
        this.triggerUpdate();
    }

    updateInquiryStatus(inquiryId, status) {
        const inquiries = this.getInquiries();
        const index = inquiries.findIndex(i => i.id === inquiryId);
        if (index !== -1) {
            inquiries[index].status = status;
            localStorage.setItem("tiana_inquiries", JSON.stringify(inquiries));
            this.triggerUpdate();
        }
    }

    addBlog(blog) {
        const blogs = this.getBlogs();
        blogs.unshift(blog);
        localStorage.setItem("tiana_blogs", JSON.stringify(blogs));
        this.triggerUpdate();
    }

    addTestimonial(testimonial) {
        const testimonials = this.getTestimonials();
        testimonials.unshift(testimonial);
        localStorage.setItem("tiana_testimonials", JSON.stringify(testimonials));
        this.triggerUpdate();
    }

    updateClient(client) {
        localStorage.setItem("tiana_client", JSON.stringify(client));
        this.triggerUpdate();
    }

    // Callbacks to re-render SPA on state changes
    onStateUpdate(callback) {
        this.listener = callback;
    }

    triggerUpdate() {
        if (this.listener) {
            this.listener();
        }
    }
}

export const stateManager = new StateManager();
