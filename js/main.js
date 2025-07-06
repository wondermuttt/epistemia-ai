// Main JavaScript file for Epistemia AI Consultancy website
// Handles mobile navigation, article filtering, scroll animations, and form validation

let articlesData = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - initializing website');
    
    // Initialize video hero immediately
    console.log('Initializing video hero first');
    initVideoHero();
    
    // Initialize loop video speed on other pages
    initLoopVideoSpeed();
    
    // Load articles data first, then initialize functionality
    loadArticlesData().then(() => {
        console.log('Articles data loaded successfully');
        initMobileNavigation();
        initDynamicArticles();
        initArticleFiltering();
        initScrollAnimations();
        initFormValidation();
        initScrollToTop();
        initHeroAnimation();
        initDifferentiators();
    }).catch(error => {
        console.error('Failed to load articles data:', error);
        // Initialize other functionality even if articles fail to load
        initMobileNavigation();
        initDynamicArticles();
        initArticleFiltering();
        initScrollAnimations();
        initFormValidation();
        initScrollToTop();
        initHeroAnimation();
        initDifferentiators();
    });
});


// Load articles data from JSON file
async function loadArticlesData() {
    try {
        // First try to load from JSON file
        const response = await fetch('articles.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        articlesData = data.articles;
        return articlesData;
    } catch (error) {
        console.error('Error loading articles data, using embedded data:', error);
        // Use embedded data as fallback
        articlesData = getEmbeddedArticlesData();
        return articlesData;
    }
}

// Embedded articles data as fallback
function getEmbeddedArticlesData() {
    return [
        {
            id: "future-enterprise-ai",
            title: "The Future of Enterprise AI",
            category: "enterprise",
            categoryDisplay: "Enterprise AI",
            image: "card-enterprise-workspace.png",
            summary: "Exploring how organizations can strategically implement AI to drive business transformation and competitive advantage. Learn about proven frameworks for AI adoption, ROI measurement strategies, and overcoming common implementation challenges in enterprise environments.",
            showOnIndex: true,
            showOnArticles: true
        },
        {
            id: "ai-business-models",
            title: "Building AI-Driven Business Models",
            category: "enterprise",
            categoryDisplay: "Enterprise AI",
            image: "card-enterprise-strategy.png",
            summary: "A comprehensive guide to developing sustainable business models that leverage artificial intelligence capabilities. Discover how leading companies are reimagining their value propositions through AI integration and creating new revenue streams.",
            showOnIndex: true,
            showOnArticles: true
        },
        {
            id: "understanding-ai-knowledge",
            title: "Understanding AI Model Knowledge",
            category: "epistemology",
            categoryDisplay: "AI Epistemology",
            image: "card-epistemology-thinking.png",
            summary: "Deep dive into the epistemological foundations of AI systems and how they process and represent knowledge. Explore the philosophical implications of machine learning and what it means for AI systems to \"know\" something.",
            showOnIndex: true,
            showOnArticles: true
        },
        {
            id: "interpreting-ai-decisions",
            title: "Interpreting AI Decision-Making",
            category: "epistemology",
            categoryDisplay: "AI Epistemology",
            image: "card-epistemology-insight.png",
            summary: "Techniques and frameworks for understanding how AI models arrive at their conclusions and recommendations. Master the art of model interpretability and build trust in AI systems through transparency and explainability.",
            showOnIndex: true,
            showOnArticles: true
        },
        {
            id: "privacy-preserving-training",
            title: "Privacy-Preserving AI Training",
            category: "federated",
            categoryDisplay: "Federated Learning",
            image: "card-federated-network.png",
            summary: "How federated learning enables collaborative AI development while maintaining data privacy and security. Understand the technical foundations and practical applications of distributed machine learning across organizations.",
            showOnIndex: true,
            showOnArticles: true
        },
        {
            id: "ethical-ai-implementation",
            title: "Ethical AI Implementation",
            category: "society",
            categoryDisplay: "AI in Society",
            image: "card-society-guidance.png",
            summary: "Frameworks for ensuring responsible AI deployment that considers societal impact and ethical implications. Learn how to build ethical considerations into your AI development process from the ground up.",
            showOnIndex: true,
            showOnArticles: true
        },
        {
            id: "distributed-ai-architecture",
            title: "Distributed AI Architecture",
            category: "federated",
            categoryDisplay: "Federated Learning",
            image: "card-federated-distributed.png",
            summary: "Best practices for implementing federated learning systems across distributed organizational networks. Learn about system design patterns, communication protocols, and scalability considerations for federated AI.",
            showOnIndex: false,
            showOnArticles: true
        },
        {
            id: "ai-implementation-roadmap",
            title: "AI Implementation Roadmap",
            category: "enterprise",
            categoryDisplay: "Enterprise AI",
            image: "card-enterprise-control.png",
            summary: "Step-by-step guidance for enterprise leaders on implementing AI initiatives that deliver measurable business outcomes. Navigate the complexities of AI transformation with proven methodologies and best practices.",
            showOnIndex: false,
            showOnArticles: true
        },
        {
            id: "philosophy-ai-transparency",
            title: "The Philosophy of AI Transparency",
            category: "epistemology",
            categoryDisplay: "AI Epistemology",
            image: "card-epistemology-knowledge.png",
            summary: "Exploring the philosophical implications of AI transparency and how it relates to model interpretability and trust. Understand the ethical dimensions of AI explainability and its impact on responsible AI development.",
            showOnIndex: false,
            showOnArticles: true
        },
        {
            id: "federated-learning-challenges",
            title: "Overcoming Federated Learning Challenges",
            category: "federated",
            categoryDisplay: "Federated Learning",
            image: "card-federated-pathways.png",
            summary: "Addressing common obstacles in federated learning implementation including data heterogeneity and communication efficiency. Develop strategies for managing the complexities of distributed AI systems at scale.",
            showOnIndex: false,
            showOnArticles: true
        },
        {
            id: "ai-social-structures",
            title: "AI's Impact on Social Structures",
            category: "society",
            categoryDisplay: "AI in Society",
            image: "card-society-cityscape.png",
            summary: "Analyzing how artificial intelligence is reshaping social interactions and organizational dynamics in modern society. Explore the societal implications of AI adoption and strategies for managing technological transformation responsibly.",
            showOnIndex: false,
            showOnArticles: true
        },
        {
            id: "ai-governance-policy",
            title: "AI Governance and Policy",
            category: "society",
            categoryDisplay: "AI in Society",
            image: "card-society-future.png",
            summary: "Exploring the role of governance structures and policy frameworks in shaping responsible AI development and deployment. Navigate the regulatory landscape and build compliant AI systems that serve the public good.",
            showOnIndex: false,
            showOnArticles: true
        }
    ];
}

// Generate article cards dynamically
function initDynamicArticles() {
    if (!articlesData) {
        console.warn('No articles data available');
        return;
    }

    const indexContainer = document.querySelector('.featured-articles .articles-grid');
    const articlesContainer = document.getElementById('articles-container');

    // Generate articles for index page
    if (indexContainer) {
        const indexArticles = articlesData.filter(article => article.showOnIndex);
        indexContainer.innerHTML = generateArticleCards(indexArticles, true);
        console.log(`Generated ${indexArticles.length} articles for index page`);
    }

    // Generate articles for articles page
    if (articlesContainer) {
        const allArticles = articlesData.filter(article => article.showOnArticles);
        articlesContainer.innerHTML = generateArticleCards(allArticles, false);
        console.log(`Generated ${allArticles.length} articles for articles page`);
    }
}

// Generate HTML for article cards
function generateArticleCards(articles, isIndexPage = false) {
    if (!articles || articles.length === 0) {
        console.warn('No articles to generate');
        return '';
    }

    return articles.map((article, index) => {
        // Remove animation classes for index page
        const hiddenClass = '';
        const animDelay = 0;
        return `
            <a href="article.html" class="article-item ${article.category} ${hiddenClass}" data-category="${article.category}" data-anim-delay="${animDelay}">
                <img src="images/${article.image}" alt="${article.title}" class="article-image">
                <div class="article-title-overlay">
                    <h3 class="article-title">${article.title}</h3>
                </div>
                <div class="article-overlay">
                    <div class="article-excerpt">
                        <p>${article.summary}</p>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

// Mobile Navigation Toggle
function initMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            
            // Toggle hamburger icon
            if (navLinks.classList.contains('open')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });

        // Close menu when clicking on nav links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
                menuToggle.textContent = '☰';
            }
        });
    }
}

// Article Category Filtering (for articles.html)
function initArticleFiltering() {
    const filterMenu = document.getElementById('filter-menu');
    const articlesContainer = document.getElementById('articles-container');
    
    if (filterMenu && articlesContainer) {
        const filterButtons = filterMenu.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Get current article items (since they're dynamically generated)
                const articleItems = articlesContainer.querySelectorAll('.article-item');
                
                // Filter articles
                filterArticles(articleItems, category);
            });
        });
    }
}

function filterArticles(articleItems, category) {
    articleItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.style.opacity = '0';
            
            // Fade in with delay
            setTimeout(() => {
                item.style.transition = 'opacity 0.3s ease';
                item.style.opacity = '1';
            }, 50);
        } else {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '0';
            
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Scroll-Triggered Reveal Animations
function initScrollAnimations() {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    if (hiddenElements.length > 0) {
        // Use Intersection Observer for better performance
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -300px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && !entry.target.classList.contains('show')) {
                    // Add staggered delay for elements within the same section
                    const delay = parseInt(entry.target.dataset.animDelay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('show');
                        entry.target.classList.remove('hidden');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        hiddenElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Form Validation (for contact.html)
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearFormErrors();
            
            // Validate form fields
            let isValid = true;
            
            // Validate name
            const nameField = document.getElementById('name');
            const nameValue = nameField.value.trim();
            if (nameValue === '') {
                showFieldError('name', 'nameError', 'Name is required.');
                isValid = false;
            }
            
            // Validate email
            const emailField = document.getElementById('email');
            const emailValue = emailField.value.trim();
            if (emailValue === '') {
                showFieldError('email', 'emailError', 'Email is required.');
                isValid = false;
            } else if (!isValidEmail(emailValue)) {
                showFieldError('email', 'emailError', 'Please enter a valid email address.');
                isValid = false;
            }
            
            // Validate message
            const messageField = document.getElementById('message');
            const messageValue = messageField.value.trim();
            if (messageValue === '') {
                showFieldError('message', 'messageError', 'Message is required.');
                isValid = false;
            } else if (messageValue.length < 10) {
                showFieldError('message', 'messageError', 'Message must be at least 10 characters long.');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                showSuccessMessage();
                contactForm.reset();
            } else {
                // Focus on first error field
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });
        
        // Real-time validation
        const requiredFields = ['name', 'email', 'message'];
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('blur', function() {
                    validateField(fieldId);
                });
                
                field.addEventListener('input', function() {
                    // Clear error state when user starts typing
                    if (this.classList.contains('error')) {
                        this.classList.remove('error');
                        document.getElementById(fieldId + 'Error').textContent = '';
                    }
                });
            }
        });
    }
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    const errorId = fieldId + 'Error';
    
    switch (fieldId) {
        case 'name':
            if (value === '') {
                showFieldError(fieldId, errorId, 'Name is required.');
                return false;
            }
            break;
            
        case 'email':
            if (value === '') {
                showFieldError(fieldId, errorId, 'Email is required.');
                return false;
            } else if (!isValidEmail(value)) {
                showFieldError(fieldId, errorId, 'Please enter a valid email address.');
                return false;
            }
            break;
            
        case 'message':
            if (value === '') {
                showFieldError(fieldId, errorId, 'Message is required.');
                return false;
            } else if (value.length < 10) {
                showFieldError(fieldId, errorId, 'Message must be at least 10 characters long.');
                return false;
            }
            break;
    }
    
    // Clear error if validation passes
    clearFieldError(fieldId, errorId);
    return true;
}

function showFieldError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFieldError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    field.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearFormErrors() {
    const errorFields = document.querySelectorAll('.error');
    const errorMessages = document.querySelectorAll('.error-message');
    
    errorFields.forEach(field => field.classList.remove('error'));
    errorMessages.forEach(message => message.textContent = '');
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const contactForm = document.getElementById('contactForm');
    
    if (successMessage && contactForm) {
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Utility function for smooth scrolling to elements
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(e) {
    // Close mobile menu if open
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (menuToggle) {
            menuToggle.textContent = '☰';
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-sensitive functions
const debouncedScrollHandler = debounce(function() {
    // Any scroll-dependent functionality can be added here
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Hero section animation
function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Add parallax effect on mouse move
    hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // Subtle background position shift
        const xOffset = (x - 0.5) * 20;
        const yOffset = (y - 0.5) * 20;
        
        hero.style.backgroundPosition = `calc(50% + ${xOffset}px) calc(50% + ${yOffset}px)`;
    });
    
    // Reset position on mouse leave
    hero.addEventListener('mouseleave', function() {
        hero.style.backgroundPosition = 'center center';
    });
}

// Initialize video hero functionality
function initVideoHero() {
    const mainVideo = document.querySelector('.hero-video-main');
    const loopVideo = document.querySelector('.hero-video-loop');
    
    if (!mainVideo || !loopVideo) {
        console.log('Video elements not found');
        return;
    }
    
    console.log('Video system initializing with seamless loop transition');
    
    // Remove the inline style that was hiding the loop video
    loopVideo.style.display = 'block';
    
    // When main video ends, switch to loop video
    mainVideo.addEventListener('ended', function() {
        console.log('Main video ended, starting continuous loop at 1/3 speed');
        // Use the CSS classes for transitions
        mainVideo.classList.add('fade-out');
        loopVideo.classList.add('active');
        loopVideo.playbackRate = 0.33; // Play at 1/3 speed
        loopVideo.play();
    });
    
    // Start playing the main video
    mainVideo.play().catch(function(error) {
        console.log('Video autoplay failed:', error);
    });
}

// Initialize loop video speed on non-index pages
function initLoopVideoSpeed() {
    // Check if we're on a page with a single loop video (not index page)
    const heroVideo = document.querySelector('.hero-video-bg');
    const isIndexPage = document.querySelector('.hero-video-main');
    
    if (heroVideo && !isIndexPage) {
        console.log('Setting loop video to 1/3 speed on non-index page');
        heroVideo.playbackRate = 0.33;
    }
}

// Initialize interactive differentiators section
function initDifferentiators() {
    // Check for new interactive menu layout first
    const menuItems = document.querySelectorAll('.diff-menu-item');
    const contentItems = document.querySelectorAll('.diff-content-item');
    
    if (menuItems.length > 0 && contentItems.length > 0) {
        // New interactive menu functionality
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('mouseenter', function() {
                handleMenuHover(this);
            });
            
            menuItem.addEventListener('click', function(e) {
                e.preventDefault();
                handleMenuHover(this);
            });
        });
        
        function handleMenuHover(menuItem) {
            const targetDiff = menuItem.getAttribute('data-diff');
            
            // Update active states for menu items
            menuItems.forEach(item => item.classList.remove('active'));
            menuItem.classList.add('active');
            
            // Update active states for content items
            contentItems.forEach(content => {
                if (content.getAttribute('data-diff') === targetDiff) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }
        
        return; // Exit if new layout is found
    }
    
    // Fallback to old differentiator profiles if they exist
    const profiles = document.querySelectorAll('.differentiator-profile');
    
    if (profiles.length === 0) return;
    
    profiles.forEach(profile => {
        // Handle both click and hover events
        profile.addEventListener('mouseenter', function() {
            handleDifferentiatorChange(this);
        });
        
        profile.addEventListener('click', function(e) {
            e.preventDefault();
            handleDifferentiatorChange(this);
        });
    });
    
    function handleDifferentiatorChange(profile) {
        // Update active states for all profiles
        profiles.forEach(p => p.classList.remove('active'));
        profile.classList.add('active');
    }
}

// Console welcome message
console.log('%cWelcome to Epistemia AI Consultancy - v2', 'color: #4682B4; font-size: 18px; font-weight: bold;');
console.log('%cEmpowering intelligent solutions through epistemic AI', 'color: #C0C0C0; font-size: 14px;');