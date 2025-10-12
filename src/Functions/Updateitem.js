import axios from "../Axios/Axios_file.js"

export const updateitem = async (navigate,setOpen, setSeverity, setMessage, id, foodname, foodtype, foodprice, foodoffer, foodimage, fooddiscription, setFooddefaultprice) => {
    if (!foodname || !foodtype || !foodprice || !foodimage || !fooddiscription) {
        // alert("please fill all the data")
        setOpen(true)
        setMessage("please fill all the data")
        setSeverity("info")
    }
    else {
        var originalPrice = foodprice
        var discountPercent = foodoffer
        var defaultprice = 0
        var finalPrice = 0
        if (discountPercent > 0) {
            var discountAmount = (originalPrice * discountPercent) / 100;
            finalPrice = originalPrice - discountAmount;
            defaultprice = originalPrice
            setFooddefaultprice(defaultprice)
        }
        else {
            finalPrice = originalPrice
            defaultprice = originalPrice
            setFooddefaultprice(defaultprice)
        }
        try {
            const userdata = {
                ids: id,
                name: foodname,
                type: foodtype,
                price: finalPrice,
                defaultprice: defaultprice,
                offer: discountPercent,
                image: foodimage,
                description: fooddiscription
            }
            const response = await axios.post('/updateitem', userdata)
            if (response.data.message === "Item updated successfully") {
                // alert(response.data.message)
                setOpen(true)
                setMessage(response.data.message)
                setSeverity("success")
                setTimeout(() => {
                    navigate('/showitems')
                }, 500);
            }
            else {
                // alert(response.data.message)
                setOpen(true)
                setMessage(response.data.message)
                setSeverity("error")
            }
        } catch (error) {
            console.log("error");

        }

    }

}