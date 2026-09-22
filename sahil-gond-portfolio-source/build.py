"""Assembles style.css + body.html + main.js + portrait.webp into a single index.html.
Usage:  python3 build.py      (writes ./index.html)
Edit content (email, GitHub URL, projects, experience) at the top of main.js."""
import base64, pathlib
here = pathlib.Path(__file__).parent
b64 = base64.b64encode((here / 'portrait.webp').read_bytes()).decode()
css = (here / 'style.css').read_text()
body = (here / 'body.html').read_text()
js = (here / 'main.js').read_text().replace('__PORTRAIT__', 'data:image/webp;base64,' + b64)
html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Sahil Gond — The Engineering Dashboard</title>
<meta name="description" content="Portfolio of Sahil Gond — Electrical Engineering student working in embedded systems, robotics and automation.">
<meta name="theme-color" content="#030303">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Dosis:wght@200..600&family=IBM+Plex+Mono:wght@300;400;500&family=Jost:wght@200..500&display=swap" rel="stylesheet">
<style>
{css}
</style>
</head>
<body>
{body}
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"></script>
<script>
{js}
</script>
</body>
</html>'''
(here / 'index.html').write_text(html)
print('index.html written,', len(html) // 1024, 'KB')
