import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Signin from '../pages/Signin'
import Userintro from '../pages/Userintro'
import Signup from '../pages/Signup'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "userintro",
                element : <Userintro />,
            },
            {
                path : "signin",
                element : <Signin />,
            },
            {
                path : "signup",
                element : <Signup/>,
            },
        ]
        
    }
])

export default router