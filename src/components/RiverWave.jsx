import { Leaf } from 'lucide-react';

function RiverWave() {
  return (
    <div className="river-wave">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      <div className="wave-pin">
        <span className="pin-icone"><Leaf size={20} strokeWidth={1.5} /></span>
      </div>
      <span className="wave-label">MONITORAMENTO EM TEMPO REAL</span>
    </div>
  );
}

export default RiverWave;