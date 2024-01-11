import { FormatFiles } from "@interfaces/common"
import { ILoadFileToBase64 } from "@interfaces/common"

const loadFileToBase64 = async (
  type: FormatFiles
): Promise<ILoadFileToBase64> => {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = type
    input.id = "input_file"
    input.style.display = "none"

    input.onchange = () => {
      const { files } = input
      const file = files?.length && files[0]
      if (!file) return reject("error al cargar archivo")

      const { name, size } = file
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = e => {
        document.getElementById("input_file")?.remove()
        const base64 = e.target?.result as string

        if (
          type.split(",").filter((item: string) => {
            return base64.indexOf(item.trim()) > -1
          }).length < 1
        )
          return reject("error al cargar archivo")

        return resolve({ base64, name, size })
      }
    }
    document.body.appendChild(input)
    input.click()
  })
}
export { loadFileToBase64 }
