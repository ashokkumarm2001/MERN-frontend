import React, { Component } from "react";
// import './AddStudent.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'

class AddStudent extends Component {
  state = {
    name: "",
    email: "",
    enrollnumber: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
    e.preventDefault();
    try {
      const newStudent = await axios.post("https://mern-backend-n8qk.onrender.com/post", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          enrollnumber: this.refs.enrollnumber.value
        }
      );

      toast("Student " + newStudent.data.newStudent.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (

      <div className="container mt-3 ">
        <h1>Add Student:</h1>
        <form onSubmit={this.addStudent}>
          <div className="form-group mt-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the students here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="form-control"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          </div>
          <div className="form-group mt-3">
          <label htmlFor="email">email: <b>(must be a valid email)</b></label>
          <input
            type="text"
            placeholder="enter your email here"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="form-control"
            required
            id="email"
          />
          </div>
          <div className="form-group mt-3">
          <label htmlFor="enrollnumber">Enrollment Number: </label>
          <input
            type="number"
            placeholder="0 to 120"
            name="enrollnumber"
            min="1"
            max="120"
            onChange={this.onChangeHandler}
            ref="enrollnumber"
            className="form-control"
            required
            id="enrollnumber"
          />
          </div>
          <button type="submit" className="btn btn-primary me-2 mt-3"><i className="fa fa-plus"></i></button>
          <button type="reset" className="btn btn-secondary mt-3"><i className="fa fa-refresh"></i></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;


// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.css'

// const AddStudent = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [enrollnumber, setEnrollNumber] = useState("");

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     if (name === "name") setName(value);
//     if (name === "email") setEmail(value);
//     if (name === "enrollnumber") setEnrollNumber(value);
//   };

//   const addStudent = async (e) => {
//     e.preventDefault();
//     try {
//       const newStudent = await axios.post("http://localhost:3500/post", {
//         name,
//         email,
//         enrollnumber,
//       });

//       toast("Student " + newStudent.data.newStudent.name + " created successfully", { type: toast.TYPE.SUCCESS, autoClose: 3000 });
//     } catch (err) {
//       toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Add Student:</h1>
//       <form onSubmit={addStudent}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             placeholder="Enter the name of the students here"
//             name="name"
//             onChange={onChangeHandler}
//             value={name}
//             className="form-control"
//             required
//             minLength="3"
//             maxLength="33"
//             id="name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">email: <b>(must be a valid email)</b></label>
//           <input
//             type="email"
//             placeholder="Enter your email here"
//             name="email"
//             onChange={onChangeHandler}
//             value={email}
//             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//             className="form-control"
//             required
//             id="email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="enrollnumber">Enrollment Number: </label>
//           <input
//             type="number"
//             placeholder="0 to 120"
//             name="enrollnumber"
//             min="1"
//             max="120"
//             onChange={onChangeHandler}
//             value={enrollnumber}
//             className="form-control"
//             required
//             id="enrollnumber"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary mr-2"><i className="fa fa-plus"></i></button>
//         <button type="reset" className="btn btn-secondary"><i className="fa fa-refresh"></i></button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddStudent;

