import React, { useEffect } from 'react';
import Link from 'next/link';
const Header = () => {
    // useEffect(() => {
    //     // Header Reveal Animation
    //     let header = document.getElementById('main-header');
    //     let scrollLastPoint = 0;

    //     window.addEventListener('scroll', () => {
    //         let currentScrollPoint = window.pageYOffset;
    //         // console.log(currentScrollPoint);
    //         if( currentScrollPoint <= 0 ) {
    //             header.classList.remove('scroll-up');
    //             return;
    //         }

    //         if( currentScrollPoint > scrollLastPoint && !header.classList.contains('scroll-down') ) {
    //             header.classList.remove('scroll-up');
    //             header.classList.add('scroll-down');
    //         } else if( currentScrollPoint < scrollLastPoint && header.classList.contains('scroll-down') ) {
    //             header.classList.remove('scroll-down');
    //             header.classList.add('scroll-up');
    //         }
            
    //         scrollLastPoint = currentScrollPoint;
    //     });
    // }, []);
    return (
        <>
            <header id='main-header' className="absolute top-4 left-0 w-full transition ease-in-out z-[999]">
                <div className="header-top">
                    <div className="w-full max-w-7xl m-auto px-4">
                        <ul className='flex justify-end'>
                            <li className='border-r border-solid border-white'><Link href="/"><a className='px-3 py-2 inline-block'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 28"><path fill='#fff' d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z"></path></svg></a></Link></li>
                            <li className='border-r border-solid border-white'><Link href="/"><a className='px-3 py-2 inline-block'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 28"><path fill='#fff' d="M17.609 18.906c0-0.438-0.172-0.609-0.469-0.797-2.016-1.203-4.359-1.797-6.984-1.797-1.531 0-3 0.203-4.484 0.531-0.359 0.078-0.656 0.313-0.656 0.812 0 0.391 0.297 0.766 0.766 0.766 0.141 0 0.391-0.078 0.578-0.125 1.219-0.25 2.5-0.422 3.797-0.422 2.297 0 4.469 0.562 6.203 1.609 0.187 0.109 0.313 0.172 0.516 0.172 0.391 0 0.734-0.313 0.734-0.75zM19.109 15.547c0-0.422-0.156-0.719-0.547-0.953-2.391-1.422-5.422-2.203-8.563-2.203-2.016 0-3.391 0.281-4.734 0.656-0.5 0.141-0.75 0.484-0.75 1s0.422 0.938 0.938 0.938c0.219 0 0.344-0.063 0.578-0.125 1.094-0.297 2.406-0.516 3.922-0.516 2.969 0 5.672 0.781 7.625 1.937 0.172 0.094 0.344 0.203 0.594 0.203 0.531 0 0.938-0.422 0.938-0.938zM20.797 11.672c0-0.578-0.25-0.875-0.625-1.094-2.703-1.578-6.406-2.312-9.938-2.312-2.078 0-3.984 0.234-5.688 0.734-0.438 0.125-0.844 0.5-0.844 1.156 0 0.641 0.484 1.141 1.125 1.141 0.234 0 0.453-0.078 0.625-0.125 1.516-0.422 3.156-0.578 4.797-0.578 3.25 0 6.625 0.719 8.797 2.016 0.219 0.125 0.375 0.187 0.625 0.187 0.594 0 1.125-0.469 1.125-1.125zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path></svg></a></Link></li>
                            <li><Link href="/"><a className='px-3 py-2 inline-block'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill='#fff' d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path></svg></a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="header-inner mx-8 relative border-t border-b border-solid border-white">
                    <div className="logo absolute left-4 top-0">
                        <Link href="/"><a className="text-5xl px-4 py-4 inline-block font-bold text-white">NIOBIUM</a></Link>
                    </div>
                    <div className="w-full max-w-7xl m-auto px-4 py-5 relative">
                        <div className="flex items-center">
                            <div className="w-1/4">
                            </div>
                            <div className="menu-wrap w-3/4">
                                <ul className='flex items-center justify-end'>
                                    <li><Link href="/"><a className="text-lg uppercase px-3 py-1 inline-block ml-3 text-white">Destinations</a></Link></li>
                                    <li><Link href="/"><a className="text-lg uppercase px-3 py-1 inline-block ml-3 text-white">The Most Read</a></Link></li>
                                    <li><Link href="/"><a className="text-lg uppercase px-3 py-1 inline-block ml-3 text-white">Spain</a></Link></li>
                                    <li><Link href="/"><a className="text-lg uppercase px-3 py-1 inline-block ml-3 text-white">About Me</a></Link></li>
                                    <li><Link href="/"><a className="text-lg uppercase px-3 py-1 inline-block ml-3 text-white">Contact</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
