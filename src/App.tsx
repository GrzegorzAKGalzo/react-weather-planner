import { CloudIcon, MapIcon, MapPin } from "lucide-react";
import { Input } from "./components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./components/ui/input-group";
import { useState } from "react";

function App() {
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
    <main
      className="
      max-w-[1400px] m-auto
     flex flex-col 
     min-h-screen text-white font-display
      py-10 sm:px-2 px-5"
    >
      <header>
        <h1 className="flex justify-center items-center text-2xl font-bold">
          <CloudIcon size={"40"} /> Trip Weather Planner
        </h1>
        <p className="text-muted py-10 text-center">
          Check weather for single locations or plan your entire trip
        </p>
      </header>
      {/* Quick weather check */}
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

      {/* Trip Weather planner */}
      <div
        className="
      bg-white shadow-2xl rounded-3xl w-full  mx-auto 
        text-gray-600 flex flex-col gap-5
        py-10 px-5 mt-10"
      >
        <div className="flex gap-2 w-full">
          <MapIcon color="var(--color-pink-500)" /> Trip Weather Planner
        </div>
        <p>
          Add multiple destinations to see weather forecasts for your entire
          trip
        </p>

        <div className="flex w-full items-end gap-5">
          <div className="w-full">
            <InputGroup>
              <InputGroupInput
                className="focus-visible:border-sky-500"
                id="city"
                type="text"
                placeholder="Enter destination..."
              />
              <InputGroupAddon>
                <MapPin />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <Button
            variant={"outline"}
            aria-label="Search"
            className="cursor-pointer hover:bg-primary hover:text-white"
          >
            + Add City
          </Button>
        </div>

        <div
          className="
        flex flex-col justify-center text-center mx-auto
        border-dashed border-2 w-full rounded-md py-10 gap-2
        "
        >
          <MapPin
            size={"50px"}
            className="self-center hover:text-red-500 animate-bounce animation-duration-2000"
          />
          <p className="text-gray-400 font-bold">No destination yet</p>
          <p className="text-gray-400 text-xs">
            Start adding location to plan your trip
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
