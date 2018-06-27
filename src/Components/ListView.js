import React, { Component } from 'react';
import { Table, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ListView extends Component {

  renderListRow = (item, key) => {
    return (
          <tbody>
          <tr>
            <th scope="row">{key+1}</th>
            <td>{item.product}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>{item.total}</td>
          </tr>
          </tbody>
      );
  }

  renderListHeader = () => {
    return (
          <thead>
          <tr>
            <th>S.No</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          </thead>
      );
  }

  renderGrandTotal(grandTotal){
    return (
      <ListGroupItem>
        <span style={spanStyle}>Grant total</span>
        <span style={spanStyle}>{ grandTotal }</span>
      </ListGroupItem> );
  }

  renderList() {
    const { calculatedListData, grandTotal } = this.props.listData;
    return (
      <div style={divStyle}>
        <span style={headerText}>Items</span>
        <Table>
        {
          this.renderListHeader()
        }
        {
          calculatedListData.map((item, key) => {
            return this.renderListRow(item, key);
          })
        }
        </Table>
        {
          this.renderGrandTotal(grandTotal)
        }
      </div>
  );
  }

  render() {
    return (
          this.renderList()
    );
  }
}

const divStyle = {
  border: '2px solid blue'
};

const headerText = {
  fontWeight: 'bold'
};

const spanStyle = {
  marginLeft: '20px',
  alignItems: 'left',
  justifyContent: 'center'
};

export default ListView;
