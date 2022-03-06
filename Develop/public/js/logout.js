const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
    console.log("SUCCESSFULLY LOGGED OUT");
  } else {
    alert(response.statusText);
  }
};
console.log("ran script");
document.querySelector("#logout-button").addEventListener("click", logout);
