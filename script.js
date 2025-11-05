// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const artworkCards = document.querySelectorAll('.artwork-card');
    
    if (filterBtns.length > 0 && artworkCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                artworkCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        const categories = card.getAttribute('data-category');
                        if (categories && categories.includes(filter)) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 100);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
});

// Modal Functionality
const artworkData = {
    artwork1: {
        title: "Everything in Nothingness",
        medium: "Acrylic",
        size: "24\" × 36\"",
        year: "2025",
        price: "Rs 140000",
        description: "An abstract exploration of Philosophy, color and emotion, where nothingness ,dark and light dance together in perfect harmony. ",
        image: "Everything in Nothingness.jpg",
        details: "Created using professional-grade acrylic paints on 300gsm cold-pressed paper. This original piece showcases the excellent detailing and philosophical conceptualisation"
    },
    artwork2: {
        title: "Mahajagatik Garbha",
        medium: "Acrylic",
        size: "11.7\" × 16.5\"",
        year: "2025",
        price: "Rs 99999",
        description: "A thoughtful work , the uterus of the universe. The universe flows from. The mother goddess, The Adya Shakti. Essence of women power.",
        image: "mahajagotik garbha.jpg",
        details: "Painted with high-quality acrylic paints on high quality 300 gsm paper"
    },
    artwork3: {
        title: "Randomness",
        medium: "Acrylic",
        size: "12\" × 16\"",
        year: "2024",
        price: "Rs 99999",
        description: "Conceptualised from the idea of entropy, randomness. Dark blue color gives the effect of dark space. Where everything is random, The entropy keeps on increasing",
        image: "Randomness.jpg",
        details: "Painted on premium 300gsm paper. It was featured in exhibition. "
    },
    artwork4: {
        title: "Into the woods",
        medium: "Acrylic",
        size: "11.7\" × 16.5\"",
        year: "2024",
        price: "Rs 9750",
        description: "Into the Woods is a serene acrylic painting of a peaceful green forest. Soft light filters through tall trees, creating calm shadows and a soothing natural atmosphere. This artwork reflects the beauty and silence of untouched nature.",
        image: "Into the woods.jpg",
        details: "Hand-painted with acrylic on stretched canvas, the artwork was created through layered brushwork, detailed shading, and subtle highlights to bring the forest to life. The careful blending of tones gives the painting depth, warmth, and a peaceful natural ambience."
    },
    artwork5: {
        title: "Jharapata",
        medium: "Acrylic",
        size: "11.7\" × 16.5\"",
        year: "2024",
        price: "Rs 49999",
        description: "An abstract acrylic painting of falling leaves, created with layered textures, bold strokes, and blended colors to capture movement, change, and the poetic beauty of nature.",
        image: "Jharapata.jpg",
        details: "The painting was created on canvas using acrylic colors and a mix of tools, including brushes, palette knives, and soft blending techniques."
    },
    artwork6: {
        title: "Mystic Sunset",
        medium: "Acrylic",
        size: "11.7\" × 16.5\"",
        year: "2024",
        price: "Rs 10000",
        description: "A hand-painted acrylic sunset on canvas, featuring soft gradients, dreamy colors, and peaceful silhouettes that create a calm, mystic atmosphere",
        image: "Mystic sunset.jpg",
        details: "Bold acrylic strokes and smooth gradient colors create a sense of serenity and calmness that reflects the energy of mystic environments."
    },
    artwork7: {
        title: "Lone",
        medium: "Acrylic",
        size: "11.7\" × 16.5\"",
        year: "2024",
        price: "Rs 5000",
        description: "An acrylic painting of a single tree standing alone in a quiet landscape, symbolizing strength, silence, and peaceful solitude.",
        image: "Lone.jpg",
        details: "The artwork was created using acrylic colors on canvas. The process began with a light sketch to position the tree and outline the shape of the ground and sky."
    },
    artwork8: {
        title: "Love on Fire",
        medium: "White Pen",
        size: "11.7\" × 16.5\"",
        year: "2025",
        price: "Rs 15000",
        description: "Love comes with fire. Apprently the flower which attracted the lover, becomes fire suddenly. It's too late. No more going back. Butterfly accepted the it's fate",
        image: "Love on fire.jpg",
        details: "This artwork is created using the Zentangle method—starting with a basic pencil string, then filling each section with structured, repetitive patterns using fine liners. The process is calm, meditative, and free-flowing, allowing the design to organically evolve into a detailed and visually balanced composition."
    },
    artwork9: {
        title: "Prem Chakshu",
        medium: "Pen",
        size: "11.7\" × 16.5\"",
        year: "2025",
        price: "Rs 10000",
        description: "Zentangle art, Prem Chakshu the eyes of love. Eyes attract the eyes. ",
        image: "Premchakshu.jpg",
        details: "This artwork is created using the Zentangle method—starting with a basic pencil string, then filling each section with structured, repetitive patterns using fine liners. The process is calm, meditative, and free-flowing, allowing the design to organically evolve into a detailed and visually balanced composition."
    }
};

function openModal(artworkId) {
    const modal = document.getElementById('artworkModal');
    const modalBody = document.getElementById('modalBody');
    const artwork = artworkData[artworkId];
    
    if (artwork && modal && modalBody) {
        const imageSection = artwork.image ? 
            `<div class="modal-image">
                <img src="${artwork.image}" alt="${artwork.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px;">
            </div>` : 
            `<div class="modal-image">
                <div style="width: 100%; height: 300px; background: linear-gradient(135deg, rgba(131, 58, 180, 0.2), rgba(228, 64, 95, 0.2)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #666;">
                    <h3>${artwork.title}</h3>
                </div>
            </div>`;
        
        modalBody.innerHTML = `
            <div style="padding: 2rem;">
                ${imageSection}
                <div style="padding: 2rem 0;">
                    <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #262626;">${artwork.title}</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #8E8E8E;">
                        <div><strong>Medium:</strong> ${artwork.medium}</div>
                        <div><strong>Size:</strong> ${artwork.size}</div>
                        <div><strong>Year:</strong> ${artwork.year}</div>
                        <div><strong>Price:</strong> ${artwork.price}</div>
                    </div>
                    <p style="font-size: 1.1rem; color: #3C3C3C; margin-bottom: 1.5rem; line-height: 1.7;">${artwork.description}</p>
                    <p style="color: #8E8E8E; line-height: 1.6; margin-bottom: 2rem;">${artwork.details}</p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <a href="contact.html" style="background: linear-gradient(135deg, #833AB4 0%, #C13584 25%, #E1306C 50%, #FD1D1D 75%, #F77737 100%); color: white; padding: 0.75rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600; transition: transform 0.3s;">Purchase Original</a>
                        <a href="contact.html" style="border: 2px solid #833AB4; color: #833AB4; padding: 0.75rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600; background: transparent; transition: all 0.3s;">Commission Similar</a>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('artworkModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('artworkModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.firstName || !data.lastName || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.form-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you within 24 hours.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.preview-card, .artwork-card, .technique-card, .achievement-card, .faq-item, .contact-method');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});