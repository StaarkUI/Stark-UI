import React from "react";
import SingleCardCarousel from "../design/SingleCardCarousel";
import SingleCardCarousel2 from "../design/SingleCardCarousel2";
import MultiCardCarousel from "../design/MultiCardCarousel";
import MultiCardCarousell from "../design/MultiCardCarousell";
import MultiCardCarouselll from "../design/MultiCardCarouselll";
import VarticalCarousel from "../design/VarticalCarousel";
VarticalCarousel

const UiCarousel = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Carousel</h1>
      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Single Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SingleCardCarousel />
        </div>
      </div>

      <div className="mt-15">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Second type of Single Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SingleCardCarousel2 />
        </div>
      </div>

      <div className="mt-15">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          multi Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MultiCardCarousell />
        </div>
      </div>

      <div className="mt-15">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Second type  of Multi Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MultiCardCarousel />
        </div>
      </div>

      <div className="mt-15">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Second type  of Multi Card Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MultiCardCarouselll />
        </div>
      </div>

      <div className="mt-15">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Vertical Carousel
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <VarticalCarousel />
        </div>
      </div>

      <div className="ml-80 mt-25">
        <h1 className="font-mono">Built by STARK UI at Vercel. The source code is available on GitHub.</h1>
      </div>
    </div>
  );
};

export default UiCarousel;
