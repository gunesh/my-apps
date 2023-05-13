const auth = {
  product: "Testing",
  user: null,
  isAuthenticated() {
    return true;
  },
  signIn() {
    return this.isAuthenticated();
  },
  signOut() {
    this.user = null;
  },
};

window.auth = auth;
console.log("Greencontie");

export default auth;
