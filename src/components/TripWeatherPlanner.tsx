import { MapIcon, MapPin } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Button } from "./ui/button";

function TripWeatherPlanner() {
  return (
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
        Add multiple destinations to see weather forecasts for your entire trip
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
  );
}
export default TripWeatherPlanner;
