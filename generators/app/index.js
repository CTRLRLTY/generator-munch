const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    async prompting() {
       const answers = await this.prompt({
            type: "checkbox",
            name: "optionalDeps",
            message: "Do you want to install additional dependencies",
            choices: [
                "Redux",
            ],
        });
        this.optionalDeps = answers.optionalDeps;
    }
    
  
    install() {
        //Optional Dependencies
        if(this.optionalDeps.includes('Redux')) {
            this.npmInstall([
                'redux',
                'react-redux',
                'redux-thunk'
            ]);
        }

        //Dependencies
        this.npmInstall([
            'react',
            'react-dom',
            'core-js'
        ]);

        //Dev dependencies
        this.npmInstall([
            'webpack',
            'webpack-cli',
            'webpack-dev-server',
            'webpack-merge',
            '@babel/core',
            '@babel/preset-env',
            '@babel/preset-react',
            'babel-loader',
            'css-loader',
            'html-loader',
            'file-loader',
            'html-webpack-plugin',
            'clean-webpack-plugin',
            'mini-css-extract-plugin',
            'sass',
            'sass-loader',
        ], {'save-dev': true})
    }

    writing() {
        const templateDirent = fs.readdirSync(this.templatePath());
        templateDirent.forEach(file => {
            this.fs.copy(this.templatePath(file), this.destinationPath(file));
        });

        if(this.optionalDeps.includes('Redux')) {
            const reduxPath = path.resolve(__dirname, 'redux');
            const reduxDirent = fs.readdirSync(reduxPath);
            reduxDirent.forEach(file => {
                this.fs.copy(path.resolve(reduxPath,file), this.destinationPath(file));
            });
        }
    }
};
