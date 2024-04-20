import BackgroundGradient from "../Utils/BackgroundGradient";
import HeroImage from "../assets/pexels-pixabay-40784.jpg";
import color from "../assets/ColorPalette";

const HeroContent = () => {
  return (
    <section className="relative pt-10">
      {/* Background image container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
        />
      </div>

      <BackgroundGradient
        topBase="top-[calc(100%-13rem)]"
        topSm="sm:top-[calc(100%-30rem)]"
        leftBase="left-[calc(25%+3rem)]"
        leftSm="sm:left-[calc(25%+36rem)]"
        rotation=""
        colorFrom={color.darkBlueDeep}
        colorTo={color.nightBlueShade}
      />

      {/* Centered content */}
      <div className="relative mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Valle del Volcán
          </h1>
          <p className="mt-6 text-lg leading-8">Tu purificadora de agua</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Buttons go here */}
          </div>
        </div>
      </div>

      <BackgroundGradient
        topBase="-top-40"
        topSm="sm:-top-80"
        leftBase="left-[calc(50%-11rem)]"
        leftSm="sm:left-[calc(50%-30rem)]"
        rotation="rotate-[30deg]"
        colorFrom={color.darkBlueDeep}
        colorTo={color.nightBlueShade}
      />
    </section>
  );
};

export default HeroContent;
