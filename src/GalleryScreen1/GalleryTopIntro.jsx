import React from 'react';

function GalleryTopIntro() {
    return (
        <>

            <div className="h-[40vh] flex flex-col items-center justify-center w-full gap-1.5">
                <h1 className="text-xs font-semibold text-gray-500 uppercase">Gallery</h1>
                <h1 className="text-4xl font-serif">My Visual Diary</h1>
                <p className="text-sm font-semibold text-gray-500">See the world through my lens:<br/> adventures in photos and videos
                </p>
            </div>

        </>
    );
}

export default GalleryTopIntro;