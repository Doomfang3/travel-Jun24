import { useState } from 'react'
import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'

const TravelList = ({ favorites, addToFavs }) => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData)

  const handleDelete = id => {
    setTravelPlans(travelPlans.filter(currentPlan => currentPlan.id !== id))
  }

  return travelPlans
    .filter(plan => !favorites.includes(plan.id))
    .map(plan => (
      <TravelPlanCard plan={plan} key={plan.id} handleDelete={handleDelete} addToFavs={addToFavs} />
    ))
}

export default TravelList
