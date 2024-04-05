// components/PricingSection.jsx

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#F7F8FC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 font-volkhov">Pricing</h2>
          <p className="mt-4 text-lg text-[#595959] font-poppins">
            Our pricing is transparent so that you know what you are being charged for.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-4">
          <div className="bg-white md:rounded-l-xl p-6 md:h-3/4 md:my-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Lite</h3>
            <p className="text-gray-600 mb-4 font-poppins">Landing Page</p>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-extrabold text-gray-900 font-poppins">$1000</span>
              <span className="text-[#595959] ml-1 font-poppins">/wk</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 mb-6 font-poppins">
              <li>UI/UX design</li>
              <li>Frontend development</li>
              <li>UX copy</li>
            </ul>
            <button className="w-full bg-white font-poppins text-orange-500 border border-orange-500 px-6 py-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Select
            </button>
          </div>
          {/* Add the other two pricing cards here */}
          <div className="bg-white p-6 md:h-5/6 md:my-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Basic</h3>
            <p className="text-gray-600 mb-4 font-poppins">Websites and webapp</p>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-extrabold text-gray-900 font-poppins">$1500</span>
              <span className="text-[#595959] ml-1 font-poppins">/wk</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 mb-6 font-poppins">
              <li>UI/UX design</li>
              <li>Frontend development</li>
              <li>UX copy</li>
              <li>Maintenance</li>
            </ul>
            <button className="w-full bg-white font-poppins text-orange-500 border border-orange-500 px-6 py-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Select
            </button>
          </div>
          <div className="bg-black py-16 px-8 text-white rounded-xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 text-[#3FDD78] font-poppins">Pro</h1>
              <h2 className="text-2xl mb-8">AI Feature</h2>
              <p className="text-6xl font-bold mb-8 font-poppins">$3500<span className="text-2xl font-poppins">/wk</span></p>
              <ul className="list-disc pl-6 mb-8 font-poppins">
                <li>Data preparation and processing</li>
                <li>Model building and integration</li>
                <li>Model fine tuning</li>
                <li>Model deployment and maintenance</li>
                <li>Data collection <span className="bg-[#FF97E8] text-[#222222] px-2 py-1 rounded-md ml-2 font-poppins">+$300/1,000</span></li>
              </ul>
              <button className="w-full text-white font-poppins bg-[#FA7436] px-6 py-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-colors duration-300">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;