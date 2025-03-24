/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomModal from "../../../Shared/Components/CustomModal/CustomModal";
import "./EditModal.scss";
import { useDispatch } from "react-redux";
import { updateService } from "../../../reducers.jsx";
import { useEffect } from "react";

const EditModal = ({ openEditModal, onClose, service }) => {
  const [formData, setFormData] = useState({
    s_name: "",
    s_desc: "",
    price: "",
    duration: "",
    category: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (service) {
      setFormData({
        s_name: service.s_name || "",
        s_desc: service.s_desc || "",
        price: service.price || "",
        duration: service.duration || "",
        category: service.category || "",
      });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const updatedService = {
      ...formData,
      s_no: service.s_no, // Include the service number
    };
    dispatch(updateService(updatedService));
    onClose();
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
              type="text"
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
