import React from 'react';
import { Navbar, Footer, ProductCard } from "../components";
import "./ProductCardDemo.css";

const ProductCardDemo = () => {
  // Test data as requested in the requirements
  const testProducts = [
    {
      id: 1,
      title: "Classic White T-Shirt",
      price: 29.99,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "men's clothing",
      rating: { rate: 4.5, count: 120 },
      inStock: true
    },
    {
      id: 2,
      title: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      category: "electronics",
      rating: { rate: 4.8, count: 89 },
      inStock: true
    },
    {
      id: 3,
      title: "Elegant Silver Necklace",
      price: 149.99,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      category: "jewelery",
      rating: { rate: 4.2, count: 67 },
      inStock: false // Out of stock product
    },
    {
      id: 4,
      title: "Comfortable Running Shoes",
      price: 89.99,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      category: "men's clothing",
      rating: { rate: 4.6, count: 156 },
      inStock: true
    },
    {
      id: 5,
      title: "Stylish Summer Dress",
      price: 79.99,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      category: "women's clothing",
      rating: { rate: 4.3, count: 98 },
      inStock: true
    },
    {
      id: 6,
      title: "Smart LED TV 55\"",
      price: 699.99,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "electronics",
      rating: { rate: 4.7, count: 234 },
      inStock: true
    },
    {
      id: 7,
      title: "Designer Handbag",
      price: 299.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: "women's clothing",
      rating: { rate: 4.4, count: 76 },
      inStock: false // Out of stock product
    },
    {
      id: 8,
      title: "Gaming Laptop",
      price: 1299.99,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      category: "electronics",
      rating: { rate: 4.9, count: 189 },
      inStock: true
    }
  ];

  return (
    <>
      <Navbar />
      <div className="demo-container">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 className="display-4 fw-bold text-primary">Product Card Demo</h1>
              <p className="lead text-muted">
                Responsive Product Cards with Modern UI/UX Design
              </p>
              <div className="demo-features">
                <span className="badge bg-primary me-2">Responsive Design</span>
                <span className="badge bg-success me-2">Variant Options</span>
                <span className="badge bg-warning me-2">Stock Management</span>
                <span className="badge bg-info me-2">Modern UI</span>
                <span className="badge bg-secondary">Accessibility</span>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 mb-4">
              <div className="demo-info-card">
                <h3>Features Implemented:</h3>
                <ul className="feature-list">
                  <li>✅ Product image with hover effects</li>
                  <li>✅ Product name and category</li>
                  <li>✅ Product price with free shipping indicator</li>
                  <li>✅ Size variant dropdown with stock status</li>
                  <li>✅ Add to Cart button with loading state</li>
                  <li>✅ Out of Stock functionality</li>
                  <li>✅ Star ratings and review count</li>
                  <li>✅ Responsive design for all screen sizes</li>
                  <li>✅ Modern hover animations and transitions</li>
                  <li>✅ Accessibility features (focus states, ARIA)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {testProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="demo-note">
                <h4>Implementation Notes:</h4>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Layout Approach:</h5>
                    <p>
                      Used Bootstrap's responsive grid system with custom CSS for enhanced styling. 
                      Cards adapt from 4 columns on large screens to 1 column on mobile devices, 
                      ensuring optimal viewing experience across all devices.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h5>Responsiveness Considerations:</h5>
                    <p>
                      Implemented mobile-first design with breakpoints at 576px, 768px, and 992px. 
                      Image sizes, text scaling, and spacing adjust automatically. 
                      Touch-friendly buttons and proper spacing for mobile interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCardDemo;
