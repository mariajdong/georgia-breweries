# Summary of Findings

## Which type of brewery is the most popular in Georgia?

We found that _small production breweries_ (microbreweries and brewpubs) are the most popular type of brewery.
Other types of breweries include large, proprietor, contract, and regional breweries.
Our dataset also contained breweries in planning stages, which are also most likely going to be small production breweries as well.

![fig1](output/bar1.png)

**Figure 1: Number of each type of brewery in Georgia.** Small production breweries (microbreweries and brewpubs) formed the majority. Breweries in planning, upon subjective review, were mostly microbreweries or brewpubs as well.

![fig2](output/stacked_bar_chart.png)

**Figure 2: Types of breweries in the 8 cities with the highest number of breweries.** Small production breweries (in lighter blue colors) are shown to form the majority in each city, consistent with quantitative findings. Breweries in planning (in red) are also highlighted.

## How are breweries dispersed in Georgia?

The city with the most breweries was unsurprisingly _Atlanta_.
Breweries were more likely to be located in the metro Atlanta area, as well as other more well-known cities in Georgia such as Savannah and Athens.

![fig3](output/city_pie_chart.png)

**Figure 3: Number of breweries per each city in relation to total breweries in Georgia.** Cities with only one brewery were categorized as "other". Atlanta visually holds the largest portion as compared to other cities.

![fig4](output/map1.png)

**Figure 4: Heatmap of brewery coordinates in Georgia.** A redder color represents a higher density of breweries in the area, as opposed to a greener color. Again, the area surrounding Atlanta shows the highest concentration of breweries.

## Is there a relationship between craft brewery location and college campuses?

We chose this question to explore the relationship between craft breweries and the younger adult (approx. ages 18-30) demographic. We found that on average, a craft brewery was _3.56 miles_ away from the nearest college campus. The median distance was _2.95 miles_, suggesting a _right skew_ in the data.

![fig5](output/college_bar_chart.png)

**Figure 5: Number of breweries per distance category to nearest college.** Breweries were categorized by distance and plotted by frequency. The highest number of breweries fell in the 0 to 2 mile range. Visually, the graph also confirms our analysis of a right skew.

![fig6](output/map2.png)

**Figure 6: Marker layer depicting college campuses added on top of heatmap from Figure 4.** This shows the relation of brewery concentration and nearby colleges accordingly.

# Conclusion
Overall, we found that small production breweries largely formed the majority of all breweries in Georgia, likely moreso in the last decade due to their trending popularity. More breweries were located in the metro Atlanta region than anywhere else. They were also, on average, only 3.56 miles away from the nearest college campus.

However, we underestimated the number of colleges in Georgia, especially when considering smaller campuses such as technical and community colleges. We relied on Google Maps API to search for nearest colleges, but it may be more prudent to assemble our own list of major colleges based on student population first. This way, the vicinity of a college to a brewery wouldn't feel incidental.