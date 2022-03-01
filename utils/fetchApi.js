import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "f33f365eedmsh244ce73a5bbbf87p13e13cjsn9f3b2738666d",
        },
    });
    return data;
}