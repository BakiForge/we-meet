
export function ChatMessage({userMessage}) {
    return (
        <li className="post">
                <div className="post__meta">
                <span className="post__avatar"></span>
                <div>
                    <strong>{userMessage.title}</strong>
                    <span className="post__time">{userMessage.sender}</span>
                </div>
                </div>
                <p>{userMessage.content}</p>
        </li>
    );
}