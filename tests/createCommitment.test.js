const chai = require('chai');
const server = require('../app');
const sinon = require('sinon');

const { Commitment } = require('../models');

const { Comms: commsMock } = require('./mocks/models');

const chaiHttp = require('chai-http');


chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /all', () => {

  before(() => {
    sinon.stub(Commitment, 'findAll')
      .callsFake(commsMock.findAll);
  });

  after(() => {
    Commitment.findAll.restore();
  });

  describe('Consulta a lista da agenda', () => {
    let response;

    before(async () => {
      response = await chai.request(server).get('/all');
    });

    it('A requisição GET para a rota traz uma lista inicial com um Commitment', () => {
      expect(response.body).to.have.length(1);
    });

    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });
});