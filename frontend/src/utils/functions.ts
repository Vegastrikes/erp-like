import { axiosAPI } from "./axios"

async function logout() {
    await axiosAPI.delete('user/logout')
    //TODO put url in .env and use from there
    .then(() => window.location.replace("http://localhost:5173/"))
    .catch(() => console.error('an error occured on logout'))
}

export {
    logout
}