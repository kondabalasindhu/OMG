import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import "./AddGrocery.css";
import ReactVirtualizedTable from "../Tables/Tables";

function AddGrocery() {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(false);
    const [Data, setData] = useState(false);
    return (
        <div className="grocery">

            <DropdownButton id="dropdown-basic-button" title="Categories" className="mb-2 px-1 ">
                <div className="category">
                <Button
                   onClick={() => {
                    // setState(!state);
                    setOpen(!open);
                    setState(false);
                }}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                > Add Categories     </Button>
                {" "}
                <Button
                    onClick={() => { 
                        setState(!state)
                        setOpen(false);     
                       
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={state}
                >
                    List of Categories  
                </Button>
                {state&& <ReactVirtualizedTable/>}
                <div className="subsection" >
                    <Collapse in={open} dimension="width">
                        <div id="example-collapse-text">
                            <Card body className="cardbody"  
                            >
                                <label> Category name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter text"

                                />
                                <p className="forgot-password text-right mt-2">
                                    <Button className="btn-signup" type="submit">
                                        submit
                                    </Button>{" "}
                                </p>
                                {/* <button>Submit</button> */}
                            </Card>
                        </div>
                    </Collapse>
                    </div>
             </div>
            </DropdownButton>         
            <DropdownButton id="dropdown-basic-button" title="Products">
            
                <div className="category">
                <Button
                   onClick={() => {
                    // setState(!state);
                    setData(!Data);
                    setState(false);
                }}
                    aria-controls="example-collapse-text"
                    aria-expanded={Data}
                > Add Products   </Button>
                {" "}
                <Button
                    onClick={() => { 
                        setState(!state)
                        setOpen(false);     
                       
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={state}
                >
                    List of Products
                </Button>
                {state&& <ReactVirtualizedTable/>}
                <div className="subsection" >
                    <Collapse in={open} dimension="width">
                        <div id="example-collapse-text">
                            <Card body className="cardbody"  
                            >
                                <label> Category name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter text"

                                />
                                <p className="forgot-password text-right mt-2">
                                    <Button className="btn-signup" type="submit">
                                        submit
                                    </Button>{" "}
                                </p>
                                {/* <button>Submit</button> */}
                            </Card>
                        </div>
                    </Collapse>
                    </div>
             </div>
            </DropdownButton>  
            {/* <Tables /> */}
                {/* <Dropdown.Item href="login">Add products</Dropdown.Item>
                <Dropdown.Item href="#/action-2">list of products</Dropdown.Item> */}

           
        </div>
    )
}

export default AddGrocery;