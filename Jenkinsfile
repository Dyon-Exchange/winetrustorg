pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --legacy-peer-deps"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
//                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/demo.winetrust.org/"
                sh "cd ${WORKSPACE}"
                sh "tar -zcvf build.tar build"
                sh "scp -r ${WORKSPACE}/build.tar root@34.65.22.183:/var/www/demo.winetrust.org"
                sh "ssh root@34.65.22.183 'rm -rf /var/www/demo.winetrust.org/build'"
                sh "ssh root@34.65.22.183 'cd /var/www/demo.winetrust.org; ls -ltr; tar -xvf build.tar;'"
                sh "ssh root@34.65.22.183 'cd /var/www/demo.winetrust.org; pwd; git pull origin arsalan_works;'"
            }
        }
    }
}
