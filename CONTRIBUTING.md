# Contributing to Klotski Puzzle Game 🧩

Thank you for your interest in contributing to the Klotski Puzzle Game! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug Reports**: Help us identify and fix issues
- 💡 **Feature Requests**: Suggest new features and improvements
- 🔧 **Code Contributions**: Submit code improvements and new features
- 📝 **Documentation**: Improve documentation and tutorials
- 🌍 **Translations**: Add support for additional languages
- 🎨 **Design**: Improve UI/UX and visual design
- 🧪 **Testing**: Help test the game on different devices and browsers

### Before You Start

1. **Check existing issues**: Search through [existing issues](https://github.com/yourusername/klotski-game/issues) to see if your idea has already been discussed
2. **Read the documentation**: Familiarize yourself with the project structure and codebase
3. **Join discussions**: Participate in [GitHub Discussions](https://github.com/yourusername/klotski-game/discussions) to share ideas

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A modern web browser for testing
- Git for version control
- A GitHub account

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/yourusername/klotski-game.git
   cd klotski-game
   ```

2. **Set up the development environment**
   ```bash
   # No build process required - just open index.html in a browser
   # Or use a local server for better development experience
   python -m http.server 8000
   # or
   npx serve .
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style

- **HTML**: Use semantic HTML5 elements, proper indentation
- **CSS**: Follow BEM methodology, use CSS custom properties
- **JavaScript**: Use ES6+ features, meaningful variable names, add comments for complex logic

### File Structure

```
klotski-game/
├── index.html          # Main game page
├── game.js             # Game logic
├── contact.html        # Contact page
├── about.html          # About page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── README.md           # Project documentation
├── CONTRIBUTING.md     # This file
├── LICENSE             # MIT license
└── .gitignore          # Git ignore rules
```

### Testing

Before submitting your contribution, please test:

- ✅ **Cross-browser compatibility**: Chrome, Firefox, Safari, Edge
- ✅ **Mobile responsiveness**: Test on mobile devices and tablets
- ✅ **Touch controls**: Ensure drag-and-drop works on touch devices
- ✅ **Keyboard navigation**: Test all keyboard shortcuts
- ✅ **Accessibility**: Ensure screen readers can navigate the game
- ✅ **Performance**: Check that the game loads quickly and runs smoothly

## 🐛 Reporting Bugs

### Bug Report Template

When reporting a bug, please include:

```markdown
**Bug Description**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- Browser: [e.g. Chrome 91, Firefox 89]
- Operating System: [e.g. Windows 10, macOS 11]
- Device: [e.g. Desktop, iPhone 12, iPad]

**Additional Context**
Any other context about the problem.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Feature Description**
A clear description of the feature you'd like to see.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How would you like this feature to work?

**Alternative Solutions**
Any alternative solutions you've considered.

**Additional Context**
Any other context, mockups, or examples.
```

## 🔧 Code Contributions

### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the coding guidelines
3. **Test thoroughly** on multiple browsers and devices
4. **Update documentation** if necessary
5. **Commit your changes** with clear commit messages
6. **Push to your fork** and create a pull request

### Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: add new puzzle configuration
fix: resolve mobile touch issue
docs: update README with new features
style: improve button hover effects
refactor: simplify game logic
test: add unit tests for move validation
```

### Pull Request Template

```markdown
**Description**
Brief description of changes made.

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

**Testing**
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] All existing functionality works

**Screenshots** (if applicable)
Add screenshots to help explain your changes.

**Additional Notes**
Any additional information or context.
```

## 🌍 Translation Contributions

### Adding New Languages

1. Create a new language file or update existing translations
2. Ensure all user-facing text is translated
3. Test the interface in the target language
4. Consider cultural adaptations for UI elements

### Translation Guidelines

- Maintain the same tone and style as the original
- Consider cultural context and local preferences
- Test with native speakers when possible
- Keep technical terms consistent

## 📊 Performance Guidelines

### Optimization Tips

- **Minimize DOM manipulation**: Batch DOM updates when possible
- **Use efficient algorithms**: Optimize game logic for performance
- **Optimize assets**: Compress images and minimize file sizes
- **Lazy loading**: Load resources only when needed
- **Caching**: Implement appropriate caching strategies

### Performance Targets

- **Load time**: < 1 second on 3G connection
- **Memory usage**: < 50MB on mobile devices
- **Frame rate**: 60fps for smooth animations
- **Battery usage**: Minimize CPU usage on mobile devices

## 🎨 Design Contributions

### Design Guidelines

- **Consistency**: Follow existing design patterns
- **Accessibility**: Ensure sufficient color contrast and readable fonts
- **Responsive**: Design for all screen sizes
- **Performance**: Optimize for fast loading and smooth interactions

### Design Tools

- Use modern CSS features (Grid, Flexbox, Custom Properties)
- Consider using CSS-in-JS for complex styling
- Implement dark mode support
- Ensure touch-friendly interface elements

## 🧪 Testing Guidelines

### Manual Testing Checklist

- [ ] Game loads correctly on all supported browsers
- [ ] All puzzle configurations work properly
- [ ] Save/load functionality works as expected
- [ ] Touch controls work on mobile devices
- [ ] Keyboard shortcuts function correctly
- [ ] Game state is properly maintained
- [ ] Visual feedback is clear and responsive
- [ ] No console errors or warnings

### Automated Testing

Consider adding automated tests for:
- Game logic functions
- Move validation
- State management
- UI interactions

## 📝 Documentation

### Documentation Standards

- **Clear and concise**: Write in simple, understandable language
- **Comprehensive**: Cover all features and functionality
- **Up-to-date**: Keep documentation current with code changes
- **Examples**: Include practical examples and use cases

### Documentation Types

- **README.md**: Project overview and quick start guide
- **Code comments**: Inline documentation for complex logic
- **API documentation**: If applicable, document public APIs
- **User guides**: Step-by-step instructions for users

## 🏆 Recognition

### Contributor Recognition

We recognize contributors in several ways:

- **Contributor list**: All contributors are listed in the project README
- **Release notes**: Contributors are credited in release announcements
- **Hall of fame**: Long-term contributors may be featured on the website
- **Badges**: Special badges for different types of contributions

### Contribution Levels

- **Bronze**: 1-5 contributions
- **Silver**: 6-20 contributions
- **Gold**: 21+ contributions
- **Platinum**: Major contributions or long-term maintainers

## 📞 Getting Help

### Support Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and discussions
- **Email**: [contact@klotski.org](mailto:contact@klotski.org) for private matters
- **Website**: [https://klotski.org](https://klotski.org) for general information

### Community Guidelines

- **Be respectful**: Treat all contributors with respect and kindness
- **Be helpful**: Help other contributors when you can
- **Be patient**: Remember that contributors are volunteers
- **Be constructive**: Provide constructive feedback and suggestions

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Klotski Puzzle Game! 🎉**

Your contributions help make this classic puzzle accessible to players worldwide. Together, we can create an amazing gaming experience that preserves cultural heritage while embracing modern technology. 