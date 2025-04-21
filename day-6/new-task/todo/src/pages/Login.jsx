function Login() {
    return(
      <>
      <section className="bg-gray-800 h-screen pt-[10%] relative items-center justify-center">
      <div className="top-blue w-[250px] h-[250px] bg-blue-400 rounded-full absolute top-[10%] left-[50%]"></div>
      <div className="bottom-pink w-[280px] h-[280px] rounded-full absolute top-[50%] left-[12%] lg:left-[30%]"></div>
      <div className="top-orange w-[300px] h-[300px] rounded-full absolute top-[5%] left-[5%] md:left-[23%] lg:left-[30%]"></div>
      <div className="container w-[350px] sm:w-[350px] m-auto text-center p-8 text-white z-10">
                    <img 
                      id="passport" 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png" 
                      
                      className="mx-auto"  
                    />
                    <p> <span className="text-xl sm:text-2xl">Login Here</span></p>
                
                <hr />
                <form action="POST">
                    <input type="text" id="username" placeholder="Username..." className="w-full mx-auto text-base sm:textlg" />
                    <input type="password" id="password" placeholder="Password..." className="w-full mx-auto text-base sm:textlg" />
                    <button 
                      type="submit"
                      className="p-2 sm:text-lg bg-blue-500 rounded-2xl m-8 w-36 mx-auto sm:w-48 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-pink-700"
                    >
                    Login
                    </button>            

                </form>
                  <p>If you're new here, click to <a href="#" className="underline hover:text-pink-300">SignUp</a></p>             
              </div>
          </section>
        </>
      );
  }
  
  export default Login;