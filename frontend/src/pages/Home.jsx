import {useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetials';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';


const Home = () => {

    // const [workouts , setWorkouts] = useState(null);

    const {workouts , dispatch} = useWorkoutsContext();
    
    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const respone = await fetch('/api/workouts');
            const json = await respone.json();
            if (respone.ok){
               dispatch({type : 'SET_WORKOUTS' , payload : json})
            }
        }

        fetchWorkouts();
    },[])

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    < WorkoutDetails key={workout._id}  workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;