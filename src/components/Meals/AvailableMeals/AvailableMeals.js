import React, {useEffect, useState} from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';


const AvailableMeals = () =>{
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

    useEffect( () => {
      const fetchMeals = async () => {
        setIsLoading(true);
        const response = await fetch('https://react-http-iar252-default-rtdb.firebaseio.com/meals');
        if(!response.ok){
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();
        
        const loadedMeals = [];

        for (const key in responseData){
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price
          })
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      };


      fetchMeals().catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
      

    }, [])

    if(isLoading){
      return <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    }

    if(error){
      return <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    }

    const mealsList = meals.map(meal => <MealItem key={meal.id} {...meal}/>)

    return(
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;