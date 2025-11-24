import axios from "axios";

const BASE_URL = "https://api.boilerexams.com/questions/d44531f1-3cf7-404d-bd10-e9a786484b8a";

/**
 * Returns the question data for a given question id.
 * @param {string} id - id of the question
 * @returns {Promise<Object>} - question data
 */
export const fetchQuestion = async (id) => {
    try { 
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching question ${id}:`, error);
        throw error;
    }
};
