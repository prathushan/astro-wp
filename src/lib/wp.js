---
import { getHomePage } from '../lib/wp.js';

const homePage = await getHomePage();
const content = homePage ? homePage.content.rendered : "<p>Content not available</p>";
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{homePage ? homePage.title.rendered : 'Home'}</title>
  
  <!-- Load WordPress CSS -->
  <link rel="stylesheet" href="https://dev-fit-quest-challenge.pantheonsite.io/wp-includes/css/dist/block-library/style.min.css">
</head>
<body>
  <h1>{homePage?.title.rendered}</h1>

  <div id="content" class="wp-content" set:html={content}></div>

  <script>
    async function fetchHomePage() {
      const response = await fetch('https://dev-fit-quest-challenge.pantheonsite.io/wp-json/wp/v2/pages?slug=home');
      const pages = await response.json();
      if (pages.length > 0) {
        document.getElementById('content').innerHTML = pages[0].content.rendered;
      }
    }

    setInterval(fetchHomePage, 5000); // Refresh every 5 seconds
  </script>
</body>
</html>
