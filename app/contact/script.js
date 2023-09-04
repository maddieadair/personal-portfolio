"use client";
import React from "react";
import { useState } from "react";

export default function Mail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [buttonText, setButtonText] = useState("SEND");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMesssageError] = useState("");

  const handleValidation = () => {
    let isValid = true;

    if (name.length <= 0) {
      isValid = false;
      setNameError("* Name too short");
    } else {
      setNameError("");
    }
    if (email.length <= 0) {
      isValid = false;
      setEmailError("* Email too short");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      isValid = false;
      setEmailError("* Invalid email");
    } else {
      setEmailError("");
    }

    if (message.length <= 0) {
      isValid = false;
      setMesssageError("* Message too short");
    } else {
      setMesssageError("");
    }

    return isValid;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("SENDING...");
      try {
        fetch("/api/contact", {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name: name,
            message: message,
          }),
        });
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("SEND");
        setName("");
        setEmail("");
        setMessage("");
      } catch (err) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("SEND");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-y-12 lg:gap-y-12 xl:gap-y-16 sm:mt-24 lg:mt-0">
      <div className="w-9/12 md:w-10/12 2xl:w-1/2">
        <form method="POST" className="" onSubmit={handleOnSubmit}>
          <div className="border-l-2 border-sesame">
            <div className="hover:bg-sesame hover:text-marshmallow p-6 md:p-8">
              <label
                htmlFor="name"
                className="block font-extrabold text-lg tracking-wider uppercase"
              >
                Name
              </label>
              <input
                autoComplete="off"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Jane Doe"
                className="bg-transparent focus:outline-none w-full peer"
              ></input>
              {nameError ? (
                <p className="pt-6 text-red-500">{nameError}</p>
              ) : null}
            </div>
            <div className="hover:bg-sesame hover:text-marshmallow p-6 md:p-8">
              <label
                htmlFor="email"
                className="block font-extrabold text-lg tracking-wider uppercase"
              >
                Email
              </label>
              <input
                autoComplete="off"
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="janedoe123@gmail.com"
                className="bg-transparent focus:outline-none w-full"
              ></input>
              {emailError ? (
                <p className="pt-6 text-red-500">{emailError}</p>
              ) : null}
            </div>

            <div className="hover:bg-sesame hover:text-marshmallow p-6 md:p-8">
              <label
                htmlFor="message"
                className="block font-extrabold text-lg tracking-wider uppercase"
              >
                Message
              </label>
              <textarea
                autoComplete="off"
                id="message"
                type="text"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows="3"
                placeholder="Enter your message here..."
                className="bg-transparent focus:outline-none w-full"
              ></textarea>
              {messageError ? (
                <p className="text-red-500">{messageError}</p>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="tracking-wider mt-12 w-full rounded-lg px-5 py-3 text-center font-bold bg-sesame text-marshmallow active:bg-palePink"
          >
            {buttonText}
          </button>
          {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-lg mt-6 tracking-wider">
              Thank you! Your message has been delivered!
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500 font-semibold text-lg mt-6 tracking-wider">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
