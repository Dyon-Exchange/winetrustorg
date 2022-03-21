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
                sh "sudo rm -rf /var/www/demo.winetrust.org"
//                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/demo.winetrust.org/"
                sh "ssh root@34.65.22.183 'rm -rf /var/www/demo.winetrust.org/build'"
                sh "scp -r ${WORKSPACE}/build/ root@34.65.22.183:/var/www/demo.winetrust.org"
                sh "ssh root@34.65.22.183 'cd /var/www/demo.winetrust.org; git pull origin arsalan_works;'"
            }
        }
    }
}
