import axios from '../Axios/Axios_file.js'
export const add = async (foodname, foodprice, foodimage) => {
    const userdata = {
        foodname,
        foodprice,
        image: foodimage
    }

    if (!foodname || !foodprice) {
        alert('Please Fill The Data!')
    } else {
        try {
            const response = await axios.post('/addfood', userdata)
            alert(response.data.message)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}