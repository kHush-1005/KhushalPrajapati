
    const roles = ["Python Developer", "AI/ML Enthusiast", "IT Student", "Web App Builder"];
    let roleIndex = 0;
    let charIndex = 0;
    let typingElement = document.getElementById("typing");

    function typeRole() {
      if (charIndex < roles[roleIndex].length) {
        typingElement.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
      } else {
        setTimeout(eraseRole, 2000);
      }
    }

    function eraseRole() {
      if (charIndex > 0) {
        typingElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
      }
    }

    document.addEventListener("DOMContentLoaded", typeRole);
    window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + '%';
  });

   VanillaTilt.init(document.querySelectorAll(".project-card, .about-img img, .tool ,.home img"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  });
