import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout/layout/Layout';
import Head from 'next/head';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Fragment>
                <Head>
                    <title>Next Events</title>
                    <meta name="description" content="NextJS Events" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Component {...pageProps} />
            </Fragment>
        </Layout>
    );
}

export default MyApp;
