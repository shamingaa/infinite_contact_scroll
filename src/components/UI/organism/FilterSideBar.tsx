import AccordionMolecule from "../moleules/Accordion";
import InputFilter from "../moleules/InputFilter";
import SaveFilterButton from "../moleules/SaveFilterButton";
import SideFilterHeader from "../moleules/SideFilterHeader";

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
