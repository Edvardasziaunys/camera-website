const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server started"));

// const { MongoClient, ObjectId } = require("mongodb");
// const connectionString =
//   "mongodb+srv://edvardasziaunys:am6V9odk7n1YJCqn@edvardasz.kl4ryvz.mongodb.net/?retryWrites=true&w=majority&appName=Edvardasz";
// const client = new MongoClient(connectionString);
// let conn;
// let db;

// app.use(express.static("dist"));

// async function connect() {
//   try {
//     conn = await client.connect();
//     db = conn.db("CameraWebsite");
//   } catch (e) {
//     console.error(e);
//   }
// }
// connect();

// app.get("/cameras", async (req, res) => {
//   const cameras = db.collection("Cameras");
//   const allCameras = await cameras.find().toArray();
//   res.json(allCameras);
// });

// app.get("/gallery", async (req, res) => {
//   const gallery = db.collection("Gallery");
//   const allGallery = await gallery.find().toArray();
//   res.json(allGallery);
// });

const data = [
  {
    id: 1,
    make: "Sony",
    model: "A7iii",
    image:
      "https://images.unsplash.com/photo-1606986601547-a4d886b671b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spec: "Effective: 24.2 Megapixel (6000 x 4000)",
    description: "Very good for photos and videos, best one I ever had",
  },
  {
    id: 2,
    make: "Sony",
    model: "FX30",
    image:
      "https://images.unsplash.com/photo-1675011718475-f257cb602a28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spec: "Effective: 26 Megapixel (6192 x 4128)",
    description: "Great for photos",
  },
  {
    id: 3,
    make: "Lumix",
    model: "GH5",
    image:
      "https://images.unsplash.com/photo-1515986884237-775f25f38eb8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spec: "Effective: 25.2 Megapixel (5776 x 4336)",
    description: "Great all arounder",
  },
  {
    id: 4,
    make: "Nikon",
    model: "Z8",
    image:
      "https://images.unsplash.com/photo-1614108831136-a6bba175a08e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spec: "Effective: 45.7 Megapixel (8256 x 5504)",
    description: "Awesome camera, a pleasure to use",
  },
  {
    id: 5,
    make: "Canon",
    model: "EOS 60D",
    image:
      "https://images.unsplash.com/photo-1533246860975-b290a87773d3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spec: "Effective: 18 Megapixel",
    description: "Very first camera, loved it at the time",
  },
  {
    id: 6,
    make: "Polaroid",
    model: "1000 Deluxe",
    image:
      "https://images.unsplash.com/photo-1488241561087-799714b46586?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spec: "f/8 to 64",
    description:
      "Best thing I ever bought, can't get enough of it, usable for all occasions",
  },
];

app.get("/cameras", (req, res) => {
  res.status(200).json(data);
});
