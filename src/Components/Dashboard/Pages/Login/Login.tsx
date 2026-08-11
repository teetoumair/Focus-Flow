import { useUser } from "../../../Contexts/UserContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

    const { login } = useUser()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return(
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => {
                    login("Umair", email)
                    navigate("/")
                }}>
                Login
            </button>
        </div>
    )
}

export default Login