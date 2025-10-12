export const loginadmin = (navigate, mail, password, setOpen, setSeverity, setMessage) => {
    const adminmail = "admin@gmail.com"
    const adminpassword = "123"
    if (!mail || !password) {
        // alert("Please fill all the data")
        setOpen(true)
        setMessage("Please fill all the data")
        setSeverity("info")
    }
    else {
        if (mail === adminmail) {
            if (password === adminpassword) {

                // alert("Login Successfull")
                setOpen(true)
                setMessage("Login Successfull")
                setSeverity("success")
                localStorage.setItem("admintoken", "success")
                setTimeout(() => {
                    navigate('/home')
                }, 500);


            }
            else {

                // alert("Wrong password")
                setOpen(true)
                setMessage("Wrong password")
                setSeverity("error")

            }
        }
        else {

            // alert("Invalid credentials")
            setOpen(true)
            setMessage("Invalid credentials")
            setSeverity("error")

        }
    }
}