import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false); // Loading state for filters
  const [activeFilter, setActiveFilter] = useState("all"); // Track active filter
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={450} />
        </div>
      </>
    );
  };

  const filterProduct = async (cat) => {
    setFilterLoading(true);
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
    setActiveFilter(cat);
    setFilterLoading(false);
  };

  const showAllProducts = async () => {
    setFilterLoading(true);
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    setFilter(data);
    setActiveFilter("all");
    setFilterLoading(false);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="category-filters text-center py-5">
          <div className="filter-container">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={showAllProducts}
              disabled={filterLoading}
            >
              {filterLoading && activeFilter === "all" ? (
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              ) : (
                <i className="fa fa-th-large me-2"></i>
              )}
              All
            </button>
            <button
              className={`filter-btn ${activeFilter === "men's clothing" ? "active" : ""}`}
              onClick={() => filterProduct("men's clothing")}
              disabled={filterLoading}
            >
              {filterLoading && activeFilter === "men's clothing" ? (
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              ) : (
                <i className="fa fa-male me-2"></i>
              )}
              Men's Clothing
            </button>
            <button
              className={`filter-btn ${activeFilter === "women's clothing" ? "active" : ""}`}
              onClick={() => filterProduct("women's clothing")}
              disabled={filterLoading}
            >
              {filterLoading && activeFilter === "women's clothing" ? (
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              ) : (
                <i className="fa fa-female me-2"></i>
              )}
              Women's Clothing
            </button>
            <button
              className={`filter-btn ${activeFilter === "jewelery" ? "active" : ""}`}
              onClick={() => filterProduct("jewelery")}
              disabled={filterLoading}
            >
              {filterLoading && activeFilter === "jewelery" ? (
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              ) : (
                <i className="fa fa-diamond me-2"></i>
              )}
              Jewelery
            </button>
            <button
              className={`filter-btn ${activeFilter === "electronics" ? "active" : ""}`}
              onClick={() => filterProduct("electronics")}
              disabled={filterLoading}
            >
              {filterLoading && activeFilter === "electronics" ? (
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              ) : (
                <i className="fa fa-laptop me-2"></i>
              )}
              Electronics
            </button>
          </div>
        </div>

        <div className={`product-grid ${filterLoading ? 'filtering' : ''}`}>
          <div className="row">
            {filter.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </>
    );
  };
  
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
