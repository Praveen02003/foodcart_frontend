export const updateitemstate = (setOpen, setSeverity, setMessage, data, navigate, setFoodname, setFoodtype, setFoodprice, setFooddefaultprice, setFoodoffer, setFoodimage, setFooddiscription, setId) => {
    setId(data._id)
    setFoodname(data.name)
    setFoodtype(data.type)
    setFoodprice(data.price)
    setFooddefaultprice(data.defaultprice)
    setFoodoffer(data.offer)
    setFoodimage(data.image)
    setFooddiscription(data.description)
    navigate('/updateitems')

}