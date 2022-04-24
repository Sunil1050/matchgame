import {AiOutlineReload} from 'react-icons/ai'
import './index.css'

const ScoreCard = props => {
  const {renderPlayingView} = props
  const onClickPLayAgain = () => {
    renderPlayingView()
  }
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />
      <div className="text-center">
        <h4 className="text-white">YOUR SCORE</h4>
        <h1 className="text-white">30</h1>
      </div>
      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPLayAgain}
      >
        <AiOutlineReload className="reload" />
        <p className="btn-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default ScoreCard
