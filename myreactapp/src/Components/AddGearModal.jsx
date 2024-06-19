const AddGearModal = ({
  isOpen,
  onClose,
  newItem,
  handleChange,
  handleAdd,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal show">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add New Gear</h2>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newItem.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={newItem.make}
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={newItem.model}
          onChange={handleChange}
        />
        <input
          type="text"
          name="spec"
          placeholder="Specification"
          value={newItem.spec}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Submit</button>
      </div>
    </div>
  );
};

export default AddGearModal;
