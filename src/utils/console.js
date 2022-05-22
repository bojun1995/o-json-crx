export default () => {
  const padding = `3px 5px`
  const borderRadius = `4px`
  const baseText = 'o-tools'
  const baseHeadStyle = `
    padding: ${padding};
    background: #C289FF;
    color: #FFFFFF;
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  `

  const logHeadStyle = `
    padding: ${padding};
    background: #4893F6;
    color: #FFFFFF;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  `
  const logStyle = `
    color: #000000;
  `
  const errHeadStyle = `
    padding: ${padding};
    background: #F9D0D0;
    color: #FFFFFF;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  `
  const errStyle = `
    color: #F9D0D0;
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
