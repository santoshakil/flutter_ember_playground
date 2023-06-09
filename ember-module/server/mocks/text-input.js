'use strict';

module.exports = function (app) {
  const express = require('express');
  let textInputRouter = express.Router();

  textInputRouter.get('/', function (req, res) {
    res.send({
      'text-input': [],
    });
  });

  textInputRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  textInputRouter.get('/:id', function (req, res) {
    res.send({
      'text-input': {
        id: req.params.id,
      },
    });
  });

  textInputRouter.put('/:id', function (req, res) {
    res.send({
      'text-input': {
        id: req.params.id,
      },
    });
  });

  textInputRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/text-input', require('body-parser').json());
  app.use('/api/text-input', textInputRouter);
};
