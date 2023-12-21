document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut de la touche Entrée
        var userInput = document.getElementById("user-input").value;
        document.getElementById("user-input").value = ""; // Efface le champ de saisie
        sendMessage(userInput);
    }
});

document.getElementById("send-button").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = ""; // Efface le champ de saisie
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
console.log(message)
    var chatBox = document.getElementById("chat-box");

    if (message.text) {
        var textDiv = document.createElement("div");
        textDiv.textContent = "Bot: " + message.text;
        textDiv.classList.add("message", "bot-message");
        chatBox.appendChild(textDiv);
        console.log(chatBox);
    }

    if (message.image) {
        var image = document.createElement("img");
        image.src = message.image;
        image.classList.add("message-image");
        chatBox.appendChild(image);
        console.log(chatBox);
    }
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
            displayBotMessage(messageData);
        });
    })
    .catch(error => console.error('Error:', error));
}
