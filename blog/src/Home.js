const Home = () => {

    const handleclick=(name)=>{
        console.log('hello '+name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={()=>handleclick("mario")}>Click Me</button>
        </div>
     );
}
 
export default Home;