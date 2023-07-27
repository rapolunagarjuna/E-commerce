import CustomSelect from "./CustomSelect";

const options = [
  {
    value: 'option1',
    label: 'Option 1',
  },
  {
    value: 'option2',
    label: 'Option 2',
  },
  {
    value: 'option3',
    label: 'Option 3',
  }
];

export default function Test() {
    return(
        <div className="m-auto w-96">
            <CustomSelect options={options} value="option1" />
        </div>
    );
}