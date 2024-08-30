import { ArrowUp  } from "react-bootstrap-icons"

export function Login() {
  return (
    <div className="bg-slate-800 h-screen">
      <header className="p-4 bg-blue-600 flex justify-between py-10 px-32 shadow-md">
        <h1 className=" text-white text-3xl">Seja bem vindo</h1>
        <button className="bg-green-600 flex items-center p-2 px-5 rounded-md text-white hover:bg-green-500">
            <ArrowUp className="mr-1" />
          Cadastrar
        </button>
      </header>
      <div className="flex items-center justify-center pt-20">
        <main className="w-9/12 h-96 bg-blue-600 rounded-md flex">
            <img
                className="w-9/12 hover:scale-105 cursor-pointer duration-150 
                rounded-tl-md rounded-bl-md object-cover" 
                src="https://montesuaempresa.com.br/wp-content/uploads/2023/10/Lideranca-Inspiradora.jpg"
                alt=""
            />
            <section className="w-9/12 h-96 flex items-center justify-center md:w-96">
                <form className="flex gap-5 flex-col">
                <h1 className="text-white text-center mb-8 text-4xl font-bold">Painel do Aluno</h1>
                <input
                    type="text"
                    placeholder="E-mail"
                    className="p-2 rounded-md w-72 outline-none"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="p-2 rounded-md outline-none"
                />
                <button className="bg-green-600 hover:bg-green-500 text-white p-1 h-12 px-5 rounded-md">
                    Entrar
                </button>
                </form>
            </section>
        </main>
      </div>
    </div>
  );
}