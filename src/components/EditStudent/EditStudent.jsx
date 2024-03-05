// import React, { Component } from "react";
// import './EditStudent.css';
// import axios from "axios";
// import { withRouter } from 'react-router'
// import {toast, ToastContainer} from "react-toastify";

// class EditStudent extends Component {
//   state = {
//     id: '',
//     name: "",
//     email: "",
//     enrollnumber: "",
//     response: ""
//   };

//   onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

//   async componentDidMount() {
//     try {
//     let search =  this.props.location.search,
//       id = search.substring(1, search.length);
//     const updateStudent = await axios(`/api/students/${id}`);
//     const { name, email, enrollnumber } = updateStudent.data.student;
//     this.setState({ id, name, email, enrollnumber  });
//     } catch (err) {
//       this.setState({ response: "Student not found!" })
//     }
//   };

//   updateStudentHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const student = await axios.put(`/api/students/${this.state.id}`, {
//         name: this.refs.name.value,
//         email: this.refs.email.value,
//         enrollnumber: this.refs.enrollnumber.value
//       });
//       toast(student.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

//     } catch (err) {
//       toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
//     }
//   };

//   render() {
//     if (this.state.response === "Student not found!")
//       return <h1>Student not found!</h1>
//     return (
//       <div className="Edit-Student-Wrapper">
//         <h1>Edit page</h1>
//         <form onSubmit={this.updateStudentHandler}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             placeholder="Name..."
//             value={ this.state.name }
//             name="name"
//             onChange={this.onChangeHandler}
//             ref="name"
//             required
//             className="Edit-Student-Input"
//             id="name"
//           />
//           <label htmlFor="email">Email: <b>(must be a valid email)</b></label>
//           <input
//             type="email"
//             placeholder="Enter your email here"
//             value={ this.state.email }
//             name="email"
//             required
//             onChange={this.onChangeHandler}
//             ref="email"
//             className="Edit-Student-Input"
//             id="email"
//           />
//           <label htmlFor="enrollnumber">Enrollement Number: </label>
//           <input
//             type="number"
//             placeholder="Enter the student's enrollment number"
//             value={ this.state.enrollnumber }
//             name="enrollnumber"
//             min="1"
//             max="120"
//             required
//             onChange={this.onChangeHandler}
//             ref="enrollnumber"
//             className="Edit-Student-Input"
//             id="enrollnumber"
//           />
//           <button type="submit" className="Edit-Student-Submit fa fa-pencil"></button>
//         </form>
//         <ToastContainer />
//       </div>
//     );
//   }
// }

// export default withRouter(EditStudent);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'; // Changed import for withRouter
import { toast, ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css'
import Home from "../../Layout/Home/Home";

const EditStudent = ({ location }) => {
  
  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollnumber, setEnrollNumber] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const search = location.search;
        const id = search.substring(1, search.length);
        const updateStudent = await axios.get(`http://localhost:3500/${id}`);
        const { name, email, enrollnumber } = updateStudent.data.student;
        setId(id);
        setName(name);
        setEmail(email);
        setEnrollNumber(enrollnumber);
      } catch (err) {
        setResponse("Student not found!");
      }
    };
    fetchData();
  }, [location.search]);

  const updateStudentHandler = async (e) => {
    e.preventDefault();
    try {
      const student = await axios.put(`http://localhost:3500/put/${id}`, {
        name,
        email,
        enrollnumber
      });
      toast(student.data.message, { type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  if (response === "Student not found!") {
    return <h1>Student not found!</h1>;
  }

  return (
    <div className="container mt-4">
      <h1>Edit page</h1>
      <form onSubmit={updateStudentHandler}>
        <div className="form-group mt-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name..."
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email: <b>(must be a valid email)</b></label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="enrollnumber">Enrollment Number: </label>
          <input
            type="number"
            placeholder="Enter the student's enrollment number"
            value={enrollnumber}
            name="enrollnumber"
            min="1"
            max="120"
            required
            onChange={(e) => setEnrollNumber(e.target.value)}
            className="form-control"
            id="enrollnumber"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default withRouter(EditStudent);
