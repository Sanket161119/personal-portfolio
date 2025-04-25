/* eslint-disable react/prop-types */
import httpLayer from "../../../Services/Httplayer.jsx";
import CustomModal from "../../../Shared/Components/CustomModal/CustomModal.jsx";
import "./ServiceCard.scss";
import {DELETE_SERVICE_DATA} from "../../../Shared/Utils/Config.jsx"

const ServiceCard = ({ isVisible, onClose, service, refreshServices, openNotification }) => {
  const removeServiceCard = async () => {
    try{
      let payload={
        service_number:service.service_number
      }
      const response = await httpLayer.deleteRequest(DELETE_SERVICE_DATA, payload)
      console.log("Delete Resp",response) ;
      onClose();
      openNotification(response.status, response.message, "Setvice deleted successfully!")
      await refreshServices();
    }catch(error){
      console.log("Error deleting service:", error)
    }
  };
  return (
    <CustomModal
      open={isVisible}
      onClose={onClose}
      title={
        <span className="modal-title">
          {service ? service.service_name : "Service Details"}
        </span>
      }
      className="service-card"
    >
      <hr />
      <br />
      <div>
        {service ? (
          <div className="service-details">
            <div className="detail-item">
              <i className="icon-description"></i>
              <p>
                <strong>Description:</strong> {service.service_description}
              </p>
            </div>
            <div className="detail-item">
              <p>
                <strong>Price:</strong> <i className="fas fa-dollar-sign"></i>{" "}
                {service.service_price}
              </p>
            </div>
            <div className="detail-item">
              <p>
                <strong>Duration:</strong> <i className="fas fa-clock"></i>{" "}
                {service.service_duration} Hours
              </p>
            </div>
            <div className="detail-item">
              <i className="icon-category"></i>
              <p>
                <strong>Category:</strong> {service.service_category}
              </p>
            </div>
          </div>
        ) : (
          <p>No service selected.</p>
        )}
      </div>
      <button onClick={removeServiceCard} className="remove-button">
        Delete
      </button>
    </CustomModal>
  );
};

export default ServiceCard;
