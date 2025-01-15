'use client'

import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { StaySection } from './sections/StaySection'
import { CommunitySection } from './sections/CommunitySection'
import { ExploreSection } from './sections/ExploreSection'

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <StaySection />
      <CommunitySection />
      <ExploreSection />
    </main>
  )
}

export default LandingPage