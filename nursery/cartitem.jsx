import { increment, decrement, remove } from '../redux/cartSlice';

export default function CartItem({ item, dispatch }) {
  return (
    <div className="flex items-center gap-4 border-b py-2">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p>₹{item.price}</p>
        <div className="flex gap-2 mt-2">
          <button onClick={() => dispatch(decrement(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
        </div>
      </div>
      <button onClick={() => dispatch(remove(item.id))} className="text-red-600">Delete</button>
    </div>
  );
}