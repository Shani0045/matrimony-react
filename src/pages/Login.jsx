import { useNavigate } from "react-router-dom"

export default function LogIn(){
    let navigate = useNavigate()
    
    let loginHandler = (event)=>{
        event.preventDefault();
        let user = event.target.username.value
        let pass = event.target.password.value
        if (user === "shani" && pass === "shani@123"){
            // localStorage.setItem("isLogin", 1)
            navigate("/home")
        }

    }

    return (
    <>
    <section className="vh-100" style={{backgroundColor: '#121F38'}}>
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
            <div className="card" style={{borderRadius: '1rem'}}>
            <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src="assets/img/carousel-1.jpg" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem', height: '46vh'}} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                    <form method="post" onSubmit={loginHandler}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                        <span className="h1 fw-bold mb-0">Matrimony</span>
                    </div>
                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
                    <div className="form-outline mb-4">
                        <input type="username" name="username" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">Username</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" name="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                    </div>
                    <div className="pt-1 mb-4">
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                    </div>
                    <a className="small text-muted" href="#!">Forgot password?</a>
                    <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="{% url 'signup' %}" style={{color: '#393f81'}}>Register here</a></p>
                    <a href="#!" className="small text-muted">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    </>
)}