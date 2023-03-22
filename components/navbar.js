function NavBar({user}){
    const dets=user;
    return (
        <div className="navbar">
           <div className="nav-left">
                <p>Fire In The Hole</p>
           </div> 
           <div className="nav-right">
                <img className="propic" height="40" width="40" src={dets.imgurl} />
                <p>{dets.name}</p>
           </div> 
        </div>
    )
}
export default NavBar;
