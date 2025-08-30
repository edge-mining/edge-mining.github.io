---
home: true
heroText: Edge Mining
tagline: mine your energy
actions:
  - text: Documentation
    link: /docs/intro.html
    type: primary
  - text: GitHub
    link: https://github.com/edge-mining/edgemining.energy
    type: secondary
features:
  - title: Smart automation
    details: Intelligent automation based on energy availability to maximize efficiency
  - title: Heat recovery
    details: Advanced heat recovery systems for practical applications
  - title: Versatile sizing
    details: Designed for small to medium energy installations
  - title: 100% open-source
    details: Fully open-source with no licensing fees
footer: MIT Licensed | Copyright © 2024 Edge Mining Team
---

## About Edge Mining

Edge Mining is a research-driven, open-source initiative transforming surplus energy into Bitcoin-powered digital value, unlocking new economic possibilities from otherwise wasted resources.

## Why We Exist

Energy often goes unused during low-demand periods. Instead of selling cheaply, investing in costly storage, or wasting this energy, Edge Mining converts it directly into Bitcoin, creating value sustainably and intelligently.

::: tip We're in Alpha
Edge Mining is currently in an early, alpha stage of development. Our research-driven approach is rapidly evolving, and features, performance, and reliability are continuously improving.
:::

## Get Involved

Join our growing community of developers and energy enthusiasts. Together, we're building the future of energy optimization.

### Discord

Connect with our community to discuss ideas, ask questions, and collaborate on new features.

<a href="https://discord.com/invite/VQa9UY5SsS" target="_blank" class="action-button">Join Discord</a>

### GitHub

Explore our codebase, contribute to development, or fork the project to create your own solution.

<a href="https://github.com/edge-mining/edgemining.energy" target="_blank" class="action-button">View on GitHub</a>

---

## Repository Information

This repository contains the **VuePress website** for Edge Mining. The documentation content is automatically synced from the [edge-mining/docs](https://github.com/edge-mining/docs) repository.

### 🎯 For Website Developers

This repository is for **website development and deployment**. The documentation content is automatically synced from the [edge-mining/docs](https://github.com/edge-mining/docs) repository.

> **🛠️ For Developers**: This repository is for **technical development** - VuePress configuration, styling, build processes, and deployment. If you're an **editor** making content changes, use the [edge-mining/docs](https://github.com/edge-mining/docs) repository instead.

### 🔄 Repository Workflow

```
Documentation Changes:
edge-mining/docs (FOR EDITORS)
    ↓ (Auto-sync)
edge-mining/edgemining.energy (FOR DEVELOPERS)
    ↓ (Auto-deploy)
Live Site (edgemining.energy)

Website Changes:
edge-mining/edgemining.energy (FOR DEVELOPERS)
    ↓ (Auto-deploy)
Live Site (edgemining.energy)
```

### 📁 Repository Structure

```
edgemining.energy/
├── docs/                     # VuePress site (auto-synced from edge-mining/docs)
│   ├── .vuepress/           # VuePress configuration
│   │   ├── config.js        # Site configuration
│   │   ├── styles/          # Custom CSS styles
│   │   └── public/          # Static assets (logo, favicon)
│   ├── docs/                # Documentation content (auto-synced)
│   └── README.md            # Homepage content
├── package.json             # Dependencies and scripts
└── .github/workflows/       # Build and deploy workflows
```

## 🛠️ Development

### **For Website Development:**

```bash
# Clone this repository
git clone https://github.com/edge-mining/edgemining.energy.git
cd edgemining.energy

# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Clean build files
npm run docs:clean
```

### **Access:**
- **Development**: `http://localhost:8080/`
- **Production**: [edgemining.energy](https://edgemining.energy)

## 📝 Contribution Workflow

### **For Documentation Changes:**
1. **Don't edit docs here** - Edit in [edge-mining/docs](https://github.com/edge-mining/docs) instead
2. **Documentation is auto-synced** from the documentation repository
3. **Create PR to edge-mining/docs** for documentation changes

### **For Website Changes:**
1. **Edit VuePress configuration** in this repository
2. **Test locally** with `npm run docs:dev`
3. **Create PR to this repository** for website changes
4. **Changes auto-deploy** to the live site

## 🔗 Important Links

- **Documentation Repository**: [edge-mining/docs](https://github.com/edge-mining/docs) (for editors)
- **Live Website**: [edgemining.energy](https://edgemining.energy)
- **Community**: [Discord](https://discord.com/invite/VQa9UY5SsS)

## ⚠️ Important Notes

- **Auto-deploy**: Changes here automatically deploy to the live site
- **Documentation sync**: Documentation is automatically synced from edge-mining/docs
- **No direct editing**: Don't edit documentation content here
- **Developer-focused**: This repository is for technical development, not content editing

## 🎯 Next Steps for Contributors

1. **Fork this repository** (if you haven't already)
2. **Make your changes** to the website/VuePress configuration
3. **Test locally** using the development server
4. **Create a Pull Request** to this repository
5. **Wait for review and merge**
6. **Changes will automatically deploy** to the live site

---

**Note**: This repository is for the VuePress website only. Documentation content should be edited in the [edge-mining/docs](https://github.com/edge-mining/docs) repository. 