import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../editStyles.css';


const UserEdit = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users/${id}`);
            const data = await response.json();
            setUserData(data);
            setEditedData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedData),
            });
            const data = await response.json();
            console.log('User data updated:', data);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
        window.location.href = '/';
    };

    return (
        <div className='editForm'>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={editedData.name || ''} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={editedData.email || ''} onChange={handleChange} />
                </label>
                <label>
                    Gender:
                    <select name="gender" value={editedData.gender || ''} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select name="status" value={editedData.status || ''} onChange={handleChange}>
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserEdit;
