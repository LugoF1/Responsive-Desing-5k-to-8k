import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { carData } from "./data/carData";
import { countWords } from "./helpers/countWords";

import CarCard from "./components/CarCard";
import Login from "./components/Login";

const date = new Date();
const currentYear = date.getFullYear();

export default function App() {
  return (
    <Router>
      <header className="bg-orange-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">
          JDM Cars Gallery {countWords("JDM Cars Gallery")}
        </h1>
        <Link to="/login" className="text-white underline">
          Ir a Login
        </Link>
      </header>
      
      <Routes>
        <Route
          path="/"
          element={
            <main className="p-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {carData.map((car) => {
                  const { id, name, description, year, imageUrl } = car;
                  return (
                    <CarCard
                      key={id}
                      name={name}
                      description={description}
                      year={year}
                      imageUrl={imageUrl}
                    />
                  );
                })}
              </div>
            </main>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {currentYear} JDM</p>
      </footer>
    </Router>
  );
}
