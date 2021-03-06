import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class Header extends React.Component{

  //ヘッダー右のハンバーガーメニューを初期化
  constructor(props){
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed:true
    };
  }

  //ハンバーガーメニューの状態を反転する関数
  toggleNavbar(){
    this.setState({
      collapsed:!this.state.collapsed
    });
  }

  //Reactstrap コンポーネントのドキュメントの NavbarToggler の部分を参考にヘッダー作成
  render(){
    return(
      <div>
        {/*Navbarを上部に固定し色を暗く*/}
        <Navbar fixed="top" color="dark" dark>
        {/*左右に空白を作るためNavbar全体をContainerコンポーネントで囲む*/}
         <Container>
          <NavbarBrand href="https://kaitoohmura.github.io/react-photo-gallery/" className="mr-auto">Photo Gallery</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Twitter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
         </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
