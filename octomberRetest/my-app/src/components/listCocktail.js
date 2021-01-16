import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ListCocktail = ({ snews, mode, children, ...restprops}) => {
  console.log(snews)
  return (
    <div>
      <Card mode={mode}>
        <CardImg top width="100%" src={snews.strDrinkThumb} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{snews.strDrink}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListCocktail;