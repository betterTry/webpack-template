module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      message: 'Project description',
      default: 'A project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    vue: {
      type: 'confirm',
      message: 'Use Vue in your project',
    },
    pug: {
      when: 'vue',
      type: 'confirm',
      message: 'Use Pug in your vue template?'
    },
    typescript: {
      type: 'confirm',
      message: 'Use TypeScript in your project',
    },
    tslint: {
      when: 'typescript',
      type: 'confirm',
      message: 'Use TSlint to lint your code with ts？',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESlint to lint your code？',
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created？(recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        }, {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        }, {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        }
      ]
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'tsconfig.json': 'typescript',
    'tslint.json': 'typescript && tslint',
    '.put-lintrc.json': 'vue && pug',
    'src/views/**/*': 'vue',
    'src/store/**/*': 'vue',
    'src/router/**/*': 'vue',
  },
}
