import axios from "../Axios/Axios_file.js"

export const handledeleteitem = async (id, count, setCount, setOpen, setSeverity, setMessage) => {
    try {
        const userdata = {
            deleteid: id
        }
        const response = await axios.post('/deleteitem', userdata)
        if (response.data.message === "Item deleted successfully") {
            setCount(count + 1)
            // alert(response.data.message)
            setOpen(true)
            setMessage(response.data.message)
            setSeverity("success")
        }
        else {
            setCount(count + 1)
            // alert(response.data.message)
            setOpen(true)
            setMessage(response.data.message)
            setSeverity("success")
        }

    } catch (error) {
        console.log("error");

    }
}