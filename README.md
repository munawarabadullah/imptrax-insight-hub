# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6b094e8c-7a5c-473a-8d86-b76e6eca659c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6b094e8c-7a5c-473a-8d86-b76e6eca659c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6b094e8c-7a5c-473a-8d86-b76e6eca659c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

Read Instructions form Instructions.MD file if there is any URL in instructions. 

Read Instruction.MD file nd follow the instructions. 
Read Actionable.MD file and follow the instructions.

## Article Management Guidelines

### Article Structure and Location

**IMPORTANT**: All articles must follow this exact structure to prevent broken links and ensure proper functionality.

#### Article File Locations:
- **Article Content**: All article markdown files must be placed in `/src/content/articles/`
- **Article Images**: All article SVG images must be placed in `/public/articles/`
- **Article Routing**: Articles are accessible via `/insight/articles/{slug}` URL pattern

#### Required Article Structure:

1. **Article Markdown Files** (`/src/content/articles/`):
   - File naming: Use kebab-case (e.g., `future-of-ai-in-healthcare.md`)
   - Must include frontmatter with: title, author, date, category, readTime, image, excerpt
   - Content should be SEO-optimized with proper headings and structure

2. **Article Images** (`/public/articles/`):
   - Must be SVG format for scalability and performance
   - File naming should match article slug (e.g., `future-of-ai-in-healthcare.svg`)
   - Use theme colors: #1e40af (blue), #7c3aed (purple), #059669 (green), #dc2626 (red)

3. **Article Listing** (`/src/pages/Insight.tsx`):
   - Each article must be added to the `articles` array
   - Required fields: id, title, category, excerpt, image, slug, readTime, publishDate
   - Slug must match the markdown filename (without .md extension)

#### Article Routing Configuration:

- **Main Insight Page**: `/insight` - Lists all articles
- **Individual Articles**: `/insight/articles/{slug}` - Displays specific article
- **Route Handler**: Defined in `/src/App.tsx` as `<Route path="/insight/articles/:slug" element={<ArticleTemplate />} />`

#### Adding New Articles Checklist:

1. ✅ Create markdown file in `/src/content/articles/`
2. ✅ Create corresponding SVG image in `/public/articles/`
3. ✅ Add article metadata to `articles` array in `/src/pages/Insight.tsx`
4. ✅ Ensure slug matches filename (without extension)
5. ✅ Test article accessibility via `/insight/articles/{slug}` URL

#### Current Articles:
- `mid-market-firms-ai-competitive-advantage.md`
- `digital-transformation-mid-market-companies.md`
- `data-analytics-business-intelligence-insights.md`
- `future-cloud-computing-trends-predictions-2024.md`
- `life-at-imptrax-building-innovation-through-collaboration.md`
- `modern-application-development-best-practices-methodologies.md`
- `future-of-ai-in-healthcare.md`

#### Common Mistakes to Avoid:

❌ **DO NOT**:
- Place articles outside `/src/content/articles/` folder
- Use different image paths than `/public/articles/`
- Forget to add article to Insight.tsx articles array
- Use mismatched slugs between filename and articles array
- Create articles without corresponding images

✅ **DO**:
- Follow the exact folder structure outlined above
- Use consistent naming conventions
- Test all article links after creation
- Ensure all images are SVG format
- Include proper SEO metadata in frontmatter

This structure ensures all articles are properly routed, displayed on the Insight page, and accessible via clean URLs without broken links.
