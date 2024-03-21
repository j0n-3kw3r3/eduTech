let localStorage = window.localStorage;

export function storeBusinessAuthInfo(authInfo: any) {
  localStorage.setItem("businessAuthInfo", JSON.stringify(authInfo));
}

export function getBusinessAuthInfo() {
  let authInfo: any = localStorage.getItem("businessAuthInfo");
  if (authInfo) {
    try {
      authInfo = JSON.parse(authInfo);
    } catch (e) {
      authInfo = {};
    }
  }

  return authInfo;
}

export function clearBusinessAuthInfo() {
  localStorage.removeItem("businessAuthInfo");
}
