import React from 'react';
import GalleryTopIntro from "./GalleryTopIntro.jsx";
import GalleryQuickImages from "./GalleryQuickImages.jsx";

function GalleryScreen1() {
    return (
        <div className="w-full min-h-screen bg-mist-100 pb-4">

            <GalleryTopIntro/>
            <GalleryQuickImages/>

        </div>
    );
}

export default GalleryScreen1;