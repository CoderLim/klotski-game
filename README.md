# Klotski Puzzle Game 🧩

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-klotski.org-blue.svg)](https://klotski.org)
[![Play Online](https://img.shields.io/badge/Play%20Online-Live%20Demo-green.svg)](https://klotski.org)

A modern, responsive implementation of the classic Klotski sliding block puzzle game. Play the timeless Chinese puzzle online with multiple configurations, save/load functionality, and beautiful animations.

## 🌟 Live Demo

**Play the game online:** [https://klotski.org](https://klotski.org)

Experience the classic Klotski puzzle with modern web technology. No downloads required - play directly in your browser!

<img width="886" height="493" alt="image" src="https://github.com/user-attachments/assets/67343daa-b863-4f5e-8cb8-a67a5782e755" />


## 📖 About Klotski

Klotski (华容道, Huā Róng Dào) is a classic sliding block puzzle that originated in ancient China. The name translates to "Huarong Pass" and refers to a famous historical event from the Three Kingdoms period. The objective is to move the large red block (typically 2x2) from its starting position to the designated exit area.

### Historical Significance

- **Origin**: Ancient Chinese puzzle with hundreds of years of history
- **Cultural Heritage**: Part of traditional Chinese intellectual games
- **Mathematical Interest**: Studied extensively by mathematicians and computer scientists
- **Educational Value**: Improves spatial reasoning and logical thinking

## ✨ Features

### 🎮 Game Features
- **Multiple Configurations**: 4 different starting layouts with varying difficulty
- **Save/Load Progress**: Local storage for game state persistence
- **Move Counter**: Track your progress and optimize solutions
- **Responsive Design**: Play on desktop, tablet, or mobile devices
- **Keyboard Controls**: Arrow keys and shortcuts for efficient gameplay
- **Visual Feedback**: Clear indicators for selected blocks and valid moves

### 🎯 Technical Features
- **Modern Web Technologies**: Pure HTML5, CSS3, and JavaScript
- **Touch Support**: Optimized for mobile and tablet devices
- **Cross-Browser Compatible**: Works on all modern browsers
- **No Dependencies**: Lightweight and fast loading
- **SEO Optimized**: Rich content and proper meta tags
- **Accessibility**: Keyboard navigation and screen reader support

### 📱 Mobile Optimized
- **Touch Controls**: Drag and drop interface for mobile devices
- **Responsive Layout**: Adapts to any screen size
- **Performance Optimized**: Smooth animations on mobile devices
- **Offline Capable**: Works without internet connection

## 🚀 Quick Start

### Play Online (Recommended)
Visit [https://klotski.org](https://klotski.org) to play the game directly in your browser.

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/klotski-game.git
   cd klotski-game
   ```

2. **Open in browser**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. **Start playing**
   Navigate to `http://localhost:8000` in your browser

## 🎮 How to Play

### Objective
Move the large red 2x2 block to the exit at the bottom of the board.

### Controls
- **Mouse/Touch**: Drag blocks directly to move them
- **Arrow Keys**: Use arrow keys to move selected blocks
- **Direction Buttons**: Click the arrow buttons on screen
- **Keyboard Shortcuts**:
  - `Ctrl+R`: Reset game
  - `Ctrl+S`: Save game
  - `Ctrl+O`: Load game
  - `Ctrl+1` to `Ctrl+4`: Switch configurations

### Game Rules
- All blocks can only move horizontally or vertically
- Blocks cannot be lifted or rotated
- The goal is to create a path for the main block to reach the exit
- Some configurations require 100+ moves for optimal solutions

## 🏗️ Project Structure

```
klotski-game/
├── index.html          # Main game page
├── game.js             # Game logic and mechanics
├── contact.html        # Contact page
├── about.html          # About us page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── README.md           # This file
└── README_HTML.md      # HTML documentation
```

## 🎯 Game Configurations

The game includes 4 classic Klotski configurations:

1. **Configuration 1**: Classic "横刀立马" (Heng Dao Li Ma) - Moderate difficulty
2. **Configuration 2**: "将拥曹营" (General Guarding Cao's Camp) - Advanced
3. **Configuration 3**: "兵分三路" (Troops Divided in Three Ways) - Expert
4. **Configuration 4**: "层层设防" (Multiple Layers of Defense) - Master level

Each configuration offers unique challenges and requires different solving strategies.

## 🔧 Customization

### Adding New Configurations
You can easily add new puzzle configurations by modifying the `configurations` array in `game.js`:

```javascript
const configurations = [
    // Add your custom configuration here
    {
        name: "Custom Puzzle",
        board: [
            // Define your board layout
        ]
    }
];
```

### Styling Customization
The game uses CSS custom properties for easy theming. Modify the CSS variables in `index.html` to change colors and styling.

## 📊 Performance

- **Load Time**: < 1 second on modern connections
- **Memory Usage**: Minimal, optimized for mobile devices
- **Compatibility**: Works on browsers from 2018 onwards
- **Accessibility**: WCAG 2.1 AA compliant

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 70+ | ✅ Full Support |
| Firefox | 65+ | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |
| Mobile Safari | 12+ | ✅ Full Support |
| Chrome Mobile | 70+ | ✅ Full Support |

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
- 🐛 **Report Bugs**: Use the [issue tracker](https://github.com/yourusername/klotski-game/issues)
- 💡 **Suggest Features**: Share your ideas for new features
- 🔧 **Code Contributions**: Submit pull requests for improvements
- 📝 **Documentation**: Help improve documentation and tutorials
- 🌍 **Translations**: Add support for additional languages

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Follow existing code style and conventions
- Add comments for complex logic
- Test on multiple browsers and devices
- Ensure mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Historical Research**: Based on traditional Chinese Klotski puzzles
- **Mathematical Analysis**: Inspired by academic research on sliding block puzzles
- **Community**: Thanks to all contributors and puzzle enthusiasts
- **Open Source**: Built with open web standards and technologies

## 📞 Contact & Support

- **Website**: [https://klotski.org](https://klotski.org)
- **Email**: [contact@klotski.org](mailto:contact@klotski.org)
- **Issues**: [GitHub Issues](https://github.com/yourusername/klotski-game/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/klotski-game/discussions)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/klotski-game&type=Date)](https://star-history.com/#yourusername/klotski-game&Date)

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/klotski-game)
![GitHub forks](https://img.shields.io/github/forks/yourusername/klotski-game)
![GitHub issues](https://img.shields.io/github/issues/yourusername/klotski-game)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/klotski-game)

---

**Made with ❤️ for puzzle enthusiasts worldwide**

*Experience the timeless challenge of Klotski - where strategy meets tradition in a modern web interface.*

**Play Now**: [https://klotski.org](https://klotski.org) | **Learn More**: [About Klotski](https://klotski.org/about.html) | **Contact**: [Get in Touch](https://klotski.org/contact.html) 
