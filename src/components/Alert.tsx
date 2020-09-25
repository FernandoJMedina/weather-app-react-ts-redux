import React, { useEffect } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);
  return (
    <>
      <div>The idea of this is make a modal</div>
      <div>{message}</div>
    </>
  );
};

export default Alert;
