document.addEventListener("DOMContentLoaded", function () {
  let list = document.querySelector(".markdown-preview-view ul.task-list");
  let items = Array.from(list.children);
  items.forEach((item) => {
    if (item.querySelector("input").checked) {
      list.appendChild(item);
    }
  });
});
