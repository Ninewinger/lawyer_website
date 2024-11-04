import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { poppins, halant } from "../fonts";

const Contact = () => {
  return (
    <div className="bg-gray-700 py-36">
      <div className="container">
        <div className="bg-gray-200 w-screen shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center justify-center">
            {/* Address Section */}
            <div className={`${halant.className} text-center mx-auto`}>
              <h3 className={`${poppins.className} text-xl font-semibold mb-4 text-gray-800`}>OFICINAS</h3>
              <p className="flex items-start mb-2 text-gray-600 mx-auto">
                <FaMapMarkerAlt className="mr-2 mt-1 text-gray-500" />
                Dirección Principal, Ciudad, País
              </p>
              <p className="flex items-start mb-2 text-gray-600 mx-auto">
                <FaMapMarkerAlt className="mr-2 mt-1 text-gray-500" />
                Segunda Dirección, Ciudad, País
              </p>
            </div>

            {/* Contact Section */}
            <div className={`${halant.className} text-center mx-auto`}>
              <h3 className={`${poppins.className} text-xl font-semibold mb-4 text-gray-800`}>CONTACTO</h3>
              <p className="flex items-center mb-2 text-gray-600 mx-auto">
                <FaPhone className="mr-2 text-gray-500" /> +00 1234 567890
              </p>
              <p className="flex items-center text-gray-600 mx-auto">
                <FaEnvelope className="mr-2 text-gray-500" /> contacto@empresa.com
              </p>
              <p className="flex items-center text-gray-600 mx-auto">
                <FaEnvelope className="mr-2 text-gray-500" /> info@empresa.com
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019163734126!2d-122.41941548468184!3d37.77492977975813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f1dedb7%3A0xadc815a1f2f7a8a!2sDirección%20Principal%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
