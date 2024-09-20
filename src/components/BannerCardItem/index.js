// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <div>
      <li className={className}>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-pera">{description}</p>
        <button className="card-button">Show More</button>
      </li>
    </div>
  )
}

export default BannerCardItem
