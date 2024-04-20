import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import botella from "../assets/b1.jpg";
import garrafon from "../assets/garrafon.png";
import botella2 from "../assets/b2.jpg";
import garrafon2 from "../assets/garrafon2.png";

const OurProducts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <section>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h1>Productos</h1>
        </div>
      </div>
    <div className="flex flex-wrap">
        <div className="product-container">
            <div className="subtitulo centrar-contenido">
                <h1>Botella de 100 ml</h1>
                <img
                className="h-32 w-32 md:h-48 md:w-48 rounded object-cover" 
                src={botella} />
                <p className="text-lg font-semibold leading-6 text-gray-800">
                    Precio: ${15}
                </p>
            </div>
        </div>
        <div className="product-container">
            <div className="subtitulo centrar-contenido">
                <h1>Botella de 500 ml</h1>
                <img 
                className="h-32 w-32 md:h-48 md:w-48 rounded object-cover"
                src={botella2} />
                <p className="text-lg font-semibold leading-6 text-gray-800">
                    Precio: ${20}
                </p>
            </div>
        </div>
        <div className="product-container">
            <div className="subtitulo centrar-contenido">
                <h1>Garrafón de 20 lts</h1>
                <img
                className="h-32 w-32 md:h-48 md:w-48 rounded object-cover"
                src={garrafon}/>
                <p className="text-lg font-semibold leading-6 text-gray-800">
                    Precio: ${50}
                </p>
            </div>
        </div>
        <div className="product-container">
            <div className="subtitulo centrar-contenido">
                <h1>Llenado de garrafón de agua pruficiada</h1>
                <img
                className="h-32 w-32 md:h-48 md:w-48 rounded object-cover"
                src={garrafon2} />
                <p className="text-lg font-semibold leading-6 text-gray-800">
                    Precio: ${15}
                </p>
            </div>
        </div>
    </div>
</section>
  );
}

export default OurProducts;