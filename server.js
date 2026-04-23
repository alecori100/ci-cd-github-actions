const app = require("./app");

const PORT = process.env.PORT || 4050

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});