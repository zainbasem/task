import React from 'react';
import './ProfileCard.css';
import AdditionalCard from "../profile-card/AdditionalCard";

const ProfileCard = () => {
    const profiles = [
        {
            name: 'name ',
            username: '@YourUsername',
            following: 4354,
            followers: 10,
            work: 20,
            description: 'ttttt',
            image: 'https://static.vecteezy.com/system/resources/previews/002/534/006/large_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
        }
    ];
    
    return (
        <div className="container mt-5">
            <div className="row ">
                {profiles.map((profile, index) => (
                    <div key={index} className="col-md-6 ">
                        <div className="card" style={{ width: "350px", height: "420px" }}>
                            <i className="bi bi-arrow-bar-left position-absolute top-0 start-0 m-3"></i>
                            <img
                                src={profile.image}
                                className="card-img-top rounded-circle mx-auto d-block mt-2"
                                alt="Profile Image"
                                style={{ width: "100px", height: "100px" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title pname">{profile.name}</h5>
                                <p className="card-text text-muted pusername ">{profile.username}</p>
                                <div className="row  textf">
                                    <div className="col-4 text-muted mt-2">
                                        <p className='t'>Following</p>
                                        <h6 className='tt'>{profile.following}</h6>
                                    </div>
                                    <div className="col-4 text-muted mt-2">
                                        <p className='t'>Followers</p>
                                        <h6 className='tt'>{profile.followers}</h6>
                                    </div>
                                    <div className="col-4 text-muted mt-2">
                                        <p className='t'>Work</p>
                                        <h6 className='tt'>{profile.work}</h6>
                                    </div>
                                </div>
                                <p className='mt-2 arabic-textt' >{profile.description}</p> 
                                <div className="mt-4">
                                    <a href="#" className="icon me-3"><i className="bi bi-linkedin"></i></a>     
                                    <a href="#" className="icon me-3"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="icon me-3"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="icon"><i className="bi bi-twitter-x"></i></a>
                                </div>
                                <div className="mt-4">
                                    <button className="btn btn-social">Follow <i className="bi bi-person-add"></i></button>
                                    <button className="btn btn-social ">View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-md-6">
                    <AdditionalCard />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
