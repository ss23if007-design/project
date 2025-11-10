import React from "react";
import { useAuth } from "../store/auth.jsx";
import { Acc_sideNav } from "../component/Acc_sideNav";

export const Profile = () => {

  const { user } = useAuth();
  return <>
  <Acc_sideNav/>
  <p>Name: {user.username}</p>
  <p>Email: {user.email}</p>
  <p>Phone: {user.phone}</p>
  </>
};
