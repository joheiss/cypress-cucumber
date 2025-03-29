npx cypress run -e TAGS='@login' --headed
npx cypress run -e TAGS='@login or @contact-us' --headed
npx cypress run -e TAGS='@smoke' --headed
npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed
npx cypress run cypress/e2e/*.feature --headed

## jenkins docker image
docker pull jenkins/jenkins

## run jenkins docker container
docker run -p 8080:8080 -p 50000:50000 -v /Users/joheiss/dev/volumes:/var/jenkins_home jenkins/jenkins

### jenkins initial password
d43a3c9d819f4f4b8277955bd7d4528b