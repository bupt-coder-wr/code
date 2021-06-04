import UserGreeting from "./UserGreeting";
import GrestGreeting from "./GuestGreeting";

function Greeting(props) {
  const isLoggedin = props.isLoggedin;
  return isLoggedin ? <UserGreeting /> : <GrestGreeting />;
}
export default Greeting;
