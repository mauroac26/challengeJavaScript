import React, { Component } from "react";
import { render } from "react-dom";

class Listar extends Component {

    constructor(){
      super();
      this.state = {
        concepto: '',
        monto: '',
        fecha: '',
        tipo: '',
        presupuestos: [],
        id: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.agregarPresupuesto = this.agregarPresupuesto.bind(this);
    }
  
    componentDidMount(){
      this.obtenerPresupuesto();
    }
  
    obtenerPresupuesto(){
      fetch('/api/presupuesto')
        .then(res => res.json())
        .then(data => {
            this.setState({presupuestos: data});
            console.log(this.state.presupuestos);
      
      });
    }
  
    eliminar(id){
      if (confirm('Estas seguro de querer eliminar esto?'))
      fetch(`/api/presupuesto/${id}`,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        this.obtenerPresupuesto();
    });
      
  }
  
    agregarPresupuesto(e){
      if(this.state.id){
        fetch(`/api/presupuesto/${this.state.id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                concepto: '',
                monto: '',
                fecha: '',
                tipo: '',
                id: ''
            });
            this.obtenerPresupuesto();
        });
      }else{
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
              this.obtenerPresupuesto();
            })
            .catch(res => console.log(err));
      }
  
      e.preventDefault();
    }
    
  
    handleChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }

    editar(id){
        fetch(`/api/presupuesto/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                concepto: data.concepto,
                monto: data.monto,
                fecha: data.fecha,
                tipo: data.tipo,
                id: data.id
            })
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
                  <div class="col-4">
                  <div class="card mt-2">
    <div class="card-header">
      Registro de operacion
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
  
  <div class="col-6">
                  <div class="card mt-2">
  <div class="card-header">
      Listado operaciones
    </div>
    <div class="card-body">
   
    <table class="table table-striped table-hover">
          <thead>
              <tr>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Tipo</th>
              </tr>
          </thead>
          <tbody>
          {
        this.state.presupuestos.map(presupuesto => {
            return (
          <tr key={presupuesto._id}>
            <td>{presupuesto.concepto}</td>
            <td>{presupuesto.monto}</td>
            <td>{presupuesto.fecha}</td>
            <td>{presupuesto.tipo}</td>
            <td>
                <button class="btn btn-primary btn-sm" onClick={() => this.editar(presupuesto.id)}>
                Editar
                </button>
                <button class="btn btn-primary btn-sm m-1" onClick={() => this.eliminar(presupuesto.id)}>
                    Eliminar
                </button>
            </td>
            </tr>
            )
        })
    }
          </tbody>
  </table>
    </div>
  
  </div>
  </div>
  </div>
              </div>
          )
      }
  }
render(<Listar/>, document.getElementById('listar'));