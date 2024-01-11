import { ReactNode } from "react"
import { useFormStatus } from "react-dom"

const ContainerLayout = ({
  children,
  recovery,
  start,
}: {
  children: ReactNode
  recovery: ReactNode
  start: ReactNode
}) => {
  return (
    <div className="bg-white m-2 p-2 rounded-lg items-center text-center lg:px-8 h-[calc(100vh-80px)]">
      <h2>Container</h2>
      {children}
      <div>{start}</div>
      <div>{recovery}</div>
    </div>
  )
}

export default ContainerLayout
