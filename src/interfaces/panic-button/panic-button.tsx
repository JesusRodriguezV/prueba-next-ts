export interface IPanicButtonProps {
  setAddBlackList: React.Dispatch<React.SetStateAction<boolean>>
  ShowModalConfirm: () => void
}

export interface IPanicModalProps {
  isModalConfirmOpen: boolean
  handleOkConfirm: () => void
  handleCancelConfirm: () => void
}

export interface IPanicButtonContainerProps {
  setAddBlackList: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IResultServiceBlackList {
  data: AddToBlackList
}

export interface AddToBlackList {
  addToBlackList: GetBlackList
}

export interface GetBlackList {
  message: string
  status: string
}

export interface DataResponse {
  validateBlackList: dataBlackList
}

export interface dataBlackList {
  message: string
  status: boolean
}
