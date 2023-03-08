import axios from 'axios'

const GetRepo = async (username: any) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        )
        return response.data
    } catch (error) {
        return error
    }
}

export default {
    GetRepo,
}