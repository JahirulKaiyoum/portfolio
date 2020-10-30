import { post } from 'jquery';
import React from 'react';
import Post from './Post';

const Blogs = () => {

    const data = [
        {
          id: 1,
          img: "https://hackr.io/blog/how-to-learn-javascript-quickly/thumbnail/large",
          heading: "How to learn JavaScript quickly? [Quick tips to learn JavaScript]",
          
        
          
        },
    
        {
          id: 2,
          img: "https://www.amcharts.com/wp-content/uploads/2018/11/amcharts_share.jpg",
          heading: "Check out all JavaScript Charts & Maps - By amCharts 2020",
          text:"",
        },
        {
          id: 3,
          img: "https://miro.medium.com/focal/1200/675/51/29/1*krnnIcho2GqQxmxw3N5FBA.jpeg",
          heading: "10+ Best JavaScript Animation Libraries to Use in 2020",
          text:"",
        },
    ];  


    return (
        <section style={{ backgroundColor: '#1f2235' , paddingTop:'50px', paddingBottom:'50px' }}>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center text-white ">
                        <h4 className="text-center text-white" style={{ marginTop: '50px' }}>Check Out </h4>
            <h1 className="mainHeader" style={{marginBottom:'100px'}}>My Blogs</h1>
          </div>
        </div>
        <div className="row">
                  {
                      data.map(post =><Post post={post} ></Post>)
        }
        </div>
      </div>
    </section>
    );
};

export default Blogs;