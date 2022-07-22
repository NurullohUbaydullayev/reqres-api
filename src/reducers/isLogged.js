const loggedReducer = (state = "", action) => {
  switch (action.type) {
    case "LOGGED":
      localStorage.setItem("token", JSON.stringify(action.payload));
      return action.payload;
    case "LOGGED_OUT":
      localStorage.removeItem("token");
      return false;
    default:
      return localStorage.getItem("token");
  }
};

export default loggedReducer;
