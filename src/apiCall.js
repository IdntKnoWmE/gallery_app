import axios from "axios";


const url = "https://picsum.photos/v2/list"
const apiCache = {};



const getGalleryDataFromAPI = async (page=1, limitPerPage=30) => {

    const cacheKey = `gallery_${page}_${limitPerPage}`;

    if (apiCache[cacheKey]) {
        return apiCache[cacheKey];
    }

    try {

        const response = await axios.get(`${url}?page=${page}&limit=${limitPerPage}`);
        apiCache[cacheKey] = response.data;
        return response.data;

    }
    catch{
        return [];
    }

}

export default getGalleryDataFromAPI;