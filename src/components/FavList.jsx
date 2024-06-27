import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'

const FavList = ({ favorites, removeFromFavs }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {travelPlansData
        .filter(plan => favorites.includes(plan.id))
        .map(plan => (
          <TravelPlanCard plan={plan} key={plan.id} isFav removeFromFavs={removeFromFavs} />
        ))}
    </div>
  )
}

export default FavList
