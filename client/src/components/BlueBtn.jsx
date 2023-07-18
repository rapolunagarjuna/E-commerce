export default function BlueBtn({ name, func }) {
  return (
    <button className="bg-blue-500 w-fit h-fit text-font-poppins text-lg text-slate-200 hover:bg-blue-800 pt-5 pb-5 pl-10 pr-10" onClick={func}>
      {name}
    </button>
  );
}
