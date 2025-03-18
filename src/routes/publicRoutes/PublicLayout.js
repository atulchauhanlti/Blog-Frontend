import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Shared/Header'
import Footer from '../../components/Shared/Footer'

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicLayout