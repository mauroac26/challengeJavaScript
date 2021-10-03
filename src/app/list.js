import React, { Component } from "react";
import { render } from "react-dom";
import Header from './header'; 

class List extends Component {

    constructor(){
      super();
      this.state = {
        concept: '',
        amount: '',
        date: '',
        type: '',
        budgets: [],
        id: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.addBudget = this.addBudget.bind(this);
    }
  
    componentDidMount(){
      this.getBudget();
    }
  
    getBudget(){
      fetch('/api/budget')
        .then(res => res.json())
        .then(data => {
            this.setState({budgets: data});
            console.log(this.state.budgets);
      
      });
    }
  
    deleteBudget(id){
      if (confirm('Estas seguro de querer delete esta operacion?'))
      fetch(`/api/budget/${id}`,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        this.getBudget();
    });
      
  }
  
    addBudget(e){
      if(this.state.id){
        fetch(`/api/budget/${this.state.id}`, {
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
                concept: '',
                amount: '',
                date: '',
                type: '',
                id: ''
            });
            this.getBudget();
            document.getElementById("type").disabled=false;
            document.getElementById("boton").innerHTML="Registrar";
        });
      }else{
        fetch('/api/budget',{
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
                concept: '',
                amount: '',
                date: '',
                type: ''
              });
              this.getBudget();
            })
            .catch(alert(err));
          
      }
  
      e.preventDefault();
      
    }
    
  
    handleChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }

    updateBudget(id){
      
        fetch(`/api/budget/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                concept: data.concept,
                amount: data.amount,
                date: data.date,
                type: data.type,
                id: data.id
            })
        });

        document.getElementById("type").disabled=true;
        document.getElementById("boton").innerHTML="Actualizar";
    }


      render() {    
        
          return (
            
              <div class="container-fluid">
                  <Header></Header>
                  
                
                  
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card mt-2">
        <div class="card-header text-center">
            Registro de operaciones
        </div>
        <div class="card-body">
        <form onSubmit={this.addBudget}>
            <div class="form-group">
              <label for="concept">Concepto:</label>
              <textarea name="concept" onChange={this.handleChange} class="form-control" id="concept" rows="2" value={this.state.concept} required></textarea>
            </div>
            <div class="form-group">
              <label for="amount">Monto:</label>
              <input name="amount" onChange={this.handleChange} type="text" class="form-control" id="pwd" value={this.state.amount} required/>
            </div>
            <div class="form-group">
              <label for="date">date:</label>
              <input name="date" onChange={this.handleChange} selected={this.state.date} type="date" class="form-control" id="pwd" value={this.state.date} required/>
            </div>
            <div class="form-group">
              <label for="type">Tipo:</label>
              <select id="type" name="type"  onChange={this.handleChange} class="form-select" value={this.state.type} required>
              <option value="" selected>---</option>
            <option value="Ingreso">Ingreso</option>
            <option value="Egreso">Egreso</option>
              </select>
            </div>
            <button type="submit" id="boton" class="btn btn-primary mt-2">Registrar</button>
        </form>
  
    </div>
   
  </div>
</div>
  

  <div class="col-md-6">
                  <div class="card mt-2">
  <div class="card-header text-center">
      Listado operaciones
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
          <tr key={budget._id}>
            <td>{budget.concept}</td>
            <td>${budget.amount}</td>
            <td>{budget.date}</td>
            <td>{budget.type}</td>
            <td>
                <button class="btn btn-primary btn-sm" onClick={() => this.updateBudget(budget.id)}>
                Actualizar
                </button>
                <button class="btn btn-primary btn-sm m-1" onClick={() => this.deleteBudget(budget.id)}>
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
              </div>
          )
      }
  }
render(<List/>, document.getElementById('list'));