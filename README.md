# Galavox Number Converter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Universal number system converter with support for the unique Galavox system (Base-89).

🌐 **Live Demo**: [galavox.space](https://galavox.space)

## 🚀 Features

- **Galavox System (089)**: Unique ternary system using digits 0, 8, and 9
- **40+ Number Systems**: From Binary to Base-95 with historical names
- **Extended Symbols**: Support for printable ASCII for high bases
- **Modern UI**: Sci-fi design with animations and effects
- **Modular Architecture**: ES6 modules for better maintainability

## 📋 Supported Number Systems

- Binary (2), Octal (8), Decimal (10), Hexadecimal (16)
- And many more: Ternary, Quaternary, up to Base-95
- **Galavox (089)**: Special ternary system (0=0, 8=1, 9=2)

## 🛠 Installation and Running

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/galavox-number-converter.git
   cd galavox-number-converter
   ```

2. Start a local server:
   ```bash
   npm run dev
   # or
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser

### Online Version

Visit the live demo at [galavox.space](https://galavox.space) or [GitHub Pages](https://yourusername.github.io/galavox-number-converter/)

## 📖 Usage

1. Select the source number system
2. Select the target number system
3. Enter the number to convert
4. The result will appear automatically

### Examples

- `42` in decimal → `101010` in binary
- `DEADBEEF` in hex → large number in decimal
- `10` in decimal → `808` in Galavox (089)

## 🏗 Project Structure

```
galavox-number-converter/
├── index.html          # Main page
├── src/
│   ├── css/
│   │   └── style.css   # Styles
│   └── js/
│       ├── converter.js # Conversion logic
│       ├── ui.js        # Interface and events
│       └── stars.js     # Star generation
├── assets/             # Static resources
├── package.json        # Project configuration
├── .gitignore          # Ignored files
├── .editorconfig       # Editor settings
├── LICENSE             # MIT License
└── README.md           # This file
```

## 🧮 Technical Details

- **BigInt**: Support for arbitrarily large numbers
- **ES6 Modules**: Modular architecture
- **Responsive Design**: Adaptive design
- **No Dependencies**: Pure JavaScript and CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🙏 Acknowledgments

- Design inspired by sci-fi interfaces
- Historical number system names from various sources
- Special thanks to the Galavox community at [galavox.space](https://galavox.space)