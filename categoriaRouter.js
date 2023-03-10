const express = require('express');

const router = express.Router();

const Categorias = require('./produto');

// Banco de dados de exemplo


// Operações CRUD do recurso aluno
router.get('/', async (req, res) => {
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const categoria = await Categorias.findAll()
  res.send(categoria);
});

router.get('/:id', async (req, res) => {
  const categoriaId = req.params.id;
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const categoria = await Categorias.findByPk(categoriaId)
  res.send(categoria);
});

router.get('/:id/nome', async (req, res) => {
  const categoria = await Categorias.findByPk(categoriaId)

  res.send({
    nome: categoria.nome
  })
})

router.post('/', async (req, res) => {
  let novaCategoria = req.body;
  novaCategoria = await Categorias.create(req.body)
  res.send({ message: 'Produto adicionado com sucesso', categoria: novaCategoria });
});

router.put('/:id', async (req, res) => {
  const categoriaId = req.params.id; 
  const dadosNovosCategoria = req.body;

  let categoria = await Categorias.findByPk(categoriaId);

  if (categoria) {
    categoria.set({...dadosNovosCategoria})
    await categoria.save();
    res.send({ message: 'categoria atualizada com sucesso'});
  } else {
    res.status(404).send({ message: 'categoria não encontrada' });
  }
});

router.delete('/:id', async (req, res) => {
  const categoriaId = req.params.id;
  let categoria = await Categorias.findByPk(categoriaId);
  if (categoria) {
    await categoria.destroy();
    res.send({ message: 'categoria excluída com sucesso' });
  } else {
    res.status(404).send({ message: 'categoria não encontrada' });
  }
});

module.exports = router;

