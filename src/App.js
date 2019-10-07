import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import SingleRecepie from "./components/SingleReceipts";
import Row from "react-bootstrap/Row";
import Col from "reactstrap/es/Col";



let searchQuery="";
let counter=0;
const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?s="+searchQuery;
let array=[];
class App extends React.Component{
    state={
        receipts: []
    };

    getRecipe = async (e) => {

        e.preventDefault();
        document.getElementById("loading").style.visibility = "visible";
        const recipeName=e.target.elements.receipeQuery.value;



        const API_LINK="https://www.themealdb.com/api/json/v1/1/search.php?s="+recipeName+"&count=4";
        fetch("https://cors-anywhere.herokuapp.com/"+API_LINK)
            .then((result) => {
                // Get the result
                // If we want text, call result.text()

                return result.json();
            }).then((jsonResult) => {
            // Do something with the result
            // console.log(jsonResult);
            if (jsonResult !== null) {
                console.log(typeof jsonResult.meals);
                this.setState({receipts: jsonResult.meals});
                array=jsonResult.meals;
                console.log(this.state);
                for (let i=0;i<jsonResult.meals.length;i++)
                {
                    //console.log(jsonResult.meals[i]);

                }
                document.getElementById("loading").style.visibility = "hidden";
            }
        });

        //console.log(recipeName);
        //console.log("Working!!");
    };
    render() {
        return (
            <div>
                <Form getRecipe={this.getRecipe}/>
                <div className="container">

                    <div className="row"><h3>Found: {this.state.receipts.length} Receipts:</h3></div>
                    <div className="row">

                        {
                            this.state.receipts.map(item =>
                                <SingleRecepie data={item}/>
                            )
                        }
                    </div>
                    <div id="loading" className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
