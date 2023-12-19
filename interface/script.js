document.getElementById("send-button").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = ""; // Clear input field
    sendMessage(userInput);
});

function displayUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = "Vous: " + message;
    messageDiv.classList.add("message", "user-message");
    chatBox.appendChild(messageDiv);
}

function displayBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = "Bot: " + message;
    messageDiv.classList.add("message", "bot-message");
    chatBox.appendChild(messageDiv);
}

function sendMessage(message) {
    displayUserMessage(message);

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
            displayBotMessage(messageData.text);
        });
    })
    .catch(error => console.error('Error:', error));
}
