# Sybilcast

### Important
Web Production of Sybilcast. Compares crime and weather in Los Angeles, California. Uses JSON file to publish to github pages, rather than a Flask app and MongoDB. Original project : [here](https://github.com/dweidash/project-02-sybilcast)

## Background
**GOAL**: Uniting data and research to forecast danger in Earth's greatest cities.

**HOW**: Implementing the latest innovations in Artificial Intelligence to predict crime.

**SCENARIO**

Let's say you commute the same path to work.

As time goes on, you cycle through the seasons and have a strange feeling that more crimes have been happening on specific times of the year.

**FYI** : Recent studies have shown that temperature and weather can significantly affect crime rates.

## Steps

### Get the Weather Data
- Scrapes lowest temperature in LA and the date it occurred for each year from 2010-2018 from [Current Results - Low Temperatures](https://www.currentresults.com/Yearly-Weather/USA/CA/Los-Angeles/extreme-annual-los-angeles-low-temperature.php) using Splinter and Beautiful Soup. 

- Scrapes highest temperature in LA and the date it occurred for each year from 2010-2018 from [Current Results - High Temperatures](https://www.currentresults.com/Yearly-Weather/USA/CA/Los-Angeles/extreme-annual-los-angeles-high-temperature.php) using Splinter and Beautiful Soup. 

- Calls the [World Weather Online API](https://www.worldweatheronline.com/developer/api/) to get the maximum and minimum temperatures for each day of 2019. Then, finds the highest maximum temperature, the lowest minimum temperature, and the dates that they occured for 2019.

### Plotly

- Uses javascript, d3, and Plotly to plot the hottest and coldest day of the selected year

- Creates a grouped bar chart that compares the crime count per crime code for the hottest and coldest day of the selected year

- Creates a line graph of the crime count per area of LA of the selected year. A red line indicates that the crime count on the hottest day is greater than the crime count on the coldest day in the corresponding area of LA. A blue line indicates that the crime count on the coldest day is greater than the crime count on the hottest day in the corresponding area of LA

- Creates a time series plot of the crime count per the time of day of the hottest and coldest days of the selected year. Uses a 24-hour clock to show the changes in crime count from time 0 to time 2400

### Leaflet

- Displays a heatmap of the crime count on the hottest and coldest day of the selected year. User can choose whether to display the heat map for hottest day or the coldest day.


- Displays map of LA with markers of the location of the crime for both the hottest and coldest day. User can choose any year(s) they want to display on the map. On hover, the marker shows the crime description, the military time of the time of occurrence, and the date that the crime occurred.

### HTML Navigation

Select a year from 2010-2019 and visualize the data.



