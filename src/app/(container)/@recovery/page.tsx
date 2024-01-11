import { useFormStatus } from "react-dom"
import Search from "./ui/search"
import Table from "./ui/table"
import Loading from "./ui/loading"

const RecoveryPage = () => {
  return (
    <>
      <Loading />
      <div className="flex flex-col items-center">
        <Search placeholder="Nombre, CURP o teléfono" />
        <Table />
      </div>
    </>
  )
}
export default RecoveryPage
