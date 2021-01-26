import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp({Component, pageProps}){
    return(
        <div>
            <Head>
            
                <title>Kamil Majek</title>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <link rel="stylesheet" href="static/styles/styles.css" />
            </Head>
            <Navbar/>
            <Component {...pageProps} />
            <Footer />
        </div>
    )
  }