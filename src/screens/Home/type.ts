export type CoordsVO = {
  longitude: number;
  latitude: number;
};

export type IndicesVo = {
  type: string;
  name: string;
  category: string;
};

export type CityVo = {
  country: string;
  adm1: string;
  adm2: string;
};

export type ThreeDaysVo = {
  fxDate: string;
  textDay: string;
  tempMax: number;
  tempMin: number;
  textNight: string;
  iconDay: number;
  iconNight: number;
};
