// import React from 'react'

export default function NavBar() {
  return (
    <div className="mb-32 pt-4 flex justify-center w-[80%] m-auto">
      <div className="lg:text-5xl text-white">
        <h1>ca..</h1>
      </div>
      <nav className="flex justify-center  lg:w-1/2 m-auto">
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

      <div className="text-white">
        <button
          type="button"
          className="button bg-[#3b3b3b] w-[10rem] py-2 rounded-full"
        >
          Light
        </button>
      </div>
    </div>
  );
}
