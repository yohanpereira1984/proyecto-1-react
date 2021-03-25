import './App.css';
import React from 'react';

import {  Button, FormControl, Checkbox, Container, ButtonGroup} from '@material-ui/core';

function App() {
  return (
    <div className="App">
     
  
 


<Container fixed></Container>
<FormControl>¨

<Button variant="contained" color="primary" disableElevation>
  resultado
</Button>

<ButtonGroup color="primary" aria-label="outlined primary button group">
  
  <Button>mrc</Button>
  <Button>m-</Button>
  <Button>m+</Button>
  <Button>mu</Button>
  <Button>gt</Button>
</ButtonGroup>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>+/-</Button>
  <Button>7</Button>
  <Button>8</Button>
  <Button>9</Button>
  <Button>%</Button>
  <Button></Button>
</ButtonGroup>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>AC</Button>
  <Button>4</Button>
  <Button>5</Button>
  <Button>6</Button>
  <Button>X</Button>
  <Button>/</Button>
  
</ButtonGroup>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>CE</Button>
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
  <Button></Button>
  <Button>-</Button>
  
</ButtonGroup>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>ON/C</Button>
  <Button>0</Button>
  <Button>00</Button>
  <Button>.</Button>
  <Button>+</Button>
  <Button>=</Button>
  
</ButtonGroup>

  


 
 
</FormControl>
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
  
/>

    </div>

       
     
  );
}

export default App;
