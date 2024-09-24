document.getElementById("toggleBtn").addEventListener("click", function () {
  window.location.href = "Blog.html";
});
document.getElementById("backmain").addEventListener("click", function () {
  window.location.href = "index.html";
});
let historyofData = [];
console.log("historyData");
function storeHistory(name, amount) {
  let tempObj = {
    name,
    amount,
    date: new Date(),
  };
  historyofData.push(tempObj);
}

const Box = historyofData.map((item) => {
  `${item.name} ${item.amount}`;
  console.log(item.amount);

  // {

  // }
});
function showHistory() {
  let historyBox = document.getElementById("historyBox");
  console.log(historyBox);
  historyofData.forEach((item) => {
    let child = document.createElement("div");
    child.innerHTML = `<div>
      <div class="flex flex-col gap-5 w-[1140px] mx-auto mt-20">
        <div class="border border-[#2828281d] p-5 rounded-md">
          <h6 class="text-[#111] text-xl font-semibold">
            ${item.amount} Taka is Donated for flood-2024 at ${item.name}, Bangladesh 
          </h6>
          <p class="text-base text-[#2f2f2fba] pt-2">
            Date: ${item.Date} GMT +0600 (Bangladesh Standard Time)
          </p>
        </div>
      </div>
    </div>;`;
    historyBox.appendChild(child);
    console.log(historyBox);
  });
}
document
  .getElementById("donate_for_noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAmountForNoakhali = getDonationAmount("donateNoakhali");
    const fixedNumber = getfixedAmount("fixedAmount");
    const gettotalAmount = gettotalamount("totalAmountOfNoakhali");
    const getModal = document.getElementById("modal");
    if (
      isNaN(getAmountForNoakhali) ||
      getAmountForNoakhali <= 0 ||
      getAmountForNoakhali > fixedNumber
    ) {
      alert("please provide valid input");
      return;
    } else {
      const fixedamountafterAddMoney = fixedNumber - getAmountForNoakhali;
      document.getElementById("fixedAmount").innerText =
        fixedamountafterAddMoney;
      const totalAmountAfterAddMoney = gettotalAmount + getAmountForNoakhali;
      document.getElementById("totalAmountOfNoakhali").innerText =
        totalAmountAfterAddMoney;
      storeHistory("donate_for_noakhali", getAmountForNoakhali);
    }
    getModal.classList.remove("hidden");
  });
let historyBtn = document.getElementById("historyBtn");
historyBtn.addEventListener("click", () => {
  document.getElementById("historyBox").classList.remove("hidden");
  document.getElementById("donationBox").classList.add("hidden");
  document.getElementById("historyBtn").classList.add("bg-green-500");
  document.getElementById("showDonation").classList.remove("bg-green-500");
  showHistory();
});
let donationBtn = document.getElementById("showDonation");
donationBtn.addEventListener("click", () => {
  document.getElementById("historyBox").classList.add("hidden");
  document.getElementById("donationBox").classList.remove("hidden");
  document.getElementById("showDonation").classList.add("bg-green-500");
  document.getElementById("historyBtn").classList.remove("bg-green-500");
});
document
  .getElementById("donateForFeni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAmountForFeni = getDonationAmount("feni");
    const fixedNumber = getfixedAmount("fixedAmount");
    const gettotalAmount = gettotalamount("totalDonationOfFeni");
    const getModal = document.getElementById("modal");

    if (
      isNaN(getAmountForFeni) ||
      getAmountForFeni <= 0 ||
      getAmountForFeni > fixedNumber
    ) {
      alert("please provide valid input");
      return;
    } else {
      const fixedamountafterAddMoney = fixedNumber - getAmountForFeni;
      document.getElementById("fixedAmount").innerText =
        fixedamountafterAddMoney;
      const totalAmountAfterAddMoney = gettotalAmount + getAmountForFeni;
      document.getElementById("totalDonationOfFeni").innerText =
        totalAmountAfterAddMoney;
      storeHistory("donate_for_feni", getAmountForFeni);
    }
    getModal.classList.remove("hidden");
  });

document
  .getElementById("addDonation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAmountForStudents = getDonationAmount("studentDonationAmount");
    const fixedNumber = getfixedAmount("fixedAmount");
    const gettotalAmount = gettotalamount("totalDonationForStudents");
    const getModal = document.getElementById("modal");

    if (
      isNaN(getAmountForStudents) ||
      getAmountForStudents <= 0 ||
      getAmountForStudents > fixedNumber
    ) {
      alert("please provide valid input");
      return;
    } else {
      const fixedamountafterAddMoney = fixedNumber - getAmountForStudents;
      document.getElementById("fixedAmount").innerText =
        fixedamountafterAddMoney;
      const totalAmountAfterAddMoney = gettotalAmount + getAmountForStudents;
      document.getElementById("totalDonationForStudents").innerText =
        totalAmountAfterAddMoney;
      storeHistory("donate_for_students", getAmountForStudents);
    }
    getModal.classList.remove("hidden");
  });
document
  .getElementById("closeModal")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("modal").classList.add("hidden");
  });
