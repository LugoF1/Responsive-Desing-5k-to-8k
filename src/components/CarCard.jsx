import ButtonCarPage from "./ButtonCarPage";

export default function CarCard({ name, description, year, imageUrl }) {
  return (
    <div class="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <img
        src={imageUrl}
        alt="Nissan Skyline GT-R R34"
        className="w-full h-72 object-cover transition-opacity duration-300 hover:opacity-30"
        loading="lazy"
      />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 p-4">
        <h2 class="text-lg font-semibold">{name}</h2>
        <p class="text-gray-300">{description}</p>
        <p class="text-gray-300">{year}</p>
        <ButtonCarPage 
          text={name}
        />
      </div>
    </div>
  );
}
