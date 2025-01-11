import fs from "fs"; // To work with the file system
import path from "path"; // To handle file paths
import blogData from "./src/Db/blogs.js";
const outputPath = path.join("public", "sitemap.xml");

const generateSitemap = async () => {
  try {
    let dynamicPaths = [];
    // Create the XML content as a string
    // let baseUrl = "http://localhost:3000";
    let baseUrl = "https://mahaballoonadventures.ae";
    const blogRoutes = blogData
      .map((blog) => `/blog/${blog.route}`) // Generate individual blog route
      .map((blogRoute) => ({
        path: blogRoute,
        priority: 0.7,
        changefreq: "daily",
      }));

    dynamicPaths = [...dynamicPaths, ...blogRoutes];

    let xmlFiletoWrite = dynamicPaths?.map((item) => {
      return `<url> <loc>${baseUrl}${item?.path}</loc> </url>\n<url> <loc>${baseUrl}/en${item?.path}</loc> </url>\n<url> <loc>${baseUrl}/ar${item?.path}</loc> </url>`;
    });

    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">


<url> <loc>${baseUrl}/</loc> </url>
<url> <loc>${baseUrl}/why-us</loc> </url>
<url> <loc>${baseUrl}/en/why-us</loc> </url>
<url> <loc>${baseUrl}/ar/why-us</loc> </url>

<url> <loc>${baseUrl}/experiences</loc> </url>
<url> <loc>${baseUrl}/en/experiences</loc> </url>
<url> <loc>${baseUrl}/ar/experiences</loc> </url>

<url> <loc>${baseUrl}/things-to-do</loc> </url>
<url> <loc>${baseUrl}/en/things-to-do</loc> </url>
<url> <loc>${baseUrl}/ar/things-to-do</loc> </url>

<url> <loc>${baseUrl}/testimonial</loc> </url>
<url> <loc>${baseUrl}/en/testimonial</loc> </url>
<url> <loc>${baseUrl}/ar/testimonial</loc> </url>

<url> <loc>${baseUrl}/merchandise</loc> </url>
<url> <loc>${baseUrl}/en/merchandise</loc> </url>
<url> <loc>${baseUrl}/ar/merchandise</loc> </url>

<url> <loc>${baseUrl}/blogs</loc> </url>
<url> <loc>${baseUrl}/en/blogs</loc> </url>
<url> <loc>${baseUrl}/ar/blogs</loc> </url>


<url> <loc>${baseUrl}/contact-us</loc> </url>
<url> <loc>${baseUrl}/en/contact-us</loc> </url>
<url> <loc>${baseUrl}/ar/contact-us</loc> </url>

<url> <loc>${baseUrl}/privacy-policy</loc> </url>
<url> <loc>${baseUrl}/en/privacy-policy</loc> </url>
<url> <loc>${baseUrl}/ar/privacy-policy</loc> </url>


<url> <loc>${baseUrl}/terms</loc> </url>
<url> <loc>${baseUrl}/en/terms</loc> </url>
<url> <loc>${baseUrl}/ar/terms</loc> </url>


<url> <loc>${baseUrl}/faqs</loc> </url>
<url> <loc>${baseUrl}/en/faqs</loc> </url>
<url> <loc>${baseUrl}/ar/faqs</loc> </url>

<url> <loc>${baseUrl}/cart</loc> </url>
<url> <loc>${baseUrl}/en/cart</loc> </url>
<url> <loc>${baseUrl}/ar/cart</loc> </url>

<url> <loc>${baseUrl}/compare-packages</loc> </url>
<url> <loc>${baseUrl}/en/compare-packages</loc> </url>
<url> <loc>${baseUrl}/ar/compare-packages</loc> </url>

<url> <loc>${baseUrl}/wishlist</loc> </url>
<url> <loc>${baseUrl}/en/wishlist</loc> </url>
<url> <loc>${baseUrl}/ar/wishlist</loc> </url>

<url> <loc>${baseUrl}/404</loc> </url>


<url> <loc>${baseUrl}/b2b</loc> </url>
<url> <loc>${baseUrl}/en/b2b</loc> </url>
<url> <loc>${baseUrl}/ar/b2b</loc> </url>

<url> <loc>${baseUrl}/b2c</loc> </url>
<url> <loc>${baseUrl}/en/b2c</loc> </url>
<url> <loc>${baseUrl}/ar/b2c</loc> </url>

\n${xmlFiletoWrite?.map((item) => item.replace("&", "&amp;")).join("\n")}

</urlset>

`;
    // console.log("XML :", xmlData);

    fs.writeFile(outputPath, xmlData, (err) => {
      if (err) {
        console.error("Error writing XML file:", err);
      } else {
        console.log("XML file has been created in the public folder.");
      }
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
