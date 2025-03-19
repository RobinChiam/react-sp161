import axios from 'axios';

// Ensure environment variables are loaded
const WPHOST = 'robin.rateitrightnow.com';

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

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the post:', error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${API_URL}posts`, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};
