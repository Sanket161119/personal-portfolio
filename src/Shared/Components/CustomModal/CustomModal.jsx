/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Modal } from "antd";
import React from "react";
import "./CustomModal.scss"
import FooterButton from "../FooterButton/FooterButton";

const CustomModal = ({
  open,
  onClose,
  title,
  content,
  loading,
  children,
  showSubmitButton,
  onSubmit
}) => {
  return (
    <>
      <Modal
        className="modal"
        loading={loading}
        open={open}
        onCancel={onClose}
        footer={[
          <FooterButton key="cancel" onCancel={onClose} showSubmitButton={showSubmitButton} onSubmit={onSubmit}/>
        ]}
        title={title}
      >
        <div className="content">{content}</div>
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
