pipeline {
     agent any
	 environment {
          var_REACT_APP_PINATA = credentials('REACT_APP_PINATA')
     }
     stages {
        stage("Build") {
            steps {
                sh "ls -ltr ${WORKSPACE}"
                sh "cd ${WORKSPACE}"
                //sh "npm install"
                //sh "CI=false npm run build"
                sh "yarn install"
                sh "CI=false npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "cd ${WORKSPACE}"
                sh "tar -zcvf build.tar build"
                sh "scp -r ${WORKSPACE}/build.tar root@34.65.22.183:/var/www/html/demo.winetrust.org"
                sh "ssh root@34.65.22.183 'rm -rf /var/www/html/demo.winetrust.org/build'"
                sh "ssh root@34.65.22.183 'cd /var/www/html/demo.winetrust.org; ls -ltr; tar -xvf build.tar; sudo chown -R root:root /var/www/html/demo.winetrust.org;'"
                //sh "ssh root@34.65.22.183 'cp /var/www/tmp/env.js /var/www/html/demo.winetrust.org/build/'"
                sh "ssh root@34.65.22.183 'cd /var/www/html/demo.winetrust.org; pwd; git pull origin main;'"
            }
        }
        stage("Test") {
            steps {
                sh "echo '$var_REACT_APP_PINATA' > hello.txt"
				sh "cat .env > hello.txt"
            }
        }
    }
}
