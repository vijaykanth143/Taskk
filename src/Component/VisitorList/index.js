import React, { Component } from "react";
import "./status.css";
import MaterialTable from "material-table";
import tableIcons from "../tableIcons";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class MemberBookingList extends Component {
  state = {
    bookshow: true,
  };

  render() {
    const columns = [
      {
        title: "Booking ID",
        field: "booking_id",
      },
      {
        title: "Member Name",
        field: "user_id",
        // render: (rowData) => (
        //   <div>
        //     {this.state.membersData &&
        //       this.state.membersData.map((value, key) => {
        //         if (value.id === rowData.user_id) {
        //           memberName = value.name;
        //         }
        //       })}
        //     {memberName}
        //   </div>
        // ),
      },
      {
        title: "Contact Number",
        field: "property_name",
        // render: (rowData) => (
        //   <div>
        //     {this.state.propertyData &&
        //       this.state.propertyData.map((value) => {
        //         if (value.id === rowData.booking_type_id) {
        //           property_name = value.property_name;
        //         }
        //       })}
        //     {property_name}
        //   </div>
        // ),
      },
      {
        title: "Email ID",
        field: "resource_group_name",
        // render: (rowData) => (
        //   <div>
        //     {this.state.resourceGroup &&
        //       this.state.resourceGroup.map((value) => {
        //         if (value.id === rowData.resource_plan_id) {
        //           resource_group_name = value.resource_group_name;
        //         }
        //       })}
        //     {resource_group_name}
        //   </div>
        // ),
      },
      {
        title: "Booking Start Date and Time",
        field: "start_at",
        // render: (rowData) => (
        //   <div>
        //     {propertyData &&
        //       propertyData.map((value) => {
        //         if (value.id === rowData.property_id) {
        //           start_at = value.start_date;
        //         }
        //       })}
        //     {start_at}
        //   </div>
        // ),
      },
      {
        title: "Booking End Date and Time",
        field: "end_at",
        // render: (rowData) => (
        //   <div>
        //     {propertyData &&
        //       propertyData.map((value) => {
        //         if (value.id === rowData.property_id) {
        //           end_at = value.end_date;
        //         }
        //       })}
        //     {end_at}
        //   </div>
        // ),
      },
      {
        title: "Current Status",
        field: "price",
        // render: (rowData) => (
        //   <div>
        //     {this.state.resourcePlan &&
        //       this.state.resourcePlan.map((value) => {
        //         if (value.id === rowData.resource_plan_id) {
        //           price = value.price;
        //         }
        //       })}
        //     {price}
        //   </div>
        // ),
      },
    ];
    return (
      <div>
        <MaterialTable
          title="Visitors List"
          icons={tableIcons}
          columns={columns}
          options={{
            exportButton: {
              csv: true,
              pdf: true,
            },
          }}
        />
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Member Check-In Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="d-flex justify-content-between">
                {" "}
                <div class="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Booking ID
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Auto Populate Booking ID"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Member Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Auto Populate Member Name"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                {" "}
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Booking Starting Date & Time
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="04-Jan-2021 10:30 Hrs"
                  />
                </div>{" "}
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Booking Ending Date & Time
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="07-Jan-2021 18:30 Hrs"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                {" "}
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Member Body Temperature
                  </label>
                  <div className="d-flex">
                    {" "}
                    <input
                      type="email"
                      class="form-control bg-1"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Body Temperature"
                    />
                    <select className="options">
                      <option>Select Units</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 textarea">
                  <label for="exampleInputPassword1" class="form-label">
                    Remarks (if rejected)*
                  </label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="textarea-2"
                    placeholder="Write reason for rejection"
                  />
                </div>
              </div>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <button variant="secondary">Close</button>
            <button variant="primary">Save changes</button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default MemberBookingList;
