export default () => {
  const padding = `3px 5px`
  const borderRadius = `4px`
  const baseText = 'o-tools'
  const baseHeadStyle = `
    padding: ${padding};
    background: #8e03ff;
    color: #FFFFFF;
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  `
  const logHeadStyle = `
    padding: ${padding};
    background: #3883fa;
    color: #FFFFFF;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  `
  const logStyle = `
    color: #000000;
  `
  const errHeadStyle = `
    padding: ${padding};
    background: #cd3937;
    color: #FFFFFF;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  `
  const errStyle = `
    color: #cd3937;
  `
  const log = (text) => {
    console.log(`%c${baseText}%clog%c ${text}`, baseHeadStyle, logHeadStyle, logStyle)
  }
  const err = (text) => {
    console.log(`%c${baseText}%cerror%c ${text}`, baseHeadStyle, errHeadStyle, errStyle)
  }
  return {
    log,
    err,
  }
}
