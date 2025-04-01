function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function toggleTheme() {
    let currentTheme = getCookie('theme');
    if (currentTheme === 'dark') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      setCookie('theme', 'light', 30); 
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      setCookie('theme', 'dark', 30); 
    }
  }

  window.onload = function() {
    let savedTheme = getCookie('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }


    const toggleButton = document.getElementById('toggleButton');
    const content = document.getElementById('content');
    toggleButton.addEventListener('click', function() {
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        toggleButton.textContent = 'Ukryj numer'; 
      } else {
        content.classList.add('hidden');
        toggleButton.textContent = 'Zadzwoń'; 
      }
    });


    function updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();