const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let clients = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-555-123-4567"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "+1-555-234-5678"
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol.williams@example.com",
      phone: "+1-555-345-6789"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@example.com",
      phone: "+1-555-456-7890"
    },
    {
      id: 5,
      name: "Eva Davis",
      email: "eva.davis@example.com",
      phone: "+1-555-567-8901"
    },
    {
      id: 6,
      name: "Frank Miller",
      email: "frank.miller@example.com",
      phone: "+1-555-678-9012"
    },
    {
      id: 7,
      name: "Grace Wilson",
      email: "grace.wilson@example.com",
      phone: "+1-555-789-0123"
    },
    {
      id: 8,
      name: "Henry Moore",
      email: "henry.moore@example.com",
      phone: "+1-555-890-1234"
    },
    {
      id: 9,
      name: "Isla Taylor",
      email: "isla.taylor@example.com",
      phone: "+1-555-901-2345"
    },
    {
      id: 10,
      name: "Jack Anderson",
      email: "jack.anderson@example.com",
      phone: "+1-555-012-3456"
    }
  ];
  

// Get all clients
app.get('/clients', (req, res) => {
    res.json(clients);
});

// Get a single client by ID
app.get('/clients/:id', (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) return res.status(404).send('Client not found');
    res.json(client);
});

// Create a new client
app.post('/clients', (req, res) => {
    const client = {
        id: clients.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    clients.push(client);
    res.status(201).json(client);
});

// Update a client
app.put('/clients/:id', (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) return res.status(404).send('Client not found');

    client.name = req.body.name;
    client.email = req.body.email;
    client.phone = req.body.phone;
    res.json(client);
});

// Delete a client
app.delete('/clients/:id', (req, res) => {
    const clientIndex = clients.findIndex(c => c.id === parseInt(req.params.id));
    if (clientIndex === -1) return res.status(404).send('Client not found');

    clients.splice(clientIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
