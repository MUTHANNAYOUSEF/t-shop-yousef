import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, Heart, User, Package, Star, ChevronRight } from 'lucide-react';

const TShopWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState(0);

  const products = [
    { id: 1, name: 'Classic Butter Biscuits', price: 4.99, rating: 4.8, image: '🍪' },
    { id: 2, name: 'Chocolate Chip Cookies', price: 5.99, rating: 4.9, image: '🍪' },
    { id: 3, name: 'Traditional Tea Biscuits', price: 3.99, rating: 4.7, image: '🍪' },
    { id: 4, name: 'Oatmeal Crunch', price: 5.49, rating: 4.6, image: '🍪' },
  ];

  const categories = ['All Biscuits', 'Butter Biscuits', 'Chocolate', 'Tea Time', 'Gift Boxes'];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const renderHome = () => (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-12 rounded-lg mb-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            Traditional Biscuits,<br />Made with Love
          </h1>
          <p className="text-xl text-amber-800 mb-6">
            Crafting authentic biscuits since 1985. Experience the taste of tradition in every bite.
          </p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-4xl mb-3">🚚</div>
          <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
          <p className="text-gray-600">On orders over $25</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-4xl mb-3">🌾</div>
          <h3 className="font-bold text-lg mb-2">Natural Ingredients</h3>
          <p className="text-gray-600">No artificial preservatives</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="font-bold text-lg mb-2">Award Winning</h3>
          <p className="text-gray-600">Quality since 1985</p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
              <div className="bg-amber-50 h-48 flex items-center justify-center text-7xl">
                {product.image}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-600">${product.price}</span>
                  <button 
                    onClick={addToCart}
                    className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-amber-900 text-white p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Heritage</h2>
          <p className="text-lg mb-6">
            For nearly four decades, T-Shop has been baking traditional biscuits using time-honored recipes 
            passed down through generations. Every batch is made with premium ingredients and baked to perfection.
          </p>
          <button className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-amber-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div>
      <h1 className="text-4xl font-bold text-amber-900 mb-6">Our Biscuits</h1>
      
      {/* Categories */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {categories.map((cat, idx) => (
          <button 
            key={idx}
            className="px-6 py-2 bg-white border-2 border-amber-600 text-amber-600 rounded-full whitespace-nowrap hover:bg-amber-600 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...products, ...products].map((product, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition">
            <div className="bg-amber-50 h-56 flex items-center justify-center text-8xl relative">
              {product.image}
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-red-50 transition">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">Traditional recipe with finest ingredients</p>
              <div className="flex items-center mb-3">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                <button 
                  onClick={addToCart}
                  className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-amber-900 mb-6">About T-Shop</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded in 1985, T-Shop began as a small family bakery with a passion for creating 
          authentic, traditional biscuits. Our founder, Thomas Baker, believed that quality 
          ingredients and time-honored techniques were the keys to exceptional taste.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Today, we continue that legacy, baking every biscuit with the same dedication and care. 
          Our recipes have been perfected over decades, ensuring that each bite delivers the 
          comforting, familiar taste that our customers have loved for generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-amber-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-amber-900">Our Mission</h3>
          <p className="text-gray-700">
            To bring joy and comfort through traditional biscuits made with authentic recipes, 
            natural ingredients, and genuine care.
          </p>
        </div>
        <div className="bg-amber-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-amber-900">Our Values</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Quality ingredients</li>
            <li>• Traditional methods</li>
            <li>• Family recipes</li>
            <li>• Customer satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-amber-900 mb-6">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32"></textarea>
          </div>
          <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-semibold">
            Send Message
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-amber-50 rounded-lg p-4 text-center">
          <div className="text-3xl mb-2">📍</div>
          <h3 className="font-bold mb-1">Address</h3>
          <p className="text-sm text-gray-700">123 Baker Street<br />London, UK</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 text-center">
          <div className="text-3xl mb-2">📞</div>
          <h3 className="font-bold mb-1">Phone</h3>
          <p className="text-sm text-gray-700">+44 20 1234 5678</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 text-center">
          <div className="text-3xl mb-2">✉️</div>
          <h3 className="font-bold mb-1">Email</h3>
          <p className="text-sm text-gray-700">hello@tshop.com</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🍪</div>
              <div>
                <h1 className="text-2xl font-bold">T-Shop</h1>
                <p className="text-xs text-amber-200">Traditional Biscuits Since 1985</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-8">
              <button onClick={() => setCurrentPage('home')} className={`hover:text-amber-200 transition ${currentPage === 'home' ? 'text-amber-200 font-semibold' : ''}`}>Home</button>
              <button onClick={() => setCurrentPage('products')} className={`hover:text-amber-200 transition ${currentPage === 'products' ? 'text-amber-200 font-semibold' : ''}`}>Products</button>
              <button onClick={() => setCurrentPage('about')} className={`hover:text-amber-200 transition ${currentPage === 'about' ? 'text-amber-200 font-semibold' : ''}`}>About</button>
              <button onClick={() => setCurrentPage('contact')} className={`hover:text-amber-200 transition ${currentPage === 'contact' ? 'text-amber-200 font-semibold' : ''}`}>Contact</button>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hover:text-amber-200 transition">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-amber-200 transition">
                <User className="w-5 h-5" />
              </button>
              <button className="hover:text-amber-200 transition relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'products' && renderProducts()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'contact' && renderContact()}
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">T-Shop</h3>
              <p className="text-amber-200 text-sm">Traditional biscuits made with love since 1985.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-200">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Products</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition">About Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-amber-200">
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-amber-200 text-sm mb-3">Subscribe for special offers and updates</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-gray-900 text-sm flex-1" />
                <button className="bg-amber-600 px-4 py-2 rounded hover:bg-amber-700 transition">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-200">
            <p>&copy; 2026 T-Shop Biscuits. All rights reserved. Made with 🧡 and butter.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TShopWebsite;