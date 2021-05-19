import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Navbar from './components/Navbar'
import FirstScreen from './components/FirstScreen'
import styled from 'styled-components';
import Demo from './components/Demo'
import PrimisLogin from './components/PrimisLogin'
// import Backgroundimage from '../public/Background_image.png'
import PersonList from './components/PersonList'
import PersonInput from './components/PersonInput'

import Table from './components/Table'
import Pagination from './components/Pagination'


// const Main = styled.div`
// > .App {
//   background: #BDFF00;
// }`;


class App extends Component {
    render(){
        return (
          
            <div className = "App">
              < Pagination />

              {/* <PrimisLogin /> */}

              {/* <FirstScreen /> */}

              {/* <Table /> */}

              {/* <ClassClick /> */}

              {/* <Counter /> */}

              {/* <Demo /> */}

              {/* <FunctionClick /> */}

              {/* <Greet name="A" > 
                      <p>This is children props</p>
                  </Greet>
                  <Greet name="B" >
                      <button>Action</button>
                  </Greet>
                  <Greet name="C" /> */}

                {/* <Hello /> */}

                {/* <Message /> */}


              {/* <PersonInput /> */}

              {/* <PersonList />   */}
              
              {/* <Welcome name="A" >
                  </Welcome> */}
                
            </div>
            
        );
    }
}

export default App;