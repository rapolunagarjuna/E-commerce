export default function HeadSection({heading, imgSrc}) {
    return(
        <div className='relative bg-cover bg-center flex flex-col w-full text-center justify-center'
            style={{
            height: '50vh',
            backgroundImage: `url(${imgSrc})`,
            backgroundAttachment: 'fixed',

            }}
        >
            <div className="absolute top-0 left-0 w-full h-full -z-1 bg-slate-900 opacity-40"></div> 

            <p className='text-stone-50 text-5xl 2xl:text-7xl font-bold z-10' style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.6)" }}>{heading}</p>
        </div>
    );
}