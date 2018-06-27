import React, { Component } from 'react';
import { Form, FormGroup, Button, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

class InputProduct extends Component {
  constructor(props){
       super(props);
       this.state = {
           fields: {}
         }
    }

    updateInputValue(e, field) {
      const { fields } = this.state;
      fields[field] = e.target.value
      this.setState({
        fields
    });
  }

  validateFields = (fields) => {
    return(fields.product && fields.qty && fields.price);
  }

   handleSubmit = (e) => {
     if(this.validateFields(this.state.fields))
      this.props.addData(this.state.fields);
   }

  render() {
    return (
      <div style={divStyle}>
      <Form>
        <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Product Name</InputGroupText>
        </InputGroupAddon>
        <Input onChange={evt => this.updateInputValue(evt, "product")} value={this.state.fields.name} ref="product" type="text"/>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Quantity</InputGroupText>
        </InputGroupAddon>
        <Input onChange={evt => this.updateInputValue(evt, "qty")} value={this.state.fields.qty} ref="qty" type="number"/>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Price</InputGroupText>
        </InputGroupAddon>
        <Input onChange={evt => this.updateInputValue(evt, "price")} value={this.state.fields.price} ref="price" type="text"/>
      </InputGroup>
      </FormGroup>
      <Button onClick={this.handleSubmit} color="primary">Add Product</Button>{' '}
      <br />
      </Form>
    </div>
    );
  }
}

const divStyle = {
  margin: 60
};

export default InputProduct;
