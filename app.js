var express = require('express')
var app = express();
const csv = require('csv-parser');
const fs = require('fs');
const res = require('express/lib/response');
const cors = require('cors');

app.use(cors());

app.get('/api/prices', function (request, response) {
    const { type } = require('os');

    result = []

    fs.createReadStream('cars.csv')
        .pipe(csv({}))
        .on('data', (data) => result.push(data))
        .on('end', () => {
            // for (i = 0; i < result.length; i++) {
            //     x = result[i].Ex_Showroom_Price;
            //     x = x.slice(4,)
            //     let num = 0;
            //     let count = 0;
            //     for (j = 0; j < x.length; j++) {
            //         if (x[j] != ',') {
            //             num += Math.pow(10, (x.length - j + count - 1)) * (x[j] - '0');
            //         }
            //         else {
            //             count++;
            //         }
            //         //2,92,667   
            //     }
            //     let ans = num
            //     for (k = 0; k < count; k++) {
            //         ans = ans / 10;
            //     }
            //     if (ans > 500000) {
            //         response.send(console.log(result[i].Model))
            //     }
            // }
            response.send(result);
        })
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});