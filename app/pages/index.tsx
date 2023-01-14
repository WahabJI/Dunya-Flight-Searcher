import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/header'
import SearchBar from '../components/searchbars/searchbar'
import tripButton from '../components/button/tripButton'
import { UseUser } from '@auth0/nextjs-auth0/dist/frontend/use-user'
import Budget from '../components/budget/budget'
import Activities from '../components/activities/activities'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user'
import styles from '../styles/Home.module.css'
import Logo from '../components/logo/Logo'
import type { NextPage } from 'next'
import React from 'react'
//React page component for the homepage
export default function Home() {  
  const { user, error, isLoading} = useUser();
    return (
      <div className={styles.container}>
        <Head>
          <title>Dunya</title>
          <meta name="description" content="Places are Endless" />
          <link rel="icon" href="/plane.ico" />
        </Head>

        {/* This part of the code is what I worked on that works around the login and logout button, The rest was done by Tariq? IDK - Wahab */}
        <div className="absolute top-0 right-0 font-semibold text-white mr-6 mt-2.5 text-lg rounded-lg hover:text-xl hover:underline">
              <Image className = "relative inline-block mr-1.5 -mt-0.5" src = "/login.svg" alt="..." width={24} height={24}/>
              {!user ? (<Link href="/api/auth/login" className="no-underline text-white">Login</Link>):(<Link href="/api/auth/logout" className="no-underline text-white">Logout: {user.name}</Link>)}
        </div>

        <Logo/>
  
        <SearchBar></SearchBar>
        <h2 className="text-marine text-center text-3xl font-semibold mt-40">Personalize Your Suggestions.</h2>
        <Budget></Budget>
        <Activities></Activities>
    
      </div>
    );
  }
