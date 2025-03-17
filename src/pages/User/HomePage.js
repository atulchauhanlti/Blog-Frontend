import React from 'react'
import FreshBlogsSection from '../../components/User/Home/FreshBlogsSection'
import BusinessBlogsSection from '../../components/User/Home/BusinessBlogsSection'
import TrendingBlogsSection from '../../components/User/Home/TrendingBlogsSection'
import CultureBlogsSection from '../../components/User/Home/CultureBlogsSection'
import PoliticsBlogsSection from '../../components/User/Home/PoliticsBlogsSection'
import TravelBlogsSection from '../../components/User/Home/TravelBlogsSection'

const HomePage = () => {
  return (
    <>
        <FreshBlogsSection />

        <BusinessBlogsSection />

        <TrendingBlogsSection />

        <CultureBlogsSection />

        <PoliticsBlogsSection />

        <TravelBlogsSection />
    </>
  )
}

export default HomePage