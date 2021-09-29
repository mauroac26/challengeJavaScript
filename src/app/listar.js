import React, { Component } from "react";
import { render } from "react-dom";

class Listar extends Component {

    constructor(){
        super();
        this.state = {
          listar: []
        }
    }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    fetch('/api/presupuesto')
      .then(res => res.json())
      .then(data => {
          this.setState({listar: data});
          console.log(this.state.listar);
    
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


    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                  <div class="container-fluid justify-content-center">
                  <a class="navbar-brand text-white " href="/">Presupuesto Personal</a>
                  </div>
                </nav>
                
                <div class="row justify-content-center">
                <div class="col-6">
                <div class="card mt-2">
  <div class="card-header">
    Presupuesto
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
      this.state.listar.map(presupuesto => {
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