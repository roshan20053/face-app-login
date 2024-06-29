import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* card */}

      <div className="card">
        <div className="card-body">
          {/* //form */}
          <form>
            <div className="form-group">
              {/* usernam */}
              <div className="username">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address or Phone Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  />
              </div>
            </div>
            {/* password */}
            <div classNameName="form-group">
              <div className="password">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  />
              </div>
            </div>

            <br />

            {/* button  login*/}
            <div className="login">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                {" "}
                <b>log in </b>{" "}
              </button>
            </div>
            <br />

            {/* forgot */}
            <div className="forgot">
              <a
                href="https://www.instagram.com/roshansharm.aa"
                target="_blank"
                className="bdmtn"
                >
                Forgot Password?
              </a>
            </div>

            <hr />

<div className="newacc">
            <button type="button" class="btn btn-success">
              <b> Create a new account</b>
            </button></div>
          </form>
        </div>
      </div>

      {/* businesss */}
      <div className="business">
        <p>
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </div>

      {/* facebook text leftside */}
      <div className="maintext">
        <b>
          {" "}
          <p className="facebook">Face App</p>
        </b>
        <b>
          {" "}
          <p className="content">
            Facebook helps you connect and sharebr <br /> with the people in
            your life.
          </p>
        </b>
      </div>
    </>
  );
}

export default App;
