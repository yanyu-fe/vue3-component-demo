import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

export const __dirname = dirname(fileURLToPath(import.meta.url))
export const dir_path = (...args: string[]) => resolve(__dirname, ...args)
export const SRC_DIR = dir_path('../src')
export const ES_DIR = dir_path('../es')
export const LIB_DIR = dir_path('../lib')
