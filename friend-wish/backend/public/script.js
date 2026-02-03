window.onload = () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.3 }
  });
};

function celebrate() {
  // Confetti blast 🎊
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Text animation + change
  fetch("http://localhost:5000/wish")

  const wish = document.getElementById("wish");
  wish.innerText = "Tu sirf meri hi best friend ho  ❤️";
  wish.style.animation = "pop 0.5s ease-in-out";
}

