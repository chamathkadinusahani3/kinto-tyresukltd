import React from "react";
import { Button } from "../components/ui/Button"; // assuming you have a Button component

export function BuyOnlineSection() {
  return (
    <section className="bg-yellow-500 text-white py-16 px-6 text-center rounded-xl shadow-md mt-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        BUY ONLINE <span className="block">and get fitted</span>
      </h2>
      <p className="mb-6 text-lg md:text-xl">
        Convenient, fast, and reliable tyre fitting at your fingertips.
      </p>
      <Button
        as="a"
        href="https://nutyre.co.uk/"
        target="_blank"
        className="bg-black text-yellow-500 hover:bg-gray-900 hover:text-white transition-colors px-6 py-3 rounded-lg font-semibold"
      >
        Learn More
      </Button>
    </section>
  );
}
