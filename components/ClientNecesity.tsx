"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

type FoodOption = {
  type: string;
  calories: number[];
};

const foodOptions: FoodOption[] = [
  { type: 'azucares', calories: [100, 200, 300] },
  { type: 'sales', calories: [500, 600, 700] },
  { type: 'minerales', calories: [800, 900, 1000] },
  { type: 'lacteos', calories: [1200, 1300, 1400] },
];

const ClientNecesity = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [foodType, setFoodType] = useState<string>('');
  const [calories, setCalories] = useState<number | ''>('');

  const selectedFood: FoodOption | undefined = foodOptions.find(
    (option) => option.type === foodType
  );

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Escucha el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Establece el ancho de la ventana inicialmente
    setWindowWidth(window.innerWidth);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Nombre:', name);
    console.log('Apellido:', lastname);
    console.log('Email:', email);
    console.log('Tipo de alimento:', foodType);
    console.log('Calorías:', calories);
    // Resto del código para enviar los datos
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[10vh]" id="client-necessary">
      <div className="max-w-5xl mx-auto px-10 py-10 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          <div className="mb-4 lg:mr-8">
            <h2 className="text-3xl font-bold mb-4">¡Descubre cómo un consumo limitado de calorías diarias puede transformar tu salud!</h2>
            <p className="text-gray-700 text-justify">
              Controla tu ingesta de alimentos y nutre tu cuerpo sin excederte en calorías. Pierde peso gradualmente, reduce el riesgo de enfermedades y mejora tu bienestar. Regístrate para recibir asesoramiento nutricional gratuito y transforma tu vida hacia una mayor salud.
            </p>
          </div>

          <div className="w-32 h-32 mb-4 lg:mb-0">
            <Image 
            src="/icon _health_.svg" 
            alt="Health Icon" 
            height={windowWidth < 768 ? 100 : 120}
            width={windowWidth < 768 ? 100 : 120}
            className="object-contain" />
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="lastname" className="block text-gray-700 font-medium">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="foodType" className="block text-gray-700 font-medium">
                Tipo de alimento
              </label>
              <select
                id="foodType"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Seleccione un tipo de alimento
                </option>
                {foodOptions.map((option) => (
                  <option key={option.type} value={option.type}>
                    {option.type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="calories" className="block text-gray-700 font-medium">
                Calorías deseadas
              </label>
              <select
                id="calories"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                required
              >
                <option value="" disabled>
                  Seleccione las calorías deseadas
                </option>
                {selectedFood?.calories.map((calorie) => (
                  <option key={calorie} value={calorie}>
                    {calorie} calorías
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientNecesity;
