export function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.top = "20px";
  toast.style.right = "20px";
  toast.style.background = "#9b3a4a";
  toast.style.color = "white";
  toast.style.padding = "12px";
  toast.style.fontSize = "14px";
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}
