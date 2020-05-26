import React from "react";
import SelectItem from "./SelectItem";
import SliderItem from "./SliderItem";
import RangeSliderItem from "./RangeSliderItem";

function FilterMenu() {
  const placeholderChange = () => console.log(`slider change`);

  return (
    <div>
      <SelectItem label="Premier League" checked={true} />
      <SelectItem label="LaLiga Santander" />
      <SelectItem label="Bundesliga" />
      <SelectItem label="Ligue 1 Conforama" />
      <SelectItem label="Serie A" />
      <SelectItem label="Eredivisie" />
      <SelectItem label="Select/Unselect all" />
      <SliderItem label="Attack" onChange={placeholderChange} />
      <SliderItem label="Support" onChange={placeholderChange} />
      <SliderItem label="Defence" onChange={placeholderChange} />
      <SliderItem label="Sum of statistics" onChange={placeholderChange} />
      <RangeSliderItem label="Stars Rating" onChange={placeholderChange} />
    </div>
  );
}

export default FilterMenu;
