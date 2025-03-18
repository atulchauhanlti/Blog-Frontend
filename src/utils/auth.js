import Cookies from "js-cookie";

class Auth {
  static authenticateUser(token) {
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + 12 * 60 * 60 * 1000); 

    Cookies.set("api-token", token, {
      expires: expirationTime,
      domain: `${this.getDomainName()}`,
    });
  }

  static isUserAuthenticated() {
    return !!Cookies.get("api-token");
  }

  static deauthenticateUser() {
    Cookies.remove("api-token", { domain: this.getDomainName() });
  }

  static getToken() {
    return Cookies.get("api-token");
  }

  static getDomainName() {
    const dom = window.location.hostname;
    return dom;
  }
}

export default Auth;
