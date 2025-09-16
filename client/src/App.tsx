// Imports and constants
  import style from "./styles/App.module.css"

  import Game from "./components/Game.tsx"

const App = () => {
  // Render the component
    return (
      <div className = {style.body}>
        <div className = {style.board}>
          <Game />
        </div>
      </div>
    )
}

export default App
