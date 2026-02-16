// script.js - Interactive functionality for portfolio
'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
    initMobileNavigation();
    initSmoothScrolling();
    initScrollSpy();
    initFormValidation();
    initScrollToTop();
}

/**
 * Mobile Navigation
 */
function initMobileNavigation() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('main-navigation');
    const navLinks = nav.querySelectorAll('a');
    
    if (!toggle || !nav) return;
    
    let isOpen = false;
    
    toggle.addEventListener('click', toggleMenu);
    toggle.addEventListener('keydown', handleToggleKeydown);
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('resize', handleResize);
    
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => handleNavKeydown(e, navLinks, index));
    });
    
    function toggleMenu() {
        isOpen = !isOpen;
        updateMenuState();
    }
    
    function openMenu() {
        isOpen = true;
        updateMenuState();
        const firstLink = navLinks[0];
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }
    
    function closeMenu() {
        if (!isOpen) return;
        isOpen = false;
        updateMenuState();
        toggle.focus();
    }
    
    function updateMenuState() {
        toggle.setAttribute('aria-expanded', isOpen.toString());
        nav.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    function handleToggleKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    }
    
    function handleNavKeydown(e, links, currentIndex) {
        const key = e.key;
        
        if (key === 'Escape') {
            e.preventDefault();
            closeMenu();
            return;
        }
        
        if (key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % links.length;
            links[nextIndex].focus();
        } else if (key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + links.length) % links.length;
            links[prevIndex].focus();
        } else if (key === 'Home') {
            e.preventDefault();
            links[0].focus();
        } else if (key === 'End') {
            e.preventDefault();
            links[links.length - 1].focus();
        }
    }
    
    function handleOutsideClick(e) {
        if (!isOpen) return;
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu();
        }
    }
    
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && isOpen) {
            closeMenu();
        }
    }
    
    function handleResize() {
        if (window.innerWidth >= 768 && isOpen) {
            closeMenu();
        }
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - headerHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            history.pushState(null, null, href);
            
            setTimeout(() => {
                target.focus({preventScroll: true});
                if (document.activeElement !== target) {
                    target.setAttribute('tabindex', '-1');
                    target.focus({preventScroll: true});
                }
            }, 500);
        });
    });
}

/**
 * Scroll spy – highlights active navigation link
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('nav[aria-label="Main navigation"] a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    let currentActiveLink = null;
    
    function updateActiveLink() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition + windowHeight >= documentHeight - 10) {
            const lastSection = sections[sections.length - 1];
            setActiveLink(`#${lastSection.id}`);
            return;
        }
        
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const offset = headerHeight + 100;
        
        let activeSection = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSection = section;
            }
        });
        
        if (activeSection) {
            setActiveLink(`#${activeSection.id}`);
        }
    }
    
    function setActiveLink(href) {
        if (currentActiveLink === href) return;
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
                currentActiveLink = href;
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveLink);
    }, {passive: true});
    
    updateActiveLink();
}

/**
 * Form validation
 */
function initFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const statusDiv = document.getElementById('form-status');
    
    const validators = {
        name: {
            input: nameInput,
            rules: [
                {
                    test: (value) => value.trim().length > 0,
                    message: 'Name is required'
                },
                {
                    test: (value) => value.trim().length >= 2,
                    message: 'Name must be at least 2 characters'
                }
            ]
        },
        email: {
            input: emailInput,
            rules: [
                {
                    test: (value) => value.trim().length > 0,
                    message: 'Email is required'
                },
                {
                    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                    message: 'Please enter a valid email address'
                }
            ]
        },
        subject: {
            input: subjectInput,
            rules: [
                {
                    test: (value) => value.trim().length > 0,
                    message: 'Subject is required'
                },
                {
                    test: (value) => value.trim().length >= 5,
                    message: 'Subject must be at least 5 characters'
                }
            ]
        },
        message: {
            input: messageInput,
            rules: [
                {
                    test: (value) => value.trim().length > 0,
                    message: 'Message is required'
                },
                {
                    test: (value) => value.trim().length >= 20,
                    message: 'Message must be at least 20 characters'
                }
            ]
        }
    };
    
    Object.values(validators).forEach(({input}) => {
        input.addEventListener('blur', () => validateField(input.id));
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateField(input.id);
            }
        });
    });
    
    form.addEventListener('submit', handleSubmit);
    
    function validateField(fieldName) {
        const validator = validators[fieldName];
        if (!validator) return true;
        
        const {input, rules} = validator;
        const value = input.value;
        const errorSpan = document.getElementById(`${fieldName}-error`);
        
        for (let rule of rules) {
            if (!rule.test(value)) {
                showError(input, errorSpan, rule.message);
                return false;
            }
        }
        
        clearError(input, errorSpan);
        return true;
    }
    
    function showError(input, errorSpan, message) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.setAttribute('aria-invalid', 'true');
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }
    
    function clearError(input, errorSpan) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setAttribute('aria-invalid', 'false');
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        let isValid = true;
        Object.keys(validators).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showStatus('Please fix the errors above', 'error');
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }
        
        submitForm();
    }
    
    async function submitForm() {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Form submission:', data);
            
            showStatus('Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
            Object.values(validators).forEach(({input}) => {
                input.classList.remove('valid', 'invalid');
                input.removeAttribute('aria-invalid');
            });
            
            const errors = form.querySelectorAll('.error-message');
            errors.forEach(error => error.textContent = '');
            
        } catch (error) {
            showStatus('Failed to send message. Please try again later.', 'error');
            console.error('Form submission error:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    }
    
    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = type;
        statusDiv.setAttribute('role', type === 'error' ? 'alert' : 'status');
        
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = '';
        }, 5000);
    }
}

/**
 * Scroll to top button
 */
function initScrollToTop() {
    const button = createScrollToTopButton();
    document.body.appendChild(button);
    
    let isVisible = false;
    
    function updateButtonVisibility() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const shouldShow = scrollPosition > 300;
        
        if (shouldShow && !isVisible) {
            button.classList.add('visible');
            isVisible = true;
        } else if (!shouldShow && isVisible) {
            button.classList.remove('visible');
            isVisible = false;
        }
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateButtonVisibility);
    }, {passive: true});
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    updateButtonVisibility();
}

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scroll-to-top';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Scroll to top');
    button.innerHTML = '↑';
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: var(--color-primary, #2563eb);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            opacity: 0;
            visibility: hidden;
            transform: translateY(100px);
            transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .scroll-to-top:hover {
            background: var(--color-primary-dark, #1d4ed8);
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .scroll-to-top:active {
            transform: translateY(-2px);
        }
        
        .scroll-to-top:focus-visible {
            outline: 2px solid var(--color-primary, #2563eb);
            outline-offset: 2px;
        }
        
        @media (max-width: 767px) {
            .scroll-to-top {
                bottom: 1rem;
                right: 1rem;
                width: 2.5rem;
                height: 2.5rem;
                font-size: 1.25rem;
            }
        }
    `;
    
    if (!document.querySelector('style[data-scroll-to-top]')) {
        style.setAttribute('data-scroll-to-top', 'true');
        document.head.appendChild(style);
    }
    
    return button;
}