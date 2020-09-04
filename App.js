import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>  */}
      {/* <h2>Start editing to see some magic happen!</h2>  */}

      <div class="row row-content">
        <div class="col-12">
          <h3>EDIT PROFILE</h3>
        </div>
        <div class="col-12 col-md-9">
          <form>
            <div class="form-group row">
              <label for="emailid" class="col-md-2 col-form-label">
                Email
              </label>
              <div class="col-md-10">
                <input
                  type="email"
                  class="form-control"
                  id="emailid"
                  name="emailid"
                  placeholder="Email"
                />
              </div>

              <div class="form-group row">
                <label for="firstname" class="col-md-2 col-form-label">
                  Gender
                </label>
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="Male/Female"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password">Password</label>
                <div class="col-md-10">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    minlength="8"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password">Confirm Password</label>
                <div class="col-md-10">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    minlength="8"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="offset-md-2 col-md-10">
                  <button type="submit" class="btn btn-primary">
                    Save Profile
                  </button>

                  <button type="submit" class="btn-2 btn-primary">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-md"></div>
      </div>
    </div>
  );
}
