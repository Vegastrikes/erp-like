import { Outlet, Navigate } from "react-router"
import { axiosAPI } from "../utils/axios"
import { useEffect, useState } from "react"

type boul = boolean | null
const initial: boul = null
export default function ProtectedRoute() {
  const [check, setCheck] = useState(initial);

  useEffect(() => {
    async function isAuthenticated() {
      await axiosAPI.get('user/isLoggedIn')
      .then((res) => setCheck(res.data.isAuthenticated || false))
      .catch(() => setCheck(false))
    }

    isAuthenticated()
  }, [])

  if (check === null) {
    return <>loading</>
  } else {
    return check ? <Outlet /> : <Navigate to="/login"/>
  }
}