import React from 'react';
import { FaBalanceScale, FaBriefcase, FaGavel, FaShieldAlt } from 'react-icons/fa';

const Card = ({ title, icon, description, color }) => (
  <div className={`${color} p-6 flex flex-col items-center text-center py-14`}>
    {icon}
    <h3 className="text-yellow-500 text-xl uppercase font-semibold mt-4 mb-2">{title}</h3>
    <hr className="w-1/3 border-yellow-500 border-1 my-6" />
    <p className="text-gray-200 text-sm mb-4">{description}</p>
    <button className="border border-yellow-300 text-yellow-300 py-2 px-12 hover:bg-gold hover:text-white transition duration-300 mt-4">
      Mas Informacion
    </button>
  </div>
);

const About = () => {
  const cards = [
    {
        title: "Derecho de Familia",
        icon: <FaBalanceScale className="text-yellow-500 text-4xl" />,
        description: "El derecho de familia se encarga de regular las relaciones entre los miembros de una familia, abordando temas como el matrimonio, el divorcio, la patria potestad, la adopción y la tutela. Es fundamental para la protección de los derechos de los menores y las personas más vulnerables dentro del núcleo familiar, garantizando la estabilidad y el bienestar de sus integrantes.",
        color: "bg-gray-900"
      },
      {
        title: "Derecho Comercial",
        icon: <FaBriefcase className="text-yellow-500 text-4xl" />,
        description: "El derecho comercial regula las relaciones jurídicas entre comerciantes, empresas y particulares en el ámbito de las transacciones comerciales. Aborda áreas como la constitución de sociedades, contratos mercantiles, títulos de crédito, y las operaciones bancarias. Es esencial para garantizar un marco legal que promueva la equidad y transparencia en los negocios.",
        color: "bg-gray-800"
      },
      {
        title: "Policía Local",
        icon: <FaGavel className="text-yellow-500 text-4xl" />,
        description: "La jurisdicción de la policía local abarca la resolución de conflictos menores a nivel comunitario, como infracciones de tránsito, conflictos vecinales o incumplimientos de normativas locales. Su función es clave para mantener el orden y la convivencia en las ciudades, brindando acceso rápido y eficiente a la justicia en situaciones cotidianas para la protección de los derechos.",
        color: "bg-gray-900"
      },
      {
        title: "Derecho Civil",
        icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
        description: "El derecho civil es el conjunto de normas que regulan las relaciones privadas entre individuos, incluyendo contratos, obligaciones, derechos de propiedad, sucesiones, y la responsabilidad civil. Su objetivo es proteger los derechos e intereses de las personas, garantizando el cumplimiento de sus obligaciones y la compensación justa en caso de daños o perjuicios.",
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
