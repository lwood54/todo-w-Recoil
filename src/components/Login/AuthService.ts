class AuthService {
  registerSuccessfulLogin(username: string) {
    sessionStorage.setItem("username", username);
  }
  logout() {
    console.log('loggingout from logout()');
    sessionStorage.removeItem("username");
  }

  isAuthenticated() {
    const user = sessionStorage.getItem("username");
    console.log('isAuthenticated: ', user);
    if (user === "Logan") return true;
    return false;
  }
}

export default new AuthService();