import react, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PostCard, Categories, PostWidget, FeaturedPostSlider, Destinations } from '../components';
import { getPosts, getFeaturedPosts } from '../services';

export default function Home( { posts } ) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false)
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    })
  }, [])
  // console.log(posts);
  return (
    <div className="main-wrap">
      <Head>
        <title>GraphCMS Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap">
        <FeaturedPostSlider featuredPosts={featuredPosts} />
        <Destinations />
        {/* <div className="w-full m-4 bg-white py-4">
          {dataLoaded && featuredPosts.map((featuredPost) => (
            <div key={featuredPost.slug}>
              <Link href={`/post/${featuredPost.slug}`}>
                <a className='text-[4rem]'>{featuredPost.title}</a>
              </Link>
            </div>
          ))}
        </div> */}
        <div className="w-1/2 mt-4">
          {/* { JSON.stringify(posts, null, 2) } */}
          {posts.map((post) => <PostCard post={post.node} key={post.node.slug} />)}
        </div>
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