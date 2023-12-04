const express = require('express');
const router = express.Router();
const ical = require('node-ical');

router.post("/", async function (req, res, next) {
    console.log(req.body.day)
    res.json({response:"Bien parsé"})

    const events = ical.sync.parseFile('/app/calendar/ADECal.ics');

    for (const event of Object.values(events)) {
        console.log(event)
    }
})

module.exports = router;