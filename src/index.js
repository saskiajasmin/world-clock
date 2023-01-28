function updateTime() {
  //Los Angeles
  let losAngelesDisplay = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesDisplay.querySelector(".date");
  let losAngelesTime = losAngelesDisplay.querySelector(".time");
  let losAngelesTimeLocal = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");

  losAngelesTime.innerHTML = losAngelesTimeLocal.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London
  let londonDisplay = document.querySelector("#london");
  let londonDate = londonDisplay.querySelector(".date");
  let londonTime = londonDisplay.querySelector(".time");
  let londonTimeLocal = moment().tz("Europe/London");

  londonDate.innerHTML = moment().format("MMMM Do YYYY");

  londonTime.innerHTML = londonTimeLocal.format("h:mm:ss [<small>]A[</small>]");

  //Sydney
  let sydneyDisplay = document.querySelector("#sydney");
  let sydneyDate = sydneyDisplay.querySelector(".date");
  let sydneyTime = sydneyDisplay.querySelector(".time");
  let sydneyTimeLocal = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = moment().format("MMMM Do YYYY");

  sydneyTime.innerHTML = sydneyTimeLocal.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
