import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  updateLeft = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(preState => ({
        activeIndex: preState.activeIndex - 1,
      }))
    }
  }

  updateRight = () => {
    const {activeIndex} = this.state
    if (activeIndex < 3) {
      this.setState(preState => ({
        activeIndex: preState.activeIndex + 1,
      }))
    }
  }

  findUser = (activeIndex, reviewsList) => {
    const userDetails = reviewsList[activeIndex]
    return [
      userDetails.imgUrl,
      userDetails.username,
      userDetails.companyName,
      userDetails.description,
    ]
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const [imgUrl, username, companyName, description] = this.findUser(
      activeIndex,
      reviewsList,
    )
    const leftImgUrl =
      'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
    const rightImgUrl =
      'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="review">Reviews</h1>
          <img className="user-profile" src={imgUrl} alt={username} />
          <div className="name-container">
            <button
              onClick={this.updateLeft}
              data-testid="leftArrow"
              type="button"
            >
              <img src={leftImgUrl} alt="left arrow" />
            </button>
            <p className="username">{username}</p>
            <button
              onClick={this.updateRight}
              data-testid="rightArrow"
              type="button"
            >
              <img src={rightImgUrl} alt="right arrow" />
            </button>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
