import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <div className="mt-4">
        {Object.values(items).map(item => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button onClick={() => alert("Coming Soon")} className="bg-blue-600 px-4 py-2 text-white rounded">Checkout</button>
        <Link to="/products" className="bg-gray-300 px-4 py-2 rounded">Continue Shopping</Link>
      </div>
    </div>
  );
}