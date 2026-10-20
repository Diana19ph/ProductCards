function ProductCard({ image, heading, price, category, button }) {
  return (
    <div className="bg-[#DDDDDD] w-full p-4 flex flex-col justify-between h-full">
      <img
        src={image}
        alt={heading}
        className="w-full h-65 object-cover rounded-[5px] "
      />
      <h2 className="text-center text-[35px] mx-auto font-bold text-gray-800 mb-2">
        {heading}
      </h2>
      <h3 className="text-black font-sans text-[20px] line-clamp-5 mb-4">
        Price: {price}
      </h3>
      <h3 className="text-black font-sans text-[20px] line-clamp-5 mb-4">
        Category: {category}
      </h3>

      <button
        className="text-[20px] rounded-[5px] px-3 py-2 mb-3 text-center text-white bg-purple-600  hover:bg-purple-800
    hover:scale-105
    active:scale-95
    transition-all duration-300"
      >
        {button}
      </button>
    </div>
  );
}

export default ProductCard;
