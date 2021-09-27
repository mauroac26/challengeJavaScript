import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                  <div class="container-fluid justify-content-center">
                  <a class="navbar-brand text-white " href="/">Presupuesto Personal</a>
                  </div>
                </nav>
                
                <div class="row justify-content-center">
                <div class="col-5">
                <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
  <form action="">
  <div class="form-group">
    <label for="email">Concepto:</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Monto:</label>
    <input type="password" class="form-control" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Fecha:</label>
    <input type="password" class="form-control" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Tipo:</label>
    <select class="form-select" aria-label="Default select example">
  <option value="1" selected>Ingreso</option>
  <option value="2">Egreso</option>
</select>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Enviar</button>
</form>
  </div>

</div>
</div>
</div>
            </div>
        )
    }
}

export default App;