import React,  { Component, useState} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import './FirstScreen.css'
import './svg.png'
const Input=styled.div`
> .firs {
    width: 200px;
    height: 150px;
    background: #BDFF00;
    border-radius: 10px;
    padding-top: 66px;
    padding-left: 44px;
    padding-right: 44px;
    padding-bottom: 66px;
    display:flex;
    
    
}
// > .img {
//     width: 150px;
//     height: 150px;
// }
// // > .fileUpload2 {
// //     width: 500px;
// //     height: 150px;
// //     background: #BDFF00;
// //     border-radius: 10px;
// //     padding-top: 66px;
// //     padding-left: 44px;
// //     padding-right: 44px;
// //     padding-bottom: 66px;
    
    
// // }
// > .firstBox {
//     width: 250px;
//     height: 200px;
//     background: #BDFF00;
//     border-radius: 10px;  
//     margin-top: 10px;
//     margin-left: 0px;
//     display: inline-block;
// }
// > .secondBox {
//     width: 250px;
//     height: 200px;
//     background: #BDFF00;
//     border-radius: 10px;  
//     margin-top: 10px;
//     display: inline-block;
// }
// > .inputfile {
// 	width: 0.1px;
// 	height: 0.1px;
// 	opacity: 0;
// 	overflow: hidden;
// 	position: absolute;
// 	z-index: -1;
// }
// > .inputfile + label {
//     font-size: 1.25em;
//     font-weight: 700;
//     color: white;
//     background-color: black;
//     display: inline-block;
// }

// .inputfile:focus + label,
// .inputfile + label:hover {
//     background-color: red;
// }
input[type="file"] {
    display: none;
}
`;

 class FirstScreen extends Component {

    // const [file, setFile] = useState([]);


    constructor(props) {
        super(props)
    
        this.state = {
             file:[],
             file2:[],
             fileName:'',
             fileName2:'',
             selectedFile: '',
             selectedFile2:'',
             fileInputKey: '',
             fileInputKey2:'',
             imgRef: '',
             imgRef2:'',
             value: '',
             value2:''
        };
        // this.fileUpload = this.fileUpload.bind(this);
        // this.deleteFile = this.deleteFile.bind(this);

    }
      
      
      fileUpload = (event) => {
          const selectedFile = event.target.files[0];
            if (event.target.files[0]) {
        //   setFile([...file, URL.createObjectURL(e.target.files[0])]);

          this.setState({
              fileInputKey: Date.now(),
            imgRef: URL.createObjectURL(selectedFile),
            fileName: selectedFile.name,
            value: event.target.value,

          });
        //   const fileName =  console.log(selectedFile.name);

      }
    }

    fileUpload2 = (event) => {
      const selectedFile2 = event.target.files[0];
        if (event.target.files[0]) {
    //   setFile([...file, URL.createObjectURL(e.target.files[0])]);

      this.setState({
          fileInputKey2: Date.now(),
        imgRef2: URL.createObjectURL(selectedFile2),
        fileName2: selectedFile2.name,
        value2: event.target.value2,

      });
    //   const fileName =  console.log(selectedFile.name);

  }
}

      deleteFile1 = () => {
        this.setState({
            file: [],
          selectedFile: '',
          fileInputKey: '',
          imgRef: '',
          value: '',
          fileName: ''
        });
        console.log("File deleted");
      }

      deleteFile2 = () => {
        this.setState({
            file2: [],
          selectedFile2: '',
          fileInputKey2: '',
          imgRef2: '',
          value2: '',
          fileName2: ''
        });
        console.log("File deleted");
      }

    render() {
       
        return (
            <div>
                <h4>Icon*</h4>

                <div className="d-flex">

                  <div className="text-center first">
                
                <label className="firstLabel">
                
                 Click To Browse <br />
                <input ref="file" type="file"  key={this.state.fileInputKey} id="input" 
                className="firstBox" name="filename" accept=".svg" title=" "
                onChange={this.fileUpload}/> <br/>
                 
      <div className="img"> <img src={this.state.imgRef} style={{width:50}} /> 
      </div>
      
       <p>{this.state.filename}</p>
    
                </label>
                {/* <img src="./src/components/svg.png" alt="image not found"></img> */}
                <div className="wholeBox1">

                <p>{this.state.fileName}</p>
                <span> Upload SVG For Android </span>
                </div>
                
                
                <button type="button"
           value={this.state.value}
          data-test="clear"
          onClick={this.deleteFile1}
        >
          {" "}
          Clear{" "}
        </button>

        <br /> 
        
                </div>

                <div className="text-center second">
                
                
                <label className="secondLabel">
                    Click To Browse
                <input ref="file2" type="file" key={this.state.fileInputKey2} className="secondBox" id="input" accept=".pdf"
                onChange={this.fileUpload2}/> <br/>
                {/* <div className="img"> <img src={this.state.imgRef2} /> 
                      </div>                  */}
                      
                      </label>
                
                <div className="wholeBox2">
                
                <p>{this.state.fileName2}</p>
                <span>Upload PDF For iOS</span>
                </div>

                <button type="button"
           value={this.state.value2}
          data-test="clear"
          onClick={this.deleteFile2}
        >
          {" "}
          Clear{" "}
        </button>

        <br /> 

        </div>

        </div>
                
            </div> 
        )
    }
}

export default FirstScreen
