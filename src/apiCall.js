import axios from "axios";


const url = "https://picsum.photos/v2/list"
const apiCache = {};



const getGalleryDataFromAPI = async (page=1, limitPerPage=30) => {

    const cacheKey = `gallery_${page}_${limitPerPage}`;

    if (apiCache[cacheKey]) {
        return apiCache[cacheKey];
    }

    try {

        const {data} = await axios.get(`${url}?page=${page}&limit=${limitPerPage}`);
        apiCache[cacheKey] = data;
        return data;

    }
    catch{
        return [];
    }

}

export default getGalleryDataFromAPI;