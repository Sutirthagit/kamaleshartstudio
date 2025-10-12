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
        title: "Flowing Dreams",
        medium: "Watercolor",
        size: "16\" × 20\"",
        year: "2024",
        price: "$450",
        description: "An abstract exploration of color and emotion, where burgundy and gold tones dance together in perfect harmony. This piece captures the fluid nature of watercolor as it flows across the paper, creating organic shapes that evoke feelings of tranquility and wonder.",
        image: "src/assets/artwork-1.jpg",
        details: "Created using professional-grade watercolor paints on 300gsm cold-pressed paper. This original piece showcases the transparent layering technique that gives watercolor its distinctive luminous quality."
    },
    artwork2: {
        title: "Sunset Reverie",
        medium: "Acrylic",
        size: "18\" × 24\"",
        year: "2024",
        price: "$650",
        description: "A vibrant landscape capturing the magical moment when day transforms into night, painted with rich textures and bold strokes. The warm oranges and purples blend seamlessly to create a sense of peaceful contemplation.",
        image: "src/assets/artwork-2.jpg",
        details: "Painted with high-quality acrylic paints on stretched canvas. The impasto technique creates dimensional texture that brings the landscape to life, while careful color mixing achieves the perfect sunset atmosphere."
    },
    artwork3: {
        title: "Garden Whispers",
        medium: "Watercolor",
        size: "12\" × 16\"",
        year: "2023",
        price: "$350",
        description: "Delicate floral forms emerge from soft washes of color, celebrating the gentle beauty of nature's artistry. This piece demonstrates the subtle power of watercolor to capture fleeting moments of natural beauty.",
        image: "src/assets/artwork-3.jpg",
        details: "Painted wet-on-wet to achieve the soft, dreamy quality that makes this piece so enchanting. The delicate balance of pink and gold tones creates a sense of warmth and serenity."
    },
    artwork4: {
        title: "Abstract Harmony",
        medium: "Acrylic",
        size: "20\" × 24\"",
        year: "2024",
        price: "$750",
        description: "Bold brushstrokes and layered textures create a dynamic composition that speaks to the power of artistic expression. This piece demonstrates the versatility of acrylic paint in creating rich, complex surfaces.",
        image: "src/assets/artwork-4.jpg",
        details: "Multiple layers of acrylic paint create depth and interest, with each layer adding to the overall complexity of the composition. The bold color palette energizes any space."
    },
    artwork5: {
        title: "Morning Mist",
        medium: "Watercolor",
        size: "14\" × 18\"",
        year: "2023",
        price: "$400",
        description: "A ethereal landscape that captures the quiet beauty of dawn, with soft veils of mist creating depth and mystery in the composition.",
        image: null,
        details: "Created using wet-on-wet techniques to achieve the soft, atmospheric quality that defines this peaceful scene."
    },
    artwork6: {
        title: "Urban Energy",
        medium: "Acrylic",
        size: "16\" × 20\"",
        year: "2024",
        price: "$550",
        description: "A dynamic abstract piece that captures the pulse and rhythm of city life through bold colors and energetic brushwork.",
        image: null,
        details: "Bold acrylic strokes and vibrant colors create a sense of movement and vitality that reflects the energy of urban environments."
    },
    artwork7: {
        title: "Color Symphony",
        medium: "Watercolor",
        size: "18\" × 24\"",
        year: "2023",
        price: "$500",
        description: "An abstract celebration of color and form, where watercolor's natural properties create a harmonious dance of hues across the paper.",
        image: null,
        details: "This piece explores the full range of watercolor techniques, from controlled washes to spontaneous color bleeding."
    },
    artwork8: {
        title: "Mountain Dreams",
        medium: "Acrylic",
        size: "24\" × 30\"",
        year: "2024",
        price: "$850",
        description: "A majestic landscape that captures the grandeur and serenity of mountain vistas, painted with rich textures and atmospheric perspective.",
        image: null,
        details: "Large-scale acrylic painting that uses layering techniques to create depth and atmosphere in this inspiring mountain scene."
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