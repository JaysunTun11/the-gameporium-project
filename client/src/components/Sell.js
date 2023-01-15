import React, { Fragment, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { Navigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import {useEffect} from 'react'

const SellPage = ({ setAuth, isAuthenticated }) => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [productName, setProductName] = useState("")
    const [tags, setTags] = useState([])
    const [price, setPrice] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    async function getName() {
        try {

            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }

            });
            const parseRes = await response.json()

            setName(parseRes.user_name)
        } catch (err) {
            console.error(err.message)
        }
    }


    useEffect(() => {
        getName()
    })

    if (!isAuthenticated) {
        return (
            <div className="content">
                <br></br>
                <center><h1>Please <a href='/Register'>register</a> a free account to make a sell listing!</h1></center>
            </div>
        )
    }


    const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
              <Alert key="danger"  variant="danger">
            <h1>Please enter all the required fields</h1>
            </Alert>
          </div>
        );
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || location === '' || productName == '' || price === '') {
            setError(true);
            setSubmitted(false);
        }
        else {
            try {
                const body = { name, location, productName, tags, price};
                const response = await fetch("http://localhost:5000/selling/postListing", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

                const parseRes = await response.json();
                
                setError(false)
                setSubmitted(true);
                setError(false);
                console.log(parseRes);
            }
            catch (err){
                console.error(err.message);
            }
        }
    }

    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46)) {
            return false;
        }
        return true;
    }

    return(
        <Fragment>
            <div className="content">
                <div className="messages">
                    <center>
                        {errorMessage()}
                    </center>
                </div>

                <center><h1>Sell Page!</h1></center>

                <form onSubmit = {handleSubmit}>
                    <center>
                        <br></br>
                        <br></br>

                        <label htmlfor = " Posting Location"><b>Posting Location*</b></label>
                        <br></br>
                        <input value={location} onchange={(e) => setLocation(e.target.value)} type="text" placeHolder="Location (required)"></input>

                        <br></br>
                        <br></br>
                        <label htmlfor = " Product Name"><b>Product Name*</b></label>
                        <br></br>

                        <input value={productName} onchange={(e) => setProductName(e.target.value)} type="text" placeHolder="Product Name (required)"></input>

                        <br></br>
                        <br></br>

                        <label htmlfor = " Price"><b>Product Price in USD*</b></label>
                        <br></br>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" class="textfield" placeHolder="USD Price (required)" id="extra7" name="extra7" onkeypress="return isNumber(event)" />
                        <br></br>
                        <br></br>

                        <button type = "submit" onClick={handleSubmit} className="btn btn-success btn-block">Post Listing</button>
                    </center>
                </form>
            </div>
        </Fragment>
    );
}
export default SellPage;