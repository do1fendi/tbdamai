// import fs from "fs";
const fs = require("fs");

// const Sitemap = () => {};

const getServerSideProps = () => {
  const baseUrl = "https://tbdamai.net"

  const staticPages = fs
    .readdirSync("../out")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml",
        "_next",
        "404",
        "images",
        ".nojekyll",
        "Favicon.png",
        "vercel.svg",
        "detail",
        "login",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}/`;
    });

    const outDetail = fs
    .readdirSync("../out/detail")
    .map((staticPagePath) => {
      return `${baseUrl}/detail/${staticPagePath}/`;
    });

    const staticPages1 = staticPages.concat(outDetail)


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages1
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

//   res.setHeader("Content-Type", "text/xml");
//   res.write('/out/sitemap.xml', sitemap);
//   res.end();
  
  // fs.setHeader("Content-Type", "text/xml");
  fs.writeFile('../out/sitemap.xml', sitemap, function (err) {
    if (err) return console.log(err);
    console.log('success');
  });

//   return {
//     props: {},
//   };
};
getServerSideProps()
// export default Sitemap;