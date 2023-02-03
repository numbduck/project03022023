import React, { useState } from 'react';


export const Users = ({companyName,name,city,website,bs,address,phone}) => {

    const [toggle, setToggle]= useState(false)
    return (<>
    <tr>
    <td>{companyName}</td>
    <td>{name}</td>
    <td>{city}</td>
    <td style={{textTransform: 'lowercase'}} >{website}</td>
    <td><button style={{backgroundColor:"gold", padding:"5px", borderRadius:"10px"}} onClick={()=>setToggle(!toggle)}>
        {toggle ? 'Hide Details' : 'View Details'}</button>
    </td></tr>
    {toggle && <>
  <tr >
    <th style={{backgroundColor:"white", color:"black"}} >Description</th>
  </tr>
  <tr>
    <td style={{backgroundColor:"white", color:"black"}}>{bs}</td>
  </tr>
  <tr style={{backgroundColor:"white", color:"black"}}>
    <td ><b>Contact Person</b></td>
    <td ><b>Address</b></td>
  </tr>
  <tr style={{backgroundColor:"white", color:"black"}}>
    <td >{name}</td>
    <td >{address}</td>
  </tr>
  <tr>
    <td ><b>Phone</b></td>
    <td ><b>City</b></td>
  </tr>
  <tr style={{backgroundColor:"white", color:"black"}}>
    <td >{phone}</td>
    <td >{city}</td>
  </tr><tr><td></td></tr>
  </>
}</>
  )
}
