export const login = (navigate, email, password, adminemail, adminpassword, setOpen, setSeverity, setMessage) => {
    if (!adminemail || !adminpassword) {
        // alert("Please Fill The Data");
        setOpen(true)
        setSeverity("info")
        setMessage("Please Fill The Data")
    } else if (adminemail === email && adminpassword === password) {
        // alert("Login Successful");
        setOpen(true)
        setSeverity("success")
        setMessage("Login Successful")
        localStorage.setItem("username", "admin");
        setTimeout(() => {
            navigate("/admindisplay");
        }, 500);
        
    } else if (adminemail !== email) {
        setOpen(true)
        setSeverity("error")
        setMessage("Invalid Email")
        // alert("Invalid Email");
    } else if (adminpassword !== password) {
        setOpen(true)
        setSeverity("error")
        setMessage("Invalid Password")
        // alert("Invalid Password");
    }
};