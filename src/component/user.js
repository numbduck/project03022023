import React, { useContext, useEffect, useState } from 'react'
import UsersContext from '../userContext';
import { Pagination } from './pagination';
import "./user.css";
import { Users } from './users';


export const User = () => {
 
  const {dataValue, filteredValue} = useContext (UsersContext);
  const [data] = dataValue;
  const [filtered,setFiltered] = filteredValue;
  const [currentPage,setCurrentPage] = useState(1);
  const [postperPage,setPostperPage] = useState(5);

  const lastPostIndex= currentPage*postperPage;
  const firstPostIndex= lastPostIndex-postperPage;
  const currentPosts= data.slice(firstPostIndex,lastPostIndex)

  useEffect(() => {
    setFiltered(currentPosts)
  },[currentPage])

  return (
    <div><table>
   
      <tr>
      <th></th>
        <th>Name</th>
        <th>City</th>
        <th>Website</th>
        <th></th>
      </tr>
    {filtered.map((item)=><Users companyName={item.company.name} name={item.name} city={item.address.city} website={item.website} bs={item.company.bs} address={item.address.suite + " " + item.address.street} phone={item.phone}></Users>)
    }
    </table>
    <Pagination totalPosts={data.length}
                postsPerPage={postperPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
    />
    </div>
  )
}
