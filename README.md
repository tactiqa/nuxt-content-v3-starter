# Nuxt Content v3 Starter

A modern starter template for Nuxt 3 with Content v3, featuring:

- 📝 **Nuxt Content v3** - Write in Markdown, Vue components, or MDC syntax
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- ✨ **Code Highlighting** - Beautiful syntax highlighting with Prism.js
- 🔍 **Full-text Search** - Built-in search functionality
- 📱 **Responsive Design** - Works on all device sizes
- ⚡ **Fast Performance** - Built with performance in mind

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nuxt-content-v3-starter.git
   cd nuxt-content-v3-starter
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   
   # Using bun
   bun install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   
   # Using bun
   bun run dev
   ```

   The application will be available at `http://localhost:3000`

## 🛠️ Project Structure

```
.
├── assets/          # Global assets (CSS, images, fonts)
├── components/      # Vue components
├── content/         # Content directory for Markdown files
├── pages/           # Application views and routes
├── public/          # Static files
├── server/          # Server routes and API endpoints
├── app.vue          # Main application component
├── nuxt.config.ts   # Nuxt configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 📝 Writing Content

Create `.md` files in the `content/` directory. You can use:

- Standard Markdown
- Vue components
- Frontmatter for metadata
- MDC (Markdown Components) syntax

Example:

```md
---
title: My First Post
description: This is my first post
publishedAt: 2023-01-01
---

# Welcome to My Blog

This is a **markdown** content with a Vue component:

<MyComponent />
```

## 🏗️ Building for Production

To create a production build:

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📚 Learn More

- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt Content Documentation](https://content.nuxtjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is [MIT](LICENSE) licensed.

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
