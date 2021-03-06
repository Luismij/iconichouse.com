export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    const findEl = async (hash, x) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1))
          }, 800)
        })
      )
    }
    let el = await findEl(to.hash)
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    } else {
      return window.scrollTo(0, el.offsetTop - 80)
    }
  }
  return { x: 0, y: 0 }
}
