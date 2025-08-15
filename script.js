
    function sendEmail() {
      const name = document.getElementById('serverName').value.trim();
      const ip = document.getElementById('ip').value.trim();
      const version = document.getElementById('version').value.trim();

      if (!name || !ip || !version) {
        alert("Please fill in all fields.");
        return;
      }

      const subject = encodeURIComponent("Minecraft Server Info");
      const body = encodeURIComponent(
        `Server Name: ${name}\nServer IP: ${ip}\nVersion: ${version}`
      );

      // Change this to your real email
const mailtoLink = `mailto:vikrambryadav@gmail.com?subject=${subject}&body=${body}`;
window.location.href = mailtoLink;

    }
  