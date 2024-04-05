"use client";
import Link from "next/link";
import Header from "../Header";


const HeroSection = () => {
    const handleClick = () => {
        const email = "nwosunneoma@gmail.com"; // Replace with your desired email address
        const subject = "Let's Talk"; // Replace with your desired subject line
        const body = "Hi there,\n\nI would like to discuss your services further. Please get back to me at your earliest convenience.\n\nBest regards,\n[Your Name]"; // Replace with your desired body content
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
      };
    return (
        <>
        <Header />

        <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#FEFCFB] pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
        <div className="container">
        <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
            <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
            >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-volkhov">
                🚀 <span className="text-[#FA7436] font-volkhov">Launch </span>Your Idea with Us! 🚀
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-[#595959] sm:text-lg md:text-xl font-poppins">
                At 7Decagon, we&apos;re here to make your vision a reality. Whether you&apos;re a startup or an established company, we specialize in crafting your Minimum Viable Product (MVP) and bringing your ideas to life.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div
                    // onClick={handleOpenEmail}
                    className="rounded-md bg-[transparent] font-poppins border border-xl border-[#FA7436] px-8 py-4 text-base font-semibold text-[#FA7436] duration-300 ease-in-out hover:bg-[#FA7436] hover:text-white" onClick={handleClick}
                >
                    Let&apos;s Talk
                </div>
                <Link
                    href="#pricing"
                    className="inline-block rounded-md bg-[#FA7436] font-poppins px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-opacity-90"
                >
                    See Pricing
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
        </section>
        </>

    );
  };
  
  export default HeroSection;