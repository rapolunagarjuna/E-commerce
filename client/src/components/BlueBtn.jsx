export default function BlueBtn({ name, func }) {
  return (
    <button className="shadow-2xl bg-blue-600 w-fit h-fit text-font-poppins text-lg text-slate-100 hover:bg-blue-800 pt-4 pb-4 pl-12 pr-12" onClick={func}>
      {name}
    </button>
  );
}
