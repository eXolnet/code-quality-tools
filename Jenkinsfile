@Library('eXolnet') _

wrappedPipeline {
    wrappedNode(cleanWorkspace: true) {
        testConditions(branch: "master") {
            stage('Packaging') {
                sh 'wget https://raw.githubusercontent.com/dflydev/git-subsplit/2cde593a10acdb3fcafd2136ee7025fee9e925b2/git-subsplit.sh'
                sh 'chmod +x git-subsplit.sh'

                // exolnet-bot
                sshagent (credentials: ['5257b043-1981-4a54-90ed-41c00095fb60']) {
                    sh './git-subsplit.sh init git@github.com:eXolnet/code-quality-tools.git'
                    sh './git-subsplit.sh publish --heads="master" --no-tags packages/phpcs-config:git@github.com:exolnet/phpcs-config.git'
                }
            }
        }
    }
}
