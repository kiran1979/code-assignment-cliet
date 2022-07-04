import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const QUERY_ALL_USERS = gql`
    query Query {
        users {
            name
            address
            city
            email
            phoneNumber
        }
    }
`
const CREATE_USER_MUTATIONS = gql`
    mutation CreateUsersCount($userCount: CreateUsers) {
     createUserCount(userCount: $userCount){
        setUserCount
     }   
    }
`

export const Names = () =>{
    
    // const [next, setNext] = useState(20);

    // const handleMoreData = () => {
    //     setNext(next + numberOfRows);
    //   };
    const { data, loading, error} = useQuery(QUERY_ALL_USERS);

    const numberOfRows = 20;
    if (loading) {
        return <h1>Data is loading.....</h1>
    }
    if (error) {
        console.log(error);
    }
  //  const [next, setNext] = useState(numberOfRows);

    
    return(
        <>
            <div>
                {data && 
                    data.users.map((user, index) => {
                        return(
                            <div key={index} className="px-2.5 md:px-0">
                                <h2>Name: {user.name}</h2>
                                <h2>Address: {user.address}</h2>
                                <h2>Email: {user.email}</h2>
                                <h2>Phone: {user.phoneNumber}</h2>
                            </div>
                        );
                        
                    })
                     
                }
                {/* {next < data.length &&
                        <button onClick={handleMoreData}>Load More....</button>
                    } */}
            </div>  
        </>
    );
}


