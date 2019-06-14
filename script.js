import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 750,
  duration: "3m",
  rps: 750,
};

// GET REQUESTS

export default function() {
  let res = http.get(`http://localhost:3020/restaurants/${Math.ceil(Math.random()*10000000)}/reservations`);
  check(res, {
    "success": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
};

// POST REQUESTS

// const postReservation = (restaurant_id) => {
//   const url = `http://localhost:3020/restaurants/${restaurant_id}/reservations`;
//   const payload = JSON.stringify({
//     restaurant_id: restaurant_id,
//     reservation_date: "2019-06-29",
//     reservation_time: "7:30 PM",
//     guests: 4
//     });
//   var params = { headers: { 'Content-Type': 'application/json' } };
//   return http.post(url, payload, params);
// };

// export default function() {
//   let res = postReservation(Math.ceil(Math.random()*10000000));
//   check(res, {
//     "success": (r) => r.status === 201
//     "transaction time OK": (r) => r.timings.duration < 2000
//   });
// };
