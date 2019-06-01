const URL = 'https://trektravel.herokuapp.com/trips'

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
        response.data.forEach((trip) => {
          tripList.append(`<li><a href="#" data-trip-id="${trip.id}"> ${trip.name}</a></li>`);
        });
      })
      .catch((error) => {
        reportStatus(`Loading error: ${error.message}`);
        console.log(error);
      });
  };

  const tripsDetail = () => {
    reportStatus('Loading a trip...');
  
    const tripList = $('#trip-list');
    tripList.empty();
    

    // axios.get(URL + )
    //   .then((response) => {
    //     reportStatus(`Successfully loaded ${response.data.length} trips`);
    //     response.data.forEach((trip) => {
    //       tripList.append(`<li>${trip.name}</li>`);
    //     });
    //   })
    //   .catch((error) => {
    //     reportStatus(`Loading error: ${error.message}`);
    //     console.log(error);
    //   });
  };

  // $('#current-trips').click( function() {
  //   $(this).;
  // });
  
  $(document).ready(() => {
    $('#load').click(loadTrips);
});