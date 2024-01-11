const RecoveryLayout = ({ children }: { children: React.ReactNode }) => {
  const permission = true // TODO: check if user has permission to see this layout

  if (!permission) {
    return null
  }

  return (
    <div className="flex-shrink-0 inline-flex items-center gap-4">
      {children}
    </div>
  )
}

export default RecoveryLayout
