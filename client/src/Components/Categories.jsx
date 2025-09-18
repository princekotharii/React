import React from 'react';
import { FaMobile, FaTv, FaHome, FaLaptop, FaHeadphones, FaTabletAlt } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Mobile",
      description: "Smartphones & Accessories",
      icon: FaMobile,
      color: "from-blue-500 to-blue-700",
      items: ["Galaxy S Series", "Galaxy A Series", "Galaxy Z Series", "Accessories"]
    },
    {
      id: 2,
      title: "Computing",
      description: "Laptops, Tablets & Monitors",
      icon: FaLaptop,
      color: "from-purple-500 to-purple-700",
      items: ["Galaxy Book", "Galaxy Tab", "Monitors", "Memory & Storage"]
    },
    {
      id: 3,
      title: "TV & Audio",
      description: "Smart TVs & Sound Systems",
      icon: FaTv,
      color: "from-indigo-500 to-indigo-700",
      items: ["Neo QLED", "QLED TV", "Crystal UHD", "Soundbars"]
    },
    {
      id: 4,
      title: "Home Appliances",
      description: "Smart Home Solutions",
      icon: FaHome,
      color: "from-green-500 to-green-700",
      items: ["Refrigerators", "Washing Machines", "Microwaves", "Air Conditioners"]
    },
    {
      id: 5,
      title: "Wearables",
      description: "Watches & Audio",
      icon: FaTabletAlt,
      color: "from-pink-500 to-pink-700",
      items: ["Galaxy Watch", "Galaxy Buds", "Galaxy Ring", "Accessories"]
    },
    {
      id: 6,
      title: "Audio",
      description: "Premium Sound Experience",
      icon: FaHeadphones,
      color: "from-orange-500 to-orange-700",
      items: ["Galaxy Buds", "Soundbars", "Speakers", "Audio Accessories"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Samsung's complete ecosystem of innovative products designed for your lifestyle
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Category Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                  </div>

                  {/* Category Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  {/* Explore Button */}
                  <div className="pt-4">
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors group-hover:underline">
                      Explore {category.title} →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offers Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-light mb-4">
            Special Offers & Deals
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on exclusive discounts and bundle offers across all Samsung products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              View All Offers
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Student Discount
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;