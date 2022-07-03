const getNumber = (evt) => {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
};

const bill = document.querySelector(".bill-amt");
let para = [];

bill.addEventListener("change", (e) => {
  const billAmt = e.target.value;
  console.log(billAmt);
  para.push(billAmt);
});

const tips = document.querySelectorAll(".tip-amount");
const arr = [...tips];

arr.map((tip) => {
  tip.addEventListener("click", (e) => {
    const tipPercent = e.target.value;
    para.push(tipPercent);
  });
});

const people = document.querySelector(".people-no");

people.addEventListener("change", (e) => {
  const peopleNo = e.target.value;
  console.log(peopleNo);
  para.push(peopleNo);
  calculate(...para);
});
console.log(para);

let tipAmt = document.querySelector(".Tip-person");
let totalAmt = document.querySelector(".Tip-total");

const calculate = (...para) => {
  let tipAmtPerPerson = (para[0] * (para[1] / 100)) / para[2];
  let totalPerPerson = para[0] / para[2] + tipAmtPerPerson;
  console.log(tipAmtPerPerson, totalPerPerson);

  tipAmt.innerHTML = tipAmtPerPerson;
  totalAmt.innerHTML = totalPerPerson;
};

//| Reset

const reset = document.querySelector(".Reset");
reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  tipAmt.innerHTML = "0";
  totalAmt.innerHTML = "0";
});

// var BillAmt = document.getElementsByClassName("tip-amt").value;
// var TipPercent = document.getElementById("bill-amt").value;
// var people= document.getElementById("bill-amt").value;
// console.log(BillAmt)
