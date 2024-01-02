import React from "react";
import Hederhome from "./Hederhome";
import Wabhome from "./Wabhome";
import Manuhome from "./Manuhome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {


    return (
        <BrowserRouter>


            <>
                <div className="container-fluid bg-light border border-success">

                    <Hederhome />
                    <div className="container1">
                        <div className="row">
                            <div className="col-2">
                                <Manuhome />
                            </div>
                            <div className="col-10">
                            
                            <Routes>
                            <Route path="" element={<Wabhome/>}></Route>
                                <Route exact path="/profile" element={<Profile/>}></Route>
                                <Route exact path="/student" element={<Student/>}></Route>
                            </Routes>
                            </div>

                        </div>

                    </div>

                </div>



            </>
        </BrowserRouter>
    )
}


export default Home;

function Profile(){
    return <h2>profile</h2>
}
function Student(){
    return <h2>student</h2>
}