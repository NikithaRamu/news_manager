import React from 'react';
import Card1 from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css'
function Card(props) {
    return (
        <div className="alignment">
            <Card1>
                <Card1.Header>{props.newsItem.title}</Card1.Header>
                <Card1.Body>

                    <Card1.Text>{props.newsItem.author}</Card1.Text>
                    <img src={props.newsItem.urlToImage} className="newsImg"></img>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    
                    <Button onClick={()=>{props.readNewsLater(props.newsItem)}}>Read Later</Button>
                </Card1.Body>
            </Card1>
        </div>
    );
}

export default Card;