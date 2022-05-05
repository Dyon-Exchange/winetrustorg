pipeline {
    agent any
    environment {
        ENV_NAME = "${env.BRANCH_NAME}"
    }

    // ----------------

    stages {
        stage('Build Container') {
            steps {
                echo 'Building Container..'

                script {
                    if (ENVIRONMENT_NAME == 'demo') {
                        ENV_NAME = 'Demo'
                    } else if (ENVIRONMENT_NAME == 'main') {
                        ENV_NAME = 'Production'
                    }
                }
                echo 'Building Branch: ' + env.BRANCH_NAME
                echo 'Build Number: ' + env.BUILD_NUMBER
                echo 'Building Environment: ' + ENV_NAME

                echo "Running your service with environemnt ${ENV_NAME} now"
            }
        }
    }
}

// pipeline {
//      agent any
//      stages {
//         stage("Build") {
//             steps {
//                 sh "ls -ltr ${WORKSPACE}"
//                 sh "cd ${WORKSPACE}"
//                 //sh "npm install"
//                 //sh "CI=false npm run build"
//                 sh "yarn install"
//                 sh "CI=false npm run build"
//             }
//         }
//         stage("Deploy") {
//             steps {
//                 sh "cd ${WORKSPACE}"
//                 sh "tar -zcvf build.tar build"
//                 sh "scp -r ${WORKSPACE}/build.tar root@34.65.22.183:/var/www/html/demo.winetrust.org"
//                 sh "ssh root@34.65.22.183 'rm -rf /var/www/html/demo.winetrust.org/build'"
//                 sh "ssh root@34.65.22.183 'cd /var/www/html/demo.winetrust.org; ls -ltr; tar -xvf build.tar; sudo chown -R root:root /var/www/html/demo.winetrust.org;'"
//                 sh "ssh root@34.65.22.183 'cd /var/www/html/demo.winetrust.org; pwd; git pull origin demo;'"
//             }
//         }
//     }
// }
