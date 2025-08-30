export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Edge Mining\",\"description\":\"Mine your energy - A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/logo.png\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#667eea\"}],[\"meta\",{\"name\":\"description\",\"content\":\"Edge Mining - Mine your energy. A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value.\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Edge Mining\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Mine your energy - A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://edgemining.energy\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"/images/logo.png\"}],[\"script\",{},\"document.documentElement.setAttribute(\\\"data-theme\\\", \\\"edge-mining\\\")\"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
