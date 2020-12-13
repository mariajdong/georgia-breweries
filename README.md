## Analysis of Georgia Breweries & Locations

By Maria Dong, PharmD<br>
Original project by Eduardo Alfaro, Maria Dong, Shahil Jani, Audrey Lawrence, Jimmy Lee.

Please access the summary of findings [here](https://mariajdong.github.io/georgia-breweries/).

### Overview
This project explores brewery types and prevalence in Georgia, and their potential relationship with population demographics.

### Resources
The following is a list of tools and resources used to complete the analysis:
* OpenBreweryDB for brewery location data;
* Matplotlib for visualizations;
* Google Maps API to pull location data of colleges near zip codes of breweries;
* U.S. Census API to pull age demographics of zip codes of breweries.

### Execution
To run the code/analysis yourself, please open `main_notebook.ipynb` in Jupyter Notebook or another compatible application.<br>
Also be sure to create 2 files:
* one titled `api_keys.py` containing a variable `g_key`, set equal to your Google Maps API key as a string;
* another titled `api_keys_2.py` containing a variable `c_key`, set equal to your U.S. Census API key as a string.

### Future Considerations
New population data analyses to be added to index/README (but available in notebook).<br>
May narrow "nearby colleges" to only major colleges in Georgia with a pre-defined threshold of student population size.
