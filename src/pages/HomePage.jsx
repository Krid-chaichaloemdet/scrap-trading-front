import ReadProductFeat from "../features/ReadProductFeat";

import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

export default function HomePage() {

  return (
    <div className="">
      <div className="flex">
        <ReadProductFeat />
        <div className="p-10 bg-yellow-500 absolute right-0 w-96 m-20 rounded-lg">

        <div className="text-4xl p-2">
          How can you trade with us ?
        {/* <BsPlusCircle /> */}
        </div>
        <div className="text-xl p-3">1. Check the lists of scraps that you've had</div>
        <div className="text-xl p-3">2. Register and login then go to your profile page</div>
        <div className="text-xl p-3">3. then you'll be able to create trading order into our website</div>
        <div className="text-xl p-3">4. after that our sales are gonna contact back to you make a deal happen and to make you know how much your scrap is really worth !!</div>
        </div>
      </div>
    </div>
  );
}
