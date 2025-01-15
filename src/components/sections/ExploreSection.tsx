// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Map, Utensils, Ticket, Compass, Building, Camera, Tag } from 'lucide-react'

// export const ExploreSection = () => {
//   const categories = [
//     {
//       icon: Utensils,
//       title: "Food & Dining",
//       description: "From street food to fine dining, discover the best of Hyderabadi cuisine",
//       color: "bg-[#FFE485]",
//       delay: 0.2
//     },
//     {
//       icon: Building,
//       title: "Historic Sites",
//       description: "Explore iconic landmarks and hidden architectural gems",
//       color: "bg-[#85FFE9]",
//       delay: 0.3
//     },
//     {
//       icon: Camera,
//       title: "Photo Spots",
//       description: "Find the most Instagram-worthy locations across the city",
//       color: "bg-[#FFB7F5]",
//       delay: 0.4
//     }
//   ]

//   return (
//     <section className="py-24 bg-[#FAFAFA]">
//       <div className="container mx-auto w-[85%]">
//         {/* Section Header */}
//         <div className="max-w-2xl mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-serif mb-6"
//           >
//             Discover the{' '}
//             <span className="relative inline-block">
//               magic of Hyderabad
//               <div className="absolute inset-0 bg-[#FFE485] -z-10 translate-y-[8px] skew-x-[-8deg]"></div>
//             </span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-xl font-mono text-gray-600"
//           >
//             Get insider tips, exclusive deals, and curated guides to experience 
//             the best of what the city has to offer.
//           </motion.p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid md:grid-cols-3 gap-6 mb-16">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: category.delay }}
//               className="bg-white rounded-3xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform"
//             >
//               <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
//                 <category.icon className="w-6 h-6" />
//               </div>
//               <h3 className="text-2xl font-serif mb-3">{category.title}</h3>
//               <p className="font-mono text-gray-600">{category.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Featured Deals Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_rgba(255,228,133,0.5)] mb-16"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="max-w-xl mb-8 md:mb-0">
//               <div className="font-mono text-[#FFE485] mb-4 flex items-center gap-2">
//                 <Tag className="w-4 h-4" />
//                 Coming Soon
//               </div>
//               <h3 className="text-3xl font-serif mb-4">Unlock City Deals</h3>
//               <p className="font-mono text-gray-400 mb-6">
//                 Get special discounts at popular restaurants, gyms, and entertainment spots. 
//                 Save while exploring the citys best experiences!
//               </p>
//               <button className="bg-[#FFE485] hover:bg-[#FFD952] text-black px-6 py-3 rounded-full font-mono shadow-[4px_4px_0px_rgba(255,255,255,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,0.3)]">
//                 Join Waitlist
//               </button>
//             </div>
//             <div className="w-full md:w-72 aspect-square bg-gradient-to-br from-[#FFE485] to-[#FFB649] rounded-3xl flex items-center justify-center shadow-lg">
//               <Ticket className="w-24 h-24 text-white" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Weekend Getaways */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//           className="bg-white rounded-3xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.08)]"
//         >
//           <div className="flex items-center mb-6">
//             <Compass className="w-6 h-6 text-gray-900 mr-3" />
//             <h3 className="text-2xl font-serif">Weekend Getaways</h3>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { title: "Ramoji Film City", distance: "45 mins away" },
//               { title: "Nagarjuna Sagar", distance: "2.5 hours away" },
//               { title: "Warangal Fort", distance: "3 hours away" },
//             ].map((place, index) => (
//               <div key={index} className="bg-gray-50 rounded-2xl p-6 font-mono">
//                 <div className="font-semibold mb-1">{place.title}</div>
//                 <div className="text-gray-600 text-sm">{place.distance}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// src/components/sections/ExploreSection.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Map, Compass, Tag, Camera, Utensils, Building, ArrowRight } from 'lucide-react'

