const newPostBtn = document.getElementById("account-newpost");
const deletePostBtn = document.querySelectorAll(".fa-trash-can");
const blogText = document.getElementById("new-tip");
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
  let postCreated = await fetch("/api/account/newTip", {
    method: "POST",
    body: JSON.stringify({ blogText: blogText.value }),
    headers: { "Content-Type": "application/json" },
  }).catch((err) => console.log(err));

  if (postCreated.ok) {
    window.location.replace("/api/account");
  }
};

if (newPostBtn) {
  newPostBtn.addEventListener("click", createNewPost);
}
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
if (deletePostBtn) {
  deletePostBtn.forEach((item) => {
    item.addEventListener("click", deletePost);
  });
}

let upVoteBtns = document.querySelectorAll(".upvote");

const voteUpTip = async (event) => {
  let tipId = null;
  let relocation = "";
  if (window.location.pathname === "/api/profile") {
    let container = event.target.parentElement.parentElement;
    tipId = container.dataset.tipId;
    relocation = "profile";
  } else {
    let voteContainer = event.target.parentElement.parentElement;
    tipId = voteContainer.dataset.tipId;
    relocation = "account";
  }

  let increment = await fetch(`/api/tips/${parseInt(tipId)}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
  }).catch((err) => console.log(err));
  if (increment.ok) {
    window.location.replace(`/api/${relocation}`);
  }
};

if (upVoteBtns) {
  upVoteBtns.forEach((btn) => btn.addEventListener("click", voteUpTip));
}
