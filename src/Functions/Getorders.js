import axios from "../Axios/Axios_file.js";

export const getorders = async (setShoworders) => {
    try {
        const response = await axios.get("/orders");
        const orders = response.data.message;

        for (let order of orders) {
            const cartItems = JSON.parse(order.items) || {};
            const ids = Object.values(cartItems);

            // get items for this order
            const itemsResponse = await axios.post("/getordereditems", { itemids: ids });
            order.itemdetails = itemsResponse.data.message || [];
        }

        // update state once
        console.log(orders);

        setShoworders(orders);
    } catch (error) {
        console.log("Error fetching orders", error);
        setShoworders([]);
    }
};
