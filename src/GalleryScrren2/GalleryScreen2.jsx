import { useQuery } from '@tanstack/react-query';
import GalleryScreen2Card from "./GalleryScreen2Card.jsx";
import getGalleryDataFromAPI from "../apiCall.js";
import {useState} from "react";
import {CircleArrowLeft, CircleArrowRight} from "lucide-react";
import {TablePagination} from "@mui/material";

function GalleryScreen2() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const totalGalleryData = 500;

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

        const width = getRandomIntInclusive(70,170);
        const height = getRandomIntInclusive(70,125);

        return {width: `${width*4}px`, height: `${height*4}px` };

    }

    const handlePageChange = (_event, value) => {
        setPage(value);
    };

    const handleChangeRowsPerPage = (_event) => {
        setLimit(parseInt(_event.target.value, 10));
        setPage(0);
    }

    return (
        <div className="w-full min-h-screen bg-orange-100 p-2
                        ">

            <div className="w-full min-h-screen flex flex-wrap gap-3 justify-center p-2
                    border border-amber-900 rounded-xl border-dashed shadow-xl">

                {galleryData?.map((item, index) => (
                    <GalleryScreen2Card key={index} item={item} size={getRandomWidthAndHeight()}/>
                ))}

            </div>

            <div className="flex gap-2 justify-center items-center mt-4">

                <button onClick={() => page !==1? setPage(prevState => prevState - 1) : null}
                        className="cursor-pointer transition-all duration-100 ease-in-out
                                    hover:scale-110 active:scale-90"
                        disabled={page === 1}
                >

                    <img className="w-20 h-20" src="https://img.icons8.com/clouds/100/left.png" alt="left"/>

                </button>

                <span className="text-lg font-bold text-sky-600 border rounded-2xl p-3 bg-white">{page}</span>

                <button onClick={() => galleryData.length === limit
                    ?setPage(prevState => prevState + 1): null}
                        className="cursor-pointer transition-all duration-100 ease-in-out
                                    hover:scale-110 active:scale-90"
                    disabled={galleryData.length < limit}
                >
                    <img className="w-20 h-20" src="https://img.icons8.com/clouds/100/right.png" alt="right"/>
                </button>
            </div>

            <div className="flex justify-center items-center">
            <TablePagination className="bg-sky-200 rounded-3xl font-bold border border-dashed"
                component="div"
                count={totalGalleryData}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={limit}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </div>
        </div>
    );
}

export default GalleryScreen2;