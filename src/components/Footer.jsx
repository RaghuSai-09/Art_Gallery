import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        }, []);
  return (
    <footer className="bg-gray-900 text-white py-8 px-3" data-aos="fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Art Gallery</h2>
          <p className="mt-4">Discover and explore the world of art</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="mt-4">
            <li>Phone: +91 9121045037</li>
            <li>Email: raghu@artgallery.com</li>
            <li>Address: 123 Gallery Street, City, Country</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <ul className="mt-4 flex space-x-4">
            <li>
              <a href="./" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="./" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="./" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-700 mt-8" />
      <div className="text-center mt-4">
        <p>&copy; 2023 Art Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
