import React from "react";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-evenly text-white p-4 tracking-widest h-[120px]">
      <div className="flex justify-center items-center gap-4">

      </div>
      <p className="text-center">
        &copy; {new Date().getFullYear()} Carolina Hernández Díaz. Todos los
        derechos reservados.
      </p>
      <p className="text-center">
        Created by{" "}
        <a
          href="https://www.instagram.com/0xibit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          0xibit
        </a>
      </p>
    </div>
  );
};

export default Footer;
