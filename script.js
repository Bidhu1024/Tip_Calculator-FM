const getNumber = (evt) => {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
};

// const bill = document.querySelector(".bill-amt");
// let para = [];

// bill.addEventListener("change", (e) => {
//   const billAmt = e.target.value;
//   console.log(billAmt);
//   para.push(billAmt);
// });

// const tips = document.querySelectorAll(".tip-amount");
// const arr = [...tips];

// arr.map((tip) => {
//   tip.addEventListener("click", (e) => {
//     const tipPercent = e.target.value;
//     para.push(tipPercent);
//   });
// });

// const people = document.querySelector(".people-no");

// people.addEventListener("change", (e) => {
//   const peopleNo = e.target.value;
//   console.log(peopleNo);
//   para.push(peopleNo);
// });
// console.log(para);

// let paraObj = Object.assign(para);

// const calculate = (billAmt, tipPercent, peopleNo) => {
//   //   let tipAmtPerPerson = (billAmt * (tipPercent / 100)) / peopleNo;
//   let tipAmtPerPerson = eval(billAmt * tipPercent);
//   console.log(tipAmtPerPerson);
// };

var BillAmt = document.getElementsByClassName("tip-amt").value;
var TipPercent = document.getElementById("bill-amt").value;
var people= document.getElementById("bill-amt").value;
console.log(BillAmt)