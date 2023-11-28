import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";
import MetaHeader from "../../components/MetaHeader";
/*
    Ajax: 
        - $.ajax -> axios
        - fetch
        - xhr

    CSS:
       bootstrap
    
    Ant Design
*/
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export default function PostIndex() {
  // useEffect(() => {}, [])
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.ir/posts")
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  //Hook, rect component va custom hook

  const { data, loading, setPage, setPageSize, total } =
    useFetchData<Post>("posts");
  // const [data, setData] = useState<Post[] | null>(null);
  // const [total, setTotal] = useState(1);
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(10);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://jsonplaceholder.ir/posts?_limit=${pageSize}&_page=${page}`)
  //     .then((resp) => {
  //       const x = resp.headers.get("X-Total-Count") || "0";
  //       setTotal(+x);
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setLoading(false);
  //     });
  //   return () => {
  //     console.log("goodby! 👋");
  //   };
  // }, [page, pageSize]);

  // const pages = [];
  // for (let i = 1; i <= total / 10; i++) {
  //   pages.push(
  //     <li className={page === i ? "page-item active" : "page-item"}>
  //       <a className="page-link" href="#" onClick={() => setPage(i)}>
  //         {i}
  //       </a>
  //     </li>
  //   );
  // }

  const columns: ColumnsType<Post> = [
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
      title: "Body",
      dataIndex: "body",
    },
  ];

  return (
    <>
      <MetaHeader title="Post List"></MetaHeader>
      {!data && <h1>Loading...</h1>}
      {data && (
        <>
          <ul className="pagination">
            {/* <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(1)}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(2)}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(3)}>
                3
              </a>
            </li> */}
            {/* {pages} */}
            {/* {new Array(total / 10).fill(0).map((x, i) => (
              <li className={page === i ? "page-item active" : "page-item"}>
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </a>
              </li>
            ))} */}
          </ul>

          {/* <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id}>
                  <th scope="row">{d.id}</th>
                  <td>{d.userId}</td>
                  <td>{d.title}</td>
                  <td>{d.body}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
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
