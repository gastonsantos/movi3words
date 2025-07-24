"use client";
import { useRouter } from 'next/navigation';

const ErrorDeSala= () => {
  const router = useRouter();

  const redirect = () => {
    router.push('/');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 inset-1">
       
      <div className="text-center">
        <h1 className="text-5xl font-bold">Ups!!</h1>
        <p className="text-2xl text-white py-6 font-bold">
          Usted no tiene permisos para ver esta página o vista. Por favor, comience el juego nuevamente.
        </p>
        <button onClick={redirect} className="bg-orange-400 rounded-lg p-2 hover:bg-orange-700">
          Jugar
           <span>📥</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorDeSala;
