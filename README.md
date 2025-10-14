# Weddings Red Hair Media - Cinematic Wedding Portfolio

A modern, cinematic wedding portfolio website inspired by Plus Two Films. This website showcases wedding videography services with a bold, fresh, and timeless design.

## Features

- **Cinematic Design**: Modern, elegant design with gold accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Portfolio**: Filterable portfolio gallery with hover effects
- **Contact Form**: Working contact form with validation
- **Smooth Scrolling**: Smooth navigation between sections
- **Mobile-First**: Optimized for mobile devices with hamburger menu
- **Performance Optimized**: Debounced scroll events and lazy loading ready

## Sections

1. **Hero Section**: Full-screen video background with call-to-action buttons
2. **About Section**: Company story and philosophy
3. **Portfolio Section**: Filterable gallery of wedding films
4. **Services Section**: Three service packages with pricing information
5. **Contact Section**: Contact form and business information

## Customization

### Colors
The main color scheme uses:
- Primary Gold: `#d4af37` to `#ffd700`
- Text: `#333` (dark gray)
- Background: `#f8f9fa` (light gray)

### Fonts
- Headings: Playfair Display (elegant serif)
- Body Text: Inter (modern sans-serif)

### Content Updates

#### Replace Placeholder Content
1. **Hero Video**: Replace the sample video URL in `index.html` line 21
2. **About Image**: Replace the placeholder with your actual image
3. **Portfolio Items**: Update with real wedding film thumbnails and information
4. **Contact Information**: Update email, phone, and social media links

#### Add Real Images
Replace the placeholder divs with actual images:
```html
<!-- Instead of -->
<div class="image-placeholder">
    <i class="fas fa-camera"></i>
    <p>About Image</p>
</div>

<!-- Use -->
<img src="path/to/your/image.jpg" alt="Description" class="about-image">
```

### Portfolio Management
To add new portfolio items:
1. Copy an existing portfolio item in the HTML
2. Update the `data-category` attribute (wedding-film, highlight, short)
3. Replace placeholder content with real information
4. Add actual images or video thumbnails

### Service Packages
Update the service cards in the services section:
- Modify pricing information
- Update service descriptions
- Add or remove service features
- Change the "Most Popular" badge

## File Structure

```
weddings.redhair.media/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Debounced scroll events for smooth performance
- CSS animations optimized for 60fps
- Lazy loading ready for images
- Minimal external dependencies
- Optimized font loading

## SEO Ready

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text ready for images
- Fast loading times

## Getting Started

1. Open `index.html` in a web browser
2. Customize content in the HTML file
3. Update images and videos
4. Modify colors and fonts in `styles.css`
5. Test on different devices

## Future Enhancements

Consider adding:
- Video modal for portfolio items
- Blog section for wedding tips
- Client testimonials section
- Online booking system
- Multi-language support
- Advanced animations
- CMS integration

## Support

For customization help or questions, refer to the code comments or contact the developer.
