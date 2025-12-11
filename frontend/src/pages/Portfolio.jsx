import React from 'react';
import { motion } from 'framer-motion';
import MarketHeader from '../components/MarketHeader'; 
import { Link } from 'react-router-dom';
import { LayoutDashboard, Wallet, Settings, FileText, BarChart, LogOut, TrendingUp, DollarSign,  Clock } from 'lucide-react';

const NAVY = '#0A192F';
const GOLD = '#AA934F'; 

const portfolioSummary = {
    currentValue: 92350.50,
    totalInvestment: 85000,
    earnings: 7350.50,
    unrealizedGains: 7350.50,
    monthlyPayout: 450.20,
};
const detailedHoldings = [
    { id: 1, name: 'Luxury Villa, Bali', type: 'NFT', invested: 35000, currentValue: 38500, roi: 10.0, payout: 150 },
    { id: 2, name: 'Modern Condo, Lisbon', type: 'Fractional', invested: 25000, currentValue: 27100, roi: 8.4, payout: 120 },
    { id: 3, name: 'Hexagon Estate, Lagos', type: 'Fractional', invested: 18000, currentValue: 18750, roi: 4.2, payout: 80 },
];
const dashboardMetrics = {
    totalInvestment: 85000,
    currentValue: 92350.50,
    totalProfit: 7350.50,
    apy: 8.65,
    propertiesOwned: 5,
};

const portfolioBreakdown = [
    { name: 'Luxury Villa, Bali', value: 35000, percentage: 38.0 },
    { name: 'Modern Condo, Lisbon', value: 25000, percentage: 27.1 },
    { name: 'Hexagon Estate, Lagos', value: 18000, percentage: 19.5 },
    { name: 'Cash/Pending', value: 14350.50, percentage: 15.4 },
];

const recentActivity = [
    { id: 1, type: 'Investment', amount: 5000, property: 'Lisbon Condo', date: '2025-11-20', status: 'Completed' },
    { id: 2, type: 'Payout', amount: 450.20, property: 'Bali Villa', date: '2025-12-01', status: 'Completed' },
    { id: 3, type: 'Investment', amount: 10000, property: 'Lagos Estate', date: '2025-12-05', status: 'Pending' },
];

const sidebarLinks = [
    { name: 'Portfolio', icon: BarChart, href: '/dashboard/portfolio', current: false },
    { name: 'Wallet & Funds', icon: Wallet, href: '/dashboard/wallet', current: false },
    { name: 'Documents', icon: FileText, href: '/dashboard/documents', current: false },
];

