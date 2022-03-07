import React, { Component } from "react";
import { Form, Modal, Tab, Tabs } from "react-bootstrap";

import MemberBookingList from "../VisitorList";

export class BookingsList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Visitors List</h4>

              <Tabs id="uncontrolled-tab-example" className="mb-3 ">
                <Tab
                  tabClassName="btn btn-primary"
                  eventKey="Bookinghistory"
                  title="Booking History"
                >
                  <MemberBookingList />
                </Tab>

                <Tab
                  tabClassName="btn btn-primary"
                  eventKey="UpcomingBookings"
                  title="Upcoming Bookings"
                ></Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingsList;
