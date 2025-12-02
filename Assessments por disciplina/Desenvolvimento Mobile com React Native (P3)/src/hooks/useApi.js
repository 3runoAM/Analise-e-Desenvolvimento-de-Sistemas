import {useCallback, useEffect, useState} from "react";

const useApi = () => {
    const URL_BASE = "https://www.themealdb.com/api/json/v1/1";
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDefaultMeals = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${URL_BASE}/filter.php?i=beef`)
                .then((response) => response.json())
                .then((data) => data.meals);

            setMeals(response);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    });

    const searchByName = useCallback(async (name) => {
        try {
            setLoading(true);
            const response = await fetch(`${URL_BASE}/search.php?s=${name}`)
                .then((response) => response.json())
                .then((data) => data.meals);

            setMeals(response);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchMealById = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await fetch(`${URL_BASE}/lookup.php?i=${id}`)
                .then((response) => response.json())
                .then((data) => data.meals);

            setMealDetails(response[0]);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        meals,
        mealDetails,
        loading,
        fetchDefaultMeals,
        searchByName,
        fetchMealById
    };

}

export default useApi;