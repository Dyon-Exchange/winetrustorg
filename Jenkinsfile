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
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "cd ${WORKSPACE}"
                sh "tar -zcvf build.tar build"
                sh "scp -r ${WORKSPACE}/build.tar root@demo.winetrust.org:/var/www/html/demo.winetrust.org"
                sh "ssh root@demo.winetrust.org 'rm -rf /var/www/html/demo.winetrust.org/build'"
                sh "ssh root@demo.winetrust.org 'cd /var/www/html/demo.winetrust.org; ls -ltr; tar -xvf build.tar; sudo chown -R root:root /var/www/html/demo.winetrust.org;'"
                //sh "ssh root@demo.winetrust.org 'cp /var/www/tmp/env.js /var/www/html/demo.winetrust.org/build/'"
                sh "ssh root@demo.winetrust.org 'cd /var/www/html/demo.winetrust.org; pwd; git pull origin main;'"
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
