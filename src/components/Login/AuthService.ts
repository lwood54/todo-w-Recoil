class AuthService {
  registerSuccessfulLogin(username: string) {
    sessionStorage.setItem("username", username);
  }
  logout() {
    sessionStorage.removeItem("username");
  }

  isAuthenticated() {
    const user = sessionStorage.getItem("username");
    if (user === "Logan") return true;
    return false;
  }
}

export default new AuthService();