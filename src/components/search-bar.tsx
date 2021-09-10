import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchBar() {
  return (
    <>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{ width: "100%" }}
        // options={options}
        // onSelect={onSelect}
        // onSearch={handleSearch}
      >
        <Input
          size="large"
          placeholder="type a restaurant name here"
          prefix={
            <SearchOutlined style={{ marginTop: "2px", fontSize: "18px" }} />
          }
        />
      </AutoComplete>
    </>
  );
}

export default SearchBar;
