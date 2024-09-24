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
    }
    getModal.classList.remove("hidden");
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
    }
    getModal.classList.remove("hidden");
  });
document
  .getElementById("closeModal")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("modal").classList.add("hidden");
  });
