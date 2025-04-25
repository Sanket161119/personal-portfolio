/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./MyServices.scss";
import infinite from "../../assets/Images/infinite.svg";
import arrow from "../../assets/Images/arrow_icon.svg";
import ServiceCard from "./ServiceCard/ServiceCard";
import CustomModal from "../../Shared/Components/CustomModal/CustomModal.jsx";
import { useForm } from "react-hook-form";
import EditModal from "./EditModal/EditModal.jsx";
import httpLayer from "../../Services/Httplayer.jsx";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { addLoader } from "../../reducers.jsx"; // Import addLoader action
import Loader from "../../Shared/Components/Loader/Loader.jsx";
import { INSERT_SERVICE_DATA } from "../../Shared/Utils/Config.jsx";
import { FETCH_SERVICE_DATA } from "../../Shared/Utils/Config.jsx";
import Notification from "../../Shared/Components/Notification/Notification.jsx";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [services, setServices] = useState([]);
  const isLoading = useSelector((state) => state.services.loader); // Access loader from Redux store
  const dispatch = useDispatch(); 
  const { openNotification, contextHolder } = Notification();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch services from the database on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  // Function to fetch services from the API
  const fetchServices = async () => {
    try {
      const response = await httpLayer.getRequest(FETCH_SERVICE_DATA);
      console.log("Response", response)
      if (response) {
        setServices(response);
      }
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

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

  const onSubmit = async (data) => {
    dispatch(addLoader(true));
    try {
      const payload = {
        service_number: parseInt(data.service_number, 10),
        service_name: data.service_name,
        service_description: data.service_description,
        service_price: parseFloat(data.service_price),
        service_duration: data.service_duration,
        service_category: data.service_category,
      };
      const response = await httpLayer.postRequest(
        INSERT_SERVICE_DATA,
        payload
      );
      fetchServices();
      openNotification(response.status, response.message, 'Service added successfully!')
      return response;
    } catch (error) {
      console.error("Failed to add service:", error);
    } finally {
      dispatch(addLoader(false));
      closeAddModal();
    }
  };

  const handleEdit = (service) => {
    setIsEditModal(true);
    setSelectedService(service);
  };

  const closeEditModal = () => {
    setIsEditModal(false);
    fetchServices();
  };

  return (
    <div id="services" className="services">
      {contextHolder}
      <div className="services-title">
        <h1>My Services</h1>
        <img src={infinite} alt="" />
      </div>
      <div className="services-container">
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          services.map((service, index) => {
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
                <h3>{service.service_number}</h3>
                <h2>{service.service_name}</h2>
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
          })
        )}
      </div>
      <button className="add-service-button" onClick={handleAddService}>
        Add
      </button>
      <ServiceCard
        isVisible={isModalOpen}
        onClose={closeModal}
        service={selectedService}
        refreshServices={fetchServices}
        openNotification = {openNotification}
      />
      <EditModal
        openEditModal={isEditModal}
        onClose={closeEditModal}
        service={selectedService}
        openNotification={openNotification}
      />
      <CustomModal
        open={isAddModalOpen}
        onClose={closeAddModal}
        showSubmitButton={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <form>
          <div className="add-service">
            <label htmlFor="serviceNumber">
              Service Number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={errors.service_number ? "service-error" : ""}
              id="serviceNumber"
              placeholder="Enter service number"
              {...register("service_number", {
                required: "Service number is required",
              })}
            />
            {errors.service_number && (
              <p className="service-error-message">
                {errors.service_number.message}
              </p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceName">
              Service Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="serviceName"
              className={errors.service_name ? "service-error" : ""}
              placeholder="Enter service name"
              {...register("service_name", {
                required: "Service name is required",
              })}
            />
            {errors.service_name && (
              <p className="service-error-message">
                {errors.service_name.message}
              </p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceDesc">
              Service Description <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={errors.service_description ? "service-error" : ""}
              id="serviceDesc"
              placeholder="Enter service description"
              {...register("service_description", {
                required: "Service description is required",
              })}
            />
            {errors.service_description && (
              <p className="service-error-message">
                {errors.service_description.message}
              </p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="servicePrice">
              Service Price <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={errors.service_price ? "service-error" : ""}
              id="servicePrice"
              type="number"
              placeholder="Enter service price"
              {...register("service_price", {
                required: "Service price is required",
              })}
            />
            {errors.service_price && (
              <p className="service-error-message">
                {errors.service_price.message}
              </p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceDuration">
              Service Duration <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={errors.service_duration ? "service-error" : ""}
              id="serviceDuration"
              placeholder="Enter service duration"
              type="number"
              {...register("service_duration", {
                required: "Service duration is required",
                valueAsNumber: true,
                validate: (value) => !isNaN(value) || "Should be a number",
              })}
            />
            {errors.service_duration && (
              <p className="service-error-message">
                {errors.service_duration.message}
              </p>
            )}
          </div>

          <div className="add-service">
            <label htmlFor="serviceCategory">
              Service Category <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={errors.service_category ? "service-error" : ""}
              id="serviceCategory"
              placeholder="Enter service category"
              {...register("service_category", {
                required: "Service category is required",
              })}
            />
            {errors.service_category && (
              <p className="service-error-message">
                {errors.service_category.message}
              </p>
            )}
          </div>
        </form>
      </CustomModal>
    </div>
  );
};

export default Services;
