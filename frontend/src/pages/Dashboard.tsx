import { axiosAPI } from "../utils/axios"

export default function Dashboard() {
  async function handleLogout() {
    try {
      const response = await axiosAPI.delete('user/logout')
      console.log(response.data)
      window.location.reload()
    } catch (error) {
        console.error('an error occured on logout', error)
    }
  }
  return(
    <>
      Hello Dashboard
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Logout</button>
    </>
  )
}