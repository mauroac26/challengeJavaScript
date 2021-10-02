import React, { Component } from "react";

class App extends Component {

  constructor(){
    super();
    this.state = {
      presupuestos: [],
      arr: [],
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    fetch('/api/listar')
      .then(res => res.json())
      .then(data => {
        this.setState({presupuestos: data});
          // if(data.length <= 10){
          //   this.setState({presupuestos: data});
          // }else{
          // let i = data.length - 10;
          // data.splice(0, i);
          // this.setState({presupuestos: data});
          
          //   }  
        data.map(presupuesto => {
        

          if(presupuesto.tipo == "ingreso"){
            this.state.total = this.state.total + parseFloat(presupuesto.monto)
          }else{
            this.state.total = this.state.total - parseFloat(presupuesto.monto)
          }
           
          
       })
       
       
      const moneda = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
      })
    

      this.setState({
        total: moneda.format(this.state.total)
      });
          });
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
                <div class="container-fluid">
                <a href="#" class="navbar-brand">Presupuesto Personal</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  
                  <div class="navbar-nav">
                  <a class="nav-item nav-link active text-white" href="/">Home</a>
                  
                  <a class="nav-item nav-link text-white" href="/listar.html">Listar</a>
                  </div>
                  </div>
                </div>
                </nav>
                
                <div class="row justify-content-center">

<div class="col-6 mt-2">

<div class="row text-center">
  
  <h5 >Balance Actual: {this.state.total}</h5>
  
</div> 

                <div class="card mt-2">
<div class="card-header text-center">
    Listado ultimos 10 movimientos
  </div>
  <div class="card-body">
     
  <div class="table-responsive">
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
          <tr>
            <td>{presupuesto.concepto}</td>
            <td>${presupuesto.monto}</td>
            <td>{presupuesto.fecha}</td>
            <td>{presupuesto.tipo}</td>
          
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
            </div>
        )
    }
}

export default App;