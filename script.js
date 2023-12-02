'use strict';

//////////////////////////
// Default Parameters
/*
const bookings = [];

const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 7);
creatBooking('LH123', 5);
creatBooking('LH123', undefined, 1000);
*/

///////////////////////
//  How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const victor = {
  name: 'Victor Hugo',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passaport === 24739479284) {
    alert('Checked in!');
  } else {
    alert('Wrong passaport!');
  }
};

checkIn(flight, victor);
console.log(flight);
console.log(victor);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(victor);
checkIn(flight, victor);
console.log(victor);
