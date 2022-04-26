pipeline {
     agent any
     stages {
        //stage("Build") {
        //    steps {
        //        sh "ls -ltr ${WORKSPACE}"
        //        sh "cd ${WORKSPACE}"
        //        sh "npm install"
        //        sh "CI=false npm run build"
        //        //sh "yarn install"
        //        ///sh "yarn build"
        //    }
        //}
        //stage("Deploy") {
        //    steps {
        //        sh "cd ${WORKSPACE}"
        //        sh "tar -zcvf build.tar build"
        //        sh "scp -r ${WORKSPACE}/build.tar root@app.winetrust.org:/var/www/html/winetrust.org"
        //        sh "ssh root@app.winetrust.org 'rm -rf /var/www/html/winetrust.org/build'"
        //        sh "ssh root@app.winetrust.org 'cd /var/www/html/winetrust.org; ls -ltr; tar -xvf build.tar; sudo chown -R root:root /var/www/html/winetrust.org;'"
        //        sh "ssh root@app.winetrust.org 'cp /var/www/tmp/env.js /var/www/html/winetrust.org/build/'"
        //        sh "ssh root@app.winetrust.org 'cd /var/www/html/winetrust.org; pwd; git pull origin main;'"
        //    }
        //}
        stage("Test") {
            steps {
                echo ${Jenkins_ENV_Hello_World}
            }
        }
    }
}
