import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { useState } from "react";

function QuickSearch() {
  const [quickCity, setQuickCity] = useState("");

  function handleQuickCityInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuickCity(e.target.value);
  }
  function searchCity() {
    if (quickCity === "") {
      alert("Empty");
      return;
    }
    alert("Search " + quickCity);
  }

  return (
    <div
      className="
      bg-white shadow-2xl rounded-3xl w-full max-w-[800px] mx-auto 
        text-gray-600 flex flex-col gap-5
        py-10 px-5"
    >
      <div className="flex gap-2 w-full">
        <MapPin /> Quick Weather Check
      </div>

      <div className="flex w-full items-end gap-5">
        <div className="w-full">
          <Label htmlFor="city" className="mb-2">
            City
          </Label>
          <Input
            className="focus-visible:border-sky-500"
            id="city"
            type="text"
            placeholder="Enter city name..."
            value={quickCity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleQuickCityInput(e)
            }
          />
        </div>
        <Button
          onClick={searchCity}
          aria-label="Search"
          className="cursor-pointer"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
export default QuickSearch;
