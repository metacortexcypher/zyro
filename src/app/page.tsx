// src/app/page.tsx
import LandingPage from '@/components/LandingPage'
import { Metadata } from 'next'

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
    <LandingPage />
  )
}