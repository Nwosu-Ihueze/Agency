// components/PricingSection.jsx

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#F7F8FC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-900 font-volkhov">Pricing</h2>
          <p className="mt-4 text-lg text-[#595959] font-poppins">
            Our pricing is transparent so that you know what you are being charged for.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-4">
          <div className="bg-white md:rounded-l-xl p-6 md:h-3/4 md:my-16">
            <h3 className="text-2xl font-semibold text-[#141718] mb-4 font-poppins">Lite</h3>
            <p className="text-[#595959] text-base mb-4 font-poppins">Landing Page</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-semibold text-[#191919] font-poppins">$1000</span>
              <span className="text-[#595959] ml-1 font-poppins">/wk</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">UI/UX Design</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Frontend development</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">UX copy</span>
                </li>
            </ul>
            <button className="w-full bg-white font-poppins text-[#FA7436] border border-[#FA7436] border-xl px-6 py-3 rounded-md hover:bg-[#FA7436] hover:text-white transition-colors duration-300">
              Select
            </button>
          </div>
          {/* Add the other two pricing cards here */}
          <div className="bg-white p-6 md:h-5/6 md:my-12">
            <h3 className="text-2xl font-semibold text-[#141718] mb-4 font-poppins">Basic</h3>
            <p className="text-[#595959] mb-4 font-poppins">Websites and webapp</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-semibold text-[#595959] font-poppins">$1500</span>
              <span className="text-[#595959] ml-1 font-poppins">/wk</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">UI/UX Design</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Frontend development</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">UX copy</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Maintenance</span>
                </li>
            </ul>
            <button className="w-full bg-white font-poppins text-[#FA7436] border border-[#FA7436] border-xl px-6 py-3 rounded-md hover:bg-[#FA7436] hover:text-white transition-colors duration-300">
              Select
            </button>
          </div>
          <div className="bg-black py-16 px-8 text-white rounded-xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 text-[#3FDD78] font-poppins">Pro</h1>
              <h2 className="text-2xl mb-8">AI Feature</h2>
              <p className="text-5xl font-bold mb-8 font-poppins">$3500<span className="text-2xl font-poppins">/wk</span></p>
              <ul role="list" className="space-y-5 my-7">
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Data preparation and processing</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Model building and integration</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Model fine tuning</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Model deployment and maintenance</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Data collection</span><span className="bg-[#FF97E8] text-[#222222] px-2 py-1 rounded-md ml-2 font-poppins">+$300/1,000 data</span>
                </li>
            </ul>
              <button className="w-full text-white font-poppins bg-[#FA7436] px-6 py-3 rounded-md shadow-sm hover:bg-[#FA7436] hover:text-white transition-colors duration-300">
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