import React from 'react';
import {CityList, CityProps} from "../models/city";
import Card from "./Card";

const CardList = ({data}: CityList) => {
    const cities = data;
    const listCities = cities.map((city: CityProps) => <Card image={city.image} name={city.name} address={city.address} inhabitants={city.inhabitants} hotels={city.hotels} averageIncome={city.averageIncome} area={city.area} />)
    return (
        <ul className="flex flex-wrap justify-center items-center h-full">
                {listCities}
        </ul>
    )
}

export default CardList;