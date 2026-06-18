// Tiana Lux State Management Engine
// Using LocalStorage for real-time reactivity and mock database persistence

const DEFAULT_SERVICES = [
    // TIANA LOCS
    {
        id: "locs-1",
        category: "locs",
        name: "Luxury Starter Locs",
        description: "Begin your loc journey with precision comb coils or two-strand twists. Includes a hair analysis, deep detoxifying wash, steam treatment, and professional mapping.",
        duration: "180 min",
        durationMins: 180,
        price: 250,
        deposit: 50,
        image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4f5?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-getting-her-hair-washed-in-a-salon-44358-large.mp4"
    },
    {
        id: "locs-2",
        category: "locs",
        name: "Premium Loc Retwist & Style",
        description: "Professional palm rolling or interlocking technique to secure new growth. Finished with a luxury hair oil massage and your choice of design (barrels, ropes, or updos).",
        duration: "120 min",
        durationMins: 120,
        price: 150,
        deposit: 50,
        image: "https://images.unsplash.com/photo-1595959183075-c1d09e57ac4c?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-hairdresser-styling-hair-of-a-woman-40483-large.mp4"
    },
    {
        id: "locs-3",
        category: "locs",
        name: "Instant Loc Installation",
        description: "Crochet needle method to create mature-looking locs instantly. Ideal for straight, wavy, or curly hair textures. Extensions can be added upon consultation.",
        duration: "360 min",
        durationMins: 360,
        price: 650,
        deposit: 150,
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=80",
        video: ""
    },
    {
        id: "locs-4",
        category: "locs",
        name: "Knotless Braids (Medium/Long)",
        description: "Ultra-sleek, lightweight, tension-free knotless braiding. Includes custom hair blending, hair wash, blow dry, and gold thread accessory highlights.",
        duration: "240 min",
        durationMins: 240,
        price: 280,
        deposit: 50,
        image: "https://images.unsplash.com/photo-1628073889146-27bc2446a6f1?w=800&auto=format&fit=crop&q=80",
        video: ""
    },
    {
        id: "locs-5",
        category: "locs",
        name: "Intense Botanical Hair Treatment",
        description: "Custom blend of organic oils and deep steam hydration to restore moisture-protein balance in dry, damaged, or color-treated natural hair.",
        duration: "60 min",
        durationMins: 60,
        price: 95,
        deposit: 30,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        video: ""
    },

    // BROWS BY TIANA
    {
        id: "brows-1",
        category: "brows",
        name: "Luxury Brow Sculpt & Tint",
        description: "Precision map, custom wax/thread, tweeze, and tint alignment using premium hybrid dyes that stain the skin and color brow hairs for up to 6 weeks.",
        duration: "45 min",
        durationMins: 45,
        price: 80,
        deposit: 25,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-makeup-artist-applying-eyebrow-makeup-44363-large.mp4"
    },
    {
        id: "brows-2",
        category: "brows",
        name: "Luxury Brow Lamination",
        description: "Keratin-infused lifting treatment that aligns brow hairs in a uniform upward direction, creating a fuller, fluffier, high-fashion runway look.",
        duration: "60 min",
        durationMins: 60,
        price: 120,
        deposit: 40,
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&auto=format&fit=crop&q=80",
        video: ""
    },
    {
        id: "brows-3",
        category: "brows",
        name: "Premium Silk Lash Extensions",
        description: "Full set of premium feather-light silk lash extensions. Hand-applied using medical-grade adhesive. Available in natural, wispy, cat-eye, or hybrid volumes.",
        duration: "120 min",
        durationMins: 120,
        price: 180,
        deposit: 50,
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-beautician-applying-eyelash-extensions-44360-large.mp4"
    },
    {
        id: "brows-4",
        category: "brows",
        name: "Signature Gel Manicure",
        description: "Luxury nail shaping, cuticle care, hand exfoliation, and premium LED-cured gel polish application. Finished with warm towel wrapping and gold-infused cuticle oil.",
        duration: "50 min",
        durationMins: 50,
        price: 75,
        deposit: 25,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-showing-her-manicure-44362-large.mp4"
    },
    {
        id: "brows-5",
        category: "brows",
        name: "Luxury Jelly Pedicure SPA",
        description: "Relaxing foot soak in warm organic jelly, detailed scrub, callus removal, nourishing mud masque, hot stone massage, and professional gel polish.",
        duration: "75 min",
        durationMins: 75,
        price: 110,
        deposit: 35,
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&auto=format&fit=crop&q=80",
        video: ""
    }
];

const DEFAULT_PORTFOLIO = [
    {
        id: "port-1",
        category: "locs",
        title: "Loc Installation & Grooming",
        description: "6 months progression of instant locs installation using human hair extensions.",
        imageBefore: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&auto=format&fit=crop&q=80", // Natural afro
        imageAfter: "https://images.unsplash.com/photo-1595959183075-c1d09e57ac4c?w=800&auto=format&fit=crop&q=80", // Styled locs
        type: "slider"
    },
    {
        id: "port-2",
        category: "brows",
        title: "Ombre Powder Brows Alignment",
        description: "Perfect gradient shading from light bulbs to defined dark arches.",
        imageBefore: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        imageAfter: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&auto=format&fit=crop&q=80",
        type: "slider"
    },
    {
        id: "port-3",
        category: "hair",
        title: "Luxury Fulani Braids",
        description: "Intricate scalp patterns combined with long waist-length braids.",
        image: "https://images.unsplash.com/photo-1628073889146-27bc2446a6f1?w=800&auto=format&fit=crop&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-hairdresser-styling-hair-of-a-woman-40483-large.mp4",
        type: "video"
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
        imageBefore: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80",
        imageAfter: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&auto=format&fit=crop&q=80",
        type: "slider"
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
        location: "Toronto, ON",
        rating: 5,
        comment: "Tiana is the absolute queen of locs! She started my loc journey 6 months ago, and they look incredibly clean and healthy. The salon vibe is pure Beverly Hills—luxurious, peaceful, and professional.",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-smiling-after-a-beauty-treatment-44361-large.mp4"
    },
    {
        id: "test-2",
        name: "Sophia M.",
        location: "Mississauga, ON",
        rating: 5,
        comment: "I get my brow lamination and lash extensions done here. The precision is unmatched. The gold detailing in the studio and the champagne service make you feel like royalty.",
        video: ""
    },
    {
        id: "test-3",
        name: "Chloe D.",
        location: "Oakville, ON",
        rating: 5,
        comment: "Unmatched nail art! I showed Tiana a design from a Dubai influencer, and she executed it even better. The gel manicure easily lasts for 5 weeks without lifting.",
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
        image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4f5?w=800&auto=format&fit=crop&q=80"
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
        
        1. Never peel or pick extensions off—always professional soak off.
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
