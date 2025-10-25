import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart.items[plant.id]);

  return (
    <div className="border p-4 rounded">
      <img src={plant.image} alt={plant.name} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-bold">{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        disabled={!!inCart}
        className={`mt-2 px-4 py-1 rounded ${inCart ? 'bg-gray-400' : 'bg-green-600 text-white'}`}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}