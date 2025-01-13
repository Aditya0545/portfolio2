import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  // Function to handle LinkedIn deep linking
  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    
    // Only handle LinkedIn links
    if (!link.includes('linkedin')) {
      window.open(link, '_blank');
      return;
    }

    // Your LinkedIn profile ID or username
    const linkedInProfile = 'aditya0545'; // Updated to your actual profile ID

    // Deep link URLs
    const mobileDeepLink = `linkedin://profile/${linkedInProfile}`;
    const webUrl = `https://www.linkedin.com/in/${linkedInProfile}`;
    
    // Try opening the app first
    const tryDeepLink = () => {
      const start = new Date().getTime();
      
      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = mobileDeepLink;
      document.body.appendChild(iframe);
      
      // If app doesn't open within 2 seconds, open in browser
      setTimeout(() => {
        const elapsed = new Date().getTime() - start;
        if (elapsed < 2000) {
          window.location.href = webUrl;
        }
      }, 1500);
    };

    // Check if on mobile
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      tryDeepLink();
    } else {
      // On desktop, just open the web URL
      window.open(webUrl, '_blank');
    }
  };

  return (
    <footer id="contact" className="w-full pt-20 pb-10 px-4 md:px-0 scroll-mt-28">
      <div className="flex flex-col items-center">
        <h1 className="heading text-2xl md:text-4xl lg:text-5xl lg:max-w-[45vw] px-4 text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-sm md:text-base px-4">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:adityakumar2019.ak@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <p className="text-xs md:text-base md:font-normal font-light"></p>

        <div className="flex items-center gap-4 md:gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              onClick={(e) => handleLinkedInClick(e, info.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt={`icon-${info.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
