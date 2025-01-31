// import ApiConfig from "./ApiConfig";
export default async function Logout(headers) {
  deleteAllCookies();
  localStorage.clear();
  sessionStorage.clear();
  window.location.replace("/");

  // const payload = null;
  // try {
  //   await ApiConfig.post("/logout", payload, { headers }).then((response) => {
  //     deleteAllCookies();
  //     localStorage.clear();
  //     sessionStorage.clear();
  //     window.location.replace("/");
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
}

function deleteAllCookies() {
  // Get all cookies
  const cookies = document.cookie.split(";");

  // Loop through each cookie and delete it
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];

    // Get the cookie name by trimming leading spaces
    const cookieName = cookie.split("=")[0].trim();

    // Set the cookie with an expiration date in the past
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
}
