// create map
var brewChart = am4core.create("brewMap", am4maps.MapChart);

// set definition
brewChart.geodata = am4geodata_usaHigh;

// set projection
brewChart.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
var polygonSeries = brewChart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");