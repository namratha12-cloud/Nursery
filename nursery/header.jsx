import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="flex justify-between items-center p-4 bg-green-100">
      <h1 className="text-xl font-bold">GreenNest</h1>
      <nav className="flex gap-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
      </nav>
    </header>
  );
}