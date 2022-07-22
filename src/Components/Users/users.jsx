// Styles
import "./users.scss";

// React hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import { NextBtn, PrevBtn } from "../Buttons/Prev-Next";

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://reqres.in/api/users?page=" + page);
      const data = await res.json();
      setUsers(data.data);
      setTotalPage(data.total_pages);
    };

    getUsers();
  }, [page]);
  return (
    <section className="users">
      <div className="main-container">
        <h2 className="users__heading">All Users</h2>
        <ul className="users__list">
          {users.length &&
            users.map((user) => {
              return (
                <li className="users__list-item" key={user.id}>
                  <Link to={`/users/${user.id}`}>
                    <div className="users__list-item-content">
                      <p className="users__list-item-name">
                        {user.first_name} {user.last_name}
                      </p>
                      <p className="users__list-item-email">{user.email}</p>
                    </div>
                    <img
                      className="users__list-item-avatar"
                      key={user.avatar}
                      src={user.avatar}
                      alt="User avatar"
                    />
                  </Link>
                </li>
              );
            })}
        </ul>

        <div className="buttons">
          <PrevBtn page={page} setPage={setPage} totalPage={totalPage} />
          <NextBtn page={page} setPage={setPage} totalPage={totalPage} />
        </div>
      </div>
    </section>
  );
}
