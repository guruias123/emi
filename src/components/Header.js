import {Route,Link} from 'react-router-dom'
import './Header.css'

const Header =()=>{
 
    return(
        <nav class="navbar navbar-inverse navbar-fixed" style={{backgroundColor:'#203840'}}>
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>   
              <span class="icon-bar"></span>                      
            </button>
            <a class="navbar-brand" href="/">Bandaru</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li ><a href="/">Home</a></li>
              
              <li><a href="/about">About</a></li>
              <li><Link to="/contact">Contact</Link></li>
             
            </ul>
            
           
          </div>
        </div>
      </nav>
      
        
    )
}

export default Header;