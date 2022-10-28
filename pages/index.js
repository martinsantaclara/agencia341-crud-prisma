import React, { useEffect, useState, useRef } from 'react';

import Head from 'next/head';

import { useDeviceContext } from '../context/StateContext';
import { Layout } from '../layout/Layout';
import { Resumen } from '../components/LandingPage/Resumen/resumen';

const Home = () => {
    const { screenWidth } = useDeviceContext();

    const database = process.env.USERNAME;
    console.log(database);

    return (
        <>
            <Head>
                <title>Agencia 341</title>
                <meta name="description" content="frontmentor challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {screenWidth !== 0 && (
                <Layout>
                    <Resumen></Resumen>
                </Layout>
            )}
        </>
    );
};

export default Home;
