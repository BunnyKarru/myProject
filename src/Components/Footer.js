import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-gray-300 to-blue-400">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-2/3 md:mr-6">
        <div className="h-full">
          <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-700">
            Navigation
          </h3>
          <ul>
            <li className="mb-2">
              <Link
                className="text-base font-medium text-gray-700 hover:text-gray-900"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-base font-medium text-gray-700 hover:text-gray-900"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-2/3 mt-6 md:mt-0">
        <div>
          <p className="text-sm text-gray-600">
            Mobile: <a href="" className="text-blue-700">8074560627,8500939090</a><br />
            Email: <a href="mailto:example@example.com" className="text-blue-700">travelore@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



  );
}

export default Footer;