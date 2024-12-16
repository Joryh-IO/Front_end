// const fs = require("fs");
// const qr = require("qr-image");

import qr from "qr-image";
import fs from "node:fs";

var t = "https://www.youtube.com/watch?v=2X_2IdybTV0";

function gen(){
    fs.unlink("generated.svg",(err)=>{
        if(err)console.log("error deleting file");
        else console.log("done deletion");
    });
    var t = document.getElementById("textbox").value;
    var qr_svg = qr.image(t, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('generated.svg'));
    var svg_string = qr.imageSync(t, { type: 'svg' });
}
