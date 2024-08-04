document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command');
    const commandOutput = document.getElementById('command-output');
    let matrixRainInterval;
  
    function executeCommand(command) {
      switch (command.trim().toLowerCase()) {
        case 'whoami':
          commandOutput.innerHTML = '<p>Krishna Gopal Jha - Your professional profile.</p>';
          break;
        case 'about':
          commandOutput.innerHTML = '<p>Information about Krishna Gopal Jha.</p>';
          break;
        case 'skills':
          commandOutput.innerHTML = '<p>Tech stacks and skills.</p>';
          break;
        case 'projects':
          commandOutput.innerHTML = `<table class="data-table">
            <tbody>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/BugBridger" target="_blank" class="data-link">Bug Bridger (Stack Overflow Mobile App)</a></th>
                <td class="data-description-td">Explore the entire Stack Overflow repository, including questions and answers. The Stack Overflow mobile app that you never had before.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/young-biz" target="_blank" class="data-link">YoungBiz</a></th>
                <td class="data-description-td">YoungBiz is a dedicated platform designed specifically for kids and teenagers. It empowers them to showcase and sell their creations, enabling them to earn pocket money and cultivate entrepreneurial skills from a young age.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/BookSwap" target="_blank" class="data-link">BookSwap</a></th>
                <td class="data-description-td">Connects users to swap books with others in their city. Utilizes Google Books API for comprehensive book data.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/code-cibus-hackathon" target="_blank" class="data-link">Foodora</a></th>
                <td class="data-description-td">A digital food menu that vendors can create and get a QR code that can be scanned by foodies to get the menu on their smartphone.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/interview-diaries" target="_blank" class="data-link">Interview Diaries</a></th>
                <td class="data-description-td">Interview Diaries is a user-friendly blogging platform designed for developers to effortlessly share their interview experiences.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/zomato-clone" target="_blank" class="data-link">Zomato App Clone</a></th>
                <td class="data-description-td">I have made an effort to mirror the design of the original Zomato app exactly.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/devlink" target="_blank" class="data-link">Devlink</a></th>
                <td class="data-description-td">You can share all of your links at once in one location using Devlink.</td>
              </tr>
              <tr>
                <th class="data-name-th"><a href="https://github.com/BrijenMakwana/terminal-portfolio" target="_blank" class="data-link">Terminal style portfolio website</a></th>
                <td class="data-description-td">You can access my information via a command line interface.</td>
              </tr>
            </tbody>
          </table>`;
          break;
        case 'achievements':
          commandOutput.innerHTML = '<p>List of achievements.</p>';
          break;
        case 'website':
          commandOutput.innerHTML = '<p><a href="https://your-portfolio-site.com" target="_blank">Visit Portfolio Site</a></p>';
          break;
        case 'contact':
          commandOutput.innerHTML = '<p>Contact information.</p>';
          break;
        case 'clear':
          commandOutput.innerHTML = '';
          break;
        case 'help':
        case 'ls':
          commandOutput.innerHTML = `<dl>
            <dt class="data-dt">whoami</dt>
            <dd class="data-dd"> - Display professional profile.</dd>
            <dt class="data-dt">about</dt>
            <dd class="data-dd"> - Information about Krishna Gopal Jha.</dd>
            <dt class="data-dt">skills</dt>
            <dd class="data-dd"> - Display tech stacks and skills.</dd>
            <dt class="data-dt">projects</dt>
            <dd class="data-dd"> - List of projects with descriptions.</dd>
            <dt class="data-dt">achievements</dt>
            <dd class="data-dd"> - Display list of achievements.</dd>
            <dt class="data-dt">website</dt>
            <dd class="data-dd"> - Link to the portfolio website.</dd>
            <dt class="data-dt">contact</dt>
            <dd class="data-dd"> - Display contact information.</dd>
            <dt class="data-dt">clear</dt>
            <dd class="data-dd"> - Clear the command output.</dd>
            <dt class="data-dt">help</dt>
            <dd class="data-dd"> - Display list of available commands.</dd>
            <dt class="data-dt">ls</dt>
            <dd class="data-dd"> - Display list of available commands (alias for help).</dd>
          </dl>`;
          break;
        case 'magic':
          createMatrixRain();
          setTimeout(() => {
            removeMatrixRain();
          }, 3000); // Matrix rain lasts for 3 seconds
          break;
        default:
          commandOutput.innerHTML = '<p class="command-not-found">Command not found.</p>';
      }
    }
  
    function createMatrixRain() {
      // Create a canvas element for the Matrix rain effect
      const matrixRain = document.createElement('div');
      matrixRain.classList.add('matrix-rain');
      document.body.appendChild(matrixRain);
  
      const canvas = document.createElement('canvas');
      matrixRain.appendChild(canvas);
  
      const ctx = canvas.getContext('2d');
      const columns = canvas.width = window.innerWidth / 20;
      const rows = canvas.height = window.innerHeight / 20;
  
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const drops = Array(Math.floor(columns)).fill(1);
  
      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FF00'; // Hacker green
        ctx.font = '20px monospace';
  
        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * 20, drops[i] * 20);
          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
  
      setInterval(draw, 33); // Adjust for desired speed
    }
  
    function removeMatrixRain() {
      // Remove Matrix rain effect
      const matrixRain = document.querySelector('.matrix-rain');
      if (matrixRain) {
        matrixRain.remove();
      }
    }
  
    commandInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const command = commandInput.value;
        executeCommand(command);
        commandInput.value = '';
      }
    });
  
    commandInput.addEventListener('focus', () => {
      commandInput.value = '';
    });
  });
  