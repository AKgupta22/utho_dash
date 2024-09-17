import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex, Switch, Table } from "antd";
const { Column } = Table;

const ServicesDataGrid = ({ data, handleOpenModal, handleOpenDrawer }) => {
  return (
    <Table dataSource={data} size="small">
      <Column title="Name" dataIndex="serviceName" key="id" />
      <Column
        title="Status"
        dataIndex="status"
        key="id"
        render={(_, row) => <Switch disabled checked={row.status} />}
      />
      <Column title="Created Date" dataIndex="createdDate" key="id" />
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
export default ServicesDataGrid;
