import react, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PostCard, Categories, PostWidget, FeaturedPostSlider, Destinations, AuthorsFeaturedPost } from '../components';
import { getPosts, getFeaturedPosts } from '../services';

export default function Home( { posts } ) {

  return (
    <div className="main-wrap">
      <Head>
        <title>GraphCMS Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <FeaturedPostSlider/>
        <AuthorsFeaturedPost/>
        <div className="w-1/2">
          <Categories />
          <PostWidget />
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}