/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Avatar() {
  return (
    <div>
      <div className="relative  w-[80%] m-auto">
        <img
          src="/public/chris.png"
          alt="avatar"
          className=" m-auto border-2 border-green-600 rounded-full"
          width={100}
        />
      </div>
      <h3 className="text-center text-white lg:text-xl font-light pt-2">
        ANANI Christophe
      </h3>
      <p className="lg:text-lg lg:w-1/2 text-center m-auto text-white font-light py-5">
        Architecte du web et artiste de l'expérience utilisateur, je fusionne la
        puissance du code avec l'esthétique du design pour créer des espaces
        numériques exceptionnels et mémorables.
      </p>

      <div>
        <button
          title="Save"
          className="flex items-center bg-none border border-[#59615b] rounded-full duration-100 p-2 px-5 w-auto m-auto"
        >
          <div className=" flex  h-3 w-3 me-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27A451] opacity-75"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-[#27A451]"></span>
            </span>
          </div>

          <div className="text-sm text-[#27A451] font-light">
            Disponible pour de nouvelles opportunités
          </div>
        </button>
      </div>

    </div>
  );
}
