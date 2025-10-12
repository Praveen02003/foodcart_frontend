export const restrictadmin = (navigate) => {
    const token = localStorage.getItem("admintoken")
    if (token) {
        navigate('/home')
    }
}


export const restrictpages = (navigate) => {
    const token = localStorage.getItem("admintoken")
    if (!token) {
        navigate('/')
    }
}