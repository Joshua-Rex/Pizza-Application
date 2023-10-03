import logo from '../images/logo.png';

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
  };
  
  const Banner = ({ children }) => {
    return (
      <header className="row mb-4">
        <div className="col-5 mt-5">
          <img src={logo} alt="logo" style={{height: '100px', width: '100px'}}/>
        </div>
        <div className="col-7 mt-5" style={subtitleStyle}>
          {children}
        </div>
      </header>
    );
  };
  
  export default Banner;