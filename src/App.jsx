import CarCard from "./components/CarCard";
import { carData } from "./data/carData";

export default function App() {
  return (
    <>
      <header className="bg-orange-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">JDM Cars Gallery</h1>
      </header>

      <main className="p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carData.map((car) => {
            const { id, name, description, year, imageUrl } = car;
            return <CarCard 
                      key={id} 
                      name={name} 
                      description = {description} 
                      year={year} 
                      imageUrl={imageUrl}
                    />;
          })}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 JDM</p>
      </footer>
    </>
  );
}
