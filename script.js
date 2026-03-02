


     // Exemplo: mensagem no console ao carregar
console.log("Página carregada com sucesso!");

// Exemplo: alert ao clicar no título
document.querySelector('h1').addEventListener('click', function() {
    alert('Você clicou no título!');
});




let localStream; // Variável global para armazenar o stream
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const videoElement = document.getElementById('videoElement');

// Iniciar Câmera
startButton.addEventListener('click', async () => {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        videoElement.srcObject = localStream;
    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
    }
});

// Desligar Câmera
stopButton.addEventListener('click', () => {
    if (localStream) {
        // Interrompe cada faixa (track) de mídia (vídeo e áudio)
        localStream.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null; // Limpa o vídeo na tela
        console.log("Câmera desligada.");
    }  });


  
  
  
 
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && messageInput.value.trim() !== "") {
                const message = messageInput.value;
                const messageElement = document.createElement('div');
                messageElement.innerText = "Você: " + message;
                messagesContainer.appendChild(messageElement);
                messageInput.value = '';
                
                
                messagesContainer.scrollTop = messagesContainer.scrollHeight;   }    });







      
    // Exemplo de Javascript para Web Share API
if (navigator.share) {
  document.querySelector('#meuBotaoCompartilhar').addEventListener('click', () => {
    navigator.share({
      title: 'Título da Página',
      url: window.location.href
    }).then(() => {
      console.log('Compartilhado com sucesso');
    }).catch(console.error);  }); }













