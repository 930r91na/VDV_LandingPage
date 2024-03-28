import React from "react";
import PersonCard from "./PersonCard";

const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    
  ];

export default function Grid() {
    return (
        <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                role={person.role}
                imageUrl={person.imageUrl}
              />
            ))}
          </ul>
    );
}