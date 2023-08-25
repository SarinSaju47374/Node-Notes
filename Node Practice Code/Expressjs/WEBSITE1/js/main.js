// let dataWrng;
// let btn = document.getElementById("btn");
// let warning = document.getElementsByClassName("warning")[0];
// btn.addEventListener("click", () => {
//   warning.style.display = "none";
//   dataWrng = false;
// });


// module.exports = {dataWrng};

// let dataWrng;
// let btn = document.getElementById("btn");
// let warning = document.getElementsByClassName("warning")[0];

// btn.addEventListener("click", () => {
//   warning.style.display = "none";
//   dataWrng = false;
//   window.dispatchEvent(new CustomEvent("dataWrngChanged", { detail: dataWrng }));
// });

// window.addEventListener("dataWrngChanged", (event) => {
//   dataWrng = event.detail;
// });

// let dataWrng = false;
// let btn = document.getElementById("btn");
// let warning = document.getElementsByClassName("warning")[0];
// btn.addEventListener("click", () => {
//   warning.style.display = "none";
//   dataWrng = true;
// });
let dataWrng;
let btn = document.getElementById("btn");
let warning = document.getElementsByClassName("warning")[0];
btn.addEventListener("click", () => {
  warning.style.display = "none";
  dataWrng = false;
  fetch('/warningClosed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ warningClosed: true })
  });
});
