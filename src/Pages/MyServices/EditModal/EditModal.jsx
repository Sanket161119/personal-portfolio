/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CustomModal from "../../../Shared/Components/CustomModal/CustomModal";
import "./EditModal.scss";
import httpLayer from "../../../Services/Httplayer";
import {UPDATE_SERVICE_DATA} from "../../../Shared/Utils/Config.jsx"
const EditModal = ({ openEditModal, onClose, service, openNotification }) => {
  const [formData, setFormData] = useState({
    s_name: "",
    s_desc: "",
    price: "",
    duration: "",
    category: "",
  });

  useEffect(() => {
    if (service) {
      setFormData({
        s_name: service.service_name || "",
        s_desc: service.service_description || "",
        price: service.service_price || "",
        duration: service.service_duration || "",
        category: service.service_category || "",
      });
    } 
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const updatedService = {
      service_number:service.service_number,
      service_name: formData.s_name,
      service_description: formData.s_desc,
      service_price: parseFloat(formData.price),
      service_duration: formData.duration,
      service_category: formData.category,
    };
    try {
      const response = await httpLayer.putRequest(UPDATE_SERVICE_DATA, updatedService);
      openNotification(response.status, response.message, "Service updated successfully!")
      return response;
    } catch (error) {
      console.error("Error updating service:", error);
    }
    finally{
      onClose();
    }
  };

  return (
    <CustomModal
      open={openEditModal}
      onClose={onClose}
      showSubmitButton={true}
      onSubmit={handleSubmit}
    >
      <div>
        <div className="edit-container">
        <div className="edit-form">
            <label htmlFor="name">Name</label>
            <input
              name="s_name"
              value={formData.s_name}
              onChange={handleChange}
            />
          </div>
          <div className="edit-form">
            <label htmlFor="desc">Description</label>
            <textarea
              name="s_desc"
              rows={3}
              style={{ width: "94%", height: "50%" }}
              value={formData.s_desc}
              onChange={handleChange}
            />
          </div>
          <div className="edit-form">
            <label htmlFor="price">Price</label>
            <input
              name="price"
              type="text"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="edit-form">
            <label htmlFor="duration">Duration</label>
            <input
              name="duration"
              type="time"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div className="edit-form">
            <label htmlFor="category">Category</label>
            <input
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default EditModal;
