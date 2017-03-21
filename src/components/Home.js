import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';


export default class MyComponent extends Component {
 render() {
   return (
       <Card style={styles.container}>
         <CardSection>
           <Button>CheckIn</Button>
         </CardSection>
         <CardSection>
           <Button>CheckOut</Button>
         </CardSection>
       </Card>
   );
 }
}

const styles = {
 container: {
   flex: 1,
 },
};
