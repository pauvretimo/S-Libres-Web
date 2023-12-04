const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const app = express()
app.use(cookieParser());
const port = 3001
const eleveRouter = require('./routes/eleve');
const calendarRouter = require('./routes/calendar');
const classRouter = require('./routes/get-class');
const calendarRouterENSIBSVannes = require('./routes/calendarENSIBSVannes');
const calendarRouterDSEG = require('./routes/calendarDSEG');

var cors = require('cors');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/*app.use(cors({
  origin: 'https://api.cyberlog.dev'
}));*/

app.use(cors());

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/get-calendar', calendarRouter);
app.use('/get-eleve', eleveRouter);
app.use('/get-class', classRouter);
app.use('/get-calendar/vannes/ensibs', calendarRouterENSIBSVannes);
app.use('/get-calendar/vannes/dseg', calendarRouterDSEG);


app.listen(port, () => {
  console.log(`Example app listening at 127.0.0.1:${port}`)
})
