const db = require('../db');

exports.getAllItems = (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      console.error('❌ Error executing query:', err); // This will print the actual MySQL error
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results); // Return the array of items
  });
};

exports.addItem = (req, res) => {
  const { title, description, image_url, size, category } = req.body;

  if (!title || !description || !image_url || !size || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO items (title, description, image_url, size, category) VALUES (?, ?, ?, ?, ?)';
  const values = [title, description, image_url, size, category];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('❌ Error inserting item:', err);
      return res.status(500).json({ error: 'Database insert error' });
    }

    res.status(201).json({ message: 'Item added successfully', itemId: result.insertId });
  });
};
