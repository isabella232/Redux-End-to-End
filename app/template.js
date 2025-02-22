export default (html, state) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redux: End to End</title>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/app.css">
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
  </head>
  <body>
    <div id="app">${html}</div>
  </body>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
  </script>
  <script src="/assets/bundle.js"></script>
</html>
`
