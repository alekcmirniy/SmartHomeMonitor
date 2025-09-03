🏠 Smart Home Monitor
A Vue.js application for training with Vue Options API, Vue Router, Layout building.

✨ Features of layout
Real-time sensor data monitoring (temperature, humidity, motion)

Intuitive device management interface

Visual gallery for objects and camera feeds

Informational pages with system description and contacts

Clean, modern design using Vue 3 and SCSS

Responsive navigation and user interface

🚀 Quick Start
Clone and Install

# Clone the repository
  -git clone https://github.com/alekcmirniy/smart-home-monitor.git
  -cd smart-home-monitor

# Install dependencies
  -npm install
Development

# Start local development server
  -npm run serve

Production Build

# Build for production
  -npm run build
  
📖 How to Use
Use the navigation menu to switch between Home, Monitor, Control, Gallery, Info, and Contact pages

The Monitor page displays real-time sensor data with visual indicators

The Control page allows you to toggle devices on/off with intuitive switches

Browse the Gallery to view visual data from connected cameras

Access system information and contact details in the respective sections

🛠️ Technologies
Vue 3 + Options API

Vue Router 4 - navigation and routing

SCSS - advanced styling with variables and mixins

Component-based architecture - reusable UI components

Responsive design - works on desktop and mobile devices

smart-home-monitor/
├── node_modules/           # Dependencies (auto-generated)
├── public/
│   ├── favicon.ico        # Site favicon
│   └── index.html         # Main HTML template
├── src/
│   ├── assets/
│   │   ├── gallery/       # Slider images
│   │   │   ├── 1.jpg
│   │   │   ├── 2.jpg
│   │   │   └── 3.jpg
│   │   └── icons/         # Application icons
│   │       ├── conditioner.png
│   │       ├── fridge.png
│   │       ├── home-logo.png
│   │       └── ya-alice.png
│   ├── components/        # Reusable UI components
│   │   ├── ContactForm.vue
│   │   ├── MainModal.vue
│   │   ├── MainNavigation.vue
│   │   └── MainSlider.vue
│   ├── router/
│   │   └── index.js       # Vue Router configuration
│   ├── styles/            # SCSS stylesheets
│   │   ├── _mixins.scss   # SCSS mixins
│   │   ├── main.scss      # Main styles file
│   │   └── _variables.scss # SCSS variables
│   ├── utils/
│   │   └── api.js         # API communication functions
│   ├── views/             # Application pages
│   │   ├── AboutView.vue
│   │   ├── ContactsView.vue
│   │   ├── ControlView.vue
│   │   ├── GalleryView.vue
│   │   ├── HomeView.vue
│   │   ├── InfoView.vue
│   │   └── MonitorView.vue
│   ├── App.vue            # Root application component
│   └── main.js           # Application entry point
├── .gitignore            # Git ignore rules
├── package.json          # NPM configuration
└── README.md            # Project documentation

📝 Available Scripts
npm run serve - start development server with hot-reload

npm run build - build for production with optimization


🌐 Live Demo
Application Demo (if deployed to GitHub Pages)

🤝 Contributing
Contributions are welcome! Please feel free to:

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is distributed under the MIT License. See the LICENSE file for details.

👨‍💻 Author
Alexey Miroshnichenko

GitHub: alekcmirniy

Project: Smart Home Monitor

Note: This project is my first training with Vue framework within the university studying programm.
