pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "ls -ltr ${WORKSPACE}"
                sh "npm install --legacy-peer-deps"
                sh "CI=false npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "cd ${WORKSPACE}"
                sh "tar -zcvf build.tar build"
                sh "scp -r ${WORKSPACE}/build.tar root@app.winetrust.org:/var/www/html/winetrust.org"
                sh "ssh root@app.winetrust.org 'mv /var/www/html/winetrust.org/build/env.js /var/www/tmp/'
                sh "ssh root@app.winetrust.org 'rm -rf /var/www/html/winetrust.org/build'"
                sh "ssh root@app.winetrust.org 'cd /var/www/html/winetrust.org; ls -ltr; tar -xvf build.tar; sudo chown -R root:root /var/www/html/winetrust.org;'"
                sh "ssh root@app.winetrust.org 'cd /var/www/html/winetrust.org; pwd; git pull origin arsalan_works;'"
                sh "ssh root@app.winetrust.org 'mv /var/www/tmp/env.js /var/www/html/winetrust.org/build/'
            }
        }
    }
}
