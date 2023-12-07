/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Avatar from "./Avatar";
import NavBar from "./NavBar";
import ScrollDown from "./ScrollDown";

export default function HeroSection() {
  return (
    <div className=" h-screen ">
      <div className="bg-black/90 h-screen" >
      <NavBar/>
      <Avatar/>
      <ScrollDown/>
      </div>
      
    </div>
  );
}
