import React from 'react'
import { ButtonToolbar, Button, ToggleButtonGroup, ToggleButton, Navbar,NavItem, Nav,NavDropdown } from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { Navbar,NavItem, NavDropdown } from 'react-bootstrap'

import './Navigation.css';

// //
// <Route exact path='/' component={MainDashboard}/>
// <Route path='/laptimes-beeswarmplot' component={MainDashboard}/>
// <Route path='/laptimes-scatterplot' component={LaptimesScatter}/>
// <Route path='/results-barchart' component={ResultsBar}/>

// <Route exact path='/' component={Home}/>
// <Route path='/table' component={Table}/>
// <Route path='/scatter' component={Scatter}/>
// <Route path='/barchart' component={Bars}/> 
class Navigation extends React.Component {
    render() {
        return (
            <div>
                
                <Container>
                <div className="header-bar">
                    <Navbar bg="dark" variant="dark" fixed="top" expand="xl">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto hidden-sm-up float-xs-left" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" fill="true" variant="pills">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href='/scatter'>Scatter</Nav.Link>
                            <Nav.Link href='/table'>Table2</Nav.Link>
                            <Nav.Link href='/bar'>Bar</Nav.Link>
                            <Nav.Link href='/laptimes-scatterplot'>laps</Nav.Link>
                            <Nav.Link href='/laptimes-beeswarmplot'>bee</Nav.Link>

                            

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Container>
            </div>
        )
    }
}

export default Navigation;

// class Navigation extends React.Component {
//     render() {
//         return (
//             <div className="container-fluid navigation">
//                 <Container>
//                 <div className="container">
//                     <Navbar bg="#afc7df" expand="xl">
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto hidden-sm-up float-xs-left" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link to='/' className="nav-link">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/teams' className="nav-link">Teams</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/components' className="nav-link">Components</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/contact' className="nav-link">Contact</Link>
//                                 </li>
//                             </ul>
//                         </Navbar.Collapse>
//                     </Navbar>
//                 </div>
//             </Container>
//             </div>
//         )
//     }
// }

// export default Navigation;


// const Header = () => (
// 	<div>
// 		<h1>FORMULA 1</h1>
// 	    <ButtonToolbar>
// 	    	<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
// 		    	<LinkContainer to="/laptimes-beeswarmplot">
// 					<ToggleButton value={1}>Laptimes v1</ToggleButton>
// 				</LinkContainer>
// 				<LinkContainer to="/laptimes-scatterplot">
// 				    <ToggleButton value={2}>Laptimes v2</ToggleButton>
// 				</LinkContainer>
// 				<LinkContainer to="/results-barchart">
// 				    <ToggleButton value={3}>Results</ToggleButton>
// 				</LinkContainer>
// 		    </ToggleButtonGroup>
// 	    </ButtonToolbar>
//     </div>
// )

// export default Header
//"container-fluid""justify-content-end"
// const Header = () => (
//     <div  style="display: flex"  className="hmm">
// 		<h1>FORMULA 1</h1>
// 	    <Nav fill variant="tabs" defaultActiveKey="/">
// 			<Nav.Item>
// 				<Nav.Link href="/">Home</Nav.Link>
// 			</Nav.Item>
// 			<Nav.Item>
// 				<Nav.Link href="/laptimes-scatterplot">Scatterplot</Nav.Link>
// 			</Nav.Item>
// 			<Nav.Item>
// 				<Nav.Link href="/results-barchart">
// 				Bar
// 				</Nav.Link>
// 			</Nav.Item>
// 		</Nav>
//     </div>
// )

// export default Header
//
// const Header = () => (
//     <div  className="container-fluid" >
// 		<h1>FORMULA 1</h1>
// 	    <Nav fill bg="dark" variant="dark" defaultActiveKey="/">
// 			<Nav.Item>
// 				{/* <Nav.Link href="/">Home</Nav.Link> */}
//                 <Link to="/">Scratch</Link>
// 			</Nav.Item>
// 			<Nav.Item>
//                 <Link to="/laptimes-scatterplot">Scatterploth</Link>
// 				{/* <Nav.Link href="/laptimes-scatterplot">Scatterplot</Nav.Link> */}
// 			</Nav.Item>
// 			<Nav.Item>
//             <Link to="/results-barchart">Barchart</Link>
// 				{/* <Nav.Link href="/results-barchart"> */}			
// 			</Nav.Item>
// 		</Nav>
//     </div>
// )

// export default Header

// const Header = () => (
//     <Header>
// 	<Navbar>
// 		<Navbar.Header>
// 		<Navbar.Brand>
// 		<a href="#home">React-Bootstrap</a>
// 		</Navbar.Brand>
// 		</Navbar.Header>
// 		<Nav>
// 		<NavItem eventKey={1} href="#">
// 		Link
// 		</NavItem>
// 		<NavItem eventKey={2} href="#">
// 		Link
// 		</NavItem>
// 		<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
// 		<NavItem eventKey={3.1}>Action</NavItem>
// 		<NavItem eventKey={3.2}>Another action</NavItem>
// 		<NavItem eventKey={3.3}>Something else here</NavItem>
// 		<NavItem divider />
// 		<NavItem eventKey={3.4}>Separated link</NavItem>
// 		</NavDropdown>
// 		</Nav>
// 		</Navbar>
//         </Header>
// )
// export default Header

// const Header = () => (
// 	<div>
// 		<Navbar fluid collapseOnSelect>
// 			<Navbar.Header>
// 				<Navbar.Brand>
// 					<Link to="/">Scratch</Link>
// 				</Navbar.Brand>
// 				<Navbar.Toggle />
// 			</Navbar.Header>
// 			<Navbar.Collapse>
// 			<Nav pullRight>
// 				<LinkContainer to="/laptimes-beeswarmplot">
// 					<NavItem>Signup</NavItem>
// 				</LinkContainer>
// 				
// 			</Nav>
// 				</Navbar.Collapse>
//       	</Navbar>
//     </div>
// )

// export default Header




// const Header = () => (
// 	<div>
// 		<h1>FORMULA 1</h1>
// 		<nav className="navbar navbar-default">
//             <div className="container">
//                 <div className="navbar-header">
//                     <ul className="nav navbar-nav">
//                         <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
//                         <li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </div>
// )

// export default Header