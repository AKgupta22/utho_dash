import { Button, Flex, Typography } from "antd";
import { useState } from "react";
import { initialServiceData } from "../../utils/constant";
import ServicesDataGrid from "./components/ServicesDataGrid";
import DeleteConfirmationModal from "../../components/Modal/DeleteConfirmationModal";
import ServicesDrawerForm from "./components/ServicesDrawerForm";

const Services = () => {
  const [servicesData, setServicesData] = useState(initialServiceData);
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const [editData, setEditData] = useState({});

  const handleOpenModal = (id) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  const handleOpenDrawer = (id) => {
    if (id) {
      setEditId(id);
      const newServices = [...servicesData];
      let editRequestData = newServices.find((service) => service.id === id);
      setEditData(editRequestData);
    }
    setOpenDrawer(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setDeleteId("");
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    setEditId("");
    setEditData({});
  };

  const handleDeleteRow = () => {
    let newServicesData = [...servicesData];
    newServicesData = newServicesData.filter((row) => row.id !== deleteId);
    setServicesData(newServicesData);
    handleClose();
  };

  const handleAddEditServices = (editData) => {
    let newServicesData = null;
    if (editId) {
      newServicesData = [...servicesData];
      const editedIndex = newServicesData.findIndex(
        (service) => service.id === editId
      );
      if (editedIndex !== -1) newServicesData[editedIndex] = editData;
    } else {
      newServicesData = [editData, ...servicesData];
    }
    setServicesData(newServicesData);
    handleCloseDrawer();
  };

  return (
    <>
      <div>
        <Flex align="center" justify="space-between">
          <Typography.Title level={4}>Services</Typography.Title>
          <Button type="primary" onClick={()=>handleOpenDrawer(null)}>Add Service</Button>
        </Flex>
        <div className="table-overflow">
          <ServicesDataGrid
            data={servicesData}
            handleOpenModal={handleOpenModal}
            handleOpenDrawer={handleOpenDrawer}
          />
        </div>
      </div>
      {openModal ? (
        <DeleteConfirmationModal
          openModal={openModal}
          onClose={handleClose}
          handleOk={handleDeleteRow}
        />
      ) : null}
      {openDrawer ? (
        <ServicesDrawerForm
          openDrawer={openDrawer}
          onClose={handleCloseDrawer}
          editId={editId}
          editData={editData}
          onSumbit={handleAddEditServices}
        />
      ) : null}
    </>
  );
};

export default Services;
