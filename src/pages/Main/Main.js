import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Education, Experience, Contacts, Projects, Services } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />    
            <Experience />        
            <Projects />
            {/* <Achievement /> */}
            <Services />
            <Contacts />
            {/* <Footer /> */}
        </div>
    )
}

export default Main
