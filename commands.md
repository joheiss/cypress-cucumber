npx cypress run -e TAGS='@login' --headed
npx cypress run -e TAGS='@login or @contact-us' --headed
npx cypress run -e TAGS='@smoke' --headed
npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed
npx cypress run cypress/e2e/\*.feature --headed

## jenkins docker image

docker pull jenkins/jenkins

## run jenkins docker container

docker run -p 8080:8080 -p 50000:50000 -v /Users/joheiss/dev/volumes:/var/jenkins_home joheiss/jovisco_jenkins_cypress:latest

### jenkins initial password

d43a3c9d819f4f4b8277955bd7d4528b

## install xvfb in jenkins docker image

### login as root

docker exec -it -u root addec38956c8 /bin/bash

### install xvfb

apt-get update
apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
apt-get install -y libgbm-dev
