export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-sm text-gray-500 tracking-widest">
        SNEAKER COMPANY
      </h1>
      <h1 className="text-5xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-600 font-sans text-lg">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-bold">$125.00</h1>
          <span className="bg-black text-white px-3 py-1 rounded-md font-semibold">
            50%
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-500 line-through">
          $250.00
        </h2>
      </div>
    </div>
  );
}
