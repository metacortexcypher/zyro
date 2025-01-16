'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const CasualBadges = () => {
  const badges = [
    "Building ke terrace pe chai-sutta gang welcome",
    "Finally found some Delhi people who understand my maggi cravings",
    "Bahar ka khaana? Bhai Paradise 5 mins walk pe",
    "When your roommate becomes your 3AM thoughts partner",
    "Society WhatsApp group mey memes 24/7",
    "POV: Your Bengaluru friend visits and says 'traffic toh kuch bhi nahi hai'",
    "Emi ra babu midnight biryani craving na?",
    "That moment when watchman uncle becomes your life advisor",
    "Weekend plans? Tank Bund scenes >>>",
    "From strangers to family in just one movie night"
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto w-[85%]">
        <div className="flex flex-wrap gap-3">
          {badges.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="inline-flex px-4 py-2 rounded-full font-mono text-sm
                bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 
                hover:text-white transition-colors"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}