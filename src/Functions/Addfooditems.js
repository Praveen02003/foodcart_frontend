import axios from "../Axios/Axios_file.js"

export const addfooditems = async (foodname, foodtype, foodprice, foodoffer, foodimage, fooddiscription, category, setFooddefaultprice, setOpen, setSeverity, setMessage) => {
    var originalPrice = foodprice
    var discountPercent = foodoffer
    var defaultprice = 0
    var finalPrice = 0
    if (!foodname || !foodtype || !foodprice || !foodoffer || !foodimage || !fooddiscription || !category) {
        // alert("please fill all the data")
        setOpen(true)
        setMessage("please fill all the data")
        setSeverity("info")
    }
    else {
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
                name: foodname,
                type: foodtype,
                price: finalPrice,
                defaultprice: defaultprice,
                offer: discountPercent,
                image: foodimage,
                description: fooddiscription,
                categories: category
            }
            const response = await axios.post('/add', userdata)
            if (response.data.message === "Item added successfully") {
                // alert(response.data.message)
                setOpen(true)
                setMessage(response.data.message)
                setSeverity("success")
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