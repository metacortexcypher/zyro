'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MonitorSmartphone } from 'lucide-react'

// Define the type for a star
interface Star {
  id: number
  top: string
  right: string
  size: number
  delay: number
}

export const Hero2 = () => {
  // Properly type the state array
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    setStars(Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      right: `${Math.random() * 30}%`,
      size: Math.random() * 0.5 + 1,
      delay: Math.random() * 2
    })))
  }, [])

  return (
    <section className="h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Grid Background with enhanced visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
      </div>

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: star.top,
            right: star.right,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1],
            x: [0, 2, 0],
            y: [0, -2, 0]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto w-[85%] relative z-10 flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2 pt-8">
          <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10">
            <MonitorSmartphone className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm">zyro</span>
        </div>

        {/* Main Text */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="inline-flex gap-4">
                <span className="relative">Stay.</span>
                <span className="relative">Connect.</span>
                <span className="relative">Explore.</span>
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 font-mono text-lg max-w-2xl"
          >
            Find verified stays, connect with an amazing community, 
            and discover the best of Hyderabad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <button className="font-mono px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors">
              Show me around
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}