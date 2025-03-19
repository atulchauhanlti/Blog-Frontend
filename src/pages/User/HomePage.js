import React from 'react'
import FreshBlogsSection from '../../components/User/Home/FreshBlogsSection'
import BusinessBlogsSection from '../../components/User/Home/BusinessBlogsSection'
import PoliticsBlogsSection from '../../components/User/Home/PoliticsBlogsSection'
import TravelBlogsSection from '../../components/User/Home/TravelBlogsSection'

const HomePage = () => {
  return (
    <>
        <FreshBlogsSection />

        <BusinessBlogsSection />

        <PoliticsBlogsSection />

        <TravelBlogsSection />
    </>
  )
}

export default HomePage