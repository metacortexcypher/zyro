// src/app/page.tsx
// import LandingPage from '@/components/LandingPage'
import { Metadata } from 'next'
import { Hero2 } from '@/components/sections/Hero2'
import { InformationSection } from '@/components/sections/InformationSection'
import { FeatureBadges } from '@/components/sections/FeatureBadges'
import { CasualBadges } from '@/components/sections/CasualBadges'


export const metadata: Metadata = {
  title: 'Zyro - Your Home in Hyderabad',
  description: 'Find verified stays, connect with community, and explore Hyderabad like a local. No middlemen, no premium prices - just direct access to the best accommodations and experiences.',
  keywords: [
    'Hyderabad accommodation',
    'PG in Hyderabad',
    'Hostels in Hyderabad',
    'Verified stays',
    'Community in Hyderabad',
    'Explore Hyderabad',
    'No broker PG',
    'Direct owner contact'
  ]
}

export default function Home() {
  return (
    <div>
    <Hero2 />
    <FeatureBadges />
    <InformationSection />
    <CasualBadges />
    </div>
  )
}