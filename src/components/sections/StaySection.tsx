'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Shield, Phone, Building, ArrowRight } from 'lucide-react'

export const StaySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-[#FFB7F5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-[#85FFE9] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto w-[85%]">
        {/* Main Search Interface Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          {/* 3D Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#FFE485] rounded-2xl rotate-12 opacity-80"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#85FFE9] rounded-2xl -rotate-12 opacity-80"></div>
          
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_rgba(133,255,233,0.5)] relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Mock Search Interface */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4 mb-6"
                  >
                    <button className="bg-[#FFB7F5]/20 hover:bg-[#FFB7F5]/30 px-4 py-2 rounded-full text-sm font-mono transition-colors">PG</button>
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-mono transition-colors">Hostel</button>
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-mono transition-colors">Flat</button>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 hover:bg-white/10 p-4 rounded-xl mb-4 transition-colors cursor-pointer group"
                  >
                    <div className="font-mono text-sm text-gray-400 mb-2">Location</div>
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Hi-tech City, Hyderabad</span>
                    </div>
                  </motion.div>

                  <div className="flex gap-3">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/5 hover:bg-white/10 p-4 rounded-xl flex-1 transition-colors cursor-pointer"
                    >
                      <div className="font-mono text-sm text-gray-400 mb-2">Budget</div>
                      <span className="text-gray-300">₹8k - 15k</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/5 hover:bg-white/10 p-4 rounded-xl flex-1 transition-colors cursor-pointer"
                    >
                      <div className="font-mono text-sm text-gray-400 mb-2">Room Type</div>
                      <span className="text-gray-300">Single</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 relative">
                {/* 3D Building Icon */}
                <div className="absolute -top-20 -right-8 w-32 h-32 bg-gradient-to-br from-[#FFB7F5] to-[#FF85C0] rounded-3xl rotate-12 flex items-center justify-center">
                  <Building className="w-16 h-16 text-white transform -rotate-12" />
                </div>
                
                <div className="font-mono text-[#85FFE9] mb-4">Coming Soon</div>
                <h2 className="text-4xl font-serif mb-6">Search smarter, not harder</h2>
                <p className="font-mono text-gray-400 mb-8">
                  Find your perfect stay with our smart filters. Sort by location, budget, 
                  amenities, and more. All listings are verified and broker-free.
                </p>
                <button className="bg-[#85FFE9] hover:bg-[#5DFFD9] text-black px-6 py-3 rounded-full font-mono flex items-center gap-2 group transition-all">
                  Join Waitlist 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Always Verified",
              description: "Every listing is personally verified by our team",
              color: "bg-[#FFB7F5]"
            },
            {
              icon: Phone,
              title: "Direct Contact",
              description: "Talk directly to property owners, no middlemen",
              color: "bg-[#85FFE9]"
            },
            {
              icon: Building,
              title: "Premium Locations",
              description: "Properties in the best areas of the city",
              color: "bg-[#FFE485]"
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
              <div className="absolute inset-0 bg-gray-100 rounded-3xl translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="bg-white rounded-3xl p-8 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
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