'use client'
import React from "react";
import {useState, useEffect} from 'react';

export default function Clock() {
  const locale = "en-US";
  const myTimeZone = "America/Chicago";

  const [yourDay, setYourDay] = useState(new Date());
  const [yourTime, setYourTime] = useState(new Date());
  const [myDay, setMyDay] = useState(new Date());
  const [myTime, setMyTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setYourDay(new Date()), 1000);
    setInterval(() => setYourTime(new Date()), 1000);
    setInterval(() => setMyDay(new Date()), 1000);
    setInterval(() => setMyTime(new Date()), 1000);
  }, []);

  return (
    <div className="flex flex-row text-center md:text-start mx-12 md:mx-0">
      <div className="border-r-2 md:border-r-4 border-sesame pr-6 md:pr-12">
        <h3 className="font-extrabold text-sm sm:text-2xl xl:text-3xl uppercase text-center md:text-start">
          my time
        </h3>
        <div className="">
          <div className="text-sm sm:text-xl xl:text-2xl font-semibold">
          {myDay.toLocaleDateString(locale, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: myTimeZone,
              })}
          </div>
          <div className="text-sm sm:text-xl xl:text-2xl font-medium">
          {myTime.toLocaleTimeString(locale, {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: myTimeZone,
                timeZoneName: "short",
                hour12: true,
              })}
          </div>
        </div>
      </div>

      <div className="pl-6 md:text-start md:pl-12">
        <h3 className="font-extrabold text-sm sm:text-2xl xl:text-3xl uppercase text-center md:text-start">
          your time
        </h3>
        <div className="">
          <div className="text-sm sm:text-xl xl:text-2xl font-semibold">
          {yourDay.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </div>
          <div className="text-sm sm:text-xl xl:text-2xl font-medium">
          {yourTime.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
            hour12: true,
              })}          
            </div>
        </div>
      </div>
    </div>
  );
}
