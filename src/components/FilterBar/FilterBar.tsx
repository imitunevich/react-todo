import { ChangeEvent } from "react";
const NO_FILTERING = "No filtering";

type Props = {
  options: string[];
  updateFilter: (filter: string) => void;
};
export function FilterBar({ options, updateFilter }: Props) {
  const renderOptions: React.ReactNode = options.map(
    (option: string, index: number) => (
      <option key={option + index} value={option}>
        {option}
      </option>
    ),
  );

  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    updateFilter(value !== NO_FILTERING ? value : "");
  }

  return (
    <select className="form-select" onChange={onSelect}>
      <option value={NO_FILTERING}>{NO_FILTERING}</option>
      {renderOptions}
    </select>
  );
}
