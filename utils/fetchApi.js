import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '27864fe8c1mshd72c96a1f2472d0p148330jsnb25c75e29295',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}