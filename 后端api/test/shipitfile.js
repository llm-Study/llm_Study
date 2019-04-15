
module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        production: {
            servers: ['root@your-product-server'],
            deployTo: '/data/project/ecy-web',
            branch: 'master'
        },
        demo: {
            servers: 'root@47.98.152.225:6565',
            deployTo: '/data/project/ecy-web',
            branch: 'master'
        },
        test: {
            servers: 'root@172.16.25.136',
            deployTo: '/data/project/ecy-web',
            branch: 'master'
        },
        default: {
            workspace: '/tmp/ecy-web', //本地的临时工作目录
            repositoryUrl: 'git@gitee.com:ecycode/ecy-web.git',
            ignores: ['.git', 'node_modules', 'development.js'],
            keepReleases: 5,
            deleteOnRollback: false
        }
    });

    shipit.task('pwd', function () {
        shipit.remote('pwd').then(function (res) {
            shipit.emit('pwd', res);
        }).catch(function (error) {
            console.log(error);
        });
    });

    shipit.task('db:migrate', function () {
        return shipit.remote('pwd');
    });

    shipit.task('nvm', function () {
        shipit.remote('source ~/.nvm/nvm.sh && nvm list').then(function (res) {
            console.log(res['0'].stdout);
        }).catch(function (error) {
            console.log(error);
        });
    });


    shipit.task('test', function () {
        let command = [
            'ls -lah /data/project/ecy-web'
        ].join(' ');
        return shipit.remote(command);
    });


    shipit.on('published', function () {
        if (shipit.options.environment === 'demo') {
            let command = [
                'source ~/.nvm/nvm.sh',
                '&& cd /data/project/ecy-web/current',
                '&& npm install --production',
                '&& (pm2 delete ecy-web || make install)',
                '&& pm2 start ./configs/pm2_demo.json',
                '&& pm2 save'
            ].join(' ');
            return shipit.remote(command);
        }

        if (shipit.options.environment === 'test') {
            let command = [
                'source ~/.nvm/nvm.sh',
                '&& cd /data/project/ecy-web/current',
                '&& npm install --production',
                '&& (pm2 delete ecy-web || make install) && make apidoc',
                '&& pm2 start ./configs/pm2_test.json',
                '&& pm2 save'
            ].join(' ');
            return shipit.remote(command);
        }

        if (shipit.options.environment === 'production') {
            let command = [
                'source /data/node/.nvm/nvm.sh',
                '&& cd /data/project/ecy-web/current',
                '&& npm install --production',
                '&& (pm2 delete ecy-web || make install)',
                '&& pm2 start ./configs/pm2_production.json',
                '&& pm2 save'
            ].join(' ');
            return shipit.remote(command);
        }
    });
};
