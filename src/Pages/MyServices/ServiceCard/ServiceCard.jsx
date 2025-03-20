/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
// import Services_Data from "../../../assets/services_data.js";
import CustomModal from "../../../Shared/Components/CustomModal/CustomModal.jsx";
import "./ServiceCard.scss";
import { removeService } from "../../../reducers.jsx";

const ServiceCard = ({ isVisible, onClose, service }) => {
  const dispatchCard = useDispatch();
  // const ServiceCard = useSelector(state => state.se)
  const removeServiceCard = () => {
    // Services_Data.pop(service);
    dispatchCard(removeService(service))
    onClose();
  };
  return (
    <CustomModal
      open={isVisible}
      onClose={onClose}
      title={<span className="modal-title">{service ? service.s_name : "Service Details"}</span>}
      className="service-card"
      >
      <hr /><br />
      <div>
        {service ? (
          <div className="service-details">
            <div className="detail-item">
              <i className="icon-description"></i>
              <p>
                <strong>Description:</strong> {service.s_desc}
              </p>
            </div>
            <div className="detail-item">
              <p>
                <strong>Price:</strong> <i className="fas fa-dollar-sign"></i>{" "}
                {service.price}
              </p>
            </div>
            <div className="detail-item">
              <p>
                <strong>Duration:</strong> <i className="fas fa-clock"></i>{" "}
                {service.duration} Hours
              </p>
            </div>
            <div className="detail-item">
              <i className="icon-category"></i>
              <p>
                <strong>Category:</strong> {service.category}
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
