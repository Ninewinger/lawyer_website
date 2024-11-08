import bg from '@/img/pixelcut-export.jpeg'
//import logo from '@/img/logolexbase-transformed-removebg-preview-transformed.png'
import { halant } from "@/app/fonts";
import { FaBalanceScale } from "react-icons/fa";

const Presentation = () => {
  return (
    <div className={`${halant.className} bg-gray-700 w-full h-[50vh] sm:h-[50vh] relative`}>
      <div 
        className="absolute h-[70vh] inset-0 m-2 sm:m-4 md:m-6 lg:m-10 bg-no-repeat bg-cover bg-center" 
        style={{ backgroundImage: `url(${bg.src})` }}
      > 
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="bg-gray-900 shadow-lg shadow-gray-500 bg-opacity-80 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center">
            <FaBalanceScale className="text-yellow-500 text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-0 sm:mr-6" />
              <div className="flex flex-col sm:w-2/3">
                <h1 className="text-gray-500 text-center text-2xl sm:text-3xl md:text-5xl font-bold tracking-wider uppercase mb-2">
                  Empresa <span className="text-blue-600">Abogados</span>
                </h1>
                <p className="text-gray-300 text-center text-lg sm:text-lg tracking-normal">
                  Somos Empresa Abogados, expertos en diversas áreas legales, ofreciendo soluciones efectivas y adaptadas a las necesidades de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
