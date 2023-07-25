export default function BlueBtn({ name, func }) {
  return (
    <button className="shadow-2xl bg-blue-600 w-fit h-fit text-font-poppins text-lg text-slate-100 hover:bg-blue-800 pt-3 pb-3 pl-16 pr-16" onClick={func}>
      {name}
    </button>
  );
}
