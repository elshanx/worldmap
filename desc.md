# Task Description

Your task is to create a React appication that provides an interactive word map. This map shoud
show the total population of each country and dispay more detaied information when a country is
clicked.
Requirements:

1. Create a World Map Component: This component wirender a map of the word. You are
   allowed to use a suitabe NPM package for rendering the map OpenLayers or Leafet
   Recommended).

2. Country Data: Use an externaAPike REST Countries APto fetch country data such as
   name, population, area, and region.
   . Dispay Popuation on Map: Each country on the map shoud visuay represent its
   popuation. This coud be by changing the coor or size of the country based on its
   popuation. For instance, countries with arger popuations coud be dispayed in a darker
   coor.
   . nteractive Eement: When a country on the map is cicked, the appication shoud dispay
   more detaied information about that country, such as its name, popuation, area, and region.
   This information coud be dispayed in a separate component.
3. Fiter Component: Add a fiter functionaity that aows users to fiter countries based on the
   region. When a region is seected from the fiter, ony countries from that region shoud be
   dispayed on the map.
   . Rea-time Data Updating: mpement rea-time data updating for the country's information.
   For instance, if a country's popuation changes in the APdata whie a user is on the site, the
   site shoud automaticay update to refect this.
4. Country List Component: mpement a Country List component that dispays a ist of athe
   country names. When a user cicks on a country name, the map shoud focus on that country.
5. Rea-time Marker Movement: mpement a marker (for exampe, representing a moving car)
   on the map that updates its position in rea-time. You shoud use WebSocket or a simiar
   technoogy for the rea-time updates. When the marker's position changes, the map shoud
   automaticay update to refect this.
   Bonus:
   . Popuation Graph: mpement a bar graph that dispays the top 0 countries with the most
   popuation.
6. Performance: The appication shoud hande and render a arge amount of data without a
   noticeabe impact on performance.
   Submission:
   Your submission should incude the source code for your appication, aong with instructions on how
   to build and run the application. Make sure to incude tests and any necessary documentation.
   Remember, the primary goas of this chaenge are to test your abiity to create an interactive
   application with React, manage and interact with state and props, use higher-order components,
   and manipulate data using rea-time updating. The design is secondary, but a we-designed
   application could earn you bonus points. Good uck!

# BONUS Popuation Graph: mpement a bar graph that dispays the top 0 countries with the most

popuation. 2. Performance: The appication shoud hande and render a arge amount of data without a
noticeabe impact on performance.
