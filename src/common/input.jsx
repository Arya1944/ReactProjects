import React from "react";

const Input = ({ lable, name, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
