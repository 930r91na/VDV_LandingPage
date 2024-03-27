import React from "react";

interface BackgroundGradientProps {
  topBase: string;
  topSm: string;
  leftBase: string;
  leftSm: string;
  rotation: string;
  colorFrom: string;
  colorTo: string;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  topBase,
  topSm,
  leftBase,
  leftSm,
  rotation,
  colorFrom,
  colorTo,
}) => {
  const baseClasses = `absolute inset-x-0 ${topBase} -z-10 transform-gpu overflow-hidden blur-3xl`;
  const smClasses = `${topSm}`;
  const innerBaseClasses = `relative ${leftBase} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 ${rotation} opacity-30`;
  const innerSmClasses = `${leftSm} sm:w-[72.1875rem]`;
  const gradient = `bg-gradient-to-tr from-[${colorFrom}] to-[${colorTo}]`;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className={`${baseClasses} ${smClasses}`} aria-hidden="true">
        <div
          className={`${innerBaseClasses} ${innerSmClasses} ${gradient}`}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundGradient;
