import React from 'react';

function GalleryScreen2Card({item, size}) {


    return (
        <>
            <div style={{width: size.width, height: size.height}}
                className={`
                        my-auto overflow-hidden
                        transition-transform duration-300
                        border rounded-2xl border-indigo-200 shrink-0
                         hover:z-50
                        `}
            >

                    <img className="w-full h-full object-cover object-center"
                         src={item?item.download_url: "backup.jpg"}
                         alt={item?item.author: "John Doe"}
                         loading="lazy"/>

            </div>
        </>
    );
}

export default GalleryScreen2Card;