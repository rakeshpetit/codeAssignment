import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListView from './ListView';
import InputProduct from './InputProduct';
import { Button } from 'reactstrap';
import { loadData, addData } from '../actions';
import { getProducts } from '../selectors';


class HomePure extends Component {
  componentWillMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div>
        <InputProduct addData={this.props.addData}/>
        {this.props.products
          && <ListView listData={this.props.products}/>}
      </div>
    );
  }
}

HomePure.propTypes = {
  loadData: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  listData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    products: getProducts(state)
  };
}

const actionsToProps = {
  loadData,
  addData
};

export const Home = connect(mapStateToProps, actionsToProps)(HomePure);

export default Home;
