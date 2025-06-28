# Hardeep Ijardar - React Portfolio

This is a modern React version of Hardeep Ijardar's portfolio website, converted from the original HTML/CSS/JavaScript implementation.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and React hooks
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Components**: 
  - Tab switching in About section
  - Mobile navigation menu
  - Contact form with validation
  - Infinite scrolling blog carousel
- **Smooth Animations**: CSS animations and hover effects
- **Form Handling**: Contact form with FormSubmit integration

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **CSS3** - Custom styling with animations
- **Font Awesome** - Icons
- **FormSubmit** - Contact form handling

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation and hero section
│   ├── About.js       # About section with tabs
│   ├── Projects.js    # Projects showcase
│   ├── Blogs.js       # Blog carousel
│   └── Contact.js     # Contact form
├── App.js             # Main app component
└── App.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your media files**
   Place your images in the `public/media/` folder:
   - `logo.png` - Your logo
   - `background.png` - Hero background image
   - `user.jpg` - Your profile picture
   - `blog-1.png`, `blog-2.png`, `blog-3.png`, `blog-4.jpeg` - Blog images
   - `Ijardar Hardeep Kuldeep(CV).pdf` - Your CV

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information
Update the following files with your information:

- **Header.js**: Update name, title, and CV link
- **About.js**: Update bio, skills, and education
- **Projects.js**: Update project details
- **Blogs.js**: Update blog information
- **Contact.js**: Update contact details and social links

### Styling
- Modify `src/App.css` to change colors, fonts, and layout
- The main color scheme uses `#ff004f` (pink) and `#000000` (black)

### Form Configuration
The contact form uses FormSubmit. To set up your own:
1. Go to [FormSubmit](https://formsubmit.co/)
2. Get your endpoint URL
3. Update the fetch URL in `Contact.js`

## 🎨 Key Features Explained

### 1. Tab System (About Section)
- Uses React state to manage active tab
- Smooth transitions between Skills and Education

### 2. Mobile Navigation
- Responsive hamburger menu
- Smooth slide-in animation
- Auto-close on navigation

### 3. Blog Carousel
- Infinite scrolling animation
- Hover pause functionality
- Responsive design

### 4. Contact Form
- Form validation
- Async form submission
- Success/error handling
- Auto-scroll to top on success

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Mobile**: 600px and below
- **Tablet**: 601px - 1024px
- **Desktop**: 1025px and above

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Hardeep Ijardar - hardeepijardar@gmail.com

Project Link: [https://github.com/yourusername/portfolio-react](https://github.com/yourusername/portfolio-react)

---

**Note**: This is a React conversion of the original HTML/CSS/JavaScript portfolio. All functionality has been preserved and enhanced with modern React patterns. 