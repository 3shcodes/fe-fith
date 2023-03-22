import NavBar from "./navbar.js";
import Link from "next/link";
import {useState, useEffect} from "react";
import axios from "axios";

function Feed(){
    const user={
        name:"ramasamy",
        imgurl:"https://i.pinimg.com/736x/8b/cc/28/8bcc285929738bf91afbc29cd6c6a298.jpg"
    }

    const mostViewed=[
        {
            name:"Thar Desert",
            url:"https://google.com/search?q=thar+desert"
        },
        {
            name:"Sahara Desert",
            url:"https://google.com/search?q=sahara+desert"
        },
        {
            name:"Jelly Desert",
            url:"https://google.com/search?q=jelly+desert"
        },
    ];

    const [loc,setLoc]=useState("");
    async function getLocation(){
        const res=await axios.get("https://ipapi.co/json")
        setLoc(res.data.country);
    }
    useEffect(()=>{
        getLocation();
    },[]);
    return(
        <div className="feed-page">
            <NavBar user={user} />
            <div className="fp-cont">
                <div className="fp-left">
                    <p className="cus-head" >Most Viewed Countries </p>
                    <div className="mvs">
                        {
                            mostViewed.map((co)=>{
                                return (
                                    <div className="rec-list">
                                        <Link className="rec-its" href={co.url}>{co.name}</Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="fp-right">
                    <p className="cus-head">Closest Forests</p>
                </div>
            </div>
        </div>
    )
}


export default Feed;
