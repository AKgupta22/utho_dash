import { Button, Drawer, Flex, Input, Switch } from "antd";
import InputLabelWrapper from "../../../components/Input/InputLabelWrapper";
import { useEffect, useState } from "react";

const ServicesDrawerForm = ({
  openDrawer,
  editId,
  onClose,
  editData,
  onSumbit,
}) => {
  const [formState, setFormState] = useState({
    id: "",
    serviceName: "",
    status: false,
    createdDate: "",
  });

  useEffect(() => {
    if (editId) {
      setFormState(editData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  const generatePayload = (event) => {
    event.preventDefault();
    let payload = { ...formState };
    if (!editId) {
      payload.id = crypto.randomUUID();
      let todayDate = new Date().toISOString().slice(0, 10);
      payload.createdDate = todayDate;
    }
    onSumbit(payload);
  };

  return (
    <Drawer
      title={`${editId ? "Edit" : "Add"} Services`}
      onClose={onClose}
      open={openDrawer}
      width={"300px"}
    >
      <form className="drawer-form-wrapper" onSubmit={generatePayload}>
        <Flex vertical gap={12}>
          <InputLabelWrapper label={"Service Name"}>
            <Input
              placeholder="Enter service name"
              required
              type="text"
              value={formState.serviceName}
              onChange={(event) =>
                setFormState({ ...formState, serviceName: event.target.value })
              }
            />
          </InputLabelWrapper>
          <InputLabelWrapper label={"Status"}>
            <Switch
              style={{ width: "fit-content" }}
              checked={formState.status}
              onChange={(status) =>
                setFormState({ ...formState, status: status })
              }
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

export default ServicesDrawerForm;
