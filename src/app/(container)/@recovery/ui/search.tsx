"use client"
// import { SearchOutlined } from "@ant-design/icons"
import { useEffect, useState, useTransition } from "react"
import { setFilter } from "../actions"
import { useFormState, useFormStatus } from "react-dom"

export default function Search({ placeholder }: { placeholder?: string }) {
  // const [inputValue, stInputValue] = useState("")

  const initalState = { message: "" }
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(setFilter, initalState)
  const [isPending, startTransition] = useTransition()
  // console.log(pending)
  // useEffect(() => {
  //   if (inputValue === "") {
  //     setFilter("")
  //   }
  // }, [inputValue])

  // const handleSearch = () => {
  //   setFilter(inputValue)
  // }

  const onSubmit = async (formData: FormData) => {
    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <form action={onSubmit}>
      {isPending && <div>CARGANDO</div>}
      <div>{JSON.stringify(state)}</div>
      <div className="flex items-center gap-[16px]">
        <div className="py-[8px] px-[12px] self-stretch relative rounded-md shadow-sm flex items-center gap-4">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            {/* <SearchOutlined className="h-5 w-5 text-macro" aria-hidden="true" /> */}
          </div>
          <input
            type="text"
            name="search"
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-black text-sm outline-2 placeholder:text-gray-500 focus:border-none focus-visible:ring-transparent"
            placeholder={placeholder}
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          aria-disabled={pending}
          className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-macro bg-macro-yellow hover:bg-macro-yellow-hover focus:outline-none focus:ring-2 focus:ring-macro transition-all duration-100"
        >
          {/* <SearchOutlined className="-ml-0.5 mr-2 h-4 w-4 " aria-hidden="true" /> */}
          Buscar pre-solicitud
        </button>
      </div>
    </form>
  )
}
