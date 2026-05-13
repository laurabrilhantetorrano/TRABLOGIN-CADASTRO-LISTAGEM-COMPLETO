import './Login.css'
import logo from '../assets/image.png'

export default function Login() {

  return (

    <main className="login">

      <div className="left">

        <img
          src={logo}
          className="logo"
        />

      </div>

      <section className="card">

        <h1>Facebook</h1>

        <input
          type="text"
          placeholder="Email ou telefone"
        />

        <input
          type="password"
          placeholder="Senha"
        />

        <button>
          Entrar
        </button>

        <div className="forgot">
          Esqueceu a senha?
        </div>

        <hr className="linha" />

        <button className="segundo">
          Criar nova conta
        </button>

      </section>

    </main>

  )
}