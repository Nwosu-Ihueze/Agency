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

            <section id="home" class="bg-[#FEFCFB]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-10 text-[#222222] md:text-5xl lg:text-6xl font-volkhov">🚀 <span className="text-[#FA7436] font-volkhov">Launch </span>Your Idea with Us! 🚀</h1>
                    <p class="mb-8 text-lg font-normal text-[#595959] lg:text-xl sm:px-16 xl:px-48 font-poppins"> At 7Decagon, we&apos;re here to make your vision a reality. Whether you&apos;re a startup or an established company, we specialize in crafting your Minimum Viable Product (MVP) and bringing your ideas to life.</p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium font-poppins text-center text-white rounded-lg bg-[#FA7436] hover:bg-[#FA621C] drop-shadow-md drop-shadow-[#FDDBCC]" onClick={handleClick}>
                            Let&apos;s Talk
                        </a>
                        <a href="#pricing" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium font-poppins text-center text-[#FA7436] rounded-lg border border-lg border-[#FA7436] hover:bg-[#FA7436] hover:text-white">
                            See Pricing
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
};

export default HeroSection;