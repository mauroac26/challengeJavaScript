
import React, { Component } from "react";

class ListarVista extends Component {


  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    fetch('/api/listar')
      .then(res => res.json())
      .then(data => console.log(data));
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
                <div class="col-5">
                <div class="card mt-2">
  <div class="card-header">
    Presupuesto
  </div>
  <div class="card-body">
 
  </div>

</div>
</div>
</div>
            </div>
        )
    }
}

export default ListarVista;