export const setToken = () => localStorage.setItem('token', '123456789')
export const loggedIn = () => localStorage.getItem('token')
export const deleteToken = () => localStorage.removeItem('token')
