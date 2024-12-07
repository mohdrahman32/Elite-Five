// JavaScript for Comparison Functionality
document.addEventListener('DOMContentLoaded', () => {
    const bikeData = [
      {
        model: 'Kawasaki Ninja H2R',
        price: '$55,000',
        engine: '998cc',
        speed: '400 km/h',
        torque: '165 Nm @ 12,500 rpm',
        weight: '216 kg',
        mileage: '15 km/l',
        features: 'ABS, Traction Control',
        origin: 'Japan',
        year: '2015',
        image: 'images/h2r.jpg'
      },
      {
        model: 'Ducati Panigale V4R',
        price: '$28,000',
        engine: '1103cc',
        speed: '300 km/h',
        torque: '111.3 Nm @ 12,000 rpm',
        weight: '198 kg',
        mileage: '14 km/l',
        features: 'ABS, Quick Shifter',
        origin: 'Italy',
        year: '2018',
        image: 'images/v4r.avif'
      },
      {
        model: 'BMW s1000rr',
        price: '$19,000',
        engine: '999cc',
        speed: '299 km/h',
        torque: '165 Nm @ 12,500 rpm',
        weight: '197 kg',
        mileage: '17 km/l',
        features: 'ABS, Dynamic Damping Control',
        origin: 'Germany',
        year: '2020',
        image: 'images/s1000.jpeg'
      },
      {
        model: 'Aprilia RSV4',
        price: '$20,000',
        engine: '1078cc',
        speed: '289 km/h',
        torque: '125 Nm @ 10,500 rpm',
        weight: '204 kg',
        mileage: '15 km/l',
        features: 'ABS, Ride-by-Wire',
        origin: 'Italy',
        year: '2019',
        image: 'images/rsv4.jpg'
      },
      {
        model: 'Honda CBR1000RR Fireblade',
        price: '$16,500',
        engine: '999cc',
        speed: '299 km/h',
        torque: '113 Nm @ 12,500 rpm',
        weight: '201 kg',
        mileage: '16 km/l',
        features: 'ABS, Traction Control',
        origin: 'Japan',
        year: '2021',
        image: 'images/cbr.webp'
      },
      // Add other bikes here...
    ];
  
    const bikeSelects = document.querySelectorAll('.bike-select');
    bikeSelects.forEach((select, index) => {
      bikeData.forEach((bike, idx) => {
        const option = document.createElement('option');
        option.value = idx;
        option.textContent = bike.model;
        select.appendChild(option);
      });
  
      select.addEventListener('change', (e) => {
        const selectedBike = bikeData[e.target.value];
        document.querySelector(`#bike-img-${index + 1}`).src = selectedBike.image;
      });
    });
  
    document.getElementById('compare-btn').addEventListener('click', () => {
      const selectedBikes = Array.from(bikeSelects).map(select => bikeData[select.value]);
      const comparisonResult = document.getElementById('comparison-result');
      comparisonResult.innerHTML = selectedBikes.map(bike => `
        <div>
          <h3>${bike.model}</h3>
          <p><strong>Price:</strong> ${bike.price}</p>
          <p><strong>Engine:</strong> ${bike.engine}</p>
          <p><strong>Top Speed:</strong> ${bike.speed}</p>
          <p><strong>Torque:</strong> ${bike.torque}</p>
          <p><strong>Weight:</strong> ${bike.weight}</p>
          <p><strong>Mileage:</strong> ${bike.mileage}</p>
          <p><strong>Features:</strong> ${bike.features}</p>
          <p><strong>Origin:</strong> ${bike.origin}</p>
          <p><strong>Year:</strong> ${bike.year}</p>
        </div>
      `).join('<hr>');
    });
  });
  
  