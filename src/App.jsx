import ProductCard from "./productCard/ProductCard";
function App() {
  const cards = [
    {
      id: 1,
      image: "https://bakubookcenter.az/en/get-product-image?fileId=698",
      heading: "Harry Potter books",
      price: "179.99 ₼",
      category: "Book",
      button: "Add to cart",
    },
    {
      id: 2,
      image:
        "https://images.openai.com/static-rsc-4/ReKLqZc4Z7TM6REHPVS4By-zVAT8kji0rmDMCwSYi9vKOUyNnEh1bsNMnodkGisyz-Le6aob_lmAL0sXn47gT1rjTY2k0N4JpC_FUQr4YIOvHqjma2qUTQ60-zv1ipFYxJQlCcJGMczXUYcG668tXZ2m-AYohphgVe5AmlAaEe93gEfvh_MrSjCZYhK_ueBm?purpose=fullsize",
      heading: "Vintage hour",
      price: "89.99 ₼",
      category: "accessory",
      button: "Add to cart",
    },
    {
      id: 3,
      image:
        "https://images.openai.com/static-rsc-4/WF9p0EuVcto2OgHfJXxjpoZfEBVhuRDdx80GzFPBjkT3xexFw0TQ9TEsMdIxeQcH_IxjLsaxzvVkW5ZYqi2uH_jd3Pk76xHbfmR-YObO5lW1FnjrWUuDSxcrs9tpROBaP98H5_Rr4OrB2seQoBvqL5i0EnKl_ngrqyzhL93fIMZnDo01qNePAum3OtdzkjKB?purpose=fullsize",
      heading: "Secret journal",
      price: "35.99 ₼",
      category: "Stationery",
      button: "Add to cart",
    },
    {
      id: 4,
      image: "/src/assets/Screenshot_20261021_010705_Gallery.jpg.jpeg",
      heading: "Quzu Memo",
      price: "29.99 ₼",
      category: "Toys",
      button: "Add to cart",
    },
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-[#ACBAC4]">
      <h1 className="text-[70px] font-bold  text-gray-700 mb-8">PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1500px]">
        {cards.map((element) => (
          <ProductCard
            key={element.id}
            image={element.image}
            heading={element.heading}
            price={element.price}
            category={element.category}
            button={element.button}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
