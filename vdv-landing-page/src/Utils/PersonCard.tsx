import React from "react";
import color from "../assets/ColorPalette";
interface PersonProps {
  name: string;
  imageUrl: string;
  role: string;
}

const PersonCard: React.FC<PersonProps> = (person) => {
  return (
    <li key={person.name}>
      <div className="flex items-center gap-x-6">
        <img className="h-32 w-32" src={person.imageUrl} alt="" />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {person.name}
          </h3>
          <p className="text-sm font-semibold leading-6" style={{ color: color.darkBlueDeep }}>
            {person.role}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PersonCard;
