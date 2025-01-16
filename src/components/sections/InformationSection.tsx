// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Zap } from 'lucide-react'

// export const InformationSection = () => {
//   const features = [
//     {
//       icon: "🏠",
//       title: "Verified Stays",
//       description: "Direct access to PGs and hostels"
//     },
//     {
//       icon: "👋",
//       title: "Local Community",
//       description: "Join events and make friends"
//     },
//     {
//       icon: "🍽️",
//       title: "Food Guides",
//       description: "Best biryani spots in the city"
//     },
//     {
//       icon: "🎯",
//       title: "Weekend Trips",
//       description: "Curated getaway destinations"
//     },
//     {
//       icon: "💰",
//       title: "Zero Brokerage",
//       description: "No hidden fees or charges"
//     },
//     {
//       icon: "🎁",
//       title: "Exclusive Deals",
//       description: "Special discounts for members"
//     },
//     // Duplicate items for smooth infinite scroll
//     {
//       icon: "🏠",
//       title: "Verified Stays",
//       description: "Direct access to PGs and hostels"
//     },
//     {
//       icon: "👋",
//       title: "Local Community",
//       description: "Join events and make friends"
//     }
//   ]

//   return (
//     <section className="bg-black text-white relative overflow-hidden py-40">
//       {/* Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
//       </div>

//       <div className="container mx-auto w-[75%] relative z-10">
//         <div className="grid md:grid-cols-2 gap-20 items-center">
//           {/* Left Column */}
//           <div className="max-w-md">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <h2 className="text-3xl font-bold tracking-tight leading-tight">
//                 Everything you need to settle in Hyderabad
//               </h2>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Zap className="w-4 h-4 text-[#FFE485]" />
//                   <span className="font-mono text-sm text-gray-300">Hassle-free house hunting</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Zap className="w-4 h-4 text-[#85FFE9]" />
//                   <span className="font-mono text-sm text-gray-300">Community of locals & newcomers</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Zap className="w-4 h-4 text-[#FFB7F5]" />
//                   <span className="font-mono text-sm text-gray-300">Curated city exploration guides</span>
//                 </div>
//               </div>
//               <button className="font-mono px-5 py-2.5 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors text-sm">
//                 Join Waitlist
//               </button>
//             </motion.div>
//           </div>

//           {/* Right Column - Scrolling Features */}
//           <div className="relative h-[500px] overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
//             <motion.div 
//               initial={{ y: 0 }}
//               animate={{ y: "-50%" }}
//               transition={{ 
//                 y: {
//                   duration: 25,
//                   repeat: Infinity,
//                   ease: "linear",
//                 },
//               }}
//               className="space-y-3"
//             >
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3.5 hover:bg-white/10 transition-colors"
//                 >
//                   <div className="flex items-start gap-3">
//                     <span className="text-xl">{feature.icon}</span>
//                     <div>
//                       <h3 className="font-medium mb-0.5">{feature.title}</h3>
//                       <p className="text-gray-400 font-mono text-xs">{feature.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export const InformationSection = () => {
  const baseFeatures = [
    {
      icon: "🏠",
      title: "Verified Stays",
      description: "Direct access to PGs and hostels"
    },
    {
      icon: "👋",
      title: "Local Community",
      description: "Join events and make friends"
    },
    {
      icon: "🍽️",
      title: "Food Guides",
      description: "Best biryani spots in the city"
    },
    {
      icon: "🎯",
      title: "Weekend Trips",
      description: "Curated getaway destinations"
    },
    {
      icon: "💰",
      title: "Zero Brokerage",
      description: "No hidden fees or charges"
    },
    {
      icon: "🎁",
      title: "Exclusive Deals",
      description: "Special discounts for members"
    }
  ]

  // Triple the array to ensure smooth infinite scroll
  const features = [...baseFeatures, ...baseFeatures, ...baseFeatures]

  return (
    <section className="bg-black text-white relative overflow-hidden py-40">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto w-[75%] relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="max-w-md">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold tracking-tight leading-tight">
                Everything you need to settle in Hyderabad
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#FFE485]" />
                  <span className="font-mono text-sm text-gray-300">Hassle-free house hunting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#85FFE9]" />
                  <span className="font-mono text-sm text-gray-300">Community of locals & newcomers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#FFB7F5]" />
                  <span className="font-mono text-sm text-gray-300">Curated city exploration guides</span>
                </div>
              </div>
              <button className="font-mono px-5 py-2.5 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors text-sm">
                Join Waitlist
              </button>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Features */}
          <div className="relative h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
            <div className="animate-infinite-scroll">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3.5 hover:bg-white/10 transition-colors mb-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-medium mb-0.5">{feature.title}</h3>
                      <p className="text-gray-400 font-mono text-xs">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}