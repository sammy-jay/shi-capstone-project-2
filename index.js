const inputElems = document.querySelectorAll("input");
const btn = document.querySelector(".btn");
const toggler = document.querySelector(".fa-bars");
const navElem = document.querySelector(".nav-elem");
let formInput = {};

toggler.addEventListener("click", () => {
  console.log("clicked");
  navElem.classList.toggle("show-nav");
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  inputElems.forEach((elem) => {
    formInput[elem.name] = elem.value;
  });
  const validateResult = validate(formInput);
  if (validateResult) {
    alert("User Created");
    inputElems.forEach((elem) => {
      elem.value = "";
    });
    formInput = {};
  }
});

const validate = (formData) => {
  console.log(formData);
  if (
    formData.name !== "" &&
    formData.email !== "" &&
    formData.password !== "" &&
    formData.cpassword !== "" &&
    formData.phoneNo !== ""
  ) {
    const email = [...formData.email];
    if (email.includes("@") && email.includes(".")) {
      if (formData.password === formData.cpassword) {
        return true;
      } else {
        alert("Passwords do not match");
        return;
      }
    } else {
      alert("Invalid Email");
      return;
    }
  }
  alert("Field(s) can't be empty");
  return false;
};
