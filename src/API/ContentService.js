import axios from "axios";


export default class PostService {
    static async getAll(url,limit = 10, page = 1) {
        const response = await axios.get(url, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getByID(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    }

    static async getCommentsOfThePost(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }
}