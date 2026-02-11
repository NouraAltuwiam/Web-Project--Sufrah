document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_AVATAR = "images/user.png";

  const fileInput = document.getElementById("profileImg");
  const createAccountBtn = document.querySelector('a[href="user.html"]');


document.querySelector('.signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  window.location.href = 'user.html';
});


  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];

      if (!file) {
        localStorage.setItem("profileImage", DEFAULT_AVATAR);
        return;
      }

      if (!file.type.startsWith("image/")) {
        fileInput.value = "";
        localStorage.setItem("profileImage", DEFAULT_AVATAR);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("profileImage", reader.result); 
      };
      reader.readAsDataURL(file);
    });
  }

  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", () => {
      if (!localStorage.getItem("profileImage")) {
        localStorage.setItem("profileImage", DEFAULT_AVATAR);
      }
    });
  }

  const userAvatar = document.getElementById("userAvatar");
  if (userAvatar) {
    const saved = localStorage.getItem("profileImage") || DEFAULT_AVATAR;
    userAvatar.src = saved;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      if (!row) return;

      if (confirm("تبين تحذفين الوصفة؟")) {
        row.remove();
      }
    });
  });
  
       // <!-- ramadan-countdown-section -->
  
  const ramadanStart = new Date("2026-3-18");

  function updateRamadanCounter(){
    const now = new Date();

    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const start = new Date(
      ramadanStart.getFullYear(),
      ramadanStart.getMonth(),
      ramadanStart.getDate()
    );

    const daysLeft = Math.ceil(
      (start - today) / (1000 * 60 * 60 * 24)
    );

    const textEl = document.getElementById("ramadanText");
    const tens = document.getElementById("dayTens");
    const ones = document.getElementById("dayOnes");

    if (daysLeft > 0) {
      const s = String(daysLeft).padStart(2,"0");
      tens.textContent = s[0];
      ones.textContent = s[1];
      textEl.textContent = `🌙 باقي ${daysLeft} يوم على رمضان`;
      return;
    }

    const ramadanDay = Math.abs(daysLeft) + 1;

    if (ramadanDay <= 30) {
      const s = String(ramadanDay).padStart(2,"0");
      tens.textContent = s[0];
      ones.textContent = s[1];
      textEl.textContent = `🌙 اليوم ${ramadanDay} من رمضان`;
    } 
    else {
      tens.textContent = "0";
      ones.textContent = "0";
      textEl.textContent = "🌙 انتهى رمضان، تقبل الله";
    }
  }

  updateRamadanCounter();
  setInterval(updateRamadanCounter, 60 * 60 * 1000); 
});
