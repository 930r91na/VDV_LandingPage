import BackgroundGradient from "../Utils/BackgroundGradient";
import colors from "../Utils/Colors.module.css";
import Button from "../Utils/ButtonProps";
import { useTranslation } from 'react-i18next';

export default function HeroContent() {
  //const { t } = useTranslation();

  return (
    <>
      <BackgroundGradient
        topBase="top-[calc(100%-13rem)]"
        topSm="sm:top-[calc(100%-30rem)]"
        leftBase="left-[calc(50%+3rem)]"
        leftSm="sm:left-[calc(50%+36rem)]"
        rotation=""
        colorFrom ="#ff80b5"
        colorTo="#9089fc"
      />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Valle del Volcan
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Purificadora de agua 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              text="Get started"
              variant= "primary"
            />
            <Button 
              text="Learn more"
              variant= "secondary"
            />
          </div>
        </div>
      </div>

      <BackgroundGradient
        topBase="-top-40"
        topSm="sm:-top-80"
        leftBase="left-[calc(50%-11rem)]"
        leftSm="sm:left-[calc(50%-30rem)]"
        rotation="rotate-[30deg]"
        colorFrom="#6de3e3"
        colorTo="#473fb5"
      />
    </>
  );
}
