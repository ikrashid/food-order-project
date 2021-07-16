import React, {useEffect, useState} from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';


const AvailableMeals = () =>{
  const [meals, setMeals] = useState([]);
    useEffect( () => {
      const fetchMeals = async () => {
        const response = await fetch('https://react-http-iar252-default-rtdb.firebaseio.com/meals.json');
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
      };

      fetchMeals();
    }, [])
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