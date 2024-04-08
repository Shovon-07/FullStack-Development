import Toastify from "toastify-js";

export const successTost = (text) => {
  Toastify({
    text: text,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};
