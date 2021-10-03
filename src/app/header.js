import React from 'react';
class Header extends React.Component
{
  render()
  {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
        <a href="/" class="navbar-brand text-white">Presupuesto Personal</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span class="navbar-toggler-icon"></span>
</button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          
          <div class="navbar-nav">
          <a class="nav-item nav-link active text-white" href="/">Home</a>
          
          <a class="nav-item nav-link text-white" href="/list.html">Listar</a>
          </div>
          </div>
        </div>
        </nav>
      
    )
  }
}
export default Header;