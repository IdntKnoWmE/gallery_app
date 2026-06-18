import { useQuery } from '@tanstack/react-query';
import GalleryScreen2Card from "./GalleryScreen2Card.jsx";
import getGalleryDataFromAPI from "../apiCall.js";
import React, {useState} from "react";
import {CircleArrowLeft, CircleArrowRight} from "lucide-react";

function GalleryScreen2() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);

    const { data: galleryData, isLoading, isError } = useQuery({
        queryKey: ['gallery', page, limit], // Unique cache key based on arguments
        queryFn: () => getGalleryDataFromAPI(page, limit) // The actual API function
    });

    if (isLoading) return <div className="min-h-screen flex text-center justify-center text-6xl">Loading images...</div>;
    if (isError) return <div className="min-h-screen flex text-center justify-center text-6xl">Error loading gallery.</div>;


    const getRandomWidthAndHeight = () => {

        function getRandomIntInclusive(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        }

        const width = getRandomIntInclusive(70,125);
        const height = getRandomIntInclusive(70,125);

        return {width: `${width*4}px`, height: `${height*4}px` };

    }


    return (
        <div className="absolute overflow-scroll w-screen min-h-screen bg-mist-100 p-8">

            <div className="w-full min-h-screen flex flex-wrap gap-3 justify-center
                    ">

                {galleryData?.map((item, index) => (
                    <GalleryScreen2Card key={index} item={item} size={getRandomWidthAndHeight()}/>
                ))}

            </div>

            <hr className="m-6"/>

            <div className="flex gap-2 justify-center items-center">

                <button onClick={() => page !==1? setPage(prevState => prevState - 1) : null}
                        className="cursor-pointer transition-all duration-100 ease-in-out
                                    hover:scale-105 active:scale-95"
                        disabled={page === 1}
                >

                    <CircleArrowLeft size={50} color="purple" />

                </button>

                <button onClick={() => galleryData.length === limit
                    ?setPage(prevState => prevState + 1): null}
                        className="cursor-pointer transition-all duration-100 ease-in-out
                                    hover:scale-105 active:scale-95"
                    disabled={galleryData.length < limit}
                >
                    <CircleArrowRight size={50} color="green" />
                </button>
            </div>

        </div>
    );
}

export default GalleryScreen2;