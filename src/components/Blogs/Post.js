import React from 'react';

const Post = (props) => {
    const {img,heading,text,website,github} =props.post;
    return (
        <div className='col-4'>
        
        <div className="card" style={{width: "18rem" , height: "20rem"}}>
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                    <h5 className="card-title">{heading}</h5>
                    <button type="button" class="btn btn-danger">See more</button>
                </div>
                

        
        </div>
        
        </div>
    );
};

export default Post;