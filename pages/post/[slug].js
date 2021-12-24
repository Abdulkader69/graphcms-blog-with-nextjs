import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '../../services'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components/'

const PostDetails = ({ post }) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div className="text-center">
            <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed"
            disabled=""
            >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading
            </button>
        </div>
        );
    }

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-wrap">
                <div className="w-1/2">
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className="w-1/2">
                    <Categories />
                    <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                </div>
            </main>
      </>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: {slug} }) => ({ params: {slug} }) ),
        fallback: true,
    }
}