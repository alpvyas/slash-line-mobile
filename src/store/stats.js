export const getStats = () => async (dispatch) => {

  const response = await fetch(`http://localhost:5000/api/stats`, {
  method: "GET",
  })

  const statsData = await response.json()

  console.log("STATS:", statsData)
  // dispatch(add(statsData))


};