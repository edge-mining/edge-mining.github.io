import comp from "/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/intro.html.vue"
const data = JSON.parse("{\"path\":\"/docs/intro.html\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"docs/intro.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
