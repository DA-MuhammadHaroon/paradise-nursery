import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  // Tropical (6 plants)
  { id: 1, name: 'Monstera', price: 25, category: 'Tropical', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
  { id: 2, name: 'Palm', price: 30, category: 'Tropical', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 35, category: 'Tropical', img: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?w=400' },
  { id: 4, name: 'Rubber Plant', price: 28, category: 'Tropical', img: 'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=400' },
  { id: 5, name: 'Bird of Paradise', price: 45, category: 'Tropical', img: 'https://images.unsplash.com/photo-1612363148951-d1a9d5f9d7f4?w=400' },
  { id: 6, name: 'Philodendron', price: 22, category: 'Tropical', img: 'https://images.unsplash.com/photo-1611211232932-da3113c5b960?w=400' },

  // Succulents (6 plants)
  { id: 7, name: 'Aloe Vera', price: 15, category: 'Succulents', img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 8, name: 'Cactus', price: 12, category: 'Succulents', img: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
  { id: 9, name: 'Jade Plant', price: 18, category: 'Succulents', img: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400' },
  { id: 10, name: 'Echeveria', price: 14, category: 'Succulents', img: 'https://images.unsplash.com/photo-1520302519878-3fba5c4d4e9c?w=400' },
  { id: 11, name: 'Haworthia', price: 16, category: 'Succulents', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
  { id: 12, name: 'Sedum', price: 13, category: 'Succulents', img: 'https://images.unsplash.com/photo-1552324988-4c2c9f8f0a1b?w=400' },

  // Flowering (6 plants)
  { id: 13, name: 'Orchid', price: 40, category: 'Flowering', img: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400' },
  { id: 14, name: 'Peace Lily', price: 22, category: 'Flowering', img: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
  { id: 15, name: 'Anthurium', price: 32, category: 'Flowering', img: 'https://images.unsplash.com/photo-1616500163202-8b2f0e5a1b9b?w=400' },
  { id: 16, name: 'African Violet', price: 18, category: 'Flowering', img: 'https://images.unsplash.com/photo-1610870931731-7f9c8d0a3e1b?w=400' },
  { id: 17, name: 'Begonia', price: 20, category: 'Flowering', img: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400' },
  { id: 18, name: 'Kalanchoe', price: 17, category: 'Flowering', img: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400' }
];

const categories = ['Tropical', 'Succulents', 'Flowering'];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartIds = new Set(cartItems.map(i => i.id));

  return (
    <div>
      {categories.map(cat => (
        <div className="category" key={cat}>
          <h2>{cat}</h2>
          <div className="plants-grid">
            {plants.filter(p => p.category === cat).map(p => (
              <div className="plant-card" key={p.id}>
                <img src={p.img} alt={p.name} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
                <button disabled={cartIds.has(p.id)} onClick={() => dispatch(addItem(p))}>
                  {cartIds.has(p.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;