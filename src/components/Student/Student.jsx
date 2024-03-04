// import React from 'react';
// import { Link } from 'react-router-dom';
// // import Avatar from 'react-avatar';


// const Student = ({ _id, name, email, enrollnumber, removeStudent }) => {

//   return(
//     <tr>
//       <td>{ name }</td>
//       <td>{ email }</td>
//       <td>{ enrollnumber }</td>
//       <td>
//         <button onClick={ () => removeStudent(_id) } className="Action-Button fa fa-trash"></button>
//         <Link to={{ pathname: '/edit', search: _id }}>
//          <button className="Action-Button fa fa-pencil"></button>
//         </Link>
//       </td>

//     </tr>
//   );
// };

// export default Student;

import React from 'react';
import { Link } from 'react-router-dom';

const Student = ({ _id, name, email, enrollnumber, removeStudent }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{enrollnumber}</td>
      <td>
        <button onClick={() => removeStudent(_id)} className="btn btn-danger mr-2">
          <i className="fa fa-trash"></i>
        </button>
        <Link to={{ pathname: '/edit', search: _id }}>
          <button className="btn btn-primary ms-2">
            <i className="fa fa-pencil"></i>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Student;

