/**
 * Generates random tip from SQL database. Creates random index using Math library and returns random tip from array.
 * @returns Tip from from array, chosen by random index. Alerts error message if api fetch is not successful
 */
const generateRandomTip = async () => {
  let allTips = await fetch("/tips").catch((err) => console.log(err));
  let totalTips = allTips.length;
  const randomIndex = Math.floor(Math.random() * totalTips);

  if (allTips.ok) {
    return allTips[randomIndex];
  } else {
    alert("error generating tip");
  }
};

/**
 * Function only available while logged in. Function fetches all tips from database and returns them in an ordered fashion.q
 * @param {string} category
 */
const sortTips = async (category) => {
  let sortedTips = await fetch(`/filter/:${category}`).catch((err) =>
    console.log(err)
  );

  if (sortedTips.ok) {
    window.location.replace("/");
  } else {
    alert("error running filter");
  }
};

const getUserTips = (email) => {};
