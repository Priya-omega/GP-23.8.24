import React from 'react'
import NavbarDesk from './NavbarDesk'
import NavbarMobile from './NavbarMobile'
import Footer from './Footer'
import Topbar from './Topbar'

export default function Layout({ children }) {
    return (
        <>
            <Topbar />
            <NavbarDesk />
            <NavbarMobile />

            <main>
                {children}
            </main>

            <Footer />

        </>
    )
}
