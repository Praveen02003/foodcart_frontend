import axios from '../Axios/Axios_file.js';
export const deletefood = async (foodid, count, setCount, setOpen, setSeverity, setMessage) => {
    try {
        const response = await axios.post('/deletedata', { _id: foodid });
        if (response.data.message === "Food Deleted Successfully") {
            // alert(response.data.message);
            setOpen(true)
            setMessage(response.data.message)
            setSeverity("success")
            setCount(count + 1);
        }
        else {
            // alert(response.data.message);
            setOpen(true)
            setMessage(response.data.message)
            setSeverity("error")
            setCount(count + 1);
        }

    } catch (error) {
        alert(error.response?.data?.message || "Error deleting food");
        setCount(count + 1);
    }
};