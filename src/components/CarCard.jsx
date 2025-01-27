import { useState } from "react";
import ButtonCarPage from "./ButtonCarPage";

export default function CarCard({ name, description, year, imageUrl }) {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <img
        src={imageUrl}
        alt={name}
        className={`w-full h-72 object-cover transition-transform duration-500 ${rotate ? "rotate-360" : ""}`}
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-300">{description}</p>
        <p className="text-gray-300">{year}</p>
        <ButtonCarPage text={name} onClick={handleRotate} />
      </div>
    </div>
  );
}
