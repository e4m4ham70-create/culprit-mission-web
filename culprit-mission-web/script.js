document.querySelectorAll("textarea[data-save]").forEach((textarea) => {
  const key = textarea.dataset.save;

  const saved = localStorage.getItem(key);
  if (saved !== null) {
    textarea.value = saved;
  }

  textarea.addEventListener("input", () => {
    localStorage.setItem(key, textarea.value);
  });
});
