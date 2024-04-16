interface ProductProps{
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

const ProductCard: React.FC<ProductProps> = ({ name, description, price, imageUrl }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col items-center space-y-4">
                <img className="h-32 w-32 md:h-48 md:w-48 rounded object-cover" src={imageUrl} alt={`Image of ${name}`} />
                <div className="text-center mt-2">
                    <p className="text-sm font-medium leading-6 text-gray-600">
                        {description}
                    </p>
                </div>
                <div className="self-start text-left">
                    <p className="text-lg font-semibold leading-6 text-gray-800">
                        ${price}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;