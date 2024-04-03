import React, { useEffect, useState } from "react";
import "./product.css";
import CFooter from "../components/c-footer/c-footer";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";


//  
const JacketProducts = [
  {
    id: 1,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/s/y/f/-original-imagyj95afhctgfh.jpeg?q=70",
    alt: "blue-denim",
  },
  {
    id: 2,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/j/0/y/xxl-1-no-mntnw-4023-montrez-original-imag7cp8ggyzn5by-bb.jpeg?q=70",
    alt: "gray-denim",
  },
  {
    id: 3,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/t/d/n/l-kttmensdenimjacket87-kotty-original-imafng4uh2dh8xsx-bb.jpeg?q=70",
    alt: "green-denim",
  },
  {
    id: 4,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/m/z/7/xl-2437-buynewtrend-original-imag4dnvmzckrcp6-bb.jpeg?q=70",
    alt: "blue-denim",
  },
  {
    id: 5,
    src: "https://rukminim2.flixcart.com/image/612/612/kjhgzgw0-0/jacket/n/g/t/xxl-12288660-roadster-original-imafzfnjresfydba.jpeg?q=70",
    alt: "black-denim",
  },
  {
    id: 6,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/u/m/f/34-denim-jacket-rohan-fashion-hub-original-imafv82ggqqgc9uf-bb.jpeg?q=70",
    alt: "pink-denim",
  },
];

const JeansProducts = [
  {
    id: 1,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/w/v/e/-original-imagj4qqzenj3hmh.jpeg?q=70",
    alt: "blue-jeans",
  },
  {
    id: 2,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/t/i/26-9344-fashionfibre-original-imagrb6bmzxfycht.jpeg?q=70",
    alt: "gray-jeans",
  },
  {
    id: 3,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/u/e/o/30-g2-mj-gr-103-comfits-original-imagrquh8vqz9znc.jpeg?q=70",
    alt: "green-jeans",
  },
  {
    id: 4,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/r/b/p/32-basic-jns-15-blue-justfaith-original-imafs2z6kzqjmeet-bb.jpeg?q=70",
    alt: "blue-jeans",
  },
  {
    id: 5,
    src: "https://rukminim2.flixcart.com/image/612/612/ky0g58w0/shopsy-jean/8/p/y/28-black-knee-cut-jeans-comfits-original-imagaccjjya9gqzn.jpeg?q=70",
    alt: "black-jeans",
  },
  {
    id: 6,
    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/9/a/y/28-2322605-roadster-original-imafgmqfbqykzzag-bb.jpeg?q=70",
    alt: "pink-jeans",
  },
];

function Product() {
  const [isHovered, setIsHovered] = useState(false);
  const[tshirt, setTshirts] = useState([]);
  const text = "Roadster".split(" ");
  const newtext = "Men Solid Jacket".split(" ");
  
  useEffect(() =>{
    getTshirts();
  },[]);


  const getTshirts = () =>{
    axios.get("http://localhost:4000/user/item/products?size=6")
    .then((item) =>{
      setTshirts(item.data);
      console.log(item.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  };


  return (
    <>
      <div className="products">
        <div className="product-section">
          <div className="product-section-heading">
            <p>Trending T-Shirt's</p>
          </div>
          <div className="product-section-div">
            {tshirt.map((item, i) => {
              return (
                <div className="product-section-item"  key={`tshinkj-${i}`}>
                  <Link to={`/products/${item._id}`}>
                    <img
                      className="product-section-image"
                      src={item.src}
                      alt={item.alt}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-section">
          <div className="product-section-heading">
            <p> Denims</p>
          </div>
          <div className="product-section-div">
            <div
              onMouseOver={(e) => {
                setIsHovered(true);
              }}
              onMouseOut={(e) => {
                setIsHovered(false);
              }}
              className="product-section-item"
            >
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/s/y/f/-original-imagyj95afhctgfh.jpeg?q=70"
                alt="blue-denim"
              />
              <div className="product-info">
                <AnimatePresence>
                  {isHovered ? (
                    text.map((el, i) => (
                      <motion.span
                        className="product-info-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.25,
                          delay: i / 100000,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))
                  ) : (
                    <></>
                  )}
                </AnimatePresence>
                <p className="product-info-desc">Men Solid Jacket</p>
                <p className="product-info-price">₹870</p>
              </div>
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/j/0/y/xxl-1-no-mntnw-4023-montrez-original-imag7cp8ggyzn5by-bb.jpeg?q=70"
                alt="gray-denim"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/t/d/n/l-kttmensdenimjacket87-kotty-original-imafng4uh2dh8xsx-bb.jpeg?q=70"
                alt="green-denim"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                style={{ width: "14.24rem" }}
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/m/z/7/xl-2437-buynewtrend-original-imag4dnvmzckrcp6-bb.jpeg?q=70"
                alt="blue-denim"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/kjhgzgw0-0/jacket/n/g/t/xxl-12288660-roadster-original-imafzfnjresfydba.jpeg?q=70"
                alt="black-denim"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/u/m/f/34-denim-jacket-rohan-fashion-hub-original-imafv82ggqqgc9uf-bb.jpeg?q=70"
                alt="pink-denim"
              />
            </div>
          </div>
        </div>
        <div className="product-section">
          <div className="product-section-heading">
            <p>Jeans</p>
          </div>
          <div className="product-section-div">
            {JeansProducts.map((item, i) => {
              return (
                <div className="product-section-item" key={`fusnl-${i}`}>
                  <Link to="productdetails" >
                    <img
                      className="product-section-image"
                      src={item.src}
                      alt={item.alt}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <CFooter />
      </div>
    </>
  );
}

export default Product;
