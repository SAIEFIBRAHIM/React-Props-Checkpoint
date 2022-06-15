import "./App.css";
import Profile from "./profile/Profile";
import profilePic from "./profile/profilePic.jpg";
function App() {
  const handleName = (name) => alert(name);
  const picStyle = { width: 200, marginTop: "25vh" };
  return (
    <div className="App">
      <Profile
        fullName="Saief Brahim"
        bio="Full Stack JS Developer"
        profession="Technical Supervisor"
        handleName={handleName}
      >
        <img style={picStyle} src={profilePic} alt="Profile Pic" />
      </Profile>
    </div>
  );
}

export default App;
