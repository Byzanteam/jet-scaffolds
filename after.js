// 模块定义规范必须和 package.json 的 type field 相匹配，否则不会执行
export default async function({ run, properties, prompts, ansiColors }) {
  const result = await prompts.select({
    message: 'Do you want to install dependencies now?',
    hint: 'pnpm install',
    choices: [
      { title: 'Yes', value: 'pnpm' },
      { title: 'No' }
    ]
  })

  // setup git and husky
  await run('git', ['init', '-b', 'main'])
  await run('chmod', ['-R', '+x', '.husky'])

  if (result) {
    await run('pnpm', ['update'])
  }

  console.log(ansiColors.cyan(`[makes] Project ${properties.name} has been initialized.`))
  console.log(ansiColors.cyan('follow next steps to get started.'))

  const nextSteps = [
    `cd ${properties.name}`,
  ]

  if (!result) {
    nextSteps.push('pnpm install')
  }

  for (const step of nextSteps) {
    console.log(` › ${step}`)
  }
}
