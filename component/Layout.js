import React from 'react'
import NavbarDesk from './NavbarDesk'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <NavbarDesk />

            <main>
                {children}
            </main>

            <Footer />

        </>
    )
}
