const weeklyQuoteGenerator = async () => {
  let userStore = getLocalStorage();

  if (userStore === undefined || userStore === null) {
    userStore = await updateUserStore();
  } else {
    let weekChanged = differentWeek();

    if (weekChanged) {
      userStore = updateUserStore();
    }
  }
  let quoteHolder = document.getElementById("weekly-quote");
  quoteHolder.innerHTML = userStore.randomQuote;
};

const updateUserStore = async () => {
  let randomIndex = null;
  let currDay = moment().format("Dd");
  let res = await fetch("/api/tips").catch((err) => console.log(err));
  if (res.ok) {
    randomIndex = Math.floor(Math.random() * quotesLength);

    let allQuotes = await res.json();
    let quotesLength = allQuotes.length;
    let quote = allQuotes[randomIndex].tip;
    setQuotesLocalStore(currDay, quote);
  }
  return getLocalStorage();
};

const differentWeek = () => {
  let dayChanged = false;
  let currDay = moment().format("Dd");
  let userDay = getLocalStorage();

  if (currDay > userDay.day + 6) {
    dayChanged = true;
  }

  return dayChanged;
};

const storeName = "mental_db-store";

const getLocalStorage = () => {
  let store = JSON.parse(localStorage.getItem(storeName));
  return store;
};

const setQuotesLocalStore = (userDay, quoteIndex) => {
  let userObject = {
    day: userDay,
    randomQuote: quoteIndex,
  };

  localStorage.setItem(storeName, JSON.stringify(userObject));
};

weeklyQuoteGenerator();
