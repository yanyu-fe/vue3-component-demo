import { promises as fs } from 'fs'
import { blue, generate, gold, green, red } from '@ant-design/colors'
import { dir_path } from './tools'

const genColor = (color: string, prefix = 'blue') => {
  const colors = generate(color)
  const darkColors = generate(color, {
    theme: 'dark',
    backgroundColor: '#222728',
  })
  let code = `@${prefix}-base: ${colors[5]};\n`
  for (let i = 0; i < colors.length; i++) {
    if (i === 5)
      code += `@${prefix}-${i + 1}: @${prefix}-base;\n`
    else
      code += `@${prefix}-${i + 1}: ${colors[i]};\n`
  }

  code += `\n\n@${prefix}-dark-base: ${darkColors[5]};\n`
  for (let i = 0; i < darkColors.length; i++) {
    if (i === 5)
      code += `@${prefix}-dark-${i + 1}: @${prefix}-dark-base;\n`
    else
      code += `@${prefix}-dark-${i + 1}: ${darkColors[i]};\n`
  }
  return code
}

const run = async() => {
  let code = ''
  // 主色
  code += genColor(blue[5], 'blue')
  code += '\n\n'
  // 警告
  code += genColor(gold[5], 'gold')
  code += '\n\n'
  // 成功
  code += genColor(green[5], 'green')
  code += '\n\n'
  // 失败
  code += genColor(red[5], 'red')
  code += '\n\n'

  // 生成一个colors.less的文件放到src/style文件夹下
  await fs.writeFile(dir_path('../src/style/colors.less'), code, 'utf8')
}

run()
