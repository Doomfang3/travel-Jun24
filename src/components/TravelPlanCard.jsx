const TravelPlanCard = ({ plan, handleDelete, addToFavs, isFav, removeFromFavs }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
        margin: '1rem',
        display: 'grid',
        gap: '30px',
        gridTemplate: '1fr / 1fr 1fr' /* ,
      display: 'flex',
      gap: '30px', */,
      }}
    >
      <div>
        <img style={{ width: '100%' }} src={plan.image} alt={plan.destination} />
      </div>

      <div>
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Price:</span>
          {plan.totalCost}
        </p>
        {plan.totalCost < 350 && <p>Great Deal</p>}
        {plan.totalCost > 1500 && <p>Premium</p>}
        {!isFav && (
          <>
            <button type='button' onClick={() => handleDelete(plan.id)}>
              Delete
            </button>
            <button type='button' onClick={() => addToFavs(plan.id)}>
              🤍
            </button>
          </>
        )}
        {isFav && (
          <button type='button' onClick={() => removeFromFavs(plan.id)}>
            💙
          </button>
        )}
      </div>
    </div>
  )
}

export default TravelPlanCard
