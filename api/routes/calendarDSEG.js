const express = require('express');
const router = express.Router();
const ical = require('node-ical');
const fs = require('fs');


/* GET programming languages. */
router.get('/', async function (req, res, next) {
    try {
        const events = ical.sync.parseFile("/app/calendar/ADECal_DSEG.ics");

        let date = new Date();

        // Initiate the array
        let data = {}
        console.log(date.getDate()+2)
        let offset;
        if(date.getDay() === 5){
            offset = [0,3,4]
        } else if(date.getDay() === 4) {
            offset = [0,1,4]
        } else if(date.getDay() === 6) {
            offset = [2,3,4]
        } else if (date.getDay() === 0) {
            offset = [1,2,3]
        } else {
            offset = [0,1,2]
        }
        for (const event of Object.values(events)) {
            if (event.start === undefined || event.end === undefined) {
                continue;
            }
            if (event.start.toISOString().slice(0, -14) === (date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + (date.getDate()+offset[0])).slice(-2))
                || event.start.toISOString().slice(0, -14) === (date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + (date.getDate()+offset[1])).slice(-2))
                || event.start.toISOString().slice(0, -14) === (date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + (date.getDate()+offset[2])).slice(-2))) {
              event.location = event.location.replace(/réservée ensibs/ig, "").replace(/ *\([^)]*\) */g, "").replace(/( - )/g, "-").toUpperCase();
                var evento = event.location.split(",")
                for (let i = 0; i < evento.length; i++) {
                    if(!(evento[i] in data)) {
                        data[evento[i]] = {start: [], end: []};
                    }
                    data[evento[i]].start.push(event.start)
                    data[evento[i]].end.push(event.end)
                }
            }
        }
        res.json(data);
    } catch (err) {
        console.error(`Error while getting calendar`, err.message);
        next(err);
    }
});


module.exports = router;
