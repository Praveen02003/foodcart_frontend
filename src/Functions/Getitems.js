import axios from "../Axios/Axios_file.js"

export const getitems = async (setShowitems) => {
    try {
        const response = await axios.get('/getallitems')
        setShowitems(response.data.message)
        // console.log(response.data.message);

    } catch (error) {
        console.log("error");

    }
}


export const getallitemslength = async (setItemslength) => {
    try {
        const response = await axios.get('/getallitems')
        // console.log(response.data.message.length);

        setItemslength(response.data.message.length)

    } catch (error) {
        console.log("error");

    }
}