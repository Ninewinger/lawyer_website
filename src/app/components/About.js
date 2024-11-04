import React from 'react';
import { FaBalanceScale, FaBriefcase, FaGavel, FaShieldAlt } from 'react-icons/fa';

const Card = ({ title, icon, description, color }) => (
  <div className={`${color} p-6 flex flex-col items-center text-center py-14`}>
    {icon}
    <h3 className="text-yellow-500 text-xl uppercase font-semibold mt-4 mb-2">{title}</h3>
    <hr className="w-1/3 border-yellow-500 border-1 my-6" />
    <p className="text-gray-200 text-sm mb-4">{description}</p>
    <button className="border border-yellow-300 text-yellow-300 py-2 px-12 hover:bg-gold hover:text-white transition duration-300 mt-4">
      Más Información
    </button>
  </div>
);

const About = () => {
  const cards = [
    {
      title: "Servicios Legales",
      icon: <FaBalanceScale className="text-yellow-500 text-4xl" />,
      description: "Descripción general de los servicios legales ofrecidos, incluyendo diversas áreas de especialización para atender las necesidades de los clientes.",
      color: "bg-gray-900"
    },
    {
      title: "Consultoría Empresarial",
      icon: <FaBriefcase className="text-yellow-500 text-4xl" />,
      description: "Servicios de consultoría para empresas, abarcando desde la gestión de proyectos hasta la optimización de procesos internos.",
      color: "bg-gray-800"
    },
    {
      title: "Asesoría Jurídica",
      icon: <FaGavel className="text-yellow-500 text-4xl" />,
      description: "Asesoramiento personalizado en diversas ramas del derecho, garantizando soluciones efectivas y adaptadas a cada situación.",
      color: "bg-gray-900"
    },
    {
      title: "Protección de Derechos",
      icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
      description: "Servicios enfocados en la protección y defensa de los derechos de nuestros clientes, asegurando el cumplimiento de la normativa vigente.",
      color: "bg-gray-800"
    }
  ];

  return (
    <div className="relative mt-36 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 shadow-xl">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default About;
