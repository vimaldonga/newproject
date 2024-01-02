import React from "react";


const Hederhome = () => {
    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-light  border-top border-bottom px-2">

                <div className="navbar-brand col-md-3 col-lg-2 px-3 text-dark ">
                    
                    <span className="fw-bold"> T E C E L L</span>
                </div>
                <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
                    <div className="position-relative">
                        <i className=" position-absolute icon2 fa-solid fa-magnifying-glass"></i>
                        <input className="form-control form-control-dark bg-light px-5" type="text" placeholder="Search" aria-label="Search"></input>
                    </div>


                    <div>
                        <i className="fa-solid fa-sun iconhome"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-clock-rotate-left iconhome"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-bell iconhome"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-tv iconhome"></i>
                    </div>
                </div>

            </header>
        </>
    )
}


export default Hederhome; 