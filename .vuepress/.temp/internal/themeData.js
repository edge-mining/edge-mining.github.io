export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"repo\":\"https://github.com/edge-mining\",\"repoLabel\":\"GitHub\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Docs\",\"link\":\"/docs/intro.html\"},{\"text\":\"Discord\",\"link\":\"https://discord.com/invite/VQa9UY5SsS\",\"target\":\"_blank\"}],\"sidebar\":{\"/docs/\":[{\"text\":\"Documentation\",\"children\":[\"/docs/intro.md\",\"/docs/about-us.md\",{\"text\":\"Product\",\"children\":[\"/docs/product/product-cycle.md\"]},{\"text\":\"Modelling\",\"children\":[\"/docs/modelling/domain-driven-architecture-overview.md\",\"/docs/modelling/glossary.md\"]},\"/docs/contribution.md\",\"/docs/faq.md\"]}]},\"editLink\":true,\"editLinkText\":\"Edit this page on GitHub\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
