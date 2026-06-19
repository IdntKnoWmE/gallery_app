import React, {useEffect} from 'react';
import getGalleryDataFromAPI from "../apiCall.js";
import GalleryScreen1Card from "./GalleryScreen1Card.jsx";

function GalleryQuickImages() {

    const [galleryData, setGalleryData] = React.useState([]);


    const [currentIndex, setCurrentIndex] = React.useState(0);

    const getItemAtOffset = (offset) => {

        const targetIndex = (currentIndex + offset + galleryData.length)% galleryData.length;
        return galleryData[targetIndex];

    }


    const handleNextClick = () => {

        setCurrentIndex((prev) => ((prev + 1) % galleryData.length));
    }

    const handlePrevClick = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    }



    useEffect(() => {
        const fetchGalleyData = async () => {
            const data = await getGalleryDataFromAPI(1, 30);
            setGalleryData(data);
        }
        fetchGalleyData();
    }, [])




    return (
        <div className=" w-full h-full flex flex-col gap-6">
            <div className=" bg-[url('/sky.jpg')] bg-cover bg-center
                            w-full h-[70vh] rounded-xl
                            overflow-hidden flex mx-auto justify-center
                            transition-all duration-500 ease-linear
                            ">

                <GalleryScreen1Card item={getItemAtOffset(-2)}
                                    z={"z-0"}
                                    scale={"scale-100"}
                                    shadowBorder={"shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)]"}
                                    hover={"hover:scale-105"}
                />
                <GalleryScreen1Card item={getItemAtOffset(-1)}
                                    z={"z-10"}
                                    scale={"scale-105"}
                                    shadowBorder={"shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)]"}
                                    hover={"hover:scale-110"}
                />
                <GalleryScreen1Card item={getItemAtOffset(0)}
                                    z={"z-20"}
                                    scale={"scale-115"}
                                    shadowBorder={"shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]"}
                                    hover={"hover:scale-120"}
                />
                <GalleryScreen1Card item={getItemAtOffset(1)}
                                    z={"z-10"}
                                    scale={"scale-105"}
                                    shadowBorder={"shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)]"}
                                    hover={"hover:scale-110"}
                />
                <GalleryScreen1Card item={getItemAtOffset(2)}
                                    z={"z-0"}
                                    scale={"scale-100"}
                                    shadowBorder={"shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)]"}
                                    hover={"hover:scale-105"}
                />


            </div>
            <div className="flex gap-2 justify-center items-center">

                <button onClick={handlePrevClick}
                        className="cursor-pointer transition-all duration-100 ease-in-out
                                    hover:scale-110 active:scale-90"
                >

                    <img className="w-20 h-20" src="https://img.icons8.com/clouds/100/left.png" alt="left"/>

                </button>

                <button onClick={handleNextClick}
                        className="cursor-pointer transition-all duration-100 ease-in-out
                                    hover:scale-110 active:scale-90"
                >
                    <img className="w-20 h-20" src="https://img.icons8.com/clouds/100/right.png" alt="right"/>
                </button>

            </div>
        </div>
    );
}

export default GalleryQuickImages;