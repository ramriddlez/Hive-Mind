document.getElementById("headcard").style.display="none";
document.getElementById("bodycard").style.display="none";
document.getElementById("cardtxt").style.display="none";
const weeklyQuoteGenerator = async () => {
  let userStore = getLocalStorage();

  if (userStore === undefined || userStore === null) {
    userStore = await updateUserStore();
  } else {
    const path = window.location.pathname;
    if (path === "" || path === "/") {
      let weekChanged = differentWeek();

      if (weekChanged) {
        userStore = await updateUserStore();
      }
    } else {
      let dayChanged = differentDay();
      if (dayChanged) {
        userStore = await updateUserStore();
      }

      let dailyQuotePlaceHolder = document.getElementById("daily-quote");
      dailyQuotePlaceHolder.innerHTML = `"${userStore.randomQuote}"`;
      return;
    }
  }
  let quoteHolder = document.getElementById("weekly-quote");
  quoteHolder.innerHTML = `"${userStore.randomQuote}"`;
};

const updateUserStore = async () => {
  let randomIndex = null;
  let currDay = moment().format("Dd");
  let res = await fetch("/api/tips").catch((err) => console.log(err));
  if (res.ok) {
    let allQuotes = await res.json();
    let quotesLength = allQuotes.length;
    randomIndex = Math.floor(Math.random() * quotesLength);

    let quote = allQuotes[randomIndex].tip;
    setQuotesLocalStore(currDay, quote);
    return getLocalStorage();
  }
};

const differentWeek = () => {
  let weekChanged = false;
  let currDay = moment().format("Dd");
  let userDay = getLocalStorage();

  if (currDay > userDay.day + 6) {
    weekChanged = true;
  }

  return weekChanged;
};

const differentDay = () => {
  let dayChanged = false;
  let currDay = moment().format("Dd");
  let userDay = getLocalStorage();

  if (currDay > userDay.day) {
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

$(document).ready(function () {

  $("#bodycard").fadeIn(2000)
   $(".card-header").fadeIn(2000);
   });
      




   $(document).ready(function () {

    $("#cardtxt").fadeIn(2000)

     });
        



weeklyQuoteGenerator();
