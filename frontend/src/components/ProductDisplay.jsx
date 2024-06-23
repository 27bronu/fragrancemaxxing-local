import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-2 xl:flex-1">
          <div>
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="flex-col flex xl:flex-[1.7]">
          <h3 className="h3 ">{product.brand} | {product.name}</h3>
          <div className="flex gap-x-6 medium-20 my-4 ">
            <div className="line-through ">{product.old_price}€</div>
            <div className="text-secondary">{product.new_price}€</div>
          </div>
          <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
            {product.size}ml
          </div>
          <div className="mb-4">
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
              >
                Add to cart
              </button>
              <button className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest">
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
