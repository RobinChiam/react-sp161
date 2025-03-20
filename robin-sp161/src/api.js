import axiosInstance from './utils/axiosInstance';

export const getPosts = async () => {
    try {
        const response = await axiosInstance.get('/wp-json/wp/v2/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPost = async (postId) => {
    try {
        const response = await axiosInstance.get(`/wp-json/wp/v2/posts/${postId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPost = async (postData) => {
    try {
        const response = await axiosInstance.post('/wp-json/wp/v2/posts', postData);
        return response.data;
    } catch (error) {
        throw error;
    }
};