document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_AVATAR = "images/user.png";

  // ===== SIGNUP: Save chosen image OR default =====
  const fileInput = document.getElementById("profileImg");
  const createAccountBtn = document.querySelector('a[href="user.html"]');

  // لو اختار صورة، نخزنها
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
        localStorage.setItem("profileImage", reader.result); // data URL
      };
      reader.readAsDataURL(file);
    });
  }

  // عند الضغط على "إنشاء الحساب" بدون رفع صورة -> نخزن default
  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", () => {
      if (!localStorage.getItem("profileImage")) {
        localStorage.setItem("profileImage", DEFAULT_AVATAR);
      }
    });
  }

  // ===== USER PAGE: Put profile image in user page =====
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
});
