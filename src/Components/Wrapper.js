import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { GetProducts } from './redux/action/ProductAction';
import { Provider } from './ContextProvider';

class Wrapper extends Component{
  constructor(props){
    super(props)
    this.state  ={
      products: []
    }
  }
  componentDidMount(){
    this.props.getProducts();
  }

  getElement =() =>{
    console.log(this.props.Products.data);
  }

  render() {
    return(
      <>
        <Provider value={{getElement: this.getElement}}>
          {this.props.children}
        </Provider>
      </>
    )
  }
}

const mapStateToProps = state =>({Products: state.Product})
const mapDispatchToProps = {
  getProducts: GetProducts
}

export default connect(mapStateToProps,mapDispatchToProps)(Wrapper)
