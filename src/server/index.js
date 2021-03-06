const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const publicweb = process.env.PUBLICWEB || "./publicweb";

app.use(express.static(publicweb));
console.log("serving ${publicweb/}");

app.get("*", (req, res) => {
  res.sendfile("index.html", { root: publicweb });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
