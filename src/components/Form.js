import React from 'react';

const Form = (props) => (
  <div className="row" id="headerForm">
      <form className="btn-group" onSubmit={props.getRecipe}>
          <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                  <i className="fas fa-search h4 text-body"></i>
              </div>
              <div className="col">
                  <input className="form-control form-control-lg form-control-borderless" type="text" name="receipeQuery"
                         placeholder="Type... (Eg. Chicken)" />
              </div>
              <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit">Search</button>
              </div>
          </div>
      </form>
  </div>
);

export default Form;