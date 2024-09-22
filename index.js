import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer({
    default: "uv",
    uv: true,
    scramjet: false,
    meteor: false,
    rammerhead: true,
}
);
const port = process.env.PORT || 8080; 

app.use(express.static("dist"));

app.serveChemical();

app.use((req, res) => {
    res.status(404);
    res.send("404 Error");
});

listen(port, () => {
    console.log(`listening on port ${port}`);
});