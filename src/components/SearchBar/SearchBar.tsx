type Props = {
  updateSearchTerm: (searchTerm: string) => void;
  placeholder: string;
};
export function SearchBar({ updateSearchTerm, placeholder }: Props) {
  return (
    <input
      placeholder={placeholder}
      className={"form-control"}
      type={"text"}
      name={"name"}
      onChange={(e) => updateSearchTerm(e.target.value)}
    ></input>
  );
}
