export default function Home() {
    return(
        <>
            <div className="border rounded-lg p-4">Welcome to the home page</div>
            <br></br>
            <a href="/login" className="text-blue-500">Login</a>
            <br></br>
            <br></br>
            <a href="/signup" className="text-blue-300">Signup</a>
        </>
    )
}