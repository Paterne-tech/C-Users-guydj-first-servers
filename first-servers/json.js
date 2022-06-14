const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"etudiant": [
        {
            "ID": "001",
            "nom": "DJE BI",
            "prenom": "Paterne",
            "level": "2",
            "specialite": "Prog"
        },
        {
            "ID": "002",
            "nom": "Tchejon",
            "prenom": "Gatien",
            "level": "2",
            "specialite": "Prog"
        }
    ]
    }`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});