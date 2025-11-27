import {
  DropletsIcon,
  Loader2,
  MapIcon,
  MapPin,
  WindIcon,
  XIcon,
} from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { Alert, AlertTitle } from "./ui/alert";
import { Badge } from "@/components/ui/badge";
import { getCityGeoData, getCityWeather } from "@/servicies/api.d.js";

function TripWeatherPlanner() {
  const [inputCity, setInputCity] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<boolean>(false);
  const [cities, setCities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleAddCity() {
    setIsLoading(true);
    if (inputCity === "") {
      setAlertMessage(true);
      return;
    }

    try {
      let geo = await getCityGeoData(inputCity);
      console.log(geo.lat + " " + geo.lon);
      let weather = await getCityWeather(
        geo.lat.toString(),
        geo.lon.toString()
      );
      setCities((prev) => [...prev, weather]);
    } catch (e: any) {
      console.log("Error while adding city: " + e);
    } finally {
      setIsLoading(false);
    }
    setInputCity("");
    console.log(cities);
  }
  function removeCity(index: number) {
    setCities((prev) => prev.filter((_, i) => i !== index));
  }

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

      <div className="flex flex-col sm:flex-row w-full items-end gap-5">
        <div className="w-full">
          <InputGroup>
            <InputGroupInput
              className="focus-visible:border-sky-500"
              id="city"
              type="text"
              placeholder="Enter destination..."
              value={inputCity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAlertMessage(false);
                setInputCity(e.target.value);
              }}
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
          onClick={handleAddCity}
          disabled={isLoading}
        >
          {!isLoading ? "+ Add City" : <Loader2 className="animate-spin" />}
        </Button>
      </div>
      <Alert
        variant="destructive"
        className={`${alertMessage === false ? "hidden" : ""}`}
      >
        <AlertTitle>Please enter valid city name</AlertTitle>
      </Alert>

      <div
        className={`
        flex flex-col justify-center text-center mx-auto
        border-dashed border-2 w-full rounded-md py-10 gap-2
        ${cities.length == 0 ? "" : "hidden"}`}
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
      <div className={`${cities.length == 0 ? "hidden" : ""}`}>
        {cities.map((city, index) => (
          <div className="flex  gap-5 mt-5 relative ">
            <Badge className="h-8 min-w-8 bg-sky-500 rounded-full px-1 font-mono tabular-nums text-lg mt-5">
              {index + 1}
            </Badge>
            <div className="shadow-sm border rounded-md p-3 flex w-full flex-col">
              <p className="text-bold text-xl">{city.name}</p>
              <p className="text-gray-500 text-sm">Weather Forecast</p>
              <div className="flex flex-col sm:flex-row sm:justify-between p-5 sm:items-center bg-accent rounded-lg mt-5">
                <div className="flex items-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <p className="text-4xl font-light">
                    {Math.round(city.main.temp)}°C
                  </p>
                </div>
                <div className="flex gap-5 mr-5">
                  <div className="flex gap-2">
                    <DropletsIcon className="text-sky-500" />
                    <p>{city.main.humidity}%</p>
                  </div>
                  <div className="flex gap-2">
                    <WindIcon className="text-sky-500" />
                    <p>{city.wind.speed}m/s</p>
                  </div>
                </div>
              </div>
              <XIcon
                onClick={() => removeCity(index)}
                className="absolute hover:cursor-pointer top-5 right-5 transition-all hover:-translate-y-1 hover:text-red-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TripWeatherPlanner;
