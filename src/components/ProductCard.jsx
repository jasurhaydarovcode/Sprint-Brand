const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mt-10 bg-white border border-gray-200 rounded-lg shadow">
      <a href={product.link}>
        <img 
          className="rounded w-72 h-96 object-cover mx-auto" 
          src={product.image} 
          alt={product.title} 
        />
      </a>
      <div className="p-5">
        <a href={product.link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
