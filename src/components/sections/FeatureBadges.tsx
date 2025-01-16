'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building, Users, PartyPopper, Tag } from 'lucide-react'

export const FeatureBadges = () => {
  const features = [
    {
      title: "Stays",
      items: ["PG", "Hostels", "Shared Flats"],
      icon: Building,
      color: "bg-[#FFE485]/10",
      textColor: "text-[#FFE485]",
      delay: 0.1
    },
    {
      title: "Community",
      items: ["Fellow Zyrians", "Friend Clubs", "Weekend Meetups"],
      icon: Users,
      color: "bg-[#85FFE9]/10",
      textColor: "text-[#85FFE9]",
      delay: 0.2
    },
    {
      title: "Events",
      items: ["Movie Nights", "Food Walks", "Sports"],
      icon: PartyPopper,
      color: "bg-[#FFB7F5]/10",
      textColor: "text-[#FFB7F5]",
      delay: 0.3
    },
    {
      title: "Perks",
      items: ["Restaurant Deals", "Cafe Discounts", "Gym Offers"],
      icon: Tag,
      color: "bg-[#85FFE9]/10",
      textColor: "text-[#85FFE9]",
      delay: 0.4
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto w-[85%]">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${feature.color}`}>
                <feature.icon className={`w-4 h-4 ${feature.textColor}`} />
                <span className={`text-sm font-mono ${feature.textColor}`}>{feature.title}</span>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2">
                {feature.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-white/5 rounded-full text-gray-400 text-xs font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}