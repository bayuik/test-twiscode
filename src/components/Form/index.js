import React from "react";

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <h5>Create new account</h5>
        <div className="pt-3">
          <p className="fw-bold">Title</p>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="mrs" />
            <label className="form-check-label" for="mrs">
              Mrs
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="ms" />
            <label className="form-check-label" for="mrs">
              Ms
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="mdm" />
            <label className="form-check-label" for="mrs">
              Mdm
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="mr" />
            <label className="form-check-label" for="mrs">
              Mr
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="dr" />
            <label className="form-check-label" for="mrs">
              Dr
            </label>
          </div>
        </div>
        <div className="pt-3">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label id="lastname" className="fw-bold">
                  Last name <span className="text-danger">*</span>
                </label>
                <input type="text" id="lastname" placeholder="Last name" className="form-control" />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label id="firstname" className="fw-bold">
                  First name <span className="text-danger">*</span>
                </label>
                <input type="text" id="firstname" placeholder="First name" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <p className="fw-bold">
            Mobile phone number <span className="text-danger">*</span>
          </p>
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text">+852</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Mobile phone number"></input>
          </div>
        </div>
        <div className="pt-3">
          <h4>Address</h4>
          <div className="pt-2">
            <label id="address" className="fw-bold">
              Address
            </label>
            <br />
            <input type="text" placeholder="Address" className="form-control" />
          </div>
        </div>
        <div className="pt-3">
          <div className="pt-2 row">
            <div className="col-sm">
              <div className="form-group">
                <label id="address" className="fw-bold">
                  Country/Location <span className="text-danger">*</span>
                </label>
                <br />
                <input type="text" placeholder="Select Country/Location" className="form-control" />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label id="address" className="fw-bold">
                  Province/District <span className="text-danger">*</span>
                </label>
                <br />
                <input type="text" placeholder="Select Province/District" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="row">
            <div className="col-sm">
              <div className="pt-2">
                <div className="form-group">
                  <label id="address" className="fw-bold">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <br />
                  <input type="text" placeholder="Select Country/Location" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="pt-2 row">
                <div className="col-sm">
                  <div className="form-group">
                    <label id="address" className="fw-bold">
                      Date of birth <span className="text-danger">*</span>
                    </label>
                    <br />
                    <input type="date" placeholder="DD" className="form-control" />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label id="address" className="fw-bold">
                      Month <span className="text-danger">*</span>
                    </label>
                    <br />
                    <input type="text" placeholder="MM" className="form-control" />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label id="address" className="fw-bold">
                      Year <span className="text-danger">*</span>
                    </label>
                    <br />
                    <input type="text" placeholder="YYYY" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
