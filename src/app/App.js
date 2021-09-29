import React, { Component } from "react";

class App extends Component {

  constructor(){
    super();
    this.state = {
      concepto: '',
      monto: '',
      fecha: '',
      tipo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.agregarPresupuesto = this.agregarPresupuesto.bind(this);
  }

  agregarPresupuesto(e){
    fetch('/api/presupuesto',{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          concepto: '',
          monto: '',
          fecha: '',
          tipo: ''
        });
      })
      .catch(res => console.log(err));

    e.preventDefault();
  }
  

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
    render() {    
      
        return (
          
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                  <div class="container-fluid justify-content-center">
                  <a class="navbar-brand text-white " href="/">Presupuesto Personal</a>
                  </div>
                  <div>
                  <a class="navbar-brand text-white " href="/listar.html">Listar</a>
                  </div>
                </nav>
                
                <div class="row justify-content-center">
                <div class="col-5">
                <div class="card mt-2">
  <div class="card-header">
    Presupuesto
  </div>
  <div class="card-body">
  <form onSubmit={this.agregarPresupuesto}>
  <div class="form-group">
    <label for="concepto">Concepto:</label>
    <textarea name="concepto" onChange={this.handleChange} class="form-control" id="concepto" rows="2" value={this.state.concepto}></textarea>
  </div>
  <div class="form-group">
    <label for="monto">Monto:</label>
    <input name="monto" onChange={this.handleChange} type="text" class="form-control" id="pwd" value={this.state.monto}/>
  </div>
  <div class="form-group">
    <label for="fecha">Fecha:</label>
    <input name="fecha" onChange={this.handleChange} selected={this.state.fecha} type="date" class="form-control" id="pwd" value={this.state.fecha}/>
  </div>
  <div class="form-group">
    <label for="tipo">Tipo:</label>
    <select name="tipo"  onChange={this.handleChange} class="form-select" aria-label="Default select example" value={this.state.tipo}>
    <option value="" selected>---</option>
  <option value="ingreso">Ingreso</option>
  <option value="egreso">Egreso</option>
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