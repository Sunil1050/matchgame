import './index.css'

const TabButton = props => {
  const {eachTab, onChangeTab, isActive} = props
  const {tabId, displayText} = eachTab
  const stylingBtn = isActive ? 'active-tab-button' : 'tab-button'
  const onClickTabButton = () => {
    onChangeTab(tabId)
  }

  return (
    <li>
      <button type="button" className={stylingBtn} onClick={onClickTabButton}>
        {displayText}
      </button>
    </li>
  )
}
export default TabButton
