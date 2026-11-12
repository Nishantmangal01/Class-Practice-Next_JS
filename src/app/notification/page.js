export default async function Notification() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const msg = await response.json();
    return (
        <div className="m-10 ">
            <h1 className="text-3xl font-bold mb-5 text-center">Notifications</h1>
            {msg.slice(0, 5).map((msg) => (
                <div key={msg.id} className="border-2 p-4 rounded-lg mb-3">
                    <h2 className="font-bold">{msg.title}</h2>
                    <p>{msg.body}</p>
                </div>
            ))}
        </div>
    );
}