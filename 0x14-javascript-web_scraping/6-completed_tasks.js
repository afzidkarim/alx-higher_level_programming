#!/usr/bin/node
const request = require('request');
const url = process.argv.slice(2);
request(url[0], (err, response, body) => {
  if (err) {
    console.log('No_0');
  }
  const dates = JSON.parse(body);
  const userIdCounts = {};

  for (const date of dates) {
    if (date.completed === true) {
      const userId = date.userId;
      if (userId in userIdCounts) {
        userIdCounts[userId]++;
      } else {
        userIdCounts[userId] = 1;
      }
    }
  }
  console.log(userIdCounts);
});
