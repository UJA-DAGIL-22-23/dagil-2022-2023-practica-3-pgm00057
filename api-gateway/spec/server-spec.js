/**
 * @file server-spec.js 
 * @description Fichero con la especificación de pruebas para la aplicación API-gateway
 * Este fichero DEBE llamarse server-spec.js
 * Este fichero DEBE ubicarse en el subdirectorio spec/
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const supertest = require('supertest');
const assert = require('assert')
const app = require('../server');

describe('API Gateway: rutas estáticas', () => {
  describe('Rutas estáticas de MS Plantilla', () => {
    it('Devuelve MS Plantilla Home Page', (done) => {
      supertest(app)
        .get('/plantilla/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('mensaje'));
          assert(res.body.mensaje === "Microservicio MS Plantilla: home");

        })
        .end((error) => { error ? done.fail(error) : done() })
    });
    it('Devuelve MS Plantilla Acerca De', (done) => {
      supertest(app)
        .get('/plantilla/acercade')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('mensaje'));
          assert(res.body.mensaje === "Microservicio MS Plantilla: acerca de");

        })
        .end((error) => { error ? done.fail(error) : done() })
    });
    it('Devuelve las Personas de BD', (done) => {
      supertest(app)
        .get('/plantilla/getPersonas')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( res.body.data ); // Para comprobar qué contiene exactamente res.body.data
          
          //Recepcion nombre de MS
          assert(res.body.data[0].data.hasOwnProperty('name'));
          assert(res.body.data[0].data.name === "Javier Fernandez");

          //Obtencion nacimiento desde base de datos correctamente.
          assert(res.body.data[0].data.hasOwnProperty('birthdate'));
          assert(res.body.data[0].data.birthdate.day === 12);

          //Obtencion pais desde base de datos correctamente.
          assert(res.body.data[0].data.hasOwnProperty('country'));
          assert(res.body.data[0].data.country === "España");

          //Obtencion equipo desde base de datos correctamente.
          assert(res.body.data[0].data.hasOwnProperty('club'));
          assert(res.body.data[0].data.club === "Club Piragüismo Pontevedra");

          //Obtencion años ganados desde base de datos correctamente.
          assert(res.body.data[0].data.hasOwnProperty('yearsWin'));
          assert(res.body.data[0].data.yearsWin[0] === 2017);

          //Obtencion participaciones desde base de datos correctamente.
          assert(res.body.data[0].data.hasOwnProperty('participation'));
          assert(res.body.data[0].data.participation[0] === 2016);

          //Obtencion participaciones olimpiadas desde base de datos correctamente.
          assert(res.body.data[0].data.hasOwnProperty('timesOlimpic'));
          assert(res.body.data[0].data.timesOlimpic === 1);

        })
        .end((error) => { error ? done.fail(error) : done() })
    });

    it('Devuelve una persona por su id.', (done) => {
      supertest(app)
        .get('/plantilla/getPorId/358542902268264653')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( res.body.data ); // Para comprobar qué contiene exactamente res.body.data

          assert(res.body.data.name === "Javier Fernandez");
        })
        .end((error) => { error ? done.fail(error) : done() })
    });

  })
});



