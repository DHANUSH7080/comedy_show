const express=require('express');

const app= express();


app.use(express.static('public')); //public folder la irukradha run pandraku

app.listen(8000);



