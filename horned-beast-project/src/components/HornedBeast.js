import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            favorite:0
        }
    }

    favoritClick= ()=>{
        this.setState({favorite:this.state.favorite+1})
        this.props.displayModel(this.props.data);
    }
    render(){
        return(
         <>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageURL} alt ={this.props.title}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary" onClick={this.favoritClick}>❤️Like {this.state.favorite} </Button>
      </Card.Body>
    </Card>

         </>
        )
    }
}

export default HornedBeast;