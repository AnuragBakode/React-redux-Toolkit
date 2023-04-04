import React, { useEffect } from "react";
import { fetchUsers } from "./UserSlice";
import { useDispatch, useSelector } from "react-redux";

export const User = () => {
 const user =    useSelector((state) => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of users</h2>
      
      {user.loading && <div>Loading </div>}
      {!user.loading && user.error ? <div>Error - {user.error}</div> :null}
      {!user.loading && user.users.length ? (
        <ul>
            {
                user.users.map(u => <li key = {u.id}>{u.name}</li>)
            }
        </ul>
      ) : null}
    </div>
  );
};
