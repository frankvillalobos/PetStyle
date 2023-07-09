import { useEffect, useState } from "react";
import Card from './Card';
import ProductList from './ProductList.json';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = ProductList;
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div id="cards__container">
      {products.map((product) => (
        <Card
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default CardList;



