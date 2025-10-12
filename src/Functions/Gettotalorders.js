import axios from "../Axios/Axios_file.js";

export const gettotalorders = async (setTotalorders) => {
    try {
        const response = await axios.get("/orders");
        setTotalorders(response.data.message.length)
    } catch (error) {
        console.log("error");

    }
}