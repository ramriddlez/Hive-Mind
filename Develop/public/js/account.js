const newPostBtn = document.getElementById("account-newpost");
const deletePostBtn = document.querySelectorAll(".fa-trash-can");
const blogText = document.getElementById("new-tip");
console.log("delete button: ", deletePostBtn);
const createNewPost = async (event) => {
  if (
    blogText.value === undefined ||
    blogText.value === null ||
    blogText.value === ""
  ) {
    event.preventDefault();

    blogText.style.border = "solid red 3px";
    setTimeout(() => {
      blogText.style.border = "none";
    }, 2000);
    return;
  }
  await fetch("/api/account/newTip", {
    method: "POST",
    body: JSON.stringify({ blogText: blogText.value }),
    headers: { "Content-Type": "application/json" },
  });
};

newPostBtn.addEventListener("click", createNewPost);
const deletePost = async (event) => {
  let targetEl = event.target.parentElement;
  let tipId = targetEl.dataset.tipId;

  let deleted = await fetch(`/api/account/${tipId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (deleted.ok) {
    window.location.replace("/api/account");
  }
};
deletePostBtn.forEach((item) => {
  item.addEventListener("click", deletePost);
});
