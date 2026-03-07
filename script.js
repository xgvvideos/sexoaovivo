


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
    






             
function copiarPix() {
  // Substitua pelo seu código Pix "Copia e Cola" real
  const codigoPix = "00020126360014br.gov.bcb.pix0114+55129888491905204000053039865802BR5925GERALDO VAINER NOGUEIRA A6009Sao Paulo62290525REC69AA355F527B037535623263047E98 "; 
  navigator.clipboard.writeText(codigoPix);
  alert("Código Pix copiado! Abra o app do seu banco e cole."); }









    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const video = document.getElementById("meuVideo");
        const viewCountSpan = document.getElementById("view-count");
        
        // 1. Corrige: Converte o valor de localStorage para Número usando parseInt()
        let viewCount = parseInt(localStorage.getItem("videoViews")) || 0;

        // Exibe o total atual ao carregar a página
        viewCountSpan.innerText = viewCount;

        // Incrementa quando o vídeo é reproduzido
        video.addEventListener("play", function() {
            // 2. Melhora: Conta a visualização apenas uma vez por recarregamento
            // Usamos uma flag na sessão para saber se já contamos nesta visita
            if (!sessionStorage.getItem("viewCounted")) {
                viewCount++;
                localStorage.setItem("videoViews", viewCount);
                viewCountSpan.innerText = viewCount;
                
                // Marca na sessão que já contabilizou
                sessionStorage.setItem("viewCounted", "true");
                
                console.log("Visualização contabilizada: " + viewCount);
            }
        });
    });
</script>
