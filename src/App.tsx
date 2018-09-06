// import CircularProgress from '@material-ui/core/CircularProgress';
// import purple from '@material-ui/core/colors/purple';
import { Input } from '@material-ui/core'
import * as React from 'react';
import './App.css';


interface IState {
  APIoutput: any, // APIoutput from the API
  userInput: any, // this will store our users input
  gotResponse: any
}

// we now extend IState so we can use it in our app
// this class now adheres to the interfacde IState
export default class App extends React.Component<{}, IState> {

  constructor(props: any) {

    super(props)
    this.state = { APIoutput: [], userInput: '', gotResponse: false }

    this.handleChange = this.handleChange.bind(this);

  }

  public handleChange(event: any) {
    // alert('User has submitted an input text: ' + this.state.userInput);

    if (event.key === 'Enter') {
      const test = event.target.value;
      this.setState({ userInput: test });
      
      this.getRequest(test)
    }

  }




  public getRequest(test: any) {

    const website: string = "http://apilayer.net/api/detect"
    const apiKey: string = "?access_key=ebec62c458cc645f0d52e799e497e2ef"
    const query: string = "&query=" + test;

    // userQuery should be something like: http://apilayer.net/api/detect?access_key=ebec62c458cc645f0d52e799e497e2ef&query=%EC%9D%B4%EA%B2%83%EC%9D%B4%20%EB%AC%B4%EC%8A%A8%20%EC%96%B8%EC%96%B4%20%EC%A7%80
    const theRequest: string = website + apiKey + query;

    fetch(theRequest)
      .then(result => result.json())
      .then(json => {
        this.setState({
          APIoutput: json,
          gotResponse: true
        })
      })
  }




  public render() {
    return (
      <div>
        <Input 
        placeholder="enter some text"
        inputProps={{
          'aria-label': 'Description',
        }}
        onKeyPress={this.handleChange} 
        />
        <p>
        {this.state.APIoutput.hasOwnProperty('results') ? this.state.APIoutput.results[0].probability : "Hi"}
        </p>
      </div>
    );
  }


  // - - - - - - - - - - old template code rom dankNotDank - - - - - - - - -
  // /*
  // So here in the function, we pass in a file, and then we read the image, 
  // display it by setting the imageFiles state to files and upload the image 
  // using the upload method which we will implement next. 
  // The btoa() function encrypts the image into a base 64 string.
  // */
  // public onDrop(files: any) {
  //   // setting state
  //   this.setState({imageFiles: files, APIoutput: "" })

  //   const file = files[0] // first file in the array
  //   const reader = new FileReader(); // open up file reader

  //   // convert our image to a binary string
  //   reader.onload = (readerEvt) => {
  //     // const binaryString = readerEvt.target!!.result;// makes sure the target is not null

  //     // upload the image
  //     // btoa encrypts the binary string into a base 64 string so we can send over the internet with no problems
  //     // this.upload(btoa(binaryString)) 
  //   };

  //   // make the reader read it as a binary string
  //   reader.readAsBinaryString(file);
  // }

  // /*
  // Here what we do is we send a POST request to the API. 
  // The content is the base64 string we encoded previously. 
  // After the request has been sent we then guage responses. 
  // If the response is "ok" we can set the state to the dankness meter. 
  // Otherwise, we set it to the error message.
  // */
  // public upload(base64String: string) {
  //   fetch('https://danktrigger.azurewebsites.net/api/dank', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'text/plain',
  //     },
  //     body: JSON.stringify({
  //       file: base64String,
  //     })
  //   })
  //   .then((response : any) => {
  //     if (!response.ok) {
  //       this.setState({APIoutput: response.statusText})
  //     }
  //     else {
  //       response.json().then((data: any) => this.setState({APIoutput: data[0].class}))
  //     }
  //     return response
  //   })
  // }


  /*
This is the function that will render the main page of the application, 
where you can now upload the image and upload it to the machine learning model, 
and receieve a dankness score!

So this is a very simple HTML snippet in react. 
The purpose of it is to simply host the "dropzone" where we will be placing 
our photo in, and then showing the progress of uploading, 
and then shows us the response we recieve from the server.
// */
  // public render() {
  //   return (
  //     <div className="container-fluid">
  //       <div className="centreText">
  //         <div className="dropZone">
  //           <Dropzone onDrop={this.state.dropzone} style={{position: "relative"}}>
  //             <div style={{height: '50vh'}}>
  //               {
  //                 this.state.imageFiles.length > 0 ? 
  //                   <div>{this.state.imageFiles.map((file) => <img className="image" key={file.name} src={file.preview} /> )}</div> :
  //                   <p>Try dropping some files here, or click to select files to upload.</p>
  //               }  
  //             </div>
  //           </Dropzone>
  //         </div>


  //         <div  className="dank">
  //         {
  //           this.state.APIoutput === "" && this.state.imageFiles.length > 0 ?
  //           // <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/> :
  //           <CircularProgress size={50} style={{ color: purple[500] }} thickness={7}/> :
  //           <p>{this.state.APIoutput}</p>
  //         }
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // public render() {
  //   return (
  //     <div className="container-fluid">
  //     <div className="centreText">
  //       {/* React components must have a wrapper node/element */}
  //       <h1>°Д°</h1>
  //     </div>
  //   </div>
  //   );
  // }
}