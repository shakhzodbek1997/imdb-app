This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


------------------My Changes------------
1.  to strat npm run dev
2.  cleaned the project from unnecessary files
3. uploaded to the GitHub
4. installed tailwindCSS 
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p
    (after this, two files will be added to the project [tailwind.config.js and postcss.config.js])
    - after that you should configure your template paths! you should add this to taillwind.config.js file (first delete all code inside this file and paste code in the below)
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    - Add Tailwind directives to your CSS (globals.css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    - run your website (npm run dev)
---------------------------------------------------------
5. installed react ICONS 
   -> npm install react-icons --save
6. To change theme we need --> Next-themes
  ->  npm install next-themes

  then, we will ad Providers(created in app folder) to the Layout.js file
7. add this code to tailwind.cofig.js file 
   darkMode: "class",
8. Navbar created
9. Fetched data from TMDB API in the home page
10. created .env.local file 
    - stored API_KEY = debab4e454a7c17cb1a2a1d46b7c317b
  after that re-run you code
(!!! NEVER UPLOAD THIS FILE TO THE GITHUB  it must be secure!!!)
11. Error handled. 
12. loading Effect
13. added image cofig to the next.config.js 
    images: {
    domains: ["image.tmdb.org"],
  }
14. to show only 2 lines of text i used
    - instaled:-> npm install -D @tailwindcss/line-clamp
    - added this plugin to tailwind.config.js : require('@tailwindcss/line-clamp'),
    or you may use this: ->  - truncate class
    