import "./sign.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logged, loggedOut } from "../../actions";

function SignUp({ title, btnText, hasAccount, apiEndPoint, method, link }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);

  const handleSignFormSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://reqres.in" + apiEndPoint, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify({ email: emailValue, password: passwordValue }),
    });

    if (!res.ok) {
      setError(true);
      dispatch(loggedOut());
      return;
    }
    setError(false);

    const data = await res.json();
    dispatch(logged(data.token));
    navigate("/users/profile", { replace: true });
  };

  return (
    <section className="sign">
      <div className="main-container">
        <div className="w-full max-w-xs sign__form-wrapper">
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            {title}
          </p>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSignFormSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                minLength={6}
                required
              />
              {error && (
                <p className="text-red-500 text-xs italic">
                  Invalid email or password
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {btnText}
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to={link}
              >
                {hasAccount}
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            ©2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
