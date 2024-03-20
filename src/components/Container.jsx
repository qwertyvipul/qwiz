import React from "react";
import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div
      className="paper xs-12 sm-8 md-6 lg-4 row flex-center padding-small"
      style={{ textAlign: "center" }}
    >
      <div className="sm-12 col">
        <Outlet />
      </div>
    </div>
  );
}
