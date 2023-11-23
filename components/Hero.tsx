"use client";
import Image from "next/image";
import { Button } from "@/components/index";

function Hero() {
  function handleClick() {}

  return (
    <div className="content flex w-[528px]">
      <div className="flex justify-center items-center">
        <div className="hidden SocialMenu w-4 h-[260px] flex-col justify-center items-center gap-4 sm:inline-flex ml-10 mt-6">
          <div className="Line3 w-[38px] h-[0px] origin-top-left -rotate-90 border border-orange-500"></div>
          <div className="Socials flex-col justify-start items-start gap-3 flex">
            <div className="SocialMediaLogo w-4 h-4 right-4 relative">
              <Image
                className="Subtract left-0 top-0 absolute"
                src="/assets/main-hero/facebook-logo.svg"
                height={16}
                width={16}
                alt="facebook"
              />
            </div>
            <div className="SocialMediaLogo w-4 h-4 right-4 relative">
              <Image
                className="Subtract left-0 top-0 absolute"
                src="/assets/main-hero/instagram-logo.svg"
                height={16}
                width={16}
                alt="instagram"
              />
            </div>

            <div className="SocialMediaLogo w-4 h-4 right-4 relative">
              <Image
                className="Subtract left-0 top-0 absolute"
                src="/assets/main-hero/telegram-logo.svg"
                height={16}
                width={16}
                alt="telegram-logo"
              />
            </div>

            <div className="SocialMediaLogo w-4 h-4 right-4 relative">
              <Image
                className="Subtract left-0 top-0 absolute"
                src="/assets/main-hero/whatsapp-logo.svg"
                height={16}
                width={16}
                alt="whatsapp-logo"
              />
            </div>

            <div className="SocialMediaLogo w-4 h-4 right-4 relative">
              <Image
                className="Subtract left-0 top-0 absolute"
                src="/assets/main-hero/twitter-logo.svg"
                height={16}
                width={16}
                alt="twitter-logo"
              />
            </div>
          </div>
          <div className="Line4 w-[38px] h-[0px] origin-top-left -rotate-90 border border-orange-500 relative top-10"></div>
        </div>
        <div className="bg-[#141414] bg-opacity-20 ml-0 sm:ml-10 p-8 z-30 flex flex-col flex-shrink-0">
          <h1 className="py-8 pr-8 text-white text-5xl font-extrabold tracking-wide whitespace-normal sm:whitespace-nowrap ">
            Enjoy your life with <span className="block">our comfortable</span>
            cars.
          </h1>

          <p className="py-8 pr-8 pt-0 text-white font-light w-[80%]">
            Carent is ready to serve the best experience in car rental.
          </p>
          <Button
            handleClick={handleClick}
            containerStyles={"w-fit"}
            title={"Explore Now"}
          />
        </div>
      </div>

      <div className="background-image"></div>
    </div>
  );
}

export default Hero;
