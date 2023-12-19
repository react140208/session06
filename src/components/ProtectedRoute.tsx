import React, { ReactElement } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactElement;
}
export default function ProtectedRoute({ children }: Props) {
  const token = useAppSelector((x) => x.auth.token);
  if (token) return children;
  return <Navigate to="/auth/login"></Navigate>;
}
