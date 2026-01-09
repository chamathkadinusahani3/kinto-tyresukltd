import React, { useState } from "react";
import { Button } from "../components/ui/Button";

export function DealerSearchSection() {
  const [postcode, setPostcode] = useState("");

  const handleSearch = () => {
    if (!postcode) {
      alert("Please enter a postcode");
      return;
    }
    // Redirect to Nutyre's Find a Fitter page
    window.open("https://nutyre.co.uk/find-a-fitter", "_blank");
  };

  return (
    <section className="bg-black text-yellow-500 py-16 px-6 text-center rounded-xl shadow-md mt-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Search Your Nearest Dealer
      </h2>
      <p className="mb-6 text-lg md:text-xl">
        Enter your UK postcode to find a dealer near you.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter UK postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="p-3 rounded-lg text-black w-full md:w-auto flex-1"
        />
        <Button
          onClick={handleSearch}
          className="bg-yellow-500 text-black hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg font-semibold"
        >
          Search
        </Button>
      </div>
    </section>
  );
}
