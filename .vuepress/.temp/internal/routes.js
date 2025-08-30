export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/about-us.html", { loader: () => import(/* webpackChunkName: "docs_about-us.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/about-us.html.js"), meta: {"title":"About Us"} }],
  ["/docs/contribution.html", { loader: () => import(/* webpackChunkName: "docs_contribution.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/contribution.html.js"), meta: {"title":"Contribution"} }],
  ["/docs/faq.html", { loader: () => import(/* webpackChunkName: "docs_faq.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/faq.html.js"), meta: {"title":"Frequently Asked Questions (FAQ)"} }],
  ["/docs/intro.html", { loader: () => import(/* webpackChunkName: "docs_intro.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/intro.html.js"), meta: {"title":"Introduction"} }],
  ["/docs/modelling/", { loader: () => import(/* webpackChunkName: "docs_modelling_index.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/modelling/index.html.js"), meta: {"title":"Architecture Documentation"} }],
  ["/docs/modelling/domain-driven-architecture-overview.html", { loader: () => import(/* webpackChunkName: "docs_modelling_domain-driven-architecture-overview.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/modelling/domain-driven-architecture-overview.html.js"), meta: {"title":"Domain-Driven Architecture Overview"} }],
  ["/docs/modelling/glossary.html", { loader: () => import(/* webpackChunkName: "docs_modelling_glossary.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/modelling/glossary.html.js"), meta: {"title":"Glossary"} }],
  ["/docs/product/product-cycle.html", { loader: () => import(/* webpackChunkName: "docs_product_product-cycle.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/docs/product/product-cycle.html.js"), meta: {"title":"Product Cycle"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/user/Documents/edge-mining-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
