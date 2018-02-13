# scheduleMakerSpring
 - live site... click 'spin up server' => https://www.josephweidinger.com/?project=scheduleMaker

## To deploy
 - mvn clean install (must have maven globally installed)
 - deploy to tomcat
 - have mysql in the right place with jpaContext settings as they should be. You can use the local .sql file to restore the db with some mock data.

## TODO
 - make a button that tells the server to reset sql db to a certain point
 - bug with having a shift that goes past 0 hour
 - have position warnings be attached to hour, day, days, week (strong man needed on monday morning to put away truck)
 - exceptional days, can deviate from schedule
 - system for feeding in sales data total for day or historical data in general, consider having something for that
 
## Bugs
 - Not sure why adding a shift from 1-3 am doesn't update the dom until refresh
 - still some key collisions somewhere on react page
 

useful commands...

```
ssh ec2-user@ec2-54-164-237-28.compute-1.amazonaws.com -i ~/.ssh/schedulemaker-ec2.pem

ec2-54-164-237-28.compute-1.amazonaws.com:8080

is tomcat running?
`sudo service --status-all | grep tomcat8`

make tomcat on by default...
`sudo chkconfig tomcat8 on`

look at tomcat output...
`sudo tail -f /usr/share/tomcat8/logs/catalina.out`

# move to java 1.8
sudo yum install java-1.8.0 # install new java
sudo /usr/sbin/alternatives --config java # choose 1.8
sudo yum remove java-1.7.0-openjdk # remove old java

# tomcat
sudo yum install tomcat8-webapps tomcat8-admin-webapps
sudo nano /etc/tomcat8/tomcat-users.xml
sudo nano /usr/share/tomcat8/webapps/manager/META-INF/context.xml # and put comments around valve
sudo chkconfig tomcat8 on

(sudo service tomcat8 start)
(sudo yum remove tomcat8)

# mysql
sudo yum install mysql-server
wget "https://raw.githubusercontent.com/jsphweid/scheduleMakerSpring/master/db-backup/2017-feb-backup.sql"
sudo service mysqld start
mysql -u root -p # don't need to enter password
GRANT ALL PRIVILEGES ON *.* TO 'josephweidinger'@'localhost' IDENTIFIED BY 'qwert12345';
exit
mysql -u josephweidinger -p
CREATE DATABASE schedulemakerspring;
exit
mysql -u josephweidinger -pqwert12345 schedulemakerspring < 2017-feb-backup.sql
sudo chkconfig mysqld on

```