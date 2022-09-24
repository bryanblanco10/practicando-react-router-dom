import { useParams } from "react-router-dom"
export const UserDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>User detail {id}</div>
  )
}