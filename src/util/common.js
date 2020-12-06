import globalModule from '../components/styles.module.css'

export const getModuleClasses = (localModule, classNames) => {
  const styles = {
    ...localModule,
    ...globalModule
  }

  return classNames
    .replace(/^\s+|\s+$/g, '')
    .split(/\s+/)
    .map((cl) => styles[cl.trim()])
    .join(' ')
    .trim()
}
