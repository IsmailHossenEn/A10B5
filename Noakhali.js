document
  .getElementById("donate_for_noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAmountForNoakhali = getDonationAmount("donateNoakhali");
    const fixedNumber = getfixedAmount("fixedAmount");
    const gettotalAmount = gettotalamount("totalAmountOfNoakhali");

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
  });
document
  .getElementById("donateForFeni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAmountForFeni = getDonationAmount("feni");
    const fixedNumber = getfixedAmount("fixedAmount");
    const gettotalAmount = gettotalamount("totalDonationOfFeni");

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
  });

document
  .getElementById("addDonation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAmountForStudents = getDonationAmount("studentDonationAmount");
    const fixedNumber = getfixedAmount("fixedAmount");
    const gettotalAmount = gettotalamount("totalDonationForStudents");

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
  });
// totalDonationForStudents  b: addDonation  in: studentDonationAmount
