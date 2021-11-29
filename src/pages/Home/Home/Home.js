import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import WhatIDo from '../WhatIDo/WhatIDo';

const Home = () => {
    return (
        <>
            <Navigation />
            <main>
                <Banner />
                <AboutMe />
                <WhatIDo />
                <Projects />
            </main>
            <Footer />
        </>
    );
};

export default Home;