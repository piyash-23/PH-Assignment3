let heartBtn = document.querySelectorAll(".heartBtn");
let countHeart = document.querySelector(".heart");
let counIncrease = document.querySelector(".counIncrease");
let count = 0;

for (let button of heartBtn) {
  button.addEventListener("click", () => {
    console.log("heart clicked");
    count++;
    counIncrease.innerText = count;
  });
}
// for call

let coins = 100;
let decreaseCoins = document.querySelector(".decreaseCoins");
let calls = document.querySelectorAll("#call");
let alertIndex = document.querySelectorAll(".call");
let historyDiv = document.querySelector(".dynamicHistory");
for (let call of calls) {
  call.addEventListener("click", () => {
    if (coins >= 20) {
      coins -= 20;
      decreaseCoins.innerText = coins;
    } else if (coins < 20) {
      let alerBox = alert("Your are running out of coins");
      return alerBox;
    }
    let subtitle = call.closest(".card").querySelector(".subtitle").textContent;
    let closeCall = call.closest(".card").querySelector(".call").textContent;
    let cardHead = call.closest(".card").querySelector(".cardHead").textContent;
    alert(`📞 Calling ${subtitle} ${closeCall}.....`);
    let today = new Date();
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let dynamicCard = document.createElement("div");
    dynamicCard.classList.add("dynamicCard");
    dynamicCard.innerHTML = `
     <div class="callers">
                <h3 class="content">${cardHead}</h3>
                <p class="callNum">${closeCall}</p>
              </div>
              <div class="time">
                <p>${time}</p>
              </div>
    `;
    historyDiv.append(dynamicCard);
    console.log(time);
  });
}

// copy section

let copy = 0;
let copyBtn = document.querySelectorAll("#copyBtn");
let copiedContent = document.querySelector(".copied");
let callCopy = document.querySelectorAll(".call");
let copyValue;

for (let num of copyBtn) {
  num.addEventListener("click", () => {
    let closeNum = num.closest(".card").querySelector(".call").textContent;
    alert(`Your Copied Number is: ${closeNum}`);
    copy++;
    copiedContent.textContent = copy;
    navigator.clipboard.writeText(closeNum);
  });
}

// clear button

let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  historyDiv.innerHTML = "";
});
