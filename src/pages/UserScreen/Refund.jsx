export const Refund = () => {
  return (
    <div className="flex flex-col gap-20 mt-24 px-5 w-full font-clash">
      <div className="flex flex-col gap-10 max-md:gap-5">
        <h1 className="text-6xl font-medium max-md:text-4xl">Return Policy</h1>
        <div className="flex flex-col gap-8">
          <span className="text-2xl text-gray-800 max-md:text-lg">
            We offer a 24-48 hour return window for all products from the
            delivery date. If you are not satisfied with your purchase, you can
            return it for a full refund or exchange it for another item.
          </span>
          <div className="flex flex-col gap-5 max-md:gap-3">
            <span className="text-2xl text-gray-800 max-md:text-xl max-md:font-medium">
              Requests:
            </span>
            <ul className="flex gap-4 flex-col text-2xl max-md:text-lg text-gray-800">
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>
                Items omitted from the order, damaged, defective or incomplete
              </li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Refund on items or orders yet to be processed.</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Outside of the above, no refund will be given.</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Delivery charges not refundable.</li>
            </ul>
          </div>
        </div>
      </div>

      <span className="border-[1px] border-dashed border-gray-800 w-full"></span>

      <div className="flex flex-col gap-10">
        <h1 className="text-6xl font-medium">Refund Policy</h1>
        <div className="flex flex-col gap-4 text-2xl text-gray-800">
          <p>
            Refund on items or orders yet to be processed. Refund on items or
            Orders yet to be processed. Refund on items or Orders yet to be
            processed.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-2xl text-gray-800">Requests:</span>
          <ul className="flex gap-4 flex-col text-2xl text-gray-800">
            <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
            <li>
              Items recieved 48 hours (Outside Lagos) & 12 hours (Within Lagos)
              after delivery date
            </li>
            <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
            <li>Items recieved unused, undamaged and in original packaging</li>
            <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
            <li>Return shipping is at the expense of the customer</li>
            <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
            <li>Exchange items of the same design as previous purchase</li>
            <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
            <li>
              Exchange items correctly delivered as requested by buyer will
              attract extra charges
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
