import React from "react";
import { motion } from "framer-motion";
import SingleCardCarousel from "../design/SingleCardCarousel";
import SingleCardCarousel2 from "../design/SingleCardCarousel2";
import MultiCardCarousel from "../design/MultiCardCarousel";
import MultiCardCarousell from "../design/MultiCardCarousell";
import MultiCardCarouselll from "../design/MultiCardCarouselll";
import VarticalCarousel from "../design/VarticalCarousel";
VarticalCarousel;

const UiCarousel = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-5 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Carousel
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Single Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SingleCardCarousel />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Single Card Carousel V2
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SingleCardCarousel2 />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Multi Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MultiCardCarousell />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Multi Card Carousel V2
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MultiCardCarousel />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Multi Card Carousel V3
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MultiCardCarouselll />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Vertical Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <VarticalCarousel />
        </div>
      </motion.div>

      <motion.div
        className="ml-80 mt-25"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </motion.div>
    </div>
  );
};

export default UiCarousel;
