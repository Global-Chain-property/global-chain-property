import React from 'react';
import { motion } from 'framer-motion';
import MarketHeader from '../components/MarketHeader'; 
import { Search, Sliders, Menu } from 'lucide-react'; 
import { Link} from 'react-router-dom';
import image1 from '../assets/herobg1.jpg'
import image2 from '../assets/herobg2.jpg'
import image3 from '../assets/herobg3.jpg'
import image4 from '../assets/herobg4.jpg'


const NAVY = '#222222';
const GOLD = '#DEC05F'; 


const propertyListings = [
    { id: 1, type: 'NFT', title: 'Luxury Villa, Bali, Indonesia', value: '7,500,000.00', apy: '7.8%', min_invest: 500, img: image1 },
    { id: 2, type: 'Fractional', title: 'Modern Condo, Lisbon, Portugal', value: '600,000.00', apy: '6.5%', min_invest: 100, img: image2 },
    { id: 3, type: 'Fractional', title: 'Hexagon Luxury Estate, Lagos, Nigeria', value: '4,500,000.00', apy: '8.2%', min_invest: 1000, img: image3 },
    { id: 4, type: 'Fractional', title: 'Beverly Estate, Lagos, Nigeria', value: '4,500,000.00', apy: '8.2%', min_invest: 1000, img: image4 },
    { id: 5, type: 'NFT', title: 'Luxury Villa, Bali, Indonesia', value: '7,500,000.00', apy: '7.8%', min_invest: 500, img: image1 },
    { id: 6, type: 'Fractional', title: 'Modern Condo, Lisbon, Portugal', value: '600,000.00', apy: '6.5%', min_invest: 100, img: image2 },

];


const assetFilters = ['All', 'Fractional Shares', 'Full NFT', 'Residences'];



const Marketplace = () => {
    

    const cardContainerVariants = {
      visible: {
        transition: {
          staggerChildren: 0.05, 
        },
      },
    };

    const cardItemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    
    // Function to format currency 
    const formatCurrency = (value) => {
      // Simple string formatter for display purposes
      return `$${value.toLocaleString('en-US')}`; 
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <MarketHeader />

            <div className="flex space-x-2 py-2">
                <Link
                    to="/dashboard" 
                    className="py-2 space-x-2 ml-[10px] mb-[-15px] mt-[20px] px-4 bg-gray-100 text-[#222222] border border-[#222222] font-semibold rounded-full text-sm  md:hidden "
                    
                >
                    My Dashboard
                </Link>
            </div>

            <div className="flex items-center space-x-4 pt-4">

                    
                    {/* Search Bar */}
                    <div className="flex items-center w-full max-w-lg border m-4 border-gray-300 rounded-full bg-gray-50 px-4 py-2">
                        <Search className="h-5 w-5 text-gray-500 mr-2"/>
                        <input 
                            type="text" 
                            placeholder="Search title, location, keyword (e.g. Bali)" 
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>
                    
                    {/* Filters Dropdown  */}
                    <motion.button 
                        className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 bg-white shadow-sm"
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Sort By</span> <Sliders className="h-4 w-4"/>
                    </motion.button>

                    {/* Filters Dropdown (Specific to Fractional/NFT) */}
                    <motion.button 
                        className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 bg-white shadow-sm"
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Filters</span> <Menu className="h-4 w-4"/>
                    </motion.button>
                </div>


            {/* 2. Main Content Container */}
            <div className="container mx-auto px-6 py-6 md:py-8">
                
                <h1 className="text-3xl font-bold text-[#222222] mb-6">The Global Property Market</h1>

                {/* 3. Horizontal Asset Filters (Tabs) */}
                <div className="flex items-center space-x-3 mb-6 overflow-x-auto pb-2">
                    {assetFilters.map((filter, index) => (
                        <motion.button 
                            key={index}
                            className={`
                                py-2 px-4 rounded-full font-medium text-sm whitespace-nowrap transition duration-200
                                ${filter === 'All' 
                                    ? `bg-[${NAVY}] text-white` 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }
                            `}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter}
                        </motion.button>
                    ))}
                </div>

                {/* 4. Property Listing Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardContainerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                >
                    {propertyListings.map((property) => (
                        <motion.div
                            key={property.id}
                            variants={cardItemVariants}
                            whileHover={{ y: -3, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
                        >
                            {/* Image Container with Type Tag */}
                            <div className="relative h-40">
                                <img 
                                    src={property.img} 
                                    alt={property.title} 
                                    className="w-full h-full object-cover"
                                />
                                <span className={`
                                    absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full text-white
                                    ${property.type === 'NFT' ? 'bg-green-700' : 'bg-orange-500'}
                                `}>
                                    {property.type}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="p-4">
                                <p className="text-sm text-gray-500 mb-1">{property.location}</p>
                                <h3 className={`text-lg font-semibold text-[${NAVY}] mb-2`}>{property.title}</h3>
                                
                                {/* Key Metrics */}
                                <div className="grid grid-cols-2 gap-2 text-xs border-t border-b py-2 mb-3">
                                    <div>
                                        <p className="text-gray-500">Total Value:</p>
                                        <p className="font-bold text-black">{formatCurrency(property.value)}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">7-Day APY:</p>
                                        <p className={`font-bold text-green-600`}>{property.apy}</p>
                                    </div>
                                </div>
                                

                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">Min. Invest: {formatCurrency(property.min_invest)}</p>
                                    <button 
                                        className={`bg-[${GOLD}] text-white font-medium py-2 px-4 rounded-lg text-sm transition hover:bg-opacity-90`}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </div>
    );
};

export default Marketplace;