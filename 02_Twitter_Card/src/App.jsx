import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: "batman" ,
        name: "Bruce Wayne-Batman" ,
        isFollowing: true 
    },
    {
        userName: "reactjs" ,
        name: "React-Framework js" ,
        isFollowing: false 
    },
    {
        userName: "spiderman" ,
        name: "Peter Parker-Spiderman" ,
        isFollowing: true 
    },
    {
        userName: "hulk" ,
        name: "Bruce Banner-Hulk",
        isFollowing: false 
    }
]


export function App () {
     return (
        <section className='App'>
            {
                users.map( ( { name, userName, isFollowing } ) => (
                    <TwitterFollowCard
                        key={ userName }
                        name={ name }
                        userName= { userName }
                        isFollowing= { isFollowing}
                    />            
                ))
            }
        </section>            
    )
}


