import React from 'react';

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword3" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
