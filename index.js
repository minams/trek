const URL = 'https://trektravel.herokuapp.com/trips/';

const reportStatus = (message) => {
    $('#status-message').html(message);
};

const loadTrips = () => {
    reportStatus('Loading trips...');
    const tripList = $('#trip-list');
    tripList.empty();
    
  
    axios.get(URL)
      .then((response) => {
        reportStatus(`Successfully loaded ${response.data.length} trips`);
        tripList.html(`<h2>All Trips</h2>`);
        response.data.forEach((trip) => {
          const eachTripList = $(`<li>${trip.name}</li>`);
          tripList.append(eachTripList);
          eachTripList.click(tripDetail(trip.id));
        });
      })
      .catch((error) => {
        reportStatus(`Loading error: ${error.message}`);
        console.log(error);
      });
};

const tripDetail = (tripId) => {
  const eachTrip = () => {
    
    const eachDetail = $('#trip-detail');
    eachDetail.empty();

    axios.get(URL + `${tripId}`)
      .then((response) => {
        reportStatus(`Successfully loaded Trip ID: ${response.data.id}`);
        eachDetail.html(
          `<h1>Trip Details -</h1><h2>Name: ${response.data.name}</h2><h3>Continent: ${response.data.continent}</h3><h3>Category: ${response.data.category}</h3><h3>Weeks: ${response.data.weeks}</h3><h3>Cost: $${response.data.cost}</h3><h3>About:</h3><p>${response.data.about}</p>`
      )})
      .catch((error) => {
        reportStatus(`Loading error: ${error.message}`);
        console.log(error);
      });
    };
  return eachTrip;
};

$(document).ready(() => {
  $('#load').click(loadTrips);
});