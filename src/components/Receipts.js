import React from 'react';
import SingleReceipts from './SingleReceipts';


class Receipts extends React.Component{
    state={
        receipts: []
    };


    render() {
        let receipts = [];
        console.log(typeof receipts)
        let array=[1,2,3];
        let query="chicken";
        const API_LINK="https://www.themealdb.com/api/json/v1/1/search.php?s="+query;
        fetch("https://cors-anywhere.herokuapp.com/"+API_LINK)
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((jsonResult) => {
            // Do something with the result
               // console.log(jsonResult);

                for (let i=0;i<jsonResult.meals.length;i++)
                {
                   console.log(jsonResult.meals[i]);
                   this.state.receipts.push(jsonResult.meals[i]);
                }
        });
        return [
            <li key="one">{}</li>,
            <li key="two">Second item</li>,
            <li key="three">Third item</li>,
            <li key="four">Fourth item</li>,
        ];
    }
}

export default Receipts;