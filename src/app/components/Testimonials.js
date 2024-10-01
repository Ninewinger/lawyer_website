"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { poppins, halant } from '../fonts';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra rutrum ultrices. Vivamus et condimentum odio, et lobortis nulla. Vivamus vitae est at justo cursus fermentum at amet nulla. Aliquam placerat turpis massa, eu hendrerit purus sed erat.",
    client: "John Doe"
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    client: "Jane Smith"
  },
  {
    id: 3,
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    client: "Alice Johnson"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className={`${poppins.className} text-3xl sm:text-4xl font-bold text-center text-yellow-500 mb-8`}>TESTIMONIALS</h2>
        <div className="relative h-64 sm:h-48">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <FaQuoteLeft className="text-yellow-500 text-4xl mb-4" />
              <p className={`${halant.className} text-gray-300 text-lg sm:text-xl mb-4`}>
                {testimonials[currentIndex].text}
              </p>
              <p className={`${poppins.className} text-yellow-500 text-right font-semibold`}>
                - {testimonials[currentIndex].client}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
