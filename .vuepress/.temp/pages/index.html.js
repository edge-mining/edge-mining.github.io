import comp from "/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Edge Mining\",\"tagline\":\"mine your energy\",\"actions\":[{\"text\":\"Documentation\",\"link\":\"/docs/intro.html\",\"type\":\"primary\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/edge-mining\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Smart automation\",\"details\":\"Intelligent automation based on energy availability to maximize efficiency\"},{\"title\":\"Heat recovery\",\"details\":\"Advanced heat recovery systems for practical applications\"},{\"title\":\"Versatile sizing\",\"details\":\"Designed for small to medium energy installations\"},{\"title\":\"100% open-source\",\"details\":\"Fully open-source with no licensing fees\"}],\"footer\":\"MIT Licensed | Copyright © 2024 Edge Mining Team\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
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
