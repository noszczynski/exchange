import React from "react";
import SelectItem from "./SelectItem";
import SliderItem from "./SliderItem";
import RangeSliderItem from "./RangeSliderItem";

function FilterMenu() {
  return (
    <div>
      <SelectItem label="Premier League" />
      <SelectItem label="LaLiga Santander" />
      <SelectItem label="Bundesliga" />
      <SelectItem label="Ligue 1 Conforama" />
      <SelectItem label="Serie A" />
      <SelectItem label="Eredivisie" />
      <SelectItem label="Select/Unselect all" />
      <SliderItem label="Attack" />
      <SliderItem label="Support" />
      <SliderItem label="Defence" />
      <SliderItem label="Sum of statistics" />
      <RangeSliderItem label="Stars Rating" />
    </div>
  );
}

export default FilterMenu;
