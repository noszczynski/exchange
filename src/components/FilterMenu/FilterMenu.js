import React from "react";
import SelectItem from "./SelectItem";
import SliderItem from "./SliderItem";
import RangeSliderItem from "./RangeSliderItem";
import { COUNTRIES } from "../../api/teams";

function FilterMenu() {
  return (
    <div>
      <SelectItem action={COUNTRIES.ENGLAND} label="Premier League" />
      <SelectItem action={COUNTRIES.SPAIN} label="LaLiga Santander" />
      <SelectItem action={COUNTRIES.DEUTSCHLAND} label="Bundesliga" />
      <SelectItem action={COUNTRIES.FRANCE} label="Ligue 1 Conforama" />
      <SelectItem action={COUNTRIES.ITALY} label="Serie A" />
      <SelectItem action={COUNTRIES.NEDERLANDS} label="Eredivisie" />
      <SelectItem action="ALL" label="Select/Unselect all" />

      <SliderItem action="attack" label="Min. Attack" />
      <SliderItem action="support" label="Min. Support" />
      <SliderItem action="defence" label="Min. Defence" />
      <SliderItem action="sum" label="Min. Sum of statistics" />

      <RangeSliderItem label="Stars Rating" />
    </div>
  );
}

export default FilterMenu;
