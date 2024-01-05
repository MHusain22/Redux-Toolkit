import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/Slices/UserSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  }
  console.log(data);
  return (
    <div>
      {data.map((user, id) => (
        <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default DisplayUsers;
