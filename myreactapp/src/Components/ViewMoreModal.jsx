import "./ViewMoreModal.css";

const ViewMoreModal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="modal show">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>
          {item.make} - {item.model}
        </h2>
        <img
          src={item.image}
          alt={item.description}
          className="view-more-image"
        />
        <p>
          <b>Make:</b> {item.make}
        </p>
        <p>
          <b>Model:</b> {item.model}
        </p>
        <p>
          <b>Specification:</b> {item.spec}
        </p>
        <p>
          <b>Description:</b> {item.description}
        </p>
      </div>
    </div>
  );
};

export default ViewMoreModal;
