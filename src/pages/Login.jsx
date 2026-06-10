import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Por enquanto só redireciona pro dashboard
    navigate('/dashboard');
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-titulo">
          River<span className="login-destaque">Guard</span>
        </h1>
        <p className="login-subtitulo">Acesse o sistema de monitoramento</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-campo">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="login-campo">
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-login">Entrar</button>
        </form>

        <p className="login-link">
          Não tem conta? <a href="/cadastro">Cadastre-se</a>
        </p>
        <p className="login-voltar">
          <a href="/">← Voltar ao início</a>
        </p>
      </div>
    </div>
  );
}

export default Login;