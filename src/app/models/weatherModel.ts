export interface Weather {
    queryCost: number
    latitude: number
    longitude: number
    resolvedAddress: string
    address: string
    timezone: string
    tzoffset: number
    description: string
    days: Day[]
    alerts: Alert[]
    stations: Stations
    currentConditions: CurrentConditions
  }

  export interface WeatherFreeApi {
    cloud_pct: number
    temp: number
    feels_like: number
    humidity: number
    min_temp: number
    max_temp: number
    wind_speed: number
    wind_degrees: number
    sunrise: number
    sunset: number
  }
  
  export interface Day {
    datetime: string
    datetimeEpoch: number
    tempmax: number
    tempmin: number
    temp: number
    feelslikemax: number
    feelslikemin: number
    feelslike: number
    dew: number
    humidity: number
    precip: number
    precipprob: number
    precipcover: number
    preciptype: string[]
    snow: number
    snowdepth: number
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    cloudcover: number
    visibility: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    severerisk: number
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
    conditions: string
    description: string
    icon: string
    stations: string[]
    source: string
    hours: Hour[]
  }
  
  export interface Hour {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: number
    snow: number
    snowdepth: number
    preciptype?: string[]
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy?: number
    uvindex: number
    severerisk: number
    conditions: string
    icon: string
    stations?: string[]
    source: string
  }
  
  export interface Alert {
    event: string
    headline: string
    description: string
    ends: string
    endsEpoch: number
    onset: string
    onsetEpoch: number
    id: string
    language: string
    link: string
  }
  
  export interface Stations {
    KADW: Kadw
    KDAA: Kdaa
    KDCA: Kdca
    KCGS: Kcgs
  }
  
  export interface Kadw {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface Kdaa {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface Kdca {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface Kcgs {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface CurrentConditions {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: number
    snow: number
    snowdepth: number
    preciptype: any
    windgust: any
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: any
    uvindex: number
    conditions: string
    icon: string
    stations: string[]
    source: string
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
  }
  