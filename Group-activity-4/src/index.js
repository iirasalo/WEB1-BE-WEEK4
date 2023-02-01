const express = require('express');
const app = express();
require('dotenv').config();

const Note = require('./models/note');
const Cat = require('./models/cat');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// Get notes9
app.get('/api/notes', (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

// Get cats
app.get('/api/cats', (request, response) => {
  Cat.find({}).then((cats) => {
    response.json(cats);
  });
});

//post notes
app.post('/api/notes', (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  });
});

//The same for cats' post
app.post('/api/cats', (request, response) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: 'content missing' });
  }

  const cat = new Cat({
    name: body.name,
    age: body.age,
    color: body.color
  });

  cat.save().then((savedNote) => {
    response.json(savedNote);
  });
});

//Get notes by id
app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// Get cat by id
app.get('/api/cats/:id', (request, response, next) => {
  Cat.findById(request.params.id)
    .then((cat) => {
      if (cat) {
        response.json(cat);
      } else {
        response.status(404).end();
      }
    })

    .catch((error) => next(error));
});
// Delete notes
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// Delete cat
app.delete('/api/cats/:id', (request, response, next) => {
  Cat.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

// Put cat
app.put('/api/cats/:id', (request, response, next) => {
  const body = request.body;

  const cat = {
    name: body.name,
    age: body.age,
    color: body.color,
    weight: body.weight
  };

  Cat.findByIdAndUpdate(request.params.id, cat, { new: true })
    .then((updatedCat) => {
      response.json(updatedCat);
    })
    .catch((error) => next(error));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});