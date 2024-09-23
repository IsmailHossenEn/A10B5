function getDonationAmount(id) {
  const getamount = document.getElementById(id).value;
  const getamountNumber = parseFloat(getamount);
  return getamountNumber;
}
function gettotalamount(id) {
  const getamount = document.getElementById(id).innerText;
  const totalAmountNumber = parseFloat(getamount);
  return totalAmountNumber;
}
function getfixedAmount(id) {
  const fixed = document.getElementById(id).innerText;
  const fixedNumber = parseFloat(fixed);
  return fixedNumber;
}
