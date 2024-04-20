interface ProductProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className="bg-gradient-to-t from-blue-100 to-transparent p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{name}</h3>
            <img
                className="h-40 w-40 md:h-56 md:w-56 rounded-lg object-cover" // Responsive images
                src={imageUrl}
                alt={name}
            />
            <div className="text-center">
                <p className="text-sm md:text-base text-black-200 mt-2">
                    {description}
                </p>
            </div>
            <div className="self-stretch text-center mt-4">
                <p className="text-xl font-bold text-black-100">
                    Precio: ${price} 
                </p>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;
