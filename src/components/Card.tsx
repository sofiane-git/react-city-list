import React from 'react';
import {CityProps} from "../models/city";

const Card = (data: CityProps) => {
    const { image, name, address, inhabitants, hotels, averageIncome, area } = data;
    return (
        <li className="h-64 w-96 shadow-lg m-2 rounded">
            <img src={image} className="w-full h-1/2 object-cover"/>
            <div className="h-1/2">
                <div className="h-1/2 border-b flex flex-col justify-center px-2">
                    <div>
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="text-xs text-gray-400">{address}</p>
                    </div>
                {/* AJOUTER TOGGLE */}
                </div>
                <div className="h-1/2 text-xs flex items-center">
                    <div className="w-1/4 text-center">
                        <p>{inhabitants} M</p>
                        <p className="capitalize mt-1">habitants</p>
                    </div>
                    <div className="w-1/4 text-center">
                        <p>{hotels}</p>
                        <p className="capitalize mt-1">hôtels</p>

                    </div>
                    <div className="w-1/4 text-center">
                        <p>{averageIncome} &#8364;</p>
                        <p className="capitalize mt-1">revenu moy</p>

                    </div>
                    <div className="w-1/4 text-center">
                        <p>{area}</p>
                        <p className=" mt-1">km&#178;</p>

                    </div>
                </div>

            </div>

        </li>
    )
}

export default Card;