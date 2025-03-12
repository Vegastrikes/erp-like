export default function HeaderOffline() {
    return (
        <div className="flex bg-gray-600 absolute top-0 left-0 w-full h-10">
            <div className="flex items-center ml-4">
                <span>Welcome</span>
            </div>
            <div className="flex items-center mr-4 ml-auto">
                <Login />
            </div>
        </div>
    )
}

function Login() {
    return (
        <a href="/login" className="text-blue-500 cursor-pointer"  >Login</a>
    )
}