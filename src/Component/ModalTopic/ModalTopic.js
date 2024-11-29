import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const TopicModal = ({ isOpen, onClose, topic }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Quiz topic Modal"
    >
      <p>
        <b>{topic}</b>
      </p>
      <button onClick={onClose}>close</button>
    </Modal>
  );
};
