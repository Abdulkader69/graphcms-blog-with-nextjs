import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDestinations } from '../services';

const Destionations = () => {
    const [destinations, setDestination] = useState([])

    useEffect(() => {
        getDestinations()
            .then((newDestinations) => setDestination(newDestinations))
    }, [])

    return (
        <div className="max-w-7xl m-auto px-4">
            <div className="destination-wrapper grid grid-cols-5 gap-4">
                {destinations.map((destination) => (
                    <div className="destinations-item" key={destination.destinationSlug}>
                        <Link key={destination.destinationSlug} href={`/destination/${destination.destinationSlug}`}>
                            <a className="inline-block text-center">
                                <div className="thumbnail">
                                    <Image src={destination.destinationImage.url} height={destination.destinationImage.height} width={destination.destinationImage.width} />
                                </div>
                                <div className="name"><p>{destination.destinationName}</p></div>
                            </a>
                        </Link>
                    </div>
                ))}     
            </div>
        </div>
    )
}

export default Destionations
