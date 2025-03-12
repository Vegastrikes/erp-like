import { logout } from "../utils/functions"

export default function HeaderOnline() {
    return (
        <div className="flex bg-gray-600 absolute top-0 left-0 w-full h-10">
            <div className="flex items-center ml-4">
                <span>Dashboard</span>
            </div>
            <div className="flex items-center mr-4 ml-auto">
                <Logout />
            </div>
        </div>
    )
}

function Logout() {
    return (
        <a onClick={logout}  className="text-blue-500 cursor-pointer">Logout</a>
    )
}