/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time/3600) //calcultes new distance
const rf = fuel - fbr*time //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = ({ vel = 0, acc = 0, time = 0 }) => {
  return vel/3.6 + (acc * time);
};

// Correct usage with object destructuring:
const vel2 = calcNewVel({ acc: acc, vel: vel, time: time });//calculates new velocity based on acceleration and time

console.log(`Corrected New Velocity: ${vel2*3.6} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






