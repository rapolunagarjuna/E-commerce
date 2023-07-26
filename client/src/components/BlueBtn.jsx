export default function BlueBtn({ name, func }) {
  return (
    <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200     shadow-2xl bg-blue-600 w-fit h-fit text-font-poppins text-lg text-slate-100 hover:bg-blue-800 py-3 px-16 sm:px-10 sm:text-sm sm:py-2 " onClick={func}>
      {name}
    </button>
  );
}
