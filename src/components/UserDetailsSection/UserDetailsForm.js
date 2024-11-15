import React from "react";

const UserDetailsForm = ({ user, handleChangeUser, handleSubmit, userErrors }) => {
    return (
        <div className="user-details-form">
            <form onSubmit={handleSubmit}>
                <div className="user-details-form-fields">
                    <label htmlFor="name">*Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={user.name}
                        onChange={handleChangeUser}
                    />
                    {userErrors.name && <span className="user-details-form-error">{userErrors.name}</span>}
                </div>
                <div className="user-details-form-fields">
                    <label htmlFor="phone">*Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={user.phone}
                        onChange={handleChangeUser}
                    />
                    {userErrors.phone && <span className="user-details-form-error">{userErrors.phone}</span>}
                </div>
                <div className="user-details-form-fields">
                    <label htmlFor="email">*Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleChangeUser}
                    />
                    {userErrors.email && <span className="user-details-form-error">{userErrors.email}</span>}
                </div>
                <div className="user-details-form-fields">
                    <label htmlFor="comments">Comments (optional)</label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows="3"
                        placeholder="Add any allergies or special requests"
                        value={user.comments}
                        onChange={handleChangeUser}
                    />
                </div>
                <button type="submit" className="user-details-form-submit">
                    Reserve a Table
                </button>
            </form>
        </div>
    );
};

export default UserDetailsForm;