const   Portfolio = () => {
    
    const formatCurrency = (value) => {
        return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 1. Application Header (Top Bar) */}
            <MarketHeader />

             <div className="flex space-x-2 py-2">
                <Link
                    to="/marketplace" 
                    className="py-2 space-x-2 ml-[10px] mb-[-15px] mt-[20px] px-4 bg-gray-100 text-[#222222] border border-[#222222] font-semibold rounded-full text-sm  md:hidden "
                    
                >
                    My Dashboard
                </Link>
            </div>

            <div className="flex">
                {/* 2. SIDEBAR NAVIGATION */}
                <motion.aside 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`hidden lg:block w-64 bg-[#DEC05F] border-r border-gray-100 p-4 pt-8 flex-shrink-0 sticky top-0 h-screen`}
                >
                    {/* Overview is the active link for this view */}
                    <a href="/dashboard" className={`
                        flex items-center space-x-3 p-3 rounded-lg font-medium transition duration-200 mb-4 
                        bg-white text-[${NAVY}] shadow-sm  border-[${GOLD}]
                    `}>
                        <LayoutDashboard className="h-5 w-5" />
                        <span>Overview</span>
                    </a>

                    <nav className="space-y-2">
                        {sidebarLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a 
                                    key={index}
                                    href={link.href}
                                    className={`
                                        flex items-center space-x-3 p-3 rounded-lg font-medium transition duration-200 bg-[#e8cd75]
                                        text-white hover:bg-gray-100 hover:text-[#DEC05F]
                                    `}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{link.name}</span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Settings and Logout Anchor */}
                    <div className="mt-12 pt-4 border-t border-gray-200 space-y-2">
                        <a href="/dashboard/settings" className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-gray-100 hover:text-[#DEC05F] transition duration-200">
                            <Settings className="h-5 w-5" /> <span>Settings</span>
                        </a>
                        <button className="flex items-center space-x-3 p-3 rounded-lg text-red-500 hover:bg-red-50 transition duration-200 w-full text-left">
                            <LogOut className="h-5 w-5" /> <span>Log Out</span>
                        </button>
                    </div>
                </motion.aside>

                 {/* 3. MAIN PORTFOLIO CONTENT AREA */}
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold text-[${NAVY}] mb-8">Portfolio Management</h1>

                    {/* Summary Metrics */}
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10"
                    >
                        
                        {/* Summary Card 1: Current Value */}
                        <motion.div variants={cardVariants} className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[${GOLD}]">
                            <DollarSign className={`h-5 w-5 text-[${GOLD}] mb-1`} />
                            <p className="text-xs text-gray-500">Current Value</p>
                            <h2 className={`text-xl font-extrabold text-[${NAVY}]`}>{formatCurrency(portfolioSummary.currentValue)}</h2>
                        </motion.div>

                        {/* Summary Card 2: Total Investment */}
                         <motion.div variants={cardVariants} className="bg-white p-4 rounded-xl shadow-md border-l-4 border-gray-400">
                            
                            <p className="text-xs text-gray-500">Total Investment</p>
                            <h2 className={`text-xl font-extrabold text-[${NAVY}]`}>{formatCurrency(portfolioSummary.totalInvestment)}</h2>
                        </motion.div>
                        
                        {/* Summary Card 3: Earnings */}
                         <motion.div variants={cardVariants} className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500">
                            <TrendingUp className={`h-5 w-5 text-green-600 mb-1`} />
                            <p className="text-xs text-gray-500">Total Earnings</p>
                            <h2 className={`text-xl font-extrabold text-green-600`}>{formatCurrency(portfolioSummary.earnings)}</h2>
                        </motion.div>

                        {/* Summary Card 4: Monthly Payout */}
                         <motion.div variants={cardVariants} className="bg-white p-4 rounded-xl shadow-md border-l-4 border-sky-500">
                            <DollarSign className={`h-5 w-5 text-sky-600 mb-1`} />
                            <p className="text-xs text-gray-500">Monthly Payout</p>
                            <h2 className={`text-xl font-extrabold text-sky-600`}>{formatCurrency(portfolioSummary.monthlyPayout)}</h2>
                        </motion.div>
                        
                    </motion.div>


                    {/* Detailed Holdings Table */}
                    <motion.div variants={cardVariants} className="bg-white p-6 rounded-xl shadow-md mb-8">
                        <h3 className={`text-xl font-bold text-[${NAVY}] mb-4 border-b pb-2`}>Your Current Holdings</h3>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {['Asset Name', 'Type', 'Invested', 'Current Value', 'ROI (%)', 'Monthly Income'].map((header) => (
                                            <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {detailedHoldings.map((holding) => (
                                        <tr key={holding.id} className="hover:bg-gray-50 transition duration-150">
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold text-[${NAVY}]`}>{holding.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${holding.type === 'NFT' ? 'bg-[${NAVY}]/10 text-[${NAVY}]' : 'bg-orange-100 text-orange-600'}`}>
                                                    {holding.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatCurrency(holding.invested)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{formatCurrency(holding.currentValue)}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${holding.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                +{holding.roi.toFixed(1)}%
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatCurrency(holding.payout)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                </main>
            </div>
        </div>
    );
};

export default Portfolio;