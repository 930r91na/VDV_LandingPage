// Struct of products section
import { Description } from "@headlessui/react/dist/components/description/description";
import { describe } from "node:test";
import React from "react";
import ProductCard from "../Utils/ProductsCard";

enum ProductType {
  water,
  plastic,
}

const products = [
  {
    name: "Botella de 100 ml",
    description: "Botella con etiqueta personalizada",
    image: "../assets/bottle.png",
    price: 10.0,
    type: ProductType.plastic,
  },
  {
    name: "Botella de  500 ml",
    description: "Botella con etiqueta personalizada",
    image: "/../assets/bottle.png",
    price: 15.0,
    type: ProductType.plastic,
  },
  {
    name: "Garrafon de  20 lts",
    description: "Compra de garrafon de agua purificada",
    image: "/../assets/garrafon.png",
    price: 50.0,
    type: ProductType.plastic,
  },
  {
    name: "Garrafon de  20 lts",
    description: "Llenado de garrafon de agua purificada",
    image: "/../assets/garrafon.png",
    price: 15,
    type: ProductType.water,
  },
];

const OurProducts = () => {
  return (
    <section className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h1>Productos</h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          {products.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              imageUrl={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurProducts;
