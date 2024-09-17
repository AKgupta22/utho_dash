import { Flex, Typography } from "antd";
import { useState } from "react";
import { initialusersData } from "../../utils/constant";
import DeleteConfirmationModal from "../../components/Modal/DeleteConfirmationModal";
import UsersDataGrid from "./components/UsersDataGrid";
import UsersDrawerForm from "./components/UsersDrawerForm";

const Users = () => {
  const [usersData, setUsersData] = useState(initialusersData);
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
    setEditId(id);
    const newUsers = [...usersData];
    let editRequestData = newUsers.find((user) => user.id === id);
    setEditData(editRequestData);
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
    let newUsersData = [...usersData];
    newUsersData = newUsersData.filter((row) => row.id !== deleteId);
    setUsersData(newUsersData);
    handleClose();
  };

  const handleEditUsers = (editData) => {
    let newUsersData = null;
    newUsersData = [...usersData];
    const editedIndex = newUsersData.findIndex((user) => user.id === editId);
    if (editedIndex !== -1) newUsersData[editedIndex] = editData;
    setUsersData(newUsersData);
    handleCloseDrawer();
  };

  return (
    <>
      <div>
        <Flex align="center" justify="space-between">
          <Typography.Title level={4}>Users</Typography.Title>
        </Flex>
        <div className="table-overflow">
          <UsersDataGrid
            data={usersData}
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
        <UsersDrawerForm
          openDrawer={openDrawer}
          onClose={handleCloseDrawer}
          editData={editData}
          onSumbit={handleEditUsers}
        />
      ) : null}
    </>
  );
};

export default Users;
