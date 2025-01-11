// src/server.js
import express from "express";
import fs from "fs";
import path from "path";
import { createServer } from "vite";

// Server-side rendering directly in the server file
const app = express();

async function createViteServer() {
  const vite = await createServer({
    server: { middlewareMode: "ssr" }, // Enable SSR middleware mode
  });

  app.use(vite.middlewares); // Use Vite's middleware for development
  app.use(express.static(path.resolve("dist")));

  app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.resolve("dist/sitemap.xml"));
  });
  // Handling all incoming requests
  app.all("*", async (req, res) => {
    try {
      // Read the built HTML template file
      const template = fs.readFileSync(
        path.resolve("dist/index.html"),
        "utf-8"
      );

      // Render the HTML directly from entry-server.js without importing render()
      const render = require("./entry-server.jsx"); // Import the SSR output from entry-server.js
      const context = {};
      // Inject SSR content into the HTML template
      const appHtml = render(req.originalUrl, context);
      if (context.url) {
        return res.redirect(301, context.url); // Handle redirects
      }

      const html = template.replace("<!--ssr-outlet-->", appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
}

createViteServer().then(() => {
  app.listen(3000, () => {
    console.log("SSR app running at http://localhost:3000");
  });
});
