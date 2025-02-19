const Shipping = () => {
  return (
    <div className="flex flex-col gap-20 mt-24 px-5 w-full font-clash">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl font-semibold">Shipping Policy</h1>
        <div className="flex flex-col gap-8 text-2xl font-light text-gray-800">
          <p>
            We are committed to delivering your orders promptly and efficiently.
            All shipping charges will be calculated based on your location and
            added to your final bill. Please note that additional charges may be
            incurred for special handling, remote locations, or expedited
            delivery services.
          </p>

          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-medium">Delivery Timeframes</h2>
            <ul className="flex gap-4 flex-col">
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Within Lagos: 1-2 business days</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Outside Lagos: 3-5 business days</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Remote Areas: 5-7 business days</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-medium">Additional Information</h2>
            <ul className="flex gap-4 flex-col">
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Express shipping available at additional cost</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>
                Special handling fees apply for fragile or oversized items
              </li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>
                Remote location surcharges will be communicated before delivery
              </li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Free shipping on orders above ₦50,000 within Lagos</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Tracking information will be provided via email and SMS</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-medium">Important Notes</h2>
            <ul className="flex gap-4 flex-col">
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>All shipping charges are non-refundable</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>Delivery times may vary during peak periods or holidays</li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>
                Customer must provide accurate delivery information to avoid
                delays
              </li>
              <span className="border-[1px] border-dashed border-gray-300 w-full"></span>
              <li>
                We reserve the right to change shipping rates without prior
                notice
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
