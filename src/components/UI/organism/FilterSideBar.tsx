import AccordionMolecule from "../moleules/AccordionMolecule";
import InputFilter from "../moleules/InputFilter";
import SaveFilterButton from "../atoms/SaveFilterButton";
import SideFilterHeader from "../atoms/SideFilterHeader";

const FilterSideBar = (): JSX.Element => {
  return (
    <div className="sideBarStyle">
      <SideFilterHeader />
      <AccordionMolecule />
      <InputFilter />
      <SaveFilterButton />
    </div>
  );
};

export default FilterSideBar;
