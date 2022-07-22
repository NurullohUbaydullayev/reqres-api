import { useState } from "react";

function EditForm({ id }) {
  const [nameValue, setNameValue] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSignFormSubmit(e) {
    e.preventDefault();
    const res = await fetch("https://reqres.in/api/users/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ name: nameValue, job: jobValue }),
    });

    if (res.ok) {
      setSuccess(true);
    }

    const data = await res.json();
  }

  return (
    <>
      <div className="m-auto w-full max-w-xs sign__form-wrapper">
        <p className="text-center text-gray-500 text-3xl">Edit</p>

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSignFormSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="job"
            >
              Job
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="job"
              type="text"
              placeholder="Job"
              value={jobValue}
              onChange={(e) => setJobValue(e.target.value)}
              minLength={3}
              required
            />
            {error && (
              <p className="text-red-500 text-xs italic">
                Invalid email or password
              </p>
            )}

            {success && (
              <p className="text-blue-500 text-xls italic">
                Successfully changed
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
