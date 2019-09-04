const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
      return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const getModes = this.journeys.map((journey) => {
//     return journey.transport;
//   })
//   const uniqueModes = getModes.filter((x, i, a) => a.indexOf(x) ==i);
//   return uniqueModes;
// };

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const getModes = this.journeys.map((journey) => {
//     return journey.transport;
//   })
//   const uniqueModes = [...new Set(getModes)]
//   return uniqueModes;
// };


Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueModes = [... new Set(this.journeys.map(journey => journey.transport))];
  return uniqueModes;
};

module.exports = Traveller;
