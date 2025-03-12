export default function ModuleEntry({
    name = "Default"
}) {
    return(
        <div className="border rounded-lg p-6 m-4">
            {name}
        </div>
    )
}