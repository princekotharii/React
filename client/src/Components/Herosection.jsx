import React from 'react';
import Heroimage from "../assets/heroimage.jpg";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                Galaxy Tab S11 Ultra
              </h1>
              <p className="text-2xl lg:text-3xl font-light text-blue-100">
                Galaxy AI ✨
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-blue-100 max-w-lg leading-relaxed">
                Experience the future of productivity with Galaxy AI. Ultra-performance meets ultra-intelligence in our most advanced tablet yet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400/30">
              <div className="text-center">
                <div className="text-2xl font-light text-blue-100">14.6"</div>
                <div className="text-sm text-blue-200">Dynamic AMOLED 2X</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-blue-100">All Day</div>
                <div className="text-sm text-blue-200">Battery Life</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-blue-100">S Pen</div>
                <div className="text-sm text-blue-200">Included</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={Heroimage} 
                alt="Galaxy Tab S11 Ultra" 
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;