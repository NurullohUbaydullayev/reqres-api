const logged = (token) => {
  return {
    type: "LOGGED",
    payload: token,
  };
};
const loggedOut = () => {
  return {
    type: "LOGGED_OUT",
  };
};

export { logged, loggedOut };
