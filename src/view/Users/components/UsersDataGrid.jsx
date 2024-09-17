import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex, Table } from "antd";
const { Column } = Table;

const UsersDataGrid = ({ data, handleOpenModal, handleOpenDrawer }) => {
  return (
    <Table dataSource={data} size="small">
      <Column title="Name" dataIndex="name" key="id" />
      <Column title="Email" dataIndex="email" key="id" />
      <Column title="role" dataIndex="role" key="id" />
      <Column
        title="Action"
        key="action"
        render={(_, row) => (
          <Flex gap={"8px"} align="center">
            <Button
              type="primary"
              danger
              onClick={() => handleOpenModal(row.id)}
            >
              <DeleteOutlined />
            </Button>
            <Button type="primary" onClick={() => handleOpenDrawer(row.id)}>
              <EditOutlined />
            </Button>
          </Flex>
        )}
      />
    </Table>
  );
};
export default UsersDataGrid;
