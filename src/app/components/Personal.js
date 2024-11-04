import bg from '@/img/justice.jpg'
import perfil from '@/img/perfil.png'
import { poppins, halant } from '../fonts';
import { FaGraduationCap, FaBalanceScale, FaGavel, FaHandshake, FaBook, FaChild, FaUserFriends, FaClipboardCheck } from 'react-icons/fa';

const Personal = () => {
  return (
    <div className="relative bg-black">
      <div className="md:bg-contain md:bg-right bg-cover bg-center bg-no-repeat md:h-[700px] h-screen mt-10" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center h-full">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-contain bg-no-repeat bg-center h-[300px] w-[300px] mx-auto rounded-full border-4 border-yellow-500 shadow-lg" style={{ backgroundImage: `url(${perfil.src})` }}></div>
            </div>
            <div className="md:w-2/3 md:pl-12 text-gray-300 md:bg-black md:bg-opacity-50 md:rounded-lg md:p-10">
              <h1 className={`${poppins.className} text-3xl md:text-5xl font-normal mb-4 text-yellow-500 tracking-wider`}>NOMBRE COMPLETO</h1>
              <h2 className={`${halant.className} text-xl md:text-3xl mb-6 text-gray-300 tracking-wider`}><span className="text-blue-500">PROFESIÓN</span> - ESPECIALIZACIÓN</h2>
              <div className={`${poppins.className} text-sm md:text-base space-y-4`}>
                <p className="flex items-center tracking-wider"><FaGraduationCap className="text-yellow-500 mr-6" /> TITULACIÓN ACADÉMICA RELEVANTE.</p>
                <p className="flex items-center tracking-wider"><FaBalanceScale className="text-yellow-500 mr-6" /> DIPLOMADO O CERTIFICACIÓN DESTACADA.</p>
                <p className="flex items-center tracking-wider"><FaGavel className="text-yellow-500 mr-6" /> EXPERIENCIA PROFESIONAL RELEVANTE.</p>
                <p className="flex items-center tracking-wider"><FaHandshake className="text-yellow-500 mr-6" /> COLABORACIONES Y PROYECTOS DESTACADOS.</p>
                <p className="flex items-center tracking-wider"><FaBook className="text-yellow-500 mr-6" /> PUBLICACIONES O INVESTIGACIONES DESTACADAS.</p>
                <p className="flex items-center tracking-wider"><FaChild className="text-yellow-500 mr-6" /> PARTICIPACIÓN EN PROGRAMAS O SEMINARIOS.</p>
                <p className="flex items-center tracking-wider"><FaUserFriends className="text-yellow-500 mr-6" /> TRABAJO EN EQUIPO Y COLABORACIÓN.</p>
                <p className="flex items-center tracking-wider"><FaClipboardCheck className="text-yellow-500 mr-6" /> ACTUALIZACIÓN PROFESIONAL CONTINUA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
