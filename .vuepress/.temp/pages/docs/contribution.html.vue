<template><div><h1 id="contribution" tabindex="-1"><a class="header-anchor" href="#contribution"><span>Contribution</span></a></h1>
<h2 id="get-involved" tabindex="-1"><a class="header-anchor" href="#get-involved"><span>Get Involved</span></a></h2>
<p>Join our growing community of developers and energy enthusiasts. Together, we're building the future of energy optimization.</p>
<h2 id="how-to-contribute" tabindex="-1"><a class="header-anchor" href="#how-to-contribute"><span>How to Contribute</span></a></h2>
<p>There are many ways to contribute to Edge Mining:</p>
<h3 id="🐛-report-bugs" tabindex="-1"><a class="header-anchor" href="#🐛-report-bugs"><span>🐛 Report Bugs</span></a></h3>
<p>If you find a bug, please:</p>
<ol>
<li>Search existing <a href="https://github.com/edge-mining/docs/issues" target="_blank" rel="noopener noreferrer">issues</a> to see if it's already been reported</li>
<li>Create a new issue with:
<ul>
<li>Clear description of the problem</li>
<li>Steps to reproduce the bug</li>
<li>System information (OS, version, etc.)</li>
<li>Screenshots if applicable</li>
</ul>
</li>
</ol>
<h3 id="💡-suggest-new-features" tabindex="-1"><a class="header-anchor" href="#💡-suggest-new-features"><span>💡 Suggest New Features</span></a></h3>
<p>To suggest new features:</p>
<ol>
<li>Create an issue with the <code v-pre>enhancement</code> tag</li>
<li>Describe the feature and its value to users</li>
<li>Include mockups or examples if possible</li>
</ol>
<h3 id="📝-improve-documentation" tabindex="-1"><a class="header-anchor" href="#📝-improve-documentation"><span>📝 Improve Documentation</span></a></h3>
<p>Documentation is crucial! You can contribute by:</p>
<ul>
<li>Fixing grammatical errors</li>
<li>Adding examples</li>
<li>Improving clarity</li>
<li>Translating to other languages</li>
</ul>
<h3 id="🔧-contribute-code" tabindex="-1"><a class="header-anchor" href="#🔧-contribute-code"><span>🔧 Contribute Code</span></a></h3>
<h4 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h4>
<ul>
<li>Node.js 18+</li>
<li>Git</li>
<li>Knowledge of JavaScript/TypeScript</li>
<li>Familiarity with Domain-Driven Design principles</li>
</ul>
<h4 id="development-environment-setup" tabindex="-1"><a class="header-anchor" href="#development-environment-setup"><span>Development Environment Setup</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Fork and clone the repository</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/your-username/edge-mining.git</span>
<span class="line"><span class="token builtin class-name">cd</span> edge-mining</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Install dependencies</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Start development server</span></span>
<span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Run tests</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="contribution-process" tabindex="-1"><a class="header-anchor" href="#contribution-process"><span>Contribution Process</span></a></h4>
<ol>
<li><strong>Fork</strong> the repository on GitHub</li>
<li><strong>Create a branch</strong> for your feature/fix:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/your-feature-name</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li><strong>Make changes</strong> and commit:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"feat: add new feature"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>Push</strong> to your fork:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> push origin feature/your-feature-name</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li><strong>Create a Pull Request</strong> on GitHub</li>
</ol>
<h4 id="commit-conventions" tabindex="-1"><a class="header-anchor" href="#commit-conventions"><span>Commit Conventions</span></a></h4>
<p>We use <a href="https://www.conventionalcommits.org/" target="_blank" rel="noopener noreferrer">Conventional Commits</a>:</p>
<ul>
<li><code v-pre>feat:</code> for new features</li>
<li><code v-pre>fix:</code> for bug fixes</li>
<li><code v-pre>docs:</code> for documentation changes</li>
<li><code v-pre>style:</code> for formatting changes</li>
<li><code v-pre>refactor:</code> for code refactoring</li>
<li><code v-pre>test:</code> for adding or modifying tests</li>
<li><code v-pre>chore:</code> for build/configuration changes</li>
</ul>
<h3 id="🧪-testing" tabindex="-1"><a class="header-anchor" href="#🧪-testing"><span>🧪 Testing</span></a></h3>
<p>Help us test:</p>
<ul>
<li>Try new features</li>
<li>Verify bug fixes</li>
<li>Test on different operating systems</li>
<li>Report performance issues</li>
</ul>
<h2 id="code-guidelines" tabindex="-1"><a class="header-anchor" href="#code-guidelines"><span>Code Guidelines</span></a></h2>
<h3 id="code-style" tabindex="-1"><a class="header-anchor" href="#code-style"><span>Code Style</span></a></h3>
<ul>
<li>Follow the project's ESLint conventions</li>
<li>Write readable, well-commented code</li>
<li>Add tests for new features</li>
<li>Maintain high test coverage</li>
</ul>
<h3 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h3>
<ul>
<li>Keep code modular</li>
<li>Follow SOLID principles</li>
<li>Avoid code duplication</li>
<li>Document public APIs</li>
</ul>
<h3 id="domain-driven-design" tabindex="-1"><a class="header-anchor" href="#domain-driven-design"><span>Domain-Driven Design</span></a></h3>
<p>Since Edge Mining follows Domain-Driven Design principles:</p>
<ul>
<li><strong>Entities</strong>: Implement as classes with identity and lifecycle</li>
<li><strong>Value Objects</strong>: Immutable objects representing concepts</li>
<li><strong>Aggregates</strong>: Clusters of entities with consistency boundaries</li>
<li><strong>Repositories</strong>: Abstract data access for aggregates</li>
<li><strong>Services</strong>: Domain logic that doesn't belong to entities</li>
</ul>
<h2 id="review-process" tabindex="-1"><a class="header-anchor" href="#review-process"><span>Review Process</span></a></h2>
<ol>
<li><strong>Automatic checks</strong>: All PRs must pass automatic tests</li>
<li><strong>Code review</strong>: At least one maintainer must approve</li>
<li><strong>Testing</strong>: Changes must be tested</li>
<li><strong>Documentation</strong>: Update documentation if necessary</li>
</ol>
<h2 id="community" tabindex="-1"><a class="header-anchor" href="#community"><span>Community</span></a></h2>
<h3 id="communication-channels" tabindex="-1"><a class="header-anchor" href="#communication-channels"><span>Communication Channels</span></a></h3>
<ul>
<li><strong>GitHub Issues</strong>: For bugs and feature requests</li>
<li><strong>GitHub Discussions</strong>: For general discussions</li>
<li><strong>Discord</strong>: <a href="https://discord.gg/edgemining" target="_blank" rel="noopener noreferrer">Join our community</a></li>
<li><strong>Main Website</strong>: <a href="https://edgemining.energy" target="_blank" rel="noopener noreferrer">edgemining.energy</a></li>
</ul>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3>
<ul>
<li><strong>Hacktoberfest</strong>: Participate every October</li>
<li><strong>Community calls</strong>: Monthly community calls</li>
<li><strong>Development sprints</strong>: Intensive development sessions</li>
</ul>
<h2 id="acknowledgments" tabindex="-1"><a class="header-anchor" href="#acknowledgments"><span>Acknowledgments</span></a></h2>
<p>All contributors are listed in the <a href="https://github.com/edge-mining/docs/blob/main/CONTRIBUTORS.md" target="_blank" rel="noopener noreferrer">CONTRIBUTORS.md</a> file.</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>
<p>By contributing to Edge Mining, you agree that your contributions will be released under the MIT license of the project.</p>
<h2 id="questions" tabindex="-1"><a class="header-anchor" href="#questions"><span>Questions?</span></a></h2>
<p>If you have questions about contributing, don't hesitate to:</p>
<ul>
<li>Open an issue on GitHub</li>
<li>Ask on GitHub Discussions</li>
<li>Contact the maintainers on Discord</li>
</ul>
<p>Thank you for your contribution! 🚀</p>
</div></template>


