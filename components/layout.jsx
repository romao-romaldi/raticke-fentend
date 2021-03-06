import Head from 'next/head';
import React from 'react';
import Header from './header';
import Search from './search';
import Tabar from './tabar';

const Layout = (props) => {
    return (
        <div className="bg-gray-50">
            <Head>
                <title>{props?.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/rlogo.svg" />
            </Head>

            {/* header page*/}
            <Header />
            <div className="sticky top-16 w-full flex justify-center py-2 bg-slate-50 z-30">
                <Search />
                </div>
            <main className="h-full pb-12 md:pb-0">
                
                {props.children}

            </main>
            
            <Tabar />  
        </div>
    );
}

export default Layout;
