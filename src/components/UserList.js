import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../listStyles.css'
const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/');
            const data = await response.json();
            setUsers(data);
            console.log(users)
            console.log('hello');
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className='editList'>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Edit Link</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                            <td>
                                <Link to={`/edit/${user._id}`}>Edit</Link>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
