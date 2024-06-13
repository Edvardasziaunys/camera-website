const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server started"));

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

app.post("/cameras", (req, res) => {
  const { make, model, image, spec, description } = req.body;

  if (!make || !model || !image || !spec || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newCamera = {
    id: data.length + 1,
    make,
    model,
    image,
    spec,
    description,
  };

  data.push(newCamera);

  res.status(201).json(newCamera);
});

app.delete("/cameras/:id", (req, res) => {
  const { id } = req.params;
  const index = data.findIndex((camera) => camera.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Camera not found" });
  }

  const deletedCamera = data.splice(index, 1);

  res.status(200).json(deletedCamera[0]);
});

const galleryData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1621654580859-6a970180a89f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hoooooot vacation",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1633891943299-9b140ba00a39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Saturday Fun",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1717238977937-1a6d8c95d3b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Love this place",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1495472772658-b1d6f8472877?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Don't ask",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1505735754789-3404132203ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perfecto",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1527261655500-59c476c630c2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Miss this",
  },
];

app.get("/gallery", (req, res) => {
  res.status(200).json(galleryData);
});

app.post("/gallery", (req, res) => {
  const { image, description } = req.body;

  if (!image || !description) {
    return res
      .status(400)
      .json({ error: "Image and description are required" });
  }

  const newGalleryItem = {
    id: galleryData.length + 1,
    image,
    description,
  };

  galleryData.push(newGalleryItem);

  res.status(201).json(newGalleryItem);
});

app.get("/gallery/limit", (req, res) => {
  res.status(200).json(galleryData.slice(0, 3));
});

app.delete("/gallery/:id", (req, res) => {
  const { id } = req.params;
  const index = galleryData.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Gallery item not found" });
  }

  const deletedGalleryItem = galleryData.splice(index, 1);

  res.status(200).json(deletedGalleryItem[0]);
});
