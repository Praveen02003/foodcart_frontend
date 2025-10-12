import axios from "../Axios/Axios_file.js";

export const gettotalcustomers = async (setTotalcustomers) => {
    try {
        const response = await axios.get("/orders");
        setTotalcustomers(response.data.message.length)
    } catch (error) {
        console.log("error");

    }
}