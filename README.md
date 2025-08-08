# 🛍️ Responsive Product Card Component

A modern, responsive Product Card component built with React, featuring clean UI/UX design and comprehensive functionality for ecommerce applications.

## ✨ Live Demo

**[View Live Demo](https://your-netlify-url.netlify.app/demo)**

## 🚀 Features

### ✅ Core Requirements
- **Product Image**: High-quality images with hover effects
- **Product Name**: Clean, readable titles with proper truncation
- **Product Price**: Prominent price display with currency formatting
- **Variant Options**: Dropdown for size selection with stock status
- **Add to Cart Button**: Interactive button with loading states
- **Out of Stock Functionality**: Disabled state for unavailable products
- **Modern UI/UX**: Clean design following best practices

### 🎨 Enhanced Features
- **Star Ratings**: Visual rating display with review count
- **Category Labels**: Product categorization
- **Free Shipping Indicator**: Shows for products over $50
- **Hover Effects**: Smooth animations and transitions
- **Quick View Overlay**: Hover overlay for product details
- **Loading States**: Spinner animation during cart operations
- **Toast Notifications**: User feedback for actions
- **Responsive Design**: Mobile-first approach with breakpoints

## 🛠️ Technology Stack

- **React 18.2.0** - Frontend framework
- **Redux 4.2.0** - State management
- **Bootstrap 5.2.1** - CSS framework
- **Font Awesome 4.7.0** - Icons
- **React Hot Toast 2.4.1** - Notifications
- **React Loading Skeleton 3.1.0** - Loading states

## 📱 Responsive Design

- **Large screens (≥992px)**: 4 cards per row
- **Medium screens (≥768px)**: 3 cards per row  
- **Small screens (≥576px)**: 2 cards per row
- **Mobile (<576px)**: 1 card per row

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Main app: http://localhost:3000
   - Product Card Demo: http://localhost:3000/demo

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx          # Main Product Card component
│   ├── ProductCard.css          # Product Card styles
│   └── Products.jsx             # Products listing page
├── pages/
│   ├── ProductCardDemo.jsx      # Demo page with test data
│   └── ProductCardDemo.css      # Demo page styles
└── redux/
    ├── action/
    └── reducer/
```

## 🎯 Usage

### Basic Implementation
```jsx
import ProductCard from './components/ProductCard';

const product = {
  id: 1,
  title: "Classic White T-Shirt",
  price: 29.99,
  image: "product-image-url",
  category: "men's clothing",
  rating: { rate: 4.5, count: 120 }
};

<ProductCard product={product} />
```

## 🌐 Deployment

### Netlify Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`

3. **Deploy**
   - Netlify will automatically build and deploy your site
   - Your site will be available at `https://your-site-name.netlify.app`

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Hover effects and animations
- [ ] Add to cart functionality
- [ ] Out of stock scenarios
- [ ] Variant selection
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

## 🔧 Customization

### Styling
The component uses Bootstrap 5 with custom CSS. You can customize:
- Colors in `ProductCard.css`
- Layout in the component JSX
- Responsive breakpoints in CSS media queries

### Variants
Modify the `variantOptions` array in `ProductCard.jsx`:
```javascript
const variantOptions = [
  { value: "small", label: "Small", inStock: true },
  { value: "medium", label: "Medium", inStock: true },
  // Add more variants as needed
];
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for test data
- [Bootstrap](https://getbootstrap.com/) for responsive framework
- [Font Awesome](https://fontawesome.com/) for icons

---

**Made with ❤️ for modern ecommerce experiences**
