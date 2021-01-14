import React from "react";
import "styles/Sign.scss";

export const ErrorField = (props) => {
  const {
    input,
    type,
    placeholder,
    className,
    meta: { error, touched },
  } = props;

  const errorText = error && touched && (
    <span
      style={{
        color: "red",
        marginTop: "-10px",
        marginBottom: "15px",
        fontSize: "12px",
      }}
    >
      {error}
    </span>
  );

  return (
    <>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={className}
      />
      {errorText}
    </>
  );
};
