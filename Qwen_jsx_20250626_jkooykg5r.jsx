import React, { useState, useEffect } from 'react';

export default function App() {
  // Estado para el temporizador
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-04-01T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Contenedor principal */}
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Carbón Coco™ Blanqueador Dental</h1>
        <p className="text-center text-lg mb-6">Sabor Original</p>

        {/* Imagen principal con etiqueta */}
        <div className="relative mb-6">
          <span className="absolute top-2 left-2 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10 text-sm">
            ENVÍO GRATIS
          </span>
          <img 
            src="https://dcdn-us.mitiendanube.com/stores/005/210/499/products/pro_596c0fbc818b94f98e5a1bb59ef01d8a-dd11f36ca71a3400ea17505311824252-1024-1024.jpg " 
            alt="Blanqueador dental carbon coco"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center mt-3 font-semibold">Blanqueador Dental Natural Carbón Coco</p>
        </div>

        {/* Precios */}
        <div className="text-center mb-4">
          <p className="line-through text-gray-500 text-lg">$24.999</p>
          <p className="text-red-600 text-xl font-bold mt-1">$17.499</p>
        </div>

        {/* Temporizador */}
        <div className="bg-red-50 p-3 rounded-lg mb-6 text-red-700 text-center text-sm">
          <p>¡Oferta por tiempo limitado! Quedan: {timerComponents.length ? timerComponents : "0 horas 0 minutos 0 segundos"}</p>
        </div>

        {/* Botón de compra */}
        <a 
          href="https://solucionesdeseguridad.com.ar/productos/blanqueador-dental-natural-carbon-coco/ " 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-lg font-bold transition duration-300 mb-6"
        >
          Comprar Ahora - Envío Gratis
        </a>

        {/* Beneficios */}
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Resultados desde el primer uso
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            100% Natural y vegano
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Sin sensibilidad dental
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Ecológico y sostenible
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Precio accesible con garantía
          </li>
        </ul>

        {/* Banner informativo */}
        <img 
          src="https://pronapresa.com/cdn/shop/products/blanqueador-dental-de-carbon-activado-productos-naturales-cuidado-personal-salud-y-belleza-tienda-naturista-pronapresa-2.jpg?v=1684429274&width=1000" 
          alt="Banner informativo" 
          className="w-full rounded-lg my-6"
        />

        {/* Video */}
        <h2 className="text-2xl font-bold text-center my-6">¿Cómo se usa?</h2>
        <div className="relative w-full h-0 pb-[56.25%] mb-6">
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src=" https://player.vimeo.com/video/901322727?h=072895480f" 
            allowFullScreen 
            title="Video explicativo"
          ></iframe>
        </div>

        {/* Testimonios */}
        <h2 className="text-2xl font-bold text-center my-6">Testimonios</h2>
        <div className="bg-blue-50 p-4 rounded-lg mb-4 text-center">
          <p>"Me encantó el resultado después de solo dos semanas."</p>
          <strong className="mt-2 block">— Ana M.</strong>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mb-4 text-center">
          <p>"Es fácil de usar y noté la diferencia desde la primera semana."</p>
          <strong className="mt-2 block">— Lucas R.</strong>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center">
          <p>"Lo mejor es que no necesito ir al dentista para tener una sonrisa perfecta."</p>
          <strong className="mt-2 block">— Florencia D.</strong>
        </div>

        {/* CTA Final */}
        <a 
          href=" https://solucionesdeseguridad.com.ar/productos/blanqueador-dental-natural-carbon-coco/ " 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-lg font-bold transition duration-300 mb-8"
        >
          COMPRAR AHORA, ENVIO GRATIS
        </a>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Carbon Coco | Todos los derechos reservados<br/>
          Este producto no sustituye la atención odontológica profesional.
        </footer>
      </div>
    </div>
  );
}