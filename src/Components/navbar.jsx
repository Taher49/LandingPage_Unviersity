
const Navbar = () => {
  return (
    <div className='navbar navbar-expand-sm bg-light text-dark fixed-top '>
      <div className='container'>
       <h1 className='navbar-brand' href='/#' >University <span className='text-info'>io</span>  </h1> 
     
      <button className="navbar-toggler"
       type="button" 
       data-bs-toggle="collapse"
        data-bs-target="#mainmenu" >
      <span className="navbar-toggler-icon"></span>
    </button> 
      <div className='collapse navbar-collapse' id="mainmenu">
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'> <a href="/#" className='nav-link'><i class="bi bi-house"></i> Home </a> </li>
          <li className='nav-item'> <a href="/#" className='nav-link'> <i class="bi bi-person-circle"></i> Services </a> </li>
          <li className='nav-item'> <a href="/#" className='nav-link'> <i class="bi bi-exclamation-circle"></i> About </a> </li>
        </ul>
      </div>
       </div>
    </div>
  )
}

export default Navbar