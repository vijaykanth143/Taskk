import React, { Component } from "react";
import { Form, Modal, Tab, Tabs } from "react-bootstrap";
import ReservationHistory from "../Reservation";
import { Link } from "react-router-dom";

export class Reservation extends Component {
  render() {
    return (
      <Link to="reservation" style={{ textDecoration: "none" }}>
        {" "}
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{ color: "black" }}>
                  Visitors List
                </h4>

                <Tabs id="uncontrolled-tab-example" className="mb-3 ">
                  <Tab
                    tabClassName="btn btn-primary"
                    eventKey="ReservationHistory"
                    title="Reservation History"
                  >
                    <ReservationHistory />
                  </Tab>

                  <Tab
                    tabClassName="btn btn-primary"
                    eventKey="upcomingReservation"
                    title="Upcoming Reservation"
                  ></Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Reservation;
