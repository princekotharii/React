import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import samsungLogo from "../assets/samsunglogo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        <img 
          src={samsungLogo} 
          alt="Samsung Logo" 
          className="h-8 cursor-pointer" 
        />

        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Mobile</li>
          <li className="hover:text-blue-500 cursor-pointer">TV & AV</li>
          <li className="hover:text-blue-500 cursor-pointer">Home Appliances</li>
          <li className="hover:text-blue-500 cursor-pointer">Offers</li>
        </ul>

        <div className="flex items-center space-x-4">
          <FaSearch className="w-5 h-5 cursor-pointer" />
          <FaShoppingCart className="w-5 h-5 cursor-pointer" />
          <FaUser className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
