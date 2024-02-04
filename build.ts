import { toSSG } from 'hono/bun'
import app from './src/index'

toSSG(app)


/**
 * sitemap
 * */
const BASE_URL = 'https://gas-library.suke.dev';
let sitemap_data_child = '';
// console.log('Build complete',app,app.routes)

//ビルドした時間
const BUILDED_TIME = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');

//下層ページのサイトマップを生成
for (const route of app.routes) {
    if (route.path !== '/' && route.path !== '/*') {
        sitemap_data_child += `
        <url>
            <loc>${BASE_URL}${route.path}</loc>
            <lastmod>${BUILDED_TIME}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>`;
    }
}

const sitemap_data = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${BASE_URL}</loc>
        <lastmod>${BUILDED_TIME}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>

    ${sitemap_data_child}
    
</urlset>`;

await Bun.write('static/sitemap.xml', sitemap_data);

/**
 * style.css
 * */
const style = `h1 { 
    font-family: Arial, Helvetica, sans-serif;
    color: #333333bf;
}`

await Bun.write('static/style.css', style);