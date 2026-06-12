import { Link } from 'react-router-dom';

function Hero() {
    const irParaSobre = (e) => {
        e.preventDefault();
        document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero-texto">
                <span className="hero-badge">ENGENHARIA DE SOFTWARE · UNICESUMAR</span>

                <h1 className="hero-titulo">
                    Rios mais limpos<br />
                    <span className="hero-destaque">começam com</span><br />
                    dados precisos.
                </h1>

                <p className="hero-descricao">
                    O RiverGuard monitora ecobarreiras fluviais em tempo real,
                    priorizando a logística de limpeza e conectando comunidades,
                    gestores e o meio ambiente.
                </p>

                <div className="hero-botoes">
                    <Link to="/dashboard" className="btn btn-primario">
                        Ver o sistema →
                    </Link>
                    <a href="#sobre" className="btn btn-secundario" onClick={irParaSobre}>
                        Saiba mais
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <img
                    src="https://i.pinimg.com/originals/6d/24/ea/6d24eaae3569951d44b540a9abd8e594.gif"
                    alt="Rio em movimento"
                    className="hero-gif"
                />
            </div>
        </section>
    );
}

export default Hero;