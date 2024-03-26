import React, { useState } from "react";
import "./product.css";
import CFooter from "../components/c-footer/c-footer";
import { AnimatePresence, motion } from "framer-motion";

function Product() {
  const text = "Roadster".split(" ");
  const newtext = "Men Solid Jacket".split(" ");

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="products">
        <div className="product-section">
          <div className="product-section-heading">
            <p>Trending T-Shirt's</p>
          </div>
          <div className="product-section-div">
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/2/g/v/l-ts12-vebnor-original-imagymzpht8j8zau.jpeg?q=70&crop=true"
                alt="blue-tshirt"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/f/d/s-mens-hiltop-lycra-t-shirt-sti-original-imagx8n8pzxs5bad.jpeg?q=70"
                alt="gray-tshirt"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/y/7/s-togrrn-d141-tripr-original-imagxqfkypubyggk.jpeg?q=70"
                alt="green-tshirt"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                style={{ width: "14.24rem" }}
                src="https://rukminim2.flixcart.com/image/1600/1600/xif0q/t-shirt/a/0/w/xl-rzw01blackprint-rodzen-original-imagmptnzzgha3w3.jpeg?q=70&crop=false"
                alt="blue-tshirt"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/d/l-rzw01skullblack-rodzen-original-imagnemfy9fckzuq.jpeg?q=70"
                alt="black-tshirt"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/q/e/s-3813-the-dry-state-original-imagpghuhhqyeeza.jpeg?q=70"
                alt="pink-tshirt"
              />
            </div>
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
                      <motion.span className="product-info-heading"
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
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/w/v/e/-original-imagj4qqzenj3hmh.jpeg?q=70"
                alt="blue-jeans"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/t/i/26-9344-fashionfibre-original-imagrb6bmzxfycht.jpeg?q=70"
                alt="gray-jeans"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/u/e/o/30-g2-mj-gr-103-comfits-original-imagrquh8vqz9znc.jpeg?q=70"
                alt="green-jeans"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                style={{ width: "14.24rem" }}
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/r/b/p/32-basic-jns-15-blue-justfaith-original-imafs2z6kzqjmeet-bb.jpeg?q=70"
                alt="blue-jeans"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/ky0g58w0/shopsy-jean/8/p/y/28-black-knee-cut-jeans-comfits-original-imagaccjjya9gqzn.jpeg?q=70"
                alt="black-jeans"
              />
            </div>
            <div className="product-section-item">
              <img
                className="product-section-image"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/9/a/y/28-2322605-roadster-original-imafgmqfbqykzzag-bb.jpeg?q=70"
                alt="pink-jeans"
              />
            </div>
          </div>
        </div>
        <CFooter />
      </div>
    </>
  );
}

export default Product;
