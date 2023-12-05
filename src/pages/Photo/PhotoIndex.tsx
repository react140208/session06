import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";
import MetaHeader from "../../components/MetaHeader";
import { Link } from "react-router-dom";

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export default function PostIndex() {
  const { data, loading, setPage, setPageSize, total } =
    useFetchData<Photo>("Advie");

  const columns: ColumnsType<Photo> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Tozih",
      dataIndex: "Tozih",
    },
    {
      title: "khavas",
      dataIndex: "khavas",
      render: (khavas: string, rec) => (
        <Link to={"/photo/" + rec.id}>{khavas}</Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "thumbnailUrl",
      render: (thumbnailUrl: string) => <img src={thumbnailUrl} alt="" />,
    },
  ];

  return (
    <>
      <MetaHeader title="Photo List"></MetaHeader>
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
