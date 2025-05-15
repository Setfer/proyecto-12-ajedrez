import "./reset.css"
const Reset = ({dispatchGame}) => {
  return (
    <>
      <button id= "reset" onClick={() => dispatchGame({ type: 'RESET_GAME' })}>
        Reset Game
      </button>
    </>
  )
}

export default Reset
