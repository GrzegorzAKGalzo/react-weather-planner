import { DropletsIcon, Loader2, MapPin, WindIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { getCityGeoData, getCityWeather } from "@/servicies/api.d.js";
import { Alert, AlertTitle } from "./ui/alert";
import ExtraInfoBox from "./ExtraInfoBox";

function QuickSearch() {
  const [quickCity, setQuickCity] = useState("");
  const [quickLoading, setQuickLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [quickCityInfo, setQuickCiyInfo] = useState<any>();

  function handleQuickCityInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuickCity(e.target.value);
  }
  async function searchCity() {
    setAlertMessage("");
    if (quickCity === "") {
      setAlertMessage("Please enter valid city name");
      return;
    }
    try {
      setQuickLoading(true);
      let geo = await getCityGeoData(quickCity);
      console.log(geo.lat + " " + geo.lon);
      let weather = await getCityWeather(
        geo.lat.toString(),
        geo.lon.toString()
      );
      console.log(weather);
      setQuickCiyInfo(weather);
    } catch (e: any) {
      console.log("Error while getting weather for quick check" + e);
    } finally {
      setQuickLoading(false);
    }
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
          disabled={quickLoading}
        >
          {!quickLoading ? "Search" : <Loader2 className="animate-spin" />}
        </Button>
      </div>
      <Alert
        variant="destructive"
        className={alertMessage == "" ? "hidden" : ""}
      >
        <AlertTitle>Please enter valid city name</AlertTitle>
      </Alert>

      <div
        className={`${
          quickCityInfo == null
            ? "max-h-0 opacity-0"
            : "max-h-[500px] opacity-100"
        } transition-all duration-1000 flex flex-col max-w-full text-center gap-2`}
      >
        <h3 className="font-bold text-4xl">{quickCityInfo?.name}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${quickCityInfo?.weather[0].icon}@2x.png`}
          alt={quickCityInfo?.weather[0].description}
          className="max-h-30 object-contain"
        />
        <p className=" text-4xl ">{Math.round(quickCityInfo?.main.temp)}°C</p>
        {/* <p>{quickCityInfo?.weather[0].main}</p> */}
        <hr className="py-2" />
        <div className="grid grid-cols-2 gap-5">
          <ExtraInfoBox>
            <DropletsIcon className="text-sky-500" />
            <div>
              <p className="text-xs">Humidity</p>
              <p>{quickCityInfo?.main.humidity}%</p>
            </div>
          </ExtraInfoBox>
          <ExtraInfoBox>
            <WindIcon className="text-sky-500" />
            <div>
              <p className="text-xs">Wind speed</p>
              <p>{quickCityInfo?.wind.speed} m/s</p>
            </div>
          </ExtraInfoBox>
        </div>
      </div>
    </div>
  );
}
export default QuickSearch;
