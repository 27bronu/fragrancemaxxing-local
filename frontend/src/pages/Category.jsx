import Item from "../components/Item";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);

  return (
    <section className="max_padd_container py-12 xl:py-28 ">
      <div>
        <div>
          <img src={banner} alt="" className="block mb-7 mx-auto" />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  size={item.size}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
