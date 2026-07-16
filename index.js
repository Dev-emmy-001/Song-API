const express = require("express");

const app = express();
const port = 2001
const music = [

  {
    artist: "BBO",
    title: "ORO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLVSHATqA1smg0S2EOQn6aQnk_5T17wa9JEcsahkcRQ&s=10",
    url: "https://open.spotify.com/track/5AhlBbGHo9QM9dq3cY9zUb?si=8607a1188725486c"
  },

  {
    artist: "BisiManuel",
    title: "Aanu Ni",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHrb2ynpaD_FISMPxuz2cvPm1Kt9nnNUqLoC3K54kUw&s=10",
    url: "https://open.spotify.com/artist/0Amnqd5gvxgxmuRx1cPzAO?si=570146e4cd034e38"
  },

  {
    artist: "Tope Alabi",
    title: "Ka ma ma ri",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoOI7783IH8JPt4LlIEKiLl3FOjdxGcgY-pZYpZyjRw&s=10",
    url: "https://open.spotify.com/artist/1WDoaSGtFrO4ZPMZqLiaEU?si=222dc64242514036"
  },

  {
    artist: "nathaniel bassey",
    title: "Iba",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U8fuV5Yp9acgrzHRkmdIzMqFl3iowI19q3UjrPFLVA&s=10",
    url: "https://open.spotify.com/artist/49BZ6sJNhvubVBsomYuLFM?si=0cb8940689a8489f"
  },

  {
    artist: "Mercy Chinwo",
    title: "Wonder",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfC19ZTi-4yIxR7blpL8rTOXtwI-5W25GcLdcm3vcdQ&s=10",
    url: "https://open.spotify.com/track/7lu3WaqWNpyipOU14owmub?si=f4c71ee02ef84aa0"
  },

  {
    artist: "EmmaOMG",
    title: "E Ti Tobi to",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYOE8_6x0vfYywWmAL5nZUQ4oGECBTaKzOc5BAdhm5Q&s",
    url: "https://open.spotify.com/track/6CyvOdf4V0PM8mU3ktVzsh?si=a4c98bf3d8af4296" 
  },

  {
    artist: "Tkeyz",
    title: "Oluwatosin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvp9wyXNKXnCvG-e-kcxswYyODie5wP__NAICR0JHAQ&s=10",
    url: "https://open.spotify.com/artist/6MRNiMCUDv9mDmMcaXhjgI?si=a79db4cd42664303"
  },

  {
    artist: "BBO",
    title: "My God",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbcOIXtri8kUhIAtTQTZP7kFJClLnqL-oZ5t5ABzxRQ&s=10",
    url: "https://open.spotify.com/track/0RVWYiqpXx4yl4piv0MPLM?si=27b65583e30b4754"
  },

  {
    artist: "lawrence Oyor",
    title: "Favour",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzyGrpmlCG1024bqG1shGYZ9upK_0i_sRxvWuoo3GQg&s=10",
    url: "https://open.spotify.com/artist/5VjrwmzHaE5YI54qdzIoiI?si=aa9532436cf94a09"
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },

  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },
  {
    artist: "",
    title: "",
    image: "",
    url: ""
  },
]



app.get('/port', (req, res) =>{
  res.send(port)
})


app.listen(port, ()=>{
  console.log("Server listening on", port);
  
})