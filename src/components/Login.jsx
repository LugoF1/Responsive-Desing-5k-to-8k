import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setAlertMessage('Por favor, completa todos los campos.');
      setAttempts(attempts + 1);
    } else {
      setAlertMessage('Intento de inicio de sesión enviado.');
      setAttempts(0);
    }

    if (attempts >= maxAttempts) {
      setAlertMessage('Has superado el número máximo de intentos. Intenta de nuevo en 5 segundos.');
      setIsSubmitDisabled(true);
      setTimeout(() => {
        setIsSubmitDisabled(false);
        setAttempts(0);
      }, 5000);
    }
  };

  return (
    <main className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-6 text-gray-800">Inicia Sesión</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2 text-gray-600">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-2 text-gray-600">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              id="submitButton"
              disabled={isSubmitDisabled}
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
            >
              Iniciar Sesión
            </button>
          </div>

          {alertMessage && (
            <div className="p-4 bg-red-500 text-white font-semibold rounded-lg mb-4">
              {alertMessage}
            </div>
          )}

          <p className="text-center text-sm text-gray-600">
            ¿No tienes una cuenta? <a href="/register" className="text-indigo-600 hover:underline">Regístrate aquí</a>.
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
