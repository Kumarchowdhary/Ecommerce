import React from 'react';


export default class extends React.Component{
    render(){
        return(
            <main>
                <form method = 'post' action = '/addProducts' encType='multipart/form-data' onSubmit = {this.handleSubmit}>
                    {/*It takes the Category list of product*/}
                    <input list='category' name = 'category' placeholder = 'Enter Category'  required/>
                    <datalist id='category'>
                        <option value="Phones and Tablets"></option>
                        <option value="fashion"></option>
                        <option value="Beauty and Health"></option>
                        <option value="Toys and Games"></option>
                    </datalist><br/>
                    {/*It takes the product name*/}
                    <input type = 'text' name = 'pname'  placeholder = 'Enter Product Name' required /><br/>
                    {/*It takes brand name */}
                    <input type = 'text' name = 'brand'  placeholder = 'Enter Product Brand' required /><br/>
                    {/*It takes the product price*/}
                    <input type = 'text' name = 'price'  placeholder = 'Enter Product Price' required /><br/>
                    {/*It takes the number of products to add */}
                    <input type = 'number' min = '0' name = 'pnumber' placeholder = 'Enter Number of Products'/><br/>
                    {/*It takes the product Image*/}
                    <input type = 'file' name = 'image' required /><br/>
                    {/*It takes the description for the product*/}
                    <textarea name = 'desc' placeholder = 'Enter Product Description'></textarea><br/>
                    {/*This button adds the product in the database*/}
                    <button type = 'submit' >Update</button>
                </form>
            </main>
        );
    }
}