export const ExploreSection = () => {
  const [activeTab, setActiveTab] = useState('food')

  const renderContent = () => {
    switch(activeTab) {
        case 'food':
            return (
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Utensils className="w-5 h-5 text-[#FFE485]" />
                    <span className="text-[#FFE485] font-mono text-sm">Shah Ghouse</span>
                    <span className="ml-auto bg-[#FFE485]/20 text-[#FFE485] text-xs font-mono px-2 py-1 rounded-full">Zyro Exclusive</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-400 text-sm font-mono">25% off on Special Hyderabadi Biryani</p>
                    <span className="text-[#FFE485] text-xs font-mono">Save ₹150</span>
                  </div>
                </motion.div>
          
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Utensils className="w-5 h-5 text-[#85FFE9]" />
                    <span className="text-[#85FFE9] font-mono text-sm">Ariko Cafe</span>
                    <span className="ml-auto bg-[#85FFE9]/20 text-[#85FFE9] text-xs font-mono px-2 py-1 rounded-full">Zyro Exclusive</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-400 text-sm font-mono">Buy 2 Get 1 on Signature Gelatos</p>
                    <span className="text-[#85FFE9] text-xs font-mono">Save ₹200</span>
                  </div>
                </motion.div>
          
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Utensils className="w-5 h-5 text-[#FFB7F5]" />
                    <span className="text-[#FFB7F5] font-mono text-sm">Cream Stone</span>
                    <span className="ml-auto bg-[#FFB7F5]/20 text-[#FFB7F5] text-xs font-mono px-2 py-1 rounded-full">Zyro Exclusive</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-400 text-sm font-mono">20% off on Ice Cream Cakes</p>
                    <span className="text-[#FFB7F5] text-xs font-mono">Save ₹100</span>
                  </div>
                </motion.div>
              </div>
            )
          
      case 'historic':
        return (
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-[#85FFE9]" />
                <span className="text-[#85FFE9] font-mono text-sm">Charminar</span>
                <span className="ml-auto text-[#85FFE9] text-sm font-mono">Guide Available</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">Explore the historic heart of Hyderabad</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-[#FFE485]" />
                <span className="text-[#FFE485] font-mono text-sm">Golconda Fort</span>
                <span className="ml-auto text-[#FFE485] text-sm font-mono">Light Show</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">Evening sound & light show tickets</p>
            </motion.div>
          </div>
        )
      case 'weekend':
        return (
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-[#FFE485]" />
                <span className="text-[#FFE485] font-mono text-sm">Ramoji Film City</span>
                <span className="ml-auto text-[#FFE485] text-sm font-mono">1 hr away</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">Worlds largest film studio complex</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-[#FFB7F5]" />
                <span className="text-[#FFB7F5] font-mono text-sm">Nagarjuna Sagar</span>
                <span className="ml-auto text-[#FFB7F5] text-sm font-mono">2.5 hrs away</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">Worlds tallest masonry dam</p>
            </motion.div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-[#FFE485] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-[#85FFE9] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto w-[85%]">
        {/* Main Explore Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          {/* 3D Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#FFE485] rounded-2xl rotate-12 opacity-80"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#85FFE9] rounded-2xl -rotate-12 opacity-80"></div>

          <div className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_rgba(255,228,133,0.5)] relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* City Explorer Preview */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  {/* Category Tabs */}
                  <div className="grid grid-cols-3 gap-2 mb-6">  {/* Reduced gap from 4 to 2 */}
  <button 
    onClick={() => setActiveTab('food')}
    className={`px-3 py-2 rounded-full text-xs font-mono transition-colors ${activeTab === 'food' ? 'bg-[#FFE485]/20 text-[#FFE485]' : 'bg-white/10 hover:bg-white/20 text-gray-300'}`}
  >
    Food & Dining
  </button>
  <button 
    onClick={() => setActiveTab('historic')}
    className={`px-3 py-2 rounded-full text-xs font-mono transition-colors ${activeTab === 'historic' ? 'bg-[#FFE485]/20 text-[#FFE485]' : 'bg-white/10 hover:bg-white/20 text-gray-300'}`}
  >
    Historic Sites
  </button>
  <button 
    onClick={() => setActiveTab('weekend')}
    className={`px-3 py-2 rounded-full text-xs font-mono transition-colors ${activeTab === 'weekend' ? 'bg-[#FFE485]/20 text-[#FFE485]' : 'bg-white/10 hover:bg-white/20 text-gray-300'}`}
  >
    Weekend Trips
  </button>
</div>

                  {/* Dynamic Content */}
                  {renderContent()}
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-20 -right-8 w-32 h-32 bg-gradient-to-br from-[#FFE485] to-[#FFB649] rounded-3xl rotate-12 flex items-center justify-center">
                  <Map className="w-16 h-16 text-white transform -rotate-12" />
                </div>

                <div className="font-mono text-[#FFE485] mb-4">Coming Soon</div>
                <h2 className="text-4xl font-serif mb-6">Discover local favorites</h2>
                <p className="font-mono text-gray-400 mb-8">
                  Explore curated lists of the best local spots, get exclusive deals, 
                  and unlock unique experiences across Hyderabad.
                </p>
                <button className="bg-[#FFE485] hover:bg-[#FFD952] text-black px-6 py-3 rounded-full font-mono flex items-center gap-2 group transition-all">
                  Start Exploring 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Compass,
              title: "Weekend Trips",
              description: "Discover amazing destinations within 3 hours from the city",
              gradient: "from-[#FFE485] to-[#FFB649]"
            },
            {
              icon: Tag,
              title: "Exclusive Deals",
              description: "Get special discounts at top restaurants and attractions",
              gradient: "from-[#85FFE9] to-[#5DFFD9]"
            },
            {
              icon: Camera,
              title: "Photo Walks",
              description: "Join guided tours to capture the city's best moments",
              gradient: "from-[#FFB7F5] to-[#FF85C0]"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-3xl translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 opacity-20"></div>
              <div className="bg-white rounded-3xl p-8 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                <p className="font-mono text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}