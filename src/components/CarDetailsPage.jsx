import { useParams } from "react-router-dom";
import { carData } from "../data/carData";

export default function CarDetailsPage() {
  const { id } = useParams(); // Obtener el ID de la URL
  const car = carData.find((car) => car.id === parseInt(id)); // Buscar el coche por ID

  if (!car) {
    return <p>Coche no encontrado</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <img src={car.imageUrl} alt={car.name} className="w-full h-72 object-cover" />
      <p>{car.description}</p>
      <p>Año: {car.year}</p>
    </div>
  );
}
