import React from 'react';

function GalleryScreen1Card({item, z, scale, shadowBorder, hover}) {


    return (
        <>
            <div className={`
                        w-95 h-[58vh] ${z} ${scale} my-auto overflow-hidden
                        transition-transform duration-300
                        border rounded-2xl border-indigo-200 shrink-0
                        ${shadowBorder}  ${hover} hover:z-50
                        `}
            >
                {item?(
                <img className="w-full h-full object-cover object-center"
                    src={item?item.download_url: "backup.jpg"}
                     alt={item?item.author: "John Doe"}
                     loading="lazy"
                />
                    ):null}

            </div>
        </>
    );
}

export default GalleryScreen1Card;