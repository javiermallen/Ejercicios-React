export const Square = ({ children, isSelected, updateBoard, key }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(key)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
