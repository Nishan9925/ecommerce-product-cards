import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar, ProductCard } from "../components";
import "../css/ProductCard.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.slice(0, 4).map((item) => {
              console.log("Product item:", item); // Debug log
              console.log("Image URL:", item.image); // Debug log
              
              return (
                <div key={item.id} className="mx-4" style={{ width: "280px", flexShrink: 0 }}>
                  <div className="card product-card h-100 shadow-sm border-0">
                    {/* Product Image */}
                    <div className="product-image-container position-relative">
                      <img
                        className="card-img-top p-3"
                        src={item.image}
                        alt={item.title}
                        style={{ 
                          height: "200px", 
                          width: "100%",
                          objectFit: "contain",
                          transition: "transform 0.3s ease",
                          backgroundColor: "#f8f9fa",
                          border: "1px solid #dee2e6"
                        }}
                        onLoad={() => console.log("Image loaded successfully:", item.image)}
                        onError={(e) => {
                          console.log("Image failed to load:", item.image);
                          // Hide the image if it fails to load
                          e.target.style.display = "none";
                        }}
                      />
                      
                      {/* Quick View Overlay */}
                      <div className="product-overlay">
                        <Link 
                          to={`/product/${item.id}`}
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
                        {item.category}
                      </small>
                      
                      {/* Product Title */}
                      <h6 className="card-title fw-bold mb-2" style={{ 
                        fontSize: "0.9rem",
                        lineHeight: "1.3",
                        minHeight: "2.4rem"
                      }}>
                        {item.title.length > 40 
                          ? `${item.title.substring(0, 40)}...` 
                          : item.title
                        }
                      </h6>
                      
                      {/* Rating */}
                      <div className="mb-2">
                        <span className="text-warning">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i} 
                              className={`fa fa-star${i < Math.floor(item.rating?.rate || 0) ? '' : '-o'}`}
                              style={{ fontSize: "0.8rem" }}
                            />
                          ))}
                        </span>
                        <small className="text-muted ms-1">
                          ({item.rating?.count || 0})
                        </small>
                      </div>
                      
                      {/* Price */}
                      <div className="mb-3">
                        <span className="h5 fw-bold text-primary mb-0">
                          ${item.price}
                        </span>
                        {item.price > 50 && (
                          <small className="text-success ms-2">
                            <i className="fa fa-truck me-1"></i>
                            Free Shipping
                          </small>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto">
                        <button
                          className="btn btn-primary w-100 btn-sm"
                          onClick={() => addProduct(item)}
                        >
                          <i className="fa fa-shopping-cart me-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        
        {/* Desktop Similar Products */}
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="mb-4">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>

        {/* Mobile Similar Products */}
        <div className="row my-5 py-5 d-md-none">
          <div className="col-12">
            <h2 className="mb-4">You may also Like</h2>
            {loading2 ? (
              <div className="row">
                <div className="col-6 mb-3">
                  <Skeleton height={400} />
                </div>
                <div className="col-6 mb-3">
                  <Skeleton height={400} />
                </div>
                <div className="col-6 mb-3">
                  <Skeleton height={400} />
                </div>
                <div className="col-6 mb-3">
                  <Skeleton height={400} />
                </div>
              </div>
            ) : (
              <div className="row">
                {similarProducts.slice(0, 4).map((item) => (
                  <div key={item.id} className="col-6 mb-3">
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
