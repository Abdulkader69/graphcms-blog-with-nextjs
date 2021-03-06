import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="bg-white p-4 m-4">
            <h3>Categories</h3>

            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}><a className="block">{category.name}</a></Link>
            ))}
        </div>
    )
}

export default Categories
