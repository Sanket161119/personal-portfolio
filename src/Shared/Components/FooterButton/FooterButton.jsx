/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "antd";

const FooterButton = ({ onCancel, showSubmitButton, onSubmit }) => {
  return (
    <>
      <Button type="primary" key="button" onClick={onCancel} danger>
        Cancel
      </Button>
      {showSubmitButton && (
        <Button
          key="submit"
          type="primary"
          onClick={onSubmit}
        >
          Submit
        </Button>
      )}
    </>
  );
};

export default FooterButton;
