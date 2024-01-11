const StartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-yellow-300 m-2 p-2 rounded-lg">
      <h2>Start Layout</h2>
      {children}
    </div>
  )
}

export default StartLayout
