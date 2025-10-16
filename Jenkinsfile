pipeline 
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Fetching code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies for frontend and backend...'
                sh '''
                cd backend
                npm install
                cd ../frontend
                npm install
                '''
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building React app...'
                sh '''
                cd frontend
                npm run build
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images for frontend and backend...'
                sh '''
                docker build -t demo-frontend:latest ./frontend
                docker build -t demo-backend:latest ./backend
                '''
            }
        }

        stage('Run Containers') {
            steps {
                echo 'Running Docker containers...'
                sh '''
                docker rm -f demo-frontend || true
                docker rm -f demo-backend || true
                docker run -d -p 3010:80 --name demo-frontend demo-frontend:latest
                docker run -d -p 5050:5000 --name demo-backend demo-backend:latest
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}

