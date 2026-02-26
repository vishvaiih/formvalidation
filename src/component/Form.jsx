import React from "react";

function Form() {
  return (
    <>
      <div style={{ backgroundColor: "#e6e6e6", padding: "1px" }}>
        <div className="mainDiv">
        <h2 style={{color:"#4caf50",marginBottom:"10px"}}>Registration form</h2>


    <form>
    <label className="label" for="name">name:</label>
     <input
        name="name"
        type='text'
        placeholder="Name"
        className="inputField"
      />
      {/* <p style={{ color: "red" }}>fhbfghnjm</p> */}

      <label className="label"  for="email">email:</label>
      <input
        name="email"
        type='text'
        placeholder="Email"
        className="inputField"
      />
      {/* <p style={{ color: "red" }}>fhbfghnjm</p> */}

      <label className="label"  for="password">password:</label>
      <input
        name="password"
        type='text'
        placeholder="Password"
        className="inputField"
      />
      {/* <p style={{ color: "red" }}>fhbfghnjm</p>  */}

     </form>


        </div>
      </div>

      
    </>
  );
}

export default Form;
