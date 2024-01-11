// Navbar.tsx
import { getServerSession } from "next-auth"
import React, { FC, ForwardRefExoticComponent, ReactNode } from "react"
import macroLogo from "@assets/icons/macro-logo.svg"
import Image from "next/image"
import Link from "next/link"
// import { DesktopOutlined, ShopOutlined } from "@ant-design/icons"
// import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon"

const StoreInfo = ({
  // icon: Icon,
  item,
  value,
}: {
  // icon: ReactNode
  item: string
  value: string
}) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-1">
      {/* <Icon className="text-macro-blue" /> */}
      <text className="text-macro-blue">{item}:</text>
    </div>
    <text className="text-secondary">{value}</text>
  </div>
)

const ActionsHeaders = async () => {
  const session = await getServerSession()
  return (
    <div className="flex items-center gap-4">
      {/* <StoreInfo icon={ShopOutlined} item="Tienda" value="0001" /> */}
      {/* <StoreInfo icon={DesktopOutlined} item="Tienda" value="0001" /> */}
    </div>
  )
}

const Navbar: React.FC = async () => {
  return (
    <nav className="bg-white py-3 px-4 flex justify-between items-center">
      <Link href="#" className="text-lg font-bold">
        <Image src={macroLogo} alt="logo" width={160} height={35.5} />
        {/* <svg  /> */}
      </Link>
      <ActionsHeaders />
    </nav>
  )
}

export default Navbar
