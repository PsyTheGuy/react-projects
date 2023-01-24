import React, { useEffect } from "react";

const Alert = ({ message, type, showAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
