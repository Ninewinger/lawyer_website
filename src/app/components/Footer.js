import React from "react";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-evenly text-white p-4 tracking-widest h-[120px]">
      <div className="flex justify-center items-center gap-4">
        {/* Puedes agregar iconos o enlaces aquí */}
      </div>
      <p className="text-center">
        &copy; {new Date().getFullYear()} Nombre Completo. Todos los
        derechos reservados.
      </p>
      <p className="text-center">
        Creado por{" "}
        <a
          href="https://www.tuportfolio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TuNombre
        </a>
      </p>
    </div>
  );
};

export default Footer;
