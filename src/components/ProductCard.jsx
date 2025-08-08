import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState("default");
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();

  // Mock variant options - in real app this would come from product data
  const variantOptions = [
    { value: "default", label: "Default", inStock: true },
    { value: "small", label: "Small", inStock: true },
    { value: "medium", label: "Medium", inStock: true },
    { value: "large", label: "Large", inStock: false },
    { value: "xl", label: "XL", inStock: true },
  ];

  // Mock stock status - in real app this would come from product data
  const isOutOfStock = product.id % 7 === 0; // Every 7th product is out of stock for demo

  const handleAddToCart = async () => {
    if (isOutOfStock) {
      toast.error("Product is out of stock!");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const productWithVariant = {
      ...product,
      selectedVariant,
      variantLabel: variantOptions.find(v => v.value === selectedVariant)?.label
    };
    
    dispatch(addCart(productWithVariant));
    toast.success(`Added ${product.title.substring(0, 20)}... to cart!`);
    setIsLoading(false);
  };

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.value);
  };

  const getSelectedVariantStock = () => {
    const variant = variantOptions.find(v => v.value === selectedVariant);
    return variant ? variant.inStock : true;
  };

  const isVariantOutOfStock = !getSelectedVariantStock();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div className="card product-card h-100 shadow-sm border-0">
        {/* Product Image */}
        <div className="product-image-container position-relative">
          <img
            className="card-img-top p-3"
            src={product.image}
            alt={product.title}
            style={{ 
              height: "250px", 
              objectFit: "contain",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
          
          {/* Out of Stock Badge */}
          {isOutOfStock && (
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-danger">Out of Stock</span>
            </div>
          )}
          
          {/* Quick View Overlay */}
          <div className="product-overlay">
            <Link 
              to={`/product/${product.id}`}
              className="btn btn-outline-light btn-sm"
            >
              Quick View
            </Link>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          {/* Product Category */}
          <small className="text-muted text-uppercase mb-1">
            {product.category}
          </small>
          
          {/* Product Title */}
          <h6 className="card-title fw-bold mb-2" style={{ 
            fontSize: "0.9rem",
            lineHeight: "1.3",
            minHeight: "2.4rem"
          }}>
            {product.title.length > 50 
              ? `${product.title.substring(0, 50)}...` 
              : product.title
            }
          </h6>
          
          {/* Rating */}
          <div className="mb-2">
            <span className="text-warning">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`fa fa-star${i < Math.floor(product.rating?.rate || 0) ? '' : '-o'}`}
                  style={{ fontSize: "0.8rem" }}
                />
              ))}
            </span>
            <small className="text-muted ms-1">
              ({product.rating?.count || 0})
            </small>
          </div>
          
          {/* Price */}
          <div className="mb-3">
            <span className="h5 fw-bold text-primary mb-0">
              ${product.price}
            </span>
            {product.price > 50 && (
              <small className="text-success ms-2">
                <i className="fa fa-truck me-1"></i>
                Free Shipping
              </small>
            )}
          </div>

          {/* Variant Selection */}
          <div className="mb-3">
            <label className="form-label small fw-bold mb-1">Size:</label>
            <select 
              className="form-select form-select-sm"
              value={selectedVariant}
              onChange={handleVariantChange}
              disabled={isOutOfStock}
            >
              {variantOptions.map((variant) => (
                <option 
                  key={variant.value} 
                  value={variant.value}
                  disabled={!variant.inStock}
                >
                  {variant.label} {!variant.inStock ? '(Out of Stock)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto">
            {isOutOfStock || isVariantOutOfStock ? (
              <button 
                className="btn btn-secondary w-100" 
                disabled
              >
                <i className="fa fa-times me-2"></i>
                Out of Stock
              </button>
            ) : (
              <button
                className="btn btn-primary w-100"
                onClick={handleAddToCart}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Adding...
                  </>
                ) : (
                  <>
                    <i className="fa fa-shopping-cart me-2"></i>
                    Add to Cart
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-footer bg-transparent border-0 pt-0">
          <div className="d-flex justify-content-between align-items-center">
            <Link 
              to={`/product/${product.id}`}
              className="text-decoration-none small"
            >
              View Details
            </Link>
            <button className="btn btn-link btn-sm p-0 text-muted">
              <i className="fa fa-heart-o"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number
    })
  }).isRequired
};

export default ProductCard;
