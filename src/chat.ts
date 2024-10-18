export function setupChat(
  chatWindow: HTMLDivElement,
  chatMessages: HTMLDivElement,
  chatInput: HTMLInputElement,
  sendButton: HTMLButtonElement
) {
  sendButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      addMessage('You', message);
      chatInput.value = '';
      
      // Simulate a response after a short delay
      setTimeout(() => {
        addMessage('Match', 'Thanks for your message! How are you doing?');
      }, 1000);
    }
  }

  function addMessage(sender: string, message: string) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}