import React from "react";

export default function Clock() {
  const locale = "en-US";
  const myTimeZone = "America/Chicago";

  let yourDay = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let yourTime = new Date().toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    hour12: true,
  });

  let myDay = new Date().toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: myTimeZone,
  });
  let myTime = new Date().toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: myTimeZone,
    timeZoneName: "short",
    hour12: true,
  });

  return (
    <div className="flex flex-row text-center md:text-start mx-12 md:mx-0">
      <div className="border-r-2 md:border-r-4 border-sesame pr-6 md:pr-12">
        <h3 className="font-extrabold text-sm sm:text-2xl xl:text-3xl uppercase text-center md:text-start">
          my time
        </h3>
        <div className="">
          <div className="text-sm sm:text-xl xl:text-2xl font-semibold">
            {myDay}
          </div>
          <div className="text-sm sm:text-xl xl:text-2xl font-medium">
            {myTime}
          </div>
        </div>
      </div>

      <div className="pl-6 md:text-start md:pl-12">
        <h3 className="font-extrabold text-sm sm:text-2xl xl:text-3xl uppercase text-center md:text-start">
          your time
        </h3>
        <div className="">
          <div className="text-sm sm:text-xl xl:text-2xl font-semibold">
            {yourDay}
          </div>
          <div className="text-sm sm:text-xl xl:text-2xl font-medium">
            {yourTime}
          </div>
        </div>
      </div>
    </div>
  );
}
