import { Mail, MoveRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="w-full md:w-100 flex flex-col justify-center h-full sm:pt-9">
      {/* Top Section */}
      <div className="gap-10 flex flex-col justify-center">
        <div className="flex flex-col  px-6 pt-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-base text-primary-500 tracking-wider uppercase">
              Contact Information
            </span>
            <div className="flex-1 h-px bg-primary-500/30 max-w-10"></div>
          </div>

          <div className="flex items-start gap-2">
            <div className="text-primary-500 mt-1">
              <Mail className="w-6 h-6 stroke-2" />
            </div>
            <div>
              <h4 className="text-md lg:text-xl text-secondary-900 font-normal mb-1">
                Email Us
              </h4>
              <p className="text-sm lg:text-sm text-neutral-13">
                support@velarro.com
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-neutral-1 px-6 py-4.5 flex flex-col w-full">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-base leading-6 text-primary-500 tracking-wider uppercase">
              FOLLOW VELARRO
            </span>
            <div className="flex-1 h-px bg-primary-500/30 max-w-10"></div>
          </div>

          <h4 className="text-base lg:text-md text-secondary-900 mb-1">
            Stay Connected
          </h4>
          <p className="text-xs text-secondary-500 mb-6 font-light">
            Discover stories, collections, and behind-the-craft moments
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href="#"
              className="w-9 h-9 border border-neutral-5 bg-neutral-1 text-secondary-900 flex items-center justify-center hover:bg-neutral-50 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-sm border border-neutral-5 bg-neutral-1 text-secondary-900 flex items-center justify-center hover:bg-neutral-50 transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-sm border border-neutral-5 bg-neutral-1 text-secondary-900 flex items-center justify-center hover:bg-neutral-50 transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Find a store */}
        <div className="w-full border-t border-b border-neutral-300 py-8 px-1">
          <a
            href="#"
            className="flex items-center text-xs md:text-sm text-secondary-900 hover:text-primary-500 transition-colors uppercase tracking-wider"
          >
            FIND A STORE NEAR YOU{" "}
            <span className="ml-2 font-normal text-sm">
              <MoveRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
