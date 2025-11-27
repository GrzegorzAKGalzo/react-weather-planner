import { CloudIcon, MapIcon, MapPin } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./components/ui/input-group";
import { useState } from "react";

import QuickSearch from "./components/QuickSearch";
import TripWeatherPlanner from "./components/TripWeatherPlanner";

function App() {
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
      <QuickSearch />
      {/* Trip Weather planner */}
      <TripWeatherPlanner />
    </main>
  );
}

export default App;
