import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <>
      <div className="bg-container">
        <nav className="nav-header">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <button className="logout-btn" type="button" onClick={onClickLogout}>
            Logout
          </button>
        </nav>
        <div className="bottom-container">
          <h1 className="home-heading">Your flexibility, Our Excellence</h1>
          <img
            className="card-img"
            alt="digital card"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          />
        </div>
      </div>
    </>
  )
}

export default Home
