// // src/components/Mapa.jsx
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const icone = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const ecobarreirasComCoords = [
//   { nome: 'Ursa Maior',       local: 'Rio Paranapanema',    lixo: 82, status: 'crítico', coords: [-23.0, -50.5] },
//   { nome: 'Ursa Menor',       local: 'Rio Iguaçu',         lixo: 67, status: 'alerta',  coords: [-25.5, -49.5] },
//   { nome: 'Órion',            local: 'Rio Tibagi',         lixo: 91, status: 'crítico', coords: [-24.0, -50.8] },
//   { nome: 'Cruzeiro do Sul',  local: 'Rio Piquiri',        lixo: 45, status: 'alerta',  coords: [-24.5, -52.5] },
//   { nome: 'Scorpius',         local: 'Rio Ivaí',           lixo: 23, status: 'normal',  coords: [-24.2, -51.5] },
//   { nome: 'Cassiopeia',       local: 'Rio das Cinzas',     lixo: 78, status: 'crítico', coords: [-23.7, -50.2] },
//   { nome: 'Lyra',             local: 'Rio Pirapó',         lixo: 34, status: 'alerta',  coords: [-23.297786, -51.896427] },
//   { nome: 'Centaurus',        local: 'Rio São Francisco',  lixo: 12, status: 'normal',  coords: [-26.0, -49.5] },
//   { nome: 'Andrômeda',        local: 'Rio Itararé',        lixo: 58, status: 'alerta',  coords: [-23.8, -49.0] },
//   { nome: 'Pavão',            local: 'Rio Chopim',         lixo: 41, status: 'alerta',  coords: [-25.0, -52.0] },
//   { nome: 'Phoenix',          local: 'Rio Laranjinha',     lixo: 19, status: 'normal',  coords: [-23.5, -50.5] },
//   { nome: 'Hydra',            local: 'Rio das Pedras',     lixo: 73, status: 'crítico', coords: [-25.436825, -51.453043] },
// ];

// function Mapa() {
//   return (
//     <div style={{ height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
//       <MapContainer center={[-24.5, -51.0]} zoom={7} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {ecobarreirasComCoords.map((eco, idx) => (
//           <Marker key={idx} position={eco.coords} icon={icone}>
//             <Popup>
//               <strong>{eco.nome}</strong><br />
//               {eco.local}<br />
//               <span style={{ color: eco.status === 'crítico' ? '#e63946' : eco.status === 'alerta' ? '#f4a261' : '#2a9d8f' }}>
//                 {eco.lixo}% de lixo · {eco.status}
//               </span>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Mapa;   // ✅ LINHA QUE GARANTE O EXPORT DEFAULT

// src/components/Mapa.jsx
// src/components/Mapa.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function criarIcone(status) {
  let cor;
  switch (status) {
    case 'crítico': cor = 'red'; break;
    case 'alerta':  cor = 'orange'; break;
    default:        cor = 'green';
  }
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${cor}.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
}

const ecobarreirasComCoords = [
  { nome: 'Ursa Maior',       local: 'Rio Paranapanema',    lixo: 82, status: 'crítico', coords: [-23.0, -50.5] },
  { nome: 'Ursa Menor',       local: 'Rio Iguaçu',         lixo: 67, status: 'alerta',  coords: [-25.5, -49.5] },
  { nome: 'Órion',            local: 'Rio Tibagi',         lixo: 91, status: 'crítico', coords: [-24.0, -50.8] },
  { nome: 'Cruzeiro do Sul',  local: 'Rio Piquiri',        lixo: 45, status: 'alerta',  coords: [-24.5, -52.5] },
  { nome: 'Scorpius',         local: 'Rio Ivaí',           lixo: 23, status: 'normal',  coords: [-24.2, -51.5] },
  { nome: 'Cassiopeia',       local: 'Rio das Cinzas',     lixo: 78, status: 'crítico', coords: [-23.7, -50.2] },
  { nome: 'Lyra',             local: 'Rio Pirapó',         lixo: 34, status: 'alerta',  coords: [-23.297786, -51.896427] },
  { nome: 'Centaurus',        local: 'Rio São Francisco',  lixo: 12, status: 'normal',  coords: [-26.0, -49.5] },
  { nome: 'Andrômeda',        local: 'Rio Itararé',        lixo: 58, status: 'alerta',  coords: [-23.8, -49.0] },
  { nome: 'Pavão',            local: 'Rio Chopim',         lixo: 41, status: 'alerta',  coords: [-25.0, -52.0] },
  { nome: 'Phoenix',          local: 'Rio Laranjinha',     lixo: 19, status: 'normal',  coords: [-23.5, -50.5] },
  { nome: 'Hydra',            local: 'Rio das Pedras',     lixo: 73, status: 'crítico', coords: [-25.436825, -51.453043] },
];

function Mapa({ filtro = 'todas' }) {
  // Filtra os marcadores baseado no filtro recebido
  const ecobarreirasFiltradas = ecobarreirasComCoords.filter(eco => {
    if (filtro === 'todas') return true;
    return eco.status === filtro;
  });

  return (
    <div style={{ height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <MapContainer center={[-24.5, -51.0]} zoom={7} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ecobarreirasFiltradas.map((eco, idx) => (
          <Marker key={idx} position={eco.coords} icon={criarIcone(eco.status)}>
            <Popup>
              <strong>{eco.nome}</strong><br />
              {eco.local}<br />
              <span style={{
                color: eco.status === 'crítico' ? '#e63946' :
                       eco.status === 'alerta' ? '#f4a261' : '#2a9d8f',
                fontWeight: 'bold'
              }}>
                {eco.lixo}% de lixo · {eco.status}
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;