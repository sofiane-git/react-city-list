export interface CityProps {
    image: string;
    name: string;
    address: string;
    inhabitants: number;
    hotels: string | number;
    averageIncome: string | number;
    area: string | number;
}

export interface CityList {
    data: CityProps[]
}

