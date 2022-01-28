import React from "react";
import "Utils/Button/scss/DeleteButton.scss";

export default function DeleteButton({ onClick }) {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      삭제
    </button>
  );
}
