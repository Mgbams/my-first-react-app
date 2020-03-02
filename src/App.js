import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = props => (
  <h1 className={`title ` + props.colorName}>{props.text}</h1>
);
const Subtitle = props => <div>{props.children}</div>;

const MyCard = (props) => 
  <Card>
    <Card.Body>
      <Card.Title>{props.title || "Titre de carte"}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>;

function App() {
  return (
    <div className="App">
      <h1>My First react App!</h1>
      <Title colorName="red" text="Bonjour DWWM Lyon!" />
      <Subtitle>
        <p>
          Comment ça va les <span>amis</span>?
        </p>
      </Subtitle>
      <MyCard title="fast shit" text=" Some quick example text to build on the card title and make up the bulk
        of the card's content" />
         <MyCard title="fast shit" text=" Some quick example text to build on the card title and make up the bulk
        of the card's content" />
         <MyCard title="fast shit" text=" Some quick example text to build on the card title and make up the bulk
        of the card's content" />
         <MyCard title="fast shit" text=" Some quick example text to build on the card title and make up the bulk
        of the card's content" />
         <MyCard title="fast shit" text=" Some quick example text to build on the card title and make up the bulk
        of the card's content" />
    </div>
  );
}

export default App;
