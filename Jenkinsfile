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
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/demo.winetrust.org/"
            }
        }
    }
}
