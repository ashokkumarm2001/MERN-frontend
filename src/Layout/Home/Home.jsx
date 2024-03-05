// import React, { Component } from "react";
// import "./Home.css";
// import axios from "axios";
// import { PropagateLoader } from 'react-spinners';
// // Components
// import Student from "../../components/Student/Student";
// import SearchStudents from "../../components/SearchStudent/SearchStudents";

// class Home extends Component {
//   state = {
//     data: null,
//     allStudents: null,
//     error: ""
//   };

//   async componentDidMount() {
//     try {
//       const students = await axios("/api/students/");
//       this.setState({ data: students.data });
//     } catch (err) {
//       this.setState({ error: err.message });
//     }
//   }

//   removeStudent = async id => {
//     try {
//       const studentRemoved = await axios.delete(`/api/students/${id}`);
//       const students = await axios("/api/students/");
//       this.setState({ data: students.data });
//     } catch (err) {
//       this.setState({ error: err.message });
//     }
//   };

//   searchStudents = async username => {
//     let allStudents = [...this.state.data.students];
//     if (this.state.allStudents === null) this.setState({ allStudents });

//     let students = this.state.data.students.filter(({ name }) =>
//       name.toLowerCase().includes(username.toLowerCase())
//     );
//     if (students.length > 0) this.setState({ data: { students } });

//     if (username.trim() === "")
//       this.setState({ data: { students: this.state.allStudents } });
//   };

//   render() {
//     let students;

//     if (this.state.data)
//       students =
//         this.state.data.students &&
//         this.state.data.students.map(student => (
//           <Student key={student._id} {...student} removeStudent={this.removeStudent} />
//         ));
//     else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

//     if (this.state.error) return <h1>{this.state.error}</h1>;
//     if (this.state.data !== null)
//       if (!this.state.data.students.length)
//         return <h1 className="No-Students">No students!</h1>;

//     return (
//       <div className="Table-Wrapper">
//         <h1>Students:</h1>
//         <SearchStudents searchStudents={this.searchStudents} />
//         <table className="Table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Enrollment Number</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>{students}</tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Home;


// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import axios from "axios";
// import { PropagateLoader } from 'react-spinners';
// // Components
// import Student from "../../components/Student/Student";
// import SearchStudents from "../../components/SearchStudent/SearchStudents";

// const Home = () => {
//   const [data, setData] = useState(null);
//   const [allStudents, setAllStudents] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const students = await axios("http://localhost:3500/");
//         setData(students.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const removeStudent = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3500/delete/${id}`);
//       const students = await axios("http://localhost:3500/");
//       setData(students.data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const searchStudents = async (username) => {
//     let allStudentsCopy = [...data.students];
//     if (allStudents === null) setAllStudents(allStudentsCopy);

//     let filteredStudents = data.students.filter(({ name }) =>
//       name.toLowerCase().includes(username.toLowerCase())
//     );
//     if (filteredStudents.length > 0) setData({ students: filteredStudents });

//     if (username.trim() === "") setData({ students: allStudents });
//   };

//   let students;

//   if (data) {
//     students = data.students && data.students.map(student => (
//       <Student key={student._id} {...student} removeStudent={removeStudent} />
//     ));
//   } else {
//     return (
//       <div className="Spinner-Wrapper">
//         <PropagateLoader color={'#333'} />
//       </div>
//     );
//   }

//   if (error) return <h1>{error}</h1>;
//   if (data !== null && !data.students.length) return <h1 className="No-Students">No students!</h1>;

//   return (
//     <div className="Table-Wrapper">
//       <h1>Students:</h1>
//       <SearchStudents searchStudents={searchStudents} />
//       <table className="Table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Enrollment Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{students}</tbody>
//       </table>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/SearchStudent/SearchStudents";
import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
  const [data, setData] = useState(null);
  const [allStudents, setAllStudents] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const students = await axios("https://mern-backend-mago.onrender.com");
        setData(students.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  const removeStudent = async (id) => {
    try {
      await axios.delete(`https://mern-backend-mago.onrender.com/delete/${id}`);
      const students = await axios("https://mern-backend-mago.onrender.com");
      setData(students.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const searchStudents = async (username) => {
    let allStudentsCopy = [...data.students];
    if (allStudents === null) setAllStudents(allStudentsCopy);

    let filteredStudents = data.students.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (filteredStudents.length > 0) setData({ students: filteredStudents });

    if (username.trim() === "") setData({ students: allStudents });
  };

  let students;

  if (data) {
    students = data.students && data.students.map(student => (
      <Student key={student._id} {...student} removeStudent={removeStudent} />
    ));
  } else {
    return (
      <div className="Spinner-Wrapper">
        <PropagateLoader color={'#333'} />
      </div>
    );
  }

  if (error) return <h1>{error}</h1>;
  if (data !== null && !data.students.length) return <h1 className="No-Students">No students!</h1>;

  return (
    <div className="container">
      <h1 className="mt-3">Students:</h1>
      <SearchStudents searchStudents={searchStudents} />
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enrollment Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{students}</tbody>
      </table>
    </div>
  );
}

export default Home;
