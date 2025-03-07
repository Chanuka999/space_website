import React from "react";
import { FaInstagram, FaFacebook, FaLinkdin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive<span className="font-bold">Update</span>
              straigt to ypur inbox.
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 bg-gray-800 border-gray-200 border-2"
                placeholder="email"
              />
              <button className="primary-button">Ok</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">SERVICES</a>
                  </li>
                  <li>
                    <a href="#">LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">SERVICES</a>
                  </li>
                  <li>
                    <a href="#">LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Contact US</h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Laxapana,Sri lanka</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdMessage />
                  <p>chanuka12@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div>
              <span className="text-sm text-gray-400">
                copyright @copy: 2025 by CR
              </span>
              <div>
                <a href="#">
                  <FaInstagram className="text-4xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-4xl" />
                </a>
                <a href="#">
                  <FaLinkdin className="text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
