const express = require('express');
const { db } = require('../utils/db');
const { NotFoundError } = require('../utils/errors');

const clientRouter = express.Router();

clientRouter
  .get('/', (req, res) => {
    // console.log(db);
    res

      .render('client/list-all', {
        allClients: db.getAll(),
      });
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const client = db.getOne(id);
    // console.log(db.getOne(id));
    // res.send(db.getOne(req.params.id));
    if (!client) {
      throw new NotFoundError();
    }
    res.render('client/oneClient', {
      client,
    });
  })
  .post('/', (req, res) => {
    // const {
    //   id, name, mail, notes,
    // } = req.body;
    // db.create({ id, name, mail });
    const id = db.create(req.body);
    res
      .status(201)
      .render('client/added', {
        name: req.body.name,
        id,
      });
  })

  .put('/:id', (req, res) => {
    const { id } = req.params;
    //   // const newObj = { id, name, mail };
    db.update(id, req.body);
    res.render('client/modified', {
      name: req.body.name,
    });
  })

  .delete('/:id', (req, res) => {
    const { id } = req.params;
    db.delete(id);
    res.render('client/deleted');
  })
  .get('/forms/add', (req, res) => {
    // const { id, name, mail } = req.params;
    // db.create({ id, name, mail });
    res.render('client/forms/add');
  })
  .get('/forms/edit/:id', (req, res) => {
    res.render('client/forms/edit', {
      client: db.getOne(req.params.id),
    });
  });

module.exports = {
  clientRouter,
};
