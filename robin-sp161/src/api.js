import axios from 'axios';

const WPHOST = prcoess.env.WPHOST

const API_URL = `https://${WPHOST}/wp-json/wp/v2/`;

export const getPosts = async () => {
    try {
    const response = await axios.get(`${API_URL}posts`);
    return response.data;
    } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
    }
};


