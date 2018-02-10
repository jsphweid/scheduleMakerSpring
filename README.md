# scheduleMakerSpring

## To deploy
 - mvn clean install (must have maven globally installed)
 - deploy to tomcat

## TODO
 - bug with having a shift that goes past 0 hour
 - have position warnings be attached to hour, day, days, week (strong man needed on monday morning to put away truck)
 - exceptional days, can deviate from schedule
 - system for feeding in sales data total for day or historical data in general, consider having something for that
 
## Bugs
 - Not sure why adding a shift from 1-3 am doesn't update the dom until refresh
 - still some key collisions somewhere on react page
 