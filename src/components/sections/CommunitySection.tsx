// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Users, Coffee, Calendar, MessageCircle, Sparkles } from 'lucide-react'

// export const CommunitySection = () => {
//   const activities = [
//     {
//       icon: Coffee,
//       title: "Coffee Meetups",
//       description: "Join weekly meetups at cozy cafes around the city",
//       color: "bg-[#FFB7F5]",
//       delay: 0.2
//     },
//     {
//       icon: Calendar,
//       title: "Local Events",
//       description: "From movie nights to food walks, there's always something happening",
//       color: "bg-[#85FFE9]",
//       delay: 0.3
//     },
//     {
//       icon: MessageCircle,
//       title: "City Groups",
//       description: "Connect with people from your neighborhood or workplace",
//       color: "bg-[#FFE485]",
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
//             A city full of{' '}
//             <span className="relative inline-block">
//               friendly faces
//               <div className="absolute inset-0 bg-[#FFB7F5] -z-10 translate-y-[8px] skew-x-[-8deg]"></div>
//             </span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-xl font-mono text-gray-600"
//           >
//             Join a vibrant community of locals and newcomers. Make friends, 
//             share experiences, and feel at home in Hyderabad.
//           </motion.p>
//         </div>

//         {/* Community Activities */}
//         <div className="grid md:grid-cols-3 gap-6 mb-16">
//           {activities.map((activity, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: activity.delay }}
//               className="bg-white rounded-3xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform"
//             >
//               <div className={`w-12 h-12 ${activity.color} rounded-2xl flex items-center justify-center mb-6`}>
//                 <activity.icon className="w-6 h-6" />
//               </div>
//               <h3 className="text-2xl font-serif mb-3">{activity.title}</h3>
//               <p className="font-mono text-gray-600">{activity.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Buddy Finder Feature */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_rgba(255,183,245,0.5)]"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="max-w-xl mb-8 md:mb-0">
//               <div className="font-mono text-[#FFB7F5] mb-4 flex items-center gap-2">
//                 <Sparkles className="w-4 h-4" />
//                 Coming Soon
//               </div>
//               <h3 className="text-3xl font-serif mb-4">Find Your Buddy</h3>
//               <p className="font-mono text-gray-400 mb-6">
//                 Whether you need a gym partner, study buddy, or someone to explore the city with - 
//                 our buddy finder helps you connect with like-minded people.
//               </p>
//               <button className="bg-[#FFB7F5] hover:bg-[#FF9EF0] text-black px-6 py-3 rounded-full font-mono shadow-[4px_4px_0px_rgba(255,255,255,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,0.3)]">
//                 Join Waitlist
//               </button>
//             </div>
//             <div className="w-full md:w-72 aspect-square bg-gradient-to-br from-[#FFB7F5] to-[#FF85C0] rounded-3xl flex items-center justify-center shadow-lg">
//               <Users className="w-24 h-24 text-white" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Testimonial */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 text-center max-w-3xl mx-auto"
//         >
//           <div className="font-serif text-2xl italic mb-6">
//             Moving to a new city can be overwhelming, but Zyros community makes it exciting. 
//             Cant wait to join the events and meet amazing people!
//           </div>
//           <div className="font-mono text-gray-600">
//             — Early Waitlist Member
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Coffee, Calendar, MessageCircle, ArrowRight } from 'lucide-react'

export const CommunitySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAFAFA] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-[#FFB7F5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-[#FFE485] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto w-[85%]">
        {/* Main Community Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          {/* 3D Decorative Elements */}
          <div className="absolute -top-12 right-12 w-24 h-24 bg-[#85FFE9] rounded-2xl -rotate-12 opacity-80"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#FFB7F5] rounded-2xl rotate-12 opacity-80"></div>

          <div className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_rgba(255,183,245,0.5)] relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Community Preview */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  {/* Activity Tabs */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4 mb-6"
                  >
                    <button className="bg-[#FFB7F5]/20 hover:bg-[#FFB7F5]/30 px-4 py-2 rounded-full text-sm font-mono transition-colors">Meetups</button>
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-mono transition-colors">Events</button>
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-mono transition-colors">Groups</button>
                  </motion.div>

                  {/* Activity Cards */}
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Coffee className="w-5 h-5 text-[#FFB7F5]" />
                        <span className="text-[#FFB7F5] font-mono text-sm">Weekend Coffee Meetup</span>
                      </div>
                      <p className="text-gray-400 text-sm font-mono">Join fellow tech enthusiasts for coffee and conversations</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-[#85FFE9]" />
                        <span className="text-[#85FFE9] font-mono text-sm">Movie Night</span>
                      </div>
                      <p className="text-gray-400 text-sm font-mono">Watch the latest blockbusters with new friends</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-5 h-5 text-[#FFE485]" />
                        <span className="text-[#FFE485] font-mono text-sm">Gym Buddies</span>
                      </div>
                      <p className="text-gray-400 text-sm font-mono">Find workout partners near your area</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 relative">
                {/* 3D Icon */}
                <div className="absolute -top-20 -right-8 w-32 h-32 bg-gradient-to-br from-[#FFB7F5] to-[#FF85C0] rounded-3xl rotate-12 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white transform -rotate-12" />
                </div>

                <div className="font-mono text-[#FFB7F5] mb-4">Coming Soon</div>
                <h2 className="text-4xl font-serif mb-6">Find your tribe in the city</h2>
                <p className="font-mono text-gray-400 mb-8">
                  Join local meetups, find activity partners, or create your own community. 
                  Connect with people who share your interests.
                </p>
                <button className="bg-[#FFB7F5] hover:bg-[#FF9EF0] text-black px-6 py-3 rounded-full font-mono flex items-center gap-2 group transition-all">
                  Join Community 
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
              icon: Coffee,
              title: "Regular Meetups",
              description: "Weekly coffee meetups, movie nights, and outdoor activities",
              gradient: "from-[#FFB7F5] to-[#FF85C0]"
            },
            {
              icon: MessageCircle,
              title: "City Groups",
              description: "Join neighborhood groups and connect with locals",
              gradient: "from-[#85FFE9] to-[#5DFFD9]"
            },
            {
              icon: Calendar,
              title: "Local Events",
              description: "Discover and join exciting events happening around you",
              gradient: "from-[#FFE485] to-[#FFB649]"
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