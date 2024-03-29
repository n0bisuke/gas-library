import { jsxRenderer } from 'hono/jsx-renderer'
import { css, cx, keyframes, Style } from 'hono/css'

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html lang='ja'>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link href="/style.css" rel="stylesheet" />
          <title>{title}</title>
          <Style />

          <meta name="description" content="Google Apps Script（GAS）の3rdパーティライブラリを簡単に検索・利用できる一覧サイトです。" />
          <meta name="keywords" content="Google Apps Script, GAS, 3rdパーティライブラリ, プログラミング, 開発" />
          <meta property="og:title" content="GAS 3rdパーティライブラリ一覧" />
          <meta property="og:description" content="Google Apps Script（GAS）の3rdパーティライブラリを簡単に検索・利用できる一覧サイトです。" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gas-library.suke.dev" />
          <meta property="og:image" content="https://gas-library.suke.dev/thumbnail.jpg" />
          <meta property="og:site_name" content="GAS 3rdパーティライブラリ一覧" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@yourtwitterhandle" />
          <meta name="twitter:title" content="GAS 3rdパーティライブラリ一覧" />
          <meta name="twitter:description" content="Google Apps Script（GAS）の3rdパーティライブラリを簡単に検索・利用できる一覧サイトです。" />
          <meta name="twitter:image" content="https://gas-library.suke.dev/thumbnail.jpg" />
          <meta name="google-site-verification" content="hsCXnxSP3MIT0vA_AUCiNLHqbBFGM4WG53Dk5NFucPI" />
          <link rel="canonical" href="https://gas-library.suke.dev/" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css" integrity="sha512-/mZ1FHPkg6EKcxo0fKXF51ak6Cr2ocgDi5ytaTBjsQZIH/RNs6GF6+oId/vPe3eJB836T36nXwVh/WBl/cWT4w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <body>{children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" integrity="sha512-UOoJElONeUNzQbbKQbjldDf9MwOHqxNz49NNJJ1d90yp+X9edsHyJoAs6O4K19CZGaIdjI5ohK+O2y5lBTW6uQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </body>
      </html>
    )
  },
  {
    docType: true
  }
)
