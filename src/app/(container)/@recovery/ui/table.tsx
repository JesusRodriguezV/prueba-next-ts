import { flowStatus } from "@src/constants/common"
import { UserJourney } from "@src/interfaces/front/validateStart"
import { getJourneys } from "../actions"

const Table = async () => {
  const data = await getJourneys()

  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Cliente
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    CURP
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Pre-solicitud
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Solicitud
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Teléfono
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Estado
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data &&
                  data?.map(
                    ({
                      curp,
                      idJourney,
                      phone,
                      presolicitud,
                      solicitud,
                      username,
                      estatus,
                    }) => (
                      <tr
                        key={idJourney}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                      >
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">{username}</p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">{curp}</p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">{presolicitud}</p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">{solicitud ?? "-"}</p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">{phone}</p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">
                            {flowStatus[Number(estatus)]}
                          </p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                          <p className="text-black">
                            <button className="bg-blue-500 text-white transition-colors duration-200 hover:bg-blue-700 rounded-xl p-2">
                              Continuar Pre-solicitud
                            </button>
                          </p>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
