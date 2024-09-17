import { Modal, Typography } from "antd";

const DeleteConfirmationModal = ({ openModal, handleOk, onClose }) => {
  return (
    <Modal title="Alert" open={openModal} onOk={handleOk} onCancel={onClose}>
      <Typography.Title level={5}>Are you sure want to delete this item?</Typography.Title>
    </Modal>
  );
};
export default DeleteConfirmationModal;
