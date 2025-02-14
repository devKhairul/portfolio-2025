import { SlArrowRightCircle } from "react-icons/sl";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image src="/footer-grid.svg" alt="grid" width={1000} height={1000} className="w-full h-full opacity-50 " />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[35vw]">
          Are you looking for the next <span className="text-yellow-500 font-extrabold">front-end</span> developer to join your team?
        </h1>
        
        <a href="https://linkedin.com/in/devkhairul" target="_blank">
            <MagicButton
              title="Let's Chat"
              icon={<SlArrowRightCircle />}
              position="right"
            />
          </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; { new Date().getFullYear() } Khairul Alam
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.url} target="_blank">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
