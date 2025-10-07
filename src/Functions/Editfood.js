export const editfood = (food, setEditfoodid, setEditfoodname, setEditfoodprice, setEditfoodimage, navigate) => {
    setEditfoodid(food._id);
    setEditfoodname(food.foodname);
    setEditfoodprice(food.foodprice);
    setEditfoodimage(food.image);
    navigate('/edit');
};