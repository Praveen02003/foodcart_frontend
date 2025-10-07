import axios from '../Axios/Axios_file.js'
export const updatedata = async (navigate, editfoodid, editfoodname, editfoodprice, editfoodimage, setEditfoodimage, setOpen, setSeverity, setMessage) => {
    const userdata = {
        _id: editfoodid,
        foodname: editfoodname,
        foodprice: editfoodprice,
        image: editfoodimage
    }

    if (!editfoodname || !editfoodprice) {
        // alert('Please Fill The Data!')
        setOpen(true)
        setSeverity('info')
        setMessage("Please Fill The Data!")
    } else {
        try {
            const response = await axios.post('/update', userdata)

            if (response.data.message === "Update Successfully") {
                // alert(response.data.message)
                setOpen(true)
                setSeverity('success')
                setMessage(response.data.message)
                setTimeout(() => {
                    navigate('/admindisplay')
                }, 500);
            }
            else {
                // alert(response.data.message)
                setOpen(true)
                setSeverity('error')
                setMessage(response.data.message)
            }
        } catch (error) {
            alert(error.response?.data?.message || 'Error updating food')
        }
    }
}