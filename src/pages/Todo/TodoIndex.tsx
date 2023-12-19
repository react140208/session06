import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";
import MetaHeader from "../../components/MetaHeader";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
export default function TodoIndex() {
  const { data, loading, setPage, setPageSize, total } =
    useFetchData<Todo>("todo");

  const columns: ColumnsType<Todo> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "User Id",
      dataIndex: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Cmpleted",
      dataIndex: "completed",
      render: (completed: boolean) => (
        <input type="checkbox" readOnly checked={completed} alt="" />
      ),
    },
  ];

  return (
    <>
      <MetaHeader title="Todo List"></MetaHeader>
      {data && (
        <>
          <Pagination
            defaultCurrent={1}
            total={total}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
          <Table
            rowKey={"id"}
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={false}
          />
        </>
      )}
    </>
  );
}
