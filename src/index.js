function updateTime() {
  //Los Angeles
  let losAngelesDisplay = document.querySelector("#los-angeles");
  if (losAngelesDisplay) {
    let losAngelesDate = losAngelesDisplay.querySelector(".date");
    let losAngelesTime = losAngelesDisplay.querySelector(".time");
    let losAngelesTimeLocal = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");

    losAngelesTime.innerHTML = losAngelesTimeLocal.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //London
  let londonDisplay = document.querySelector("#london");
  if (londonDisplay) {
    let londonDate = londonDisplay.querySelector(".date");
    let londonTime = londonDisplay.querySelector(".time");
    let londonTimeLocal = moment().tz("Europe/London");

    londonDate.innerHTML = moment().format("MMMM Do YYYY");

    londonTime.innerHTML = londonTimeLocal.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Sydney
  let sydneyDisplay = document.querySelector("#sydney");
  if (sydneyDisplay) {
    let sydneyDate = sydneyDisplay.querySelector(".date");
    let sydneyTime = sydneyDisplay.querySelector(".time");
    let sydneyTimeLocal = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = moment().format("MMMM Do YYYY");

    sydneyTime.innerHTML = sydneyTimeLocal.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesDisplay = document.querySelector("#cities");
  citiesDisplay.innerHTML = `<div class="city" id="los-angeles">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div><a href="index.html">show all cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectDisplay = document.querySelector("#city");

citiesSelectDisplay.addEventListener("change", updateCity);
