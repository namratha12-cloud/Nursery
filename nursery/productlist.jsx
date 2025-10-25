import plants from '../data/plants.json';
import PlantCard from '../components/PlantCard';

export default function Products() {
  const categories = ['Air Purifiers', 'Succulents', 'Low Light'];

  return (
    <div className="p-6">
      {categories.map(cat => (
        <div key={cat}>
          <h2 className="text-2xl font-bold mb-4">{cat}</h2>
          <div className="grid grid-cols-3 gap-4">
            {plants.filter(p => p.category === cat).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}