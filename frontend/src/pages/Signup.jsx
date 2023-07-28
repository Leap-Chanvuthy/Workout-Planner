import { useState } from "react";

const Singup = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return ( 
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
             />
            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
             />
            <button>Signup</button>
        </form>
     );
}
 
export default Singup;