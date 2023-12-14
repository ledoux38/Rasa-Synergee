document.getElementById("send-button").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    sendMessage(userInput);
});

function sendMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = "Vous: " + message;
    chatBox.appendChild(userMessageDiv);

    fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sender": "user", "message": message })
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(messageData => {
            var botMessageDiv = document.createElement("div");
            botMessageDiv.textContent = "Bot: " + messageData.text;
            chatBox.appendChild(botMessageDiv);
        });
    })
    .catch(error => console.error('Error:', error));
}
