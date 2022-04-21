import './index.css'

const FruitItem = props => {
  const {fruitUrl, onChangeRandomFruit} = props
  const {id, imageUrl} = fruitUrl
  const onClickFruit = () => {
    onChangeRandomFruit(id)
  }

  return (
    <li>
      <button type="button" className="fruit-item-btn" onClick={onClickFruit}>
        <img src={imageUrl} alt={id} className="fruit-item" />
      </button>
    </li>
  )
}
export default FruitItem
