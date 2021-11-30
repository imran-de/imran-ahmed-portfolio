import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Details = () => {
    const { id } = useParams();
    return (
        <>
            <Navigation />
            <main className="text-center my-5">
                <h2>Coming Soon Project no {id} description</h2>
            </main>
            <Footer />
        </>
    );
};

export default Details;