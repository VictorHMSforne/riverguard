// src/data/ecobarreirasData.js
import Ecobarreira from '../models/Ecobarreira';
import Equipe from '../models/Equipe';

// ─── CRIANDO AS EQUIPES (objetos da classe Equipe) ───
const equipeAlpha = new Equipe(1, 'Alpha', '#e63946');
const equipeBeta = new Equipe(2, 'Beta', '#2a9d8f');
const equipeGamma = new Equipe(3, 'Gamma', '#f4a261');

// ─── CRIANDO AS ECOBARREIRAS (objetos da classe Ecobarreira) ───
const ecobarreiras = [
  new Ecobarreira(1, 'Ursa Maior', 'Rio Paranapanema · divisa PR/SP', 82, equipeAlpha, 'crítico'),
  new Ecobarreira(2, 'Ursa Menor', 'Rio Iguaçu · divisa PR/SC', 67, equipeBeta, 'alerta'),
  new Ecobarreira(3, 'Órion', 'Rio Tibagi · PR', 91, equipeAlpha, 'crítico'),
  new Ecobarreira(4, 'Cruzeiro do Sul', 'Rio Piquiri · PR', 45, equipeGamma, 'alerta'),
  new Ecobarreira(5, 'Scorpius', 'Rio Ivaí · PR', 23, equipeBeta, 'normal'),
  new Ecobarreira(6, 'Cassiopeia', 'Rio das Cinzas · PR', 78, equipeAlpha, 'crítico'),
  new Ecobarreira(7, 'Lyra', 'Rio Pirapó · PR', 34, equipeGamma, 'alerta'),
  new Ecobarreira(8, 'Centaurus', 'Rio São Francisco · divisa PR/SC', 12, equipeBeta, 'normal'),
  new Ecobarreira(9, 'Andrômeda', 'Rio Itararé · divisa PR/SP', 58, equipeGamma, 'alerta'),
  new Ecobarreira(10, 'Pavão', 'Rio Chopim · PR', 41, equipeAlpha, 'alerta'),
  new Ecobarreira(11, 'Phoenix', 'Rio Laranjinha · PR', 19, equipeBeta, 'normal'),
  new Ecobarreira(12, 'Hydra', 'Rio das Pedras · divisa PR/SC', 73, equipeGamma, 'crítico'),
];

// ─── CRIANDO A FILA DE ALERTAS (instância global) ───
import FilaAlertas from '../models/FilaAlertas.js';
const filaAlertas = new FilaAlertas();

// ─── EXPORTANDO TUDO ───
export { ecobarreiras, filaAlertas, equipeAlpha, equipeBeta, equipeGamma };