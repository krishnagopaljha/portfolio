// Define the startMatrixRain function at the top
function startMatrixRain() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  document.getElementById('matrix-rain').appendChild(canvas);

  const ctx = canvas.getContext('2d');

  // Set canvas size to match the viewport size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  matrixRainInterval = setInterval(draw, 33);

  // Clean up on stop
  stopMatrixRain = () => {
    clearInterval(matrixRainInterval);
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
      canvas.remove();
    }
    window.removeEventListener('resize', resizeCanvas);
  };
}

function stopMatrixRain() {
  clearInterval(matrixRainInterval);
  const canvas = document.getElementById('matrix-canvas');
  if (canvas) {
    canvas.remove();
  }
  window.removeEventListener('resize', resizeCanvas);
}

let matrixRainInterval;

document.addEventListener('DOMContentLoaded', () => {
  const commandInput = document.getElementById('command');
  const commandOutput = document.getElementById('command-output');

  function executeCommand(command) {
    switch (command.trim().toLowerCase()) {
      case 'whoami':
        commandOutput.innerHTML = '<p>I am a Cyber Security student 🔒, ranked in the top 1% on TryHackMe 🌟. I completed a virtual internship at JPMorgan Chase 💼 and hold cybersecurity certifications from Harvard, Microsoft, and Cisco 📜. I have developed projects like an image encryptor and HTML Smuggler 💻. Additionally, I am an author ✍️ and enjoy participating in CTF competitions 🕵️.</p>';
        break;
      case 'about':
        commandOutput.innerHTML = '<p> ➢ Cyber Security Enthusiast </p><p> ➢ TryHackMe top 1%</p> <p> ➢ I Create My Own Tools</p><p> ➢ Author </p> ';
        break;
      case 'skills':
        commandOutput.innerHTML = '<p> ➢ Cyber Security </p><p> ➢ Networking</p> <p> ➢ Python Programming</p><p> ➢ Author </p>';
        break;
      case 'projects':
        commandOutput.innerHTML = `<table class="data-table">
          <tbody>
            <tr>
              <th class="data-name-th"><a href="https://krishnagopaljha.github.io/htmlsmug/" target="_blank" class="data-link">HTML Smuggler</a></th>
              <td class="data-description-td">HTML Smug is a secure web tool developed for converting EXE files to HTML and back, using XOR encryption.</td>
            </tr>
            <tr>
              <th class="data-name-th"><a href="https://github.com/krishnagopaljha/encrypix" target="_blank" class="data-link">Image Encryptor</a></th>
              <td class="data-description-td">EncryPix is a web-based application that provides a secure and efficient way to encrypt and decrypt images using XOR encryption. Built with Python Flask, this tool allows users to protect their visual data with a straightforward encryption method and easily retrieve their original images when needed.</td>
            </tr>
          </tbody>
        </table>`;
        break;
      case 'achievements':
        commandOutput.innerHTML = '<p>➢ TryHackMe top 1% </p>';
        break;
      case 'website':
        commandOutput.innerHTML = `<table class="data-table">
          <tbody>
            <tr>
              <th class="data-name-th"><a href="https://secbox.rf.gd target="_blank" class="data-link">Main Website</a></th>
              <td class="data-description-td">This is my main website where i upload tools for making life easier.</td>
            </tr>
          </tbody>
        </table>`;
        break;
      case 'contact':
        commandOutput.innerHTML = '<p> ➢ test@mail.com</p>';
        break;
      case 'clear':
        commandOutput.innerHTML = '';
        break;
      case 'magic':
        startMatrixRain();
        setTimeout(() => {
          stopMatrixRain();
        }, 5000); // Matrix rain lasts for 5 seconds
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
      default:
        commandOutput.innerHTML = '<p class="command-not-found">Command not found.</p>';
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

  document.addEventListener('click', () => {
    commandInput.focus();
  });

  // Ensure input field focus is restored when clicking anywhere
  document.addEventListener('click', (e) => {
    // If the click is not on the input field, focus it
    if (!commandInput.contains(e.target)) {
      commandInput.focus();
    }
  });
});
