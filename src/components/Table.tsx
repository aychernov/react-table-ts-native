import React from 'react';

interface posts{
    id: any
    name: any
    username: any
    email:any
}

interface data{
    valueStart: number
    valueEnd: number
    posts: any
    whatkindofdata: string[]
}

const Table = (props:data) => {

    return (
        <table>
             <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Username</th>
                 <th>Email</th>
             </tr>
             </thead>
            <tbody>
            {
                 props?.posts?.slice(props.valueStart, props.valueEnd).map((item:any) => (
                    <tr key={item.id}>
                        <td>{props.whatkindofdata.includes('id')? item.id : null}</td>
                        <td>{props.whatkindofdata.includes('name')? item.name : null}</td>
                        <td>{props.whatkindofdata.includes('username')? item.username : null}</td>
                        <td>{props.whatkindofdata.includes('email')? item.email : null}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>

    );
};

export default Table;
