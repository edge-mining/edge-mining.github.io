# Edge Mining Website Repository

This repository contains the **VuePress website** for Edge Mining. The documentation content is automatically synced from the [edge-mining/docs](https://github.com/edge-mining/docs) repository.

## 🎯 For Website Developers

This repository is specifically for **website development and deployment**. The documentation content is automatically synced from the [edge-mining/docs](https://github.com/edge-mining/docs) repository.

> **🛠️ For Developers**: This repository is for **technical development** - VuePress configuration, styling, build processes, and deployment. If you're an **editor** making content changes, use the [edge-mining/docs](https://github.com/edge-mining/docs) repository instead.

## 📁 Repository Structure

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

## 🔄 Workflow for Website Changes

### **How to Contribute:**

1. **Edit Website**: Modify VuePress configuration, styling, or build processes
2. **Test Locally**: Use the development server to preview changes
3. **Commit Changes**: Push to this repository
4. **Auto-Deploy**: Changes are automatically deployed to [edgemining.energy](https://edgemining.energy)

### **Repository Relationships:**

```
Documentation Repository (edge-mining/docs) - FOR EDITORS
    ↓ (Auto-sync)
Website Repository (edge-mining/edgemining.energy) - FOR DEVELOPERS
    ↓ (Auto-deploy)
Live Site (edgemining.energy)
```

## 🛠️ Local Development

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

## 📝 Development Guidelines

### **File Organization:**
- **`docs/.vuepress/config.js`**: VuePress site configuration
- **`docs/.vuepress/styles/`**: Custom CSS and styling
- **`docs/.vuepress/public/`**: Static assets (logo, favicon)
- **`docs/docs/`**: Documentation content (auto-synced, don't edit)

### **Development Standards:**
- Follow VuePress 2.0 conventions
- Use consistent styling and theming
- Test changes locally before committing
- Keep build process optimized

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