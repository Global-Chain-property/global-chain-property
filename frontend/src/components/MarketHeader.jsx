import React from 'react';
import { UserCircle } from 'lucide-react'; 
import { motion } from 'framer-motion';
import logoImage from '../assets/image1.png';
import { Link } from 'react-router-dom';

const NAVY = '#222222';
const GOLD = '#DEC05f'; 

const MarketHeader = () => {
    
    const userName = "John Doe"; 
    const isVerified = true; 

    return (
        <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-gray-100">
            <div className="container mx-auto px-6 py-3">
                
                {/* TOP BAR: Logo, Dashboard Button, Connect Wallet (as seen in the design image) */}
                <div className="flex justify-between items-center pb-2 pt-2">
                    
                    {/* Logo/Brand */}
                    <div className="flex items-center space-x-2 ">
                        <img src={logoImage} alt="" className='w-50 h-50 top-0 absolute left-0 p-2 ml-[-20px] mt-[-65px] ' />
                    </div>

                    {/* App Navigation Buttons (Dashboard, Market) */}
                    <div className="flex space-x-2">
                        <Link
                            to="/marketplace" 
                            className="py-2 px-4 bg-[#222222] text-[#DEC05F] font-semibold rounded-full text-sm hidden sm:block"
                            whileHover={{ scale: 1.05 }}
                        >
                            Marketplace
                        </Link>
                        <Link
                            to="/dashboard" 
                            className="py-2  ml-[90px] px-4 bg-gray-100 text-[#222222] border border-[#222222] font-semibold rounded-full text-sm  hidden sm:block"
                            whileHover={{ scale: 1.05 }}
                        >
                            My Dashboard
                        </Link>
                    </div>


                    <div className="flex  space-x-1">
                        <motion.button 
                            className={`bg-[#DEC05F] ml-[8px] text-white shadow-[#DEC05F]/50 shadow-lg font-semibold py-2 px-2 rounded-full text-sm transition`}
                            whileHover={{ scale: 1.05 }}
                        >
                            Connect Wallet
                        </motion.button>
                        <div className="flex items-center space-x-2">
                            <UserCircle className={`h-8 w-8 ml-[60px] text-[#222222] hidden sm:block`} />
                            <span className="text-gray-700 font-medium hidden sm:block">{userName}</span>
                        </div>
                    </div>
                </div>

            

            </div>
        </header>
    );
};

export default MarketHeader;