import React, { Component } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import MaterialTable from "material-table";
import tableIcons from "../tableIcons";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class ReservationHistory extends Component {
  state = {
    bookshow: false,
  };
  render() {
    const columns = [
      {
        title: "Reservation ID",
        field: "Reservation_ID",
      },
      {
        title: "Employee Name",
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
        title: "Company Name",
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
        title: "Reservation Start Date and Time",
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
        title: "Reservation End Date and Time",
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
        title: "Last Check-IN Date & Time",
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
      {
        title: "Last Check-Out Date & Time",
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
        <div className="d-flex justify-content-end ">
          <button
            onClick={() => this.setState({ bookshow: true })}
            className="btn btn-primary m-2"
          >
            OnClick
          </button>
          <a href="#">See Other Employee List</a>
        </div>

        <MaterialTable
          title=""
          icons={tableIcons}
          columns={columns}
          options={{
            exportButton: {
              csv: true,
              pdf: true,
            },
          }}
        />
        <Modal
          show={this.state.bookshow}
          //fullscreen={true}
          onHide={() => this.setState({ bookshow: false })}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Employee Check-In Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label for="exampleInputEmail1" className="form-label">
                    Reservation ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Auto Populate Reservation ID"
                  />
                </div>
                <div className="col-md-6">
                  <label for="exampleInputEmail1" className="form-label">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Auto Populate Employee Name"
                  />
                </div>
                <div className="col-md-6">
                  <label for="exampleInputPassword1" className="form-label">
                    Reservation Starting Date & Time
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="04-Jan-2021 10:30 Hrs"
                  />
                </div>{" "}
                <div className="col-md-6">
                  <label for="exampleInputPassword1" className="form-label">
                    Reservation Ending Date & Time
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="07-Jan-2021 18:30 Hrs"
                  />
                </div>
                <div className="col-md-6  ">
                  <label for="exampleInputEmail1" className="form-label">
                    Employee Body Temperature
                  </label>
                  <div className="d-flex col-md-12">
                    {" "}
                    <Form.Control
                      type="email"
                      //className="form-control bg-1 col-md-8"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Body Temperature"
                    />
                    <select className="col-md-4">
                      <option>Select Units</option>
                    </select>
                  </div>
                </div>
                <div className=" col-md-6">
                  <label for="exampleInputPassword1" className="form-label">
                    Remarks (if rejected)*
                  </label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="form-control"
                    placeholder="Write reason for rejection"
                  />
                </div>
              </div>
            </form>
            <h4 className="card-description mt-5">Uploaded document</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Document Category</th>
                  <th scope="col">Document Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Company ID Card</td>
                  <td>
                    <a href="#">Company ID</a>
                  </td>
                  <td>
                    {" "}
                    <select className="form-control-sm">
                      <option>Verified</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>ID Proof</td>
                  <td>
                    <a href="#">Pan Card</a>
                  </td>
                  <td>
                    {" "}
                    <select className="form-control-sm">
                      <option>Verification pending</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Vaccination Certificate</td>
                  <td>
                    <input type="file" className="d-none" id="upload" />
                    <label htmlFor="upload">Upload Now</label>
                  </td>
                  <td>
                    {" "}
                    <select className="form-control-sm">
                      <option>select</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>{" "}
            <p>
              {" "}
              <BsInfoCircleFill
                className="ml-3 mt-0"
                style={{ color: "#BF9000" }}
              />{" "}
              Click on the document name to preview it
            </p>
            <h4 className="card-description mt-5">
              Check-In/Check-Out Time Log
            </h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Check-IN Time</th>
                  <th scope="col">Check-Out Time</th>
                  <th scope="col">Body temperature at the time of Check-IN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>04-Jan-2022</td>
                  <td>10:30 Hrs</td>
                  <td>16:00 Hrs</td>
                  <td>95.7 Fahrenheit</td>
                </tr>
                <tr>
                  <td>05-Jan-2022</td>
                  <td>10:45 Hrs</td>
                  <td>Nil</td>
                  <td>97.5 Fahrenheit</td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>

          <Modal.Footer>
            <button variant="secondary" className="btn btn-secondary">
              Reject
            </button>
            <button variant="primary" className="btn btn-primary">
              Allow
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ReservationHistory;
