import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

const plants = [
  { id: 1, name: 'Monstera', price: 25, category: 'Tropical', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
  { id: 2, name: 'Palm', price: 30, category: 'Tropical', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400' },
  { id: 3, name: 'Aloe Vera', price: 15, category: 'Succulents', img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 4, name: 'Cactus', price: 12, category: 'Succulents', img: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
  { id: 5, name: 'Orchid', price: 40, category: 'Flowering', img: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400' },
  { id: 6, name: 'Peace Lily', price: 22, category: 'Flowering', img: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' }
];

const categories = ['Tropical', 'Succulents', 'Flowering'];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = (id) => cartItems.some(i => i.id === id);

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
                <button disabled={isInCart(p.id)} onClick={() => dispatch(addToCart(p))}>
                  {isInCart(p.id) ? 'Added' : 'Add to Cart'}
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