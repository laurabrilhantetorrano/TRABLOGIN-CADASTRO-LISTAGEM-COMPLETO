import './Usuarios.css'

function Usuarios() {

  return (
    <main className="usuarios">
      <section className="card">
        <h1>Cadastre-se</h1>


        <hr />

        <div className="linha-input">

          <input
            type="text"
            placeholder="Nome"
          />

          <input
            type="text"
            placeholder="Sobrenome"
          />

        </div>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Nova senha"
        />

        <button>
          Cadastrar
        </button>

      </section>

    </main>
  )
}

export default Usuarios