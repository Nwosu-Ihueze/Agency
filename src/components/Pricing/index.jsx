// components/PricingSection.jsx

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#F7F8FC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-900 font-volkhov">Pricing</h2>
          <p className="mt-4 text-lg text-[#595959] font-poppins">
            Pricing flexibility you can pause or stop at any time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-4">
          <div className="bg-white md:rounded-l-xl p-6 md:h-fit md:my-16">
            <h3 className="text-2xl font-semibold text-[#141718] mb-4 font-poppins">Starter</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-semibold text-[#191919] font-poppins">$750</span>
              <span className="text-[#595959] ml-1 font-poppins">/wk</span>
            </div>
            <p className="text-[#595959] text-base mb-4 font-poppins">Great for proof of concepts and validation</p>
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
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Basic AI integration</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Includes 15 hours of work</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">One request at a time</span>
                </li>
            </ul>
            <button className="w-full bg-white font-poppins text-[#FA7436] border border-[#FA7436] border-xl px-6 py-3 rounded-md hover:bg-[#FA7436] hover:text-white transition-colors duration-300">
              Book A Call
            </button>
          </div>
          {/* Add the other two pricing cards here */}
          <div className="bg-white p-6 md:h-fit md:my-12">
            <h3 className="text-2xl font-semibold text-[#141718] mb-4 font-poppins">Growth</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-semibold text-[#191919] font-poppins">$2000</span>
              <span className="text-[#595959] ml-1 font-poppins">/wk</span>
            </div>
            <p className="text-[#595959] mb-4 font-poppins">For startups, validated features & products</p>
            <ul role="list" className="space-y-5 my-7">
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Comprehensive UI/UX design</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Advanced frontend development</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Custom AI model building and integration</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Ongoing AI model maintenance</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Includes 20 hours of week</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#595959" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-[#595959] ms-3 font-poppins">Two requests at a time</span>
                </li>
            </ul>
            <button className="w-full bg-white font-poppins text-[#FA7436] border border-[#FA7436] border-xl px-6 py-3 rounded-md hover:bg-[#FA7436] hover:text-white transition-colors duration-300">
              Book A Call
            </button>
          </div>
          <div className="bg-black py-16 px-8 text-white rounded-xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 text-[#3FDD78] font-poppins">Scale</h1>
              <div className="flex items-baseline mb-6">
              <span className="text-4xl font-semibold font-poppins">$4500</span>
              <span className="ml-1 font-poppins">/wk</span>
            </div>
            <p className="mb-4 font-poppins">For established startups and companies</p>
              <ul role="list" className="space-y-5 my-7">
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Enterprise-grade UI/UX design</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Complex frontend development</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Bespoke AI solutions</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Dedicated project manager</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Includes 30 hours of work</span>
                </li>
                <li class="flex items-center">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-white ms-3 font-poppins">Unlimited requests</span>
                </li>
            </ul>
              <button className="w-full text-white font-poppins bg-[#FA7436] px-6 py-3 rounded-md shadow-sm hover:bg-[#FA621C] hover:text-white transition-colors duration-300">
                Book A Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;