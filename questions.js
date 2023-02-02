export default [
  /**
   * use changesets to manage the publication of sub-packages
   */
  {
    name: 'monorepo',
    message: 'Is project a monorepo?',
    choices: [{ title: 'No' }, { title: 'Yes', value: 'monorepo' }],
  },
  {
    name: 'type',
    message: 'Which type is this project?',
    choices: [
      /**
       * use dockerfile for deploy
       * use build-image action
       * use .env, .env.local, .env.production
       */
      {
        title: 'Vue App',
        value: 'vue',
      },
      {
        title: 'JS/TS Lib',
        value: 'js',
      },
      {
        title: 'Node Tool',
        value: 'node',
      },
    ],
  },
  {
    // vue app only
    if: 'vue',
    message: 'Do you want to use vue-router?',
    choices: [{ title: 'Yes', value: 'router' }, { title: 'No' }],
  },
  // vue app only
  {
    if: 'vue',
    message: 'Which css resolution do you want?',
    choices: [
      {
        title: 'Tailwindcss',
        hint: 'preferred and recommendation',
        value: 'tailwindcss',
      },
      {
        title: 'Sass',
        value: 'sass',
      },
      {
        title: 'None',
      },
    ],
  },
]
