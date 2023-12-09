import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
		'X-RapidAPI-Key': '2a124a9e5cmsh6c5d316a5a4b4d1p1bf960jsn622c0e28738a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', { headers: headers,});
  //const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers: headers,});

  const result = await response.json();

  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
//'hrjavascript-mastery'
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 







// import { CarProps } from "@/types";

// export async function fetchCars() {
//   const headers = {
// 		'X-RapidAPI-Key': '2a124a9e5cmsh6c5d316a5a4b4d1p1bf960jsn622c0e28738a',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
//   const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', { headers: headers,});
//   //const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers: headers,});

//   const result = await response.json();

//   return result;
// };

// export const calculateCarRent = (city_mpg: number, year: number) => {
//   const basePricePerDay = 50; // Base rental price per day in dollars
//   const mileageFactor = 0.1; // Additional rate per mile driven
//   const ageFactor = 0.05; // Additional rate per year of vehicle age

//   // Calculate additional rate based on mileage and age
//   const mileageRate = city_mpg * mileageFactor;
//   const ageRate = (new Date().getFullYear() - year) * ageFactor;

//   // Calculate total rental rate per day
//   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

//   return rentalRatePerDay.toFixed(0);
// };

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;
// //'hrjavascript-mastery'
//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// } 