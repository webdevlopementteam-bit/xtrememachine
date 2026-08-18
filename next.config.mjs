/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> writes to ./out. No server-only features
  // (middleware, API routes, next/image optimization, dynamic route
  // params) are used anywhere in this app, so this is a clean fit.
  output: "export",
  // Every page.jsx that declares its own canonical already uses a trailing
  // slash (e.g. https://www.xtrememachines.in/kneader-machine-in-gujarat/).
  // Matching that here means each route exports as <route>/index.html,
  // which is also what plain static/shared hosting (Apache, Nginx, cPanel)
  // serves correctly by default without extra rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
