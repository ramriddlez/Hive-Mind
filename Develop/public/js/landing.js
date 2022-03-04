const weeklyQuote = async () => {
  let res = await fetch("/api/tips");
  let user = getLocalStorage();

  if (res.ok) {
    let allQuotes = await res.json();

    let randomIndex = null;

    let hasDayChanged = differentDay();

    if (hasDayChanged) {
      randomIndex = Math.floor(Math.random() * allQuotes.length);
      user.randomQuoteIndex = randomIndex;
      setLocalStorageDate(user.day, user.randomQuoteIndex);
    } else {
    }
    console.log(allQuotes);
    console.log(allQuotes.length);
    return allQuotes[randomIndex];
  }
};

const differentDay = () => {
  let dayChanged = false;
  let userDay = moment().format("d");
  let currDay = getLocalStorage();

  if (currDay !== null) {
    if (userDay !== currDay.day) {
      dayChanged = true;
    }
  }
  setLocalStorageDate(userDay);

  return dayChanged;
};

const storeName = "mental_db-store";

const getLocalStorage = () => {
  let store = JSON.parse(localStorage.getItem(storeName));
  return store;
};

const setLocalStorageDate = (userDay, quoteIndex) => {
  let store = localStorage.getItem(storeName);
  let userObject = {
    day: userDay,
    randomQuoteIndex: quoteIndex !== undefined ? quoteIndex : null,
  };
  if (store === undefined || store === null) {
    localStorage.setItem(storeName, JSON.stringify(userObject));
    return;
  } else {
    localStorage.setItem(storeName, JSON.stringify(userObject));
  }
};

let check = async () => {
  let answer = await weeklyQuote();
  console.log(answer);
};
check();
