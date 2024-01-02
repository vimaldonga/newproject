import React from "react";
import { Link } from "react-router-dom";


const Manuhome = () => {

    const removeall = () => {



    }



    return (
        <>
            <div className="container-fuid bg-light webkit ">
                <div className="d-flex flex-column gap-4 px-3 py-3">
                    <div className="d-flex flex-column gap-3" >
                        <p className="fw-lighter">Account</p>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-user"></i>
                            <Link to="/profile">profile</Link>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-users"></i>
                            <Link to="/student">Student</Link>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <p className="fw-lighter">Activity</p>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-users-viewfinder"></i>
                            <a>overview</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-clipboard-check"></i>
                            <a>authorization</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-regular fa-note-sticky"></i>
                            <a>charging sessions</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-book-open"></i>
                            <a>transactions</a>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <p className="fw-lighter">Activity</p>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-charging-station"></i>
                            <a>charging stations</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-crown"></i>
                            <a>site owners</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-people-line"></i>
                            <a>e mobility providers</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-user-group"></i>
                            <a>partners</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-car-on"></i>
                            <a>drivers</a>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <p className="fw-lighter">Billings</p>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-regular fa-calendar-minus"></i>
                            <a>reports </a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-toolbox"></i>
                            <a>offer</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-users-viewfinder"></i>
                            <a>settlements </a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-gears"></i>
                            <a> settings </a>
                        </div>

                    </div>
                    <div className="d-flex flex-column gap-3">
                        <p className="fw-lighter">Pricing & Vouchers</p>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-comments-dollar"></i>
                            <a>pricing plans</a>

                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-regular fa-address-card"></i>
                            <a>vouchers</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 hovereffect">
                            <i className="fa-solid fa-circle-xmark"></i>
                            <a href="" onClick={removeall}>LogOut</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manuhome;