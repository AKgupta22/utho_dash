import { Button, Drawer, Flex, Input, Select } from "antd";
import InputLabelWrapper from "../../../components/Input/InputLabelWrapper";
import { useState } from "react";
import { usersRole } from "../../../utils/constant";

const UsersDrawerForm = ({ openDrawer, onClose, editData, onSumbit }) => {
  const [formState, setFormState] = useState(editData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    onSumbit(formState);
  };

  return (
    <Drawer
      title={`Edit Users`}
      onClose={onClose}
      open={openDrawer}
      width={"300px"}
    >
      <form className="drawer-form-wrapper" onSubmit={handleSumbit}>
        <Flex vertical gap={12}>
          <InputLabelWrapper label={"Name"}>
            <Input
              placeholder="Enter name"
              required
              type="text"
              value={formState?.name}
              name="name"
              onChange={handleChange}
            />
          </InputLabelWrapper>

          <InputLabelWrapper label={"Email"}>
            <Input
              placeholder="Enter Email"
              required
              type="text"
              value={formState?.email}
              name="email"
              onChange={handleChange}
            />
          </InputLabelWrapper>

          <InputLabelWrapper label={"Role"}>
            <Select
              value={formState?.role}
              onChange={(event, current) =>
                setFormState({ ...formState, role: current.value })
              }
              options={usersRole}
            />
          </InputLabelWrapper>
        </Flex>
        <Flex justify="space-between" align="center">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Flex>
      </form>
    </Drawer>
  );
};

export default UsersDrawerForm;
