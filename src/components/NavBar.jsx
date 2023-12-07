// import React from 'react'
import Avatar from "/public/images/chris.png";

export default function NavBar() {
  return (
    <div className="mb-32 py-3 flex justify-between lg:w-[80%] m-auto items-center">
      <div className=" flex justify- items-center">
        <div>
          <img
            src={Avatar}
            alt="avatar"
            className="me-5 border-2 border-green-600 rounded-full"
            width={50} />
        </div>
        <div className="text-white lg:text-sm">Christophe ANANI
        </div>
       
      </div>

      <nav className="flex text-center">
        {[
          ["Projets", "/projets"],
          ["Compétences", "/competences"],
          ["Services", "/services"],
          ["Contact", "/contac"],
        ].map(([title, url]) => (
          <a
            href={url}
            key={url}
            className="rounded-full px-3 py-1 text-white font-light hover:underline hover:text-[#ffffff]"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
}
