import React from 'react';
import { motion } from 'framer-motion';
import MarketHeader from '../components/MarketHeader'; 
import { Link } from 'react-router-dom';
import { LayoutDashboard, Wallet, Settings, FileText, BarChart, LogOut, TrendingUp, DollarSign, Briefcase, Clock } from 'lucide-react';

const NAVY = '#0A192F';
const GOLD = '#AA934F'; 


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

const Dashboard = () => {
    
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

                {/* 3. MAIN DASHBOARD CONTENT AREA */}
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold text-[${NAVY}] mb-8">Overview</h1>

                    {/* KEY METRICS (Four Columns on Desktop) */}
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
                    >
                        
                        {/* Card 1: Current Value (Matching the screenshot style) */}
                        <motion.div variants={cardVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[${GOLD}]">
                            <DollarSign className={`h-6 w-6 text-[${NAVY}] mb-2`} />
                            <p className="text-sm text-gray-500">Current Portfolio Value</p>
                            <h2 className={`text-3xl font-extrabold text-[${NAVY}]`}>{formatCurrency(dashboardMetrics.currentValue)}</h2>
                        </motion.div>

                        {/* Card 2: Total Profit */}
                        <motion.div variants={cardVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                            <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                            <p className="text-sm text-gray-500">Total Profit</p>
                            <h2 className={`text-3xl font-extrabold text-green-600`}>{formatCurrency(dashboardMetrics.totalProfit)}</h2>
                        </motion.div>
                        
                        {/* Card 3: Annual Yield (APY) */}
                        <motion.div variants={cardVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-400">
                            <Clock className={`h-6 w-6 text-[${NAVY}] mb-2`} />
                            <p className="text-sm text-gray-500">Avg. Annual Yield (APY)</p>
                            <h2 className={`text-3xl font-extrabold text-[${NAVY}]`}>{dashboardMetrics.apy}%</h2>
                        </motion.div>

                        {/* Card 4: Properties Owned */}
                        <motion.div variants={cardVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-sky-500">
                            <Briefcase className="h-6 w-6 text-sky-600 mb-2" />
                            <p className="text-sm text-gray-500">Properties Owned</p>
                            <h2 className={`text-3xl font-extrabold text-sky-600`}>{dashboardMetrics.propertiesOwned}</h2>
                        </motion.div>

                    </motion.div>


                    {/* PORTFOLIO ALLOCATION & RECENT ACTIVITY (Two-Column Section) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* LEFT (2/3 width): Portfolio Allocation */}
                        <motion.div variants={cardVariants} className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
                            <h3 className={`text-xl font-bold text-[${NAVY}] mb-6 border-b pb-2`}>Portfolio Allocation</h3>
                            
                            <div className="space-y-4">
                                {portfolioBreakdown.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <p className="font-medium text-gray-700">{item.name}</p>
                                            <p className="font-bold text-[${NAVY}]">{item.percentage.toFixed(1)}%</p>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.percentage}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                className={`h-2 rounded-full bg-[${GOLD}]`} 
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT (1/3 width): Recent Activity */}
                        <motion.div variants={cardVariants} className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
                            <h3 className={`text-xl font-bold text-[${NAVY}] mb-6 border-b pb-2`}>Recent Activity</h3>
                            <div className="space-y-4">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex justify-between items-center text-sm border-b pb-2 last:border-b-0">
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-gray-800">{activity.type} - {activity.property}</p>
                                            <p className="text-xs text-gray-500">{activity.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`font-bold ${activity.type === 'Investment' ? 'text-red-600' : 'text-green-600'}`}>
                                                {activity.type === 'Investment' ? '-' : '+'} {formatCurrency(activity.amount)}
                                            </p>
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${activity.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                {activity.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className={`w-full text-center text-sm font-medium text-[${GOLD}] hover:text-[${NAVY}] mt-4`}>
                                View Full History
                            </button>
                        </motion.div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;