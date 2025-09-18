import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProductShowcase = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Galaxy S24 Ultra",
      category: "Mobile",
      price: "From ₹1,29,999",
      image: "/api/placeholder/400/300",
      description: "AI Phone. Next level photography.",
      color: "bg-gradient-to-br from-gray-900 to-gray-700",
      textColor: "text-white"
    },
    {
      id: 2,
      name: "Galaxy Watch7",
      category: "Wearables",
      price: "From ₹35,999",
      image: "/api/placeholder/400/300",
      description: "Your everyday wellness companion.",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      textColor: "text-white"
    },
    {
      id: 3,
      name: "Galaxy Buds3 Pro",
      category: "Audio",
      price: "From ₹19,999",
      image: "/api/placeholder/400/300",
      description: "Sound that moves you.",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      textColor: "text-white"
    },
    {
      id: 4,
      name: "Neo QLED 8K",
      category: "TV & Audio",
      price: "From ₹3,49,990",
      image: "/api/placeholder/400/300",
      description: "Quantum Matrix Technology Pro.",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest innovations from Samsung's premium product lineup
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image Container */}
              <div className={`${product.color} h-64 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 h-full flex items-center justify-center p-6">
                  <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className={`text-2xl font-medium ${product.textColor}`}>
                      {product.category}
                    </span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                    Buy Now
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center justify-center group">
                    Learn More
                    <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;