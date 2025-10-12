export const logout = (navigate) => {
    localStorage.removeItem('admintoken')
    navigate('/')
}