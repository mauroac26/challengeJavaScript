import React, { Component } from "react";
import Header from './header'; 

class App extends Component {

  constructor(){
    super();
    this.state = {
      budgets: [],
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getBudget();
  }

  getBudget(){
    fetch('/api/list')
      .then(res => res.json())
      .then(data => {
        this.setState({budgets: data});
        
        data.map(budget => {
        

          if(budget.tipo == "Ingreso"){
            this.state.total = this.state.total + parseFloat(budget.amount)
          }else{
            this.state.total = this.state.total - parseFloat(budget.amount)
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
            <Header></Header>
                
                <div class="row justify-content-center">

<div class="col-md-6 mt-2">

<div class="row text-center">
  
  <h5 >Balance Actual: {this.state.total}</h5>
  
</div> 

                <div class="card mt-2 border-primary">
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
        this.state.budgets.map(budget => {
  
            return (
          <tr>
            <td>{budget.concept}</td>
            <td>${budget.amount}</td>
            <td>{budget.date}</td>
            <td>{budget.type}</td>
          
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