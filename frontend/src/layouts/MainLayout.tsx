import { Outlet } from "react-router";
import HeaderOffline from "../components/HeaderOffline";
import HeaderOnline from "../components/HeaderOnline";

export default function MainLayout({
    userOnline = false,
}) {
    const header = userOnline ? <HeaderOnline /> : <HeaderOffline />
    return (
        <>
            {header}
            <Outlet />
        </>
    )
}