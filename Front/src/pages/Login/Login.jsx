import LoginForm from "../../components/LoginForm/LoginForm"
import NavBar from "../../components/NavBar/NavBar"

const Login = () => {
  return (
    <div className="px-6">
        <header>
          <NavBar />
        </header>
        <main>
          <div className='mt-4 mb-8 bg-yellow w-[125px] h-[54px] flex items-center justify-center'>
            <p className='font-sans text-xl font-bold text-center text-blue'>
              ServiApp  
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h1>Inicia sesión</h1>
            <LoginForm />
            <div className="w-full flex justify-center items-center">
              <div className="w-full h-px bg-black mx-5"></div>
              <span className="text-text">o</span>
              <div className="w-full h-px bg-black mx-5"></div>
            </div>
            <button className="w-full p-3 rounded border text-text font-medium text-dark ">Regístrate</button>
          </div>
        </main>
    </div>
  )
}

export default Login