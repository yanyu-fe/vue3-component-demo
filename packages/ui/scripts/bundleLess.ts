import { promises as fs } from 'fs'
import { dirname, resolve } from 'path'
import cpy from 'cpy'
import fg from 'fast-glob'
import less from 'less'
import { ES_DIR, LIB_DIR, SRC_DIR } from './tools'

export const bundleLess = async() => {
  await Promise.all([
    cpy(`${SRC_DIR}/**/*.less`, ES_DIR),
    cpy(`${SRC_DIR}/**/*.less`, LIB_DIR),
  ])

  const lessFiles = await fg('**/index.less', {
    cwd: SRC_DIR,
    onlyFiles: true,
  })
  for (const lessFile of lessFiles) {
    const filePath = `${SRC_DIR}/${lessFile}`
    const lessContent = await fs.readFile(filePath, 'utf8')
    const code = await less.render(lessContent, {
      paths: [SRC_DIR, dirname(filePath)],
    })
    await Promise.all([
      fs.writeFile(resolve(ES_DIR, lessFile.replace('.less', '.css')), code.css),
      fs.writeFile(resolve(LIB_DIR, lessFile.replace('.less', '.css')), code.css),
    ])
  }
}

bundleLess()
