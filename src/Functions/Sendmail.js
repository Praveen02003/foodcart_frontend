import axios from "../Axios/Axios_file.js";

export const sendmail = async (email, password) => {
    const userdata = {
        to: "praveen.aeropilot@gmail.com",
        subject: "Hello Admin",
        message: `Your Mail : ${email} and Password : ${password}`,
    };
    try {
        const response = await axios.post("/sendmail", userdata);
        alert(response.data.message);
    } catch (error) {
        alert(error.response.data.message);
    }
};