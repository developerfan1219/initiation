import * as React from 'react';
import { 
    Container, 
    Row, 
    Col,
} from 'reactstrap';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello() {

  return (
    <div className="hello">
        <h1>Hello Harold!</h1>
    </div>
  );
}

export default Hello;