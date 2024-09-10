import React from 'react'
import NavbarDesk from './NavbarDesk'
import NavbarMobile from './NavbarMobile'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <NavbarDesk />
            <NavbarMobile />

            <main>
                {children}
            </main>

            <Footer />

        </>
    )
}
