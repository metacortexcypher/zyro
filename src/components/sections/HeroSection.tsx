// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Home, Users, Map, ArrowRight } from 'lucide-react'

// export const HeroSection = () => {
//   return (
//     <section className="relative pt-8 pb-24 bg-[#FAFAFA] overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Navigation */}
//       <nav className="container mx-auto w-[85%] flex justify-between items-center mb-20">
//         <div className="text-2xl font-bold">zyro</div>
//         <button className="bg-[#CEFF85] hover:bg-[#B8FF57] px-6 py-3 rounded-full text-black font-mono shadow-[4px_4px_0px_rgba(147,51,234,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(147,51,234,0.3)]">
//           Join Waitlist
//         </button>
//       </nav>

//       <div className="container mx-auto w-[85%]">
//         <div className="text-center mb-16">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block"
//           >
//             <span className="px-4 py-2 rounded-full bg-white shadow-md text-sm font-medium text-gray-900 mb-8 inline-block">
//               🚀 Coming Soon to Hyderabad
//             </span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-6"
//           >
//             <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight mb-8">
//               Experience{' '}
//               <div className="relative inline-block">
//                 <span className="relative z-10">Hyderabad</span>
//                 <div className="absolute inset-0 bg-[#FFB7F5] -z-[1] translate-y-[8px] skew-x-[-8deg] scale-105"></div>
//               </div>
//               <br /> like never before
//             </h1>
//           </motion.div>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-mono"
//           >
//             Find verified stays, connect with amazing people, and unlock the best experiences across the city.
//           </motion.p>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <button className="bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-200 flex items-center gap-2 mx-auto font-mono group">
//               Join the Waitlist
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Feature Cards */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.5 }}
//           className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//         >
//           {[
//             {
//               icon: Home,
//               title: "Verified Stays",
//               description: "Find your perfect home with verified PGs and hostels. Direct owner contact, zero brokerage.",
//               gradient: "from-[#FFB7F5] to-[#FF85C0]"
//             },
//             {
//               icon: Users,
//               title: "Join Community",
//               description: "Connect with locals and fellow newcomers. Find your tribe in the city.",
//               gradient: "from-[#85FFE9] to-[#85FFB7]"
//             },
//             {
//               icon: Map,
//               title: "Explore City",
//               description: "Discover hidden gems and get exclusive deals at local hotspots.",
//               gradient: "from-[#FFE485] to-[#FFB649]"
//             }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
//             >
//               <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6`}>
//                 <feature.icon className="w-7 h-7" />
//               </div>
//               <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">{feature.title}</h3>
//               <p className="text-gray-600 leading-relaxed font-mono">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative pt-8 pb-24 bg-[#FAFAFA] overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto w-[85%] flex justify-between items-center mb-20">
        <div className="text-2xl font-bold">zyro</div>
        <button className="bg-[#CEFF85] hover:bg-[#B8FF57] px-6 py-3 rounded-full text-black font-mono shadow-[4px_4px_0px_rgba(147,51,234,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(147,51,234,0.3)]">
          Join Waitlist
        </button>
      </nav>

      <div className="container mx-auto w-[85%] max-w-6xl">
        <div className="text-center mb-20">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Experience{' '}
            <div className="relative inline-block">
              <span className="relative z-10">Hyderabad</span>
              <div className="absolute inset-0 bg-[#FFB7F5] -z-[1] translate-y-[8px] skew-x-[-8deg] scale-105"></div>
            </div>
            <br /> like never before
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-mono"
          >
            Find verified stays, connect with amazing people, and unlock the best experiences across the city.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black text-white px-8 py-4 rounded-full font-mono flex items-center gap-2 mx-auto mb-20 hover:gap-4 transition-all"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Stay Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#FFB7F5] rounded-3xl translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="bg-white rounded-3xl p-8 h-full transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-serif text-2xl mb-3">Find Your Stay</h3>
                <p className="font-mono text-gray-600 text-sm">
                  Direct access to verified PGs and hostels. No middlemen, no premium prices.
                </p>
              </div>
            </motion.div>

            {/* Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#85FFE9] rounded-3xl translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="bg-white rounded-3xl p-8 h-full transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="text-4xl mb-4">👋</div>
                <h3 className="font-serif text-2xl mb-3">Join Community</h3>
                <p className="font-mono text-gray-600 text-sm">
                  Connect with locals and fellow newcomers. Feel at home instantly.
                </p>
              </div>
            </motion.div>

            {/* Explore Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#FFE485] rounded-3xl translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="bg-white rounded-3xl p-8 h-full transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="font-serif text-2xl mb-3">Explore City</h3>
                <p className="font-mono text-gray-600 text-sm">
                  Discover hidden gems and get exclusive deals at local hotspots.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}