import { useState, useEffect } from "react";
import {
  RiPhoneLine,
  RiMailLine,
  RiInstagramLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiMenuLine,
  RiCloseLine,
  RiInfoCardLine,
} from "react-icons/ri";

const TopHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Promotional Banner with Marquee */}
      <div className="bg-white text-gray-700 text-sm py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="animate-marquee whitespace-nowrap">
            📢 Summer Sale Now Live! Book Early & Save Up to 25% on Your Next
            Trip! Hurry, limited-time offer! 📢 | Need assistance? Call our
            Customer Support at{" "}
            <a
              href="tel:+919999233932"
              className="underline hover:text-orange-100"
            >
              📞 (+91) 9999 233 932
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📢 Summer Sale Now Live! Book Early &
            Save Up to 25% on Your Next Trip! Hurry, limited-time offer! 📢 |
            Need assistance? Call our Customer Support at{" "}
            <a
              href="tel:+919999233932"
              className="underline hover:text-orange-100"
            >
              📞 (+91) 9999 233 932
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {/* Contact Info & Social Media Bar - Changed to orange theme */}
      <div className="bg-orange-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <a
              href="mailto:info@reenaholidays.com"
              className="flex items-center hover:text-orange-100 text-xs md:text-base"
            >
              <RiMailLine className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">info@reenaholidays.com</span>
            </a>
            <a
              href="tel:+919999233932"
              className="flex items-center hover:text-orange-100 text-xs md:text-base"
            >
              <RiPhoneLine className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">+91 9999 233 932</span>
            </a>
          </div>

          {/* Right Side - GST Info & Social Media */}
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline mr-6 text-sm">
              Reena Holidays GST No.: 07EJMPD5911A1ZL
            </span>
            <div className="flex space-x-2 md:space-x-4">
              <a
                href="#"
                className="hover:text-orange-100 text-sm md:text-base"
              >
                <RiFacebookLine />
              </a>
              <a
                href="#"
                className="hover:text-orange-100 text-sm md:text-base"
              >
                <RiInstagramLine />
              </a>
              <a
                href="#"
                className="hover:text-orange-100 text-sm md:text-base"
              >
                <RiYoutubeLine />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="ml-4 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <RiCloseLine size={20} />
              ) : (
                <RiInfoCardLine size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && showMobileMenu && (
          <div className="container mx-auto px-4 pt-3 pb-2 border-t border-orange-400 mt-2">
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@reenaholidays.com"
                className="flex items-center hover:text-orange-100"
              >
                <RiMailLine className="mr-2" />
                <span>info@reenaholidays.com</span>
              </a>
              <a
                href="tel:+919999233932"
                className="flex items-center hover:text-orange-100"
              >
                <RiPhoneLine className="mr-2" />
                <span>+91 9999 233 932</span>
              </a>
              <div className="text-xs pt-1">
                Reena Holidays GST No.: 07EJMPD5911A1ZL
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
