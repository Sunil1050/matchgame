import './index.css'

const Header = props => {
  const {count, timer} = props
  return (
    <div className="header-bg-container">
      <div className="container d-flex flex-row justify-content-between">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="d-flex">
          <h1 className="score-text">
            Score:<span className="score">{count}</span>
          </h1>
          <div className="d-flex align-self-center">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <h1 className="timer-sec">{timer} sec</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
