import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

export default function Landing() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-5xl font-bold mb-4">GreenNest</h1>
      <p className="text-xl mb-6 w-2/3 text-center">We bring nature to your doorstep with curated houseplants that purify air and elevate your space.</p>
      <Link to="/products" className="bg-green-600 px-6 py-2 rounded hover:bg-green-700">Get Started</Link>
    </div>
  );
}