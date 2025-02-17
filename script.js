document.addEventListener('DOMContentLoaded', () => {
    // Generar corazones flotantes
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 5 + 's';
      document.body.appendChild(heart);
    }
  
    // Función para cambiar el mensaje
    const changeMessageBtn = document.getElementById('changeMessageBtn');
    changeMessageBtn.addEventListener('click', () => {
      const messages = [
        'Feliz San Valentin atrasado cara culo 🗣️ ',
        
        
        
      ];
      const messageDiv = document.getElementById('message');
      const randomIndex = Math.floor(Math.random() * messages.length);
      messageDiv.textContent = messages[randomIndex];
    });

      // Generar emojis de corazón flotantes
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '🏳️‍🌈'; // Emoji de corazón
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 5 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // Tamaños aleatorios para los corazones
    document.body.appendChild(heart);
  }

  window.addEventListener('DOMContentLoaded', () => {
      const music = document.getElementById('backgroundMusic');
      music.play().catch(() => {
        console.log('El usuario debe interactuar para iniciar el audio.');
      });
    });
  });