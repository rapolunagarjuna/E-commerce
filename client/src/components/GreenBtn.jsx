export default function GreenBtn({ name, func }) {
    return (
      <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200     drop-shadow-2xl bg-green-600 w-fit h-fit text-2xl text-slate-100 hover:bg-green-800 py-3 px-16 sm:px-10 sm:text-sm sm:py-2 " onClick={func}>
        <span className="text-base 2xl:text-2xl">{name}</span>
      </button>
    );
  }
  