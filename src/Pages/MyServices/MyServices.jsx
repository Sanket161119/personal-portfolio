/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./MyServices.scss";
import infinite from "../../assets/Images/infinite.svg";
import arrow from "../../assets/Images/arrow_icon.svg";
import ServiceCard from "./ServiceCard/ServiceCard";
import CustomModal from "../../Shared/Components/CustomModal/CustomModal.jsx";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../../reducers.jsx";
import EditModal from "./EditModal/EditModal.jsx";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  const handleServiceCard = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleAddService = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    dispatch(addService(data));
    closeAddModal();
  };
  const handleEdit = (service) => {
    setIsEditModal(true);
    setSelectedService(service);
  };
  const closeEditModal = () => {
    setIsEditModal(false);
  };
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={infinite} alt="" />
      </div>
      <div className="services-container">
        {services.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <div className="edit">
                <button
                  onClick={() => {
                    handleEdit(service);
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </div>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <div
                className="services-readomore"
                onClick={() => {
                  handleServiceCard(service);
                }}
              >
                <p className="readmore">Read More</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <button className="add-service-button" onClick={handleAddService}>
        Add
      </button>
      <ServiceCard
        isVisible={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
      <EditModal
        openEditModal={isEditModal}
        onClose={closeEditModal}
        service={selectedService}
        // showSubmitButton={true}
      />
      <CustomModal
        open={isAddModalOpen}
        onClose={closeAddModal}
        showSubmitButton={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <form>
          <div className="add-service">
            <label htmlFor="serviceNumber">Service Number <span style={{color: "red"}}>*</span></label>
            <input
              className={errors.s_no ? "service-error" : ""}
              id="serviceNumber"
              placeholder="Enter service number"
              {...register("s_no", {
                required: "Service number is required",
              })}
            />
            {errors.s_no && (
              <p className="service-error-message">{errors.s_no.message}</p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceName">Service Name <span style={{color: "red"}}>*</span></label>
            <input
              id="serviceName"
              className={errors.s_name ? "service-error" : ""}
              placeholder="Enter service name"
              {...register("s_name", { required: "Service name is required" })}
            />
            {errors.s_name && (
              <p className="service-error-message">{errors.s_name.message}</p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceDesc">Service Description <span style={{color: "red"}}>*</span></label>
            <input
              className={errors.s_desc ? "service-error" : ""}
              id="serviceDesc"
              placeholder="Enter service description"
              {...register("s_desc", {
                required: "Service description is required",
              })}
            />
            {errors.s_desc && (
              <p className="service-error-message">{errors.s_desc.message}</p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="servicePrice">Service Price <span style={{color: "red"}}>*</span></label>
            <input
              className={errors.price ? "service-error" : ""}
              id="servicePrice"
              placeholder="Enter service price"
              {...register("price", { required: "Service price is required" })}
            />
            {errors.price && (
              <p className="service-error-message">{errors.price.message}</p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceDuration">Service Duration <span style={{color: "red"}}>*</span></label>
            <input
              className={errors.duration ? "service-error" : ""}
              id="serviceDuration"
              placeholder="Enter service duration"
              type="number"
              {...register("duration", {
                required: "Service duration is required",
                valueAsNumber: true,
                validate: (value) => !isNaN(value) || "Should be a number",
              })}
            />
            {errors.duration && (
              <p className="service-error-message">{errors.duration.message}</p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceCategory">Service Category <span style={{color: "red"}}>*</span></label>
            <input
              className={errors.category ? "service-error" : ""}
              id="serviceCategory"
              placeholder="Enter service category"
              {...register("category", {
                required: "Service category is required",
              })}
            />
            {errors.category && (
              <p className="service-error-message">{errors.category.message}</p>
            )}
          </div>
        </form>
      </CustomModal>
    </div>
  );
};

export default Services;
