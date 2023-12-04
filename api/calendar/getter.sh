#!/bin/sh

echo "Getting calendar from ADE..."

d1=`date +%Y-%m-%d`
d2=`date -d date -d "@$(($(date +%s) + 604800))" +%Y-%m-%d`

wget "https://planning.univ-ubs.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?projectId=1&calType=ical&firstDate=${d1}&lastDate=${d2}&resources=6149" -O /app/calendar/ADE_temp_6149.ics
wget "https://planning.univ-ubs.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?projectId=1&calType=ical&firstDate=${d1}&lastDate=${d2}&resources=5952" -O /app/calendar/ADE_temp_5952.ics

rm /app/calendar/ADECal.ics
rm /app/calendar/ADECal_ENSIBS_Vannes.ics
rm /app/calendar/ADECal_DSEG.ics

cp /app/calendar/ADE_temp_6149.ics /app/calendar/ADECal.ics
mv /app/calendar/ADE_temp_6149.ics /app/calendar/ADECal_ENSIBS_Vannes.ics
mv /app/calendar/ADE_temp_5952.ics /app/calendar/ADECal_DSEG.ics

sed -i '/(\n )/d' /app/calendar/ADECal.ics
sed -i '/(\n )/d' /app/calendar/ADECal_ENSIBS_Vannes.ics
sed -i '/(\n )/d' /app/calendar/ADECal_DSEG.ics

chmod 777 /app/calendar/ADECal.ics
chmod 777 /app/calendar/ADECal_ENSIBS_Vannes.ics
chmod 777 /app/calendar/ADECal_DSEG.ics
