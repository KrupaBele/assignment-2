export default function Loading() {
  return (
    <>
      {/* UserDetails Loading */}
      <div className="pt-10 pb-16 max-w-full lg:max-w-4xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-10 bg-white rounded-xl shadow py-5 lg:py-10 px-5 lg:px-0">
          <div>
            <img className="rounded-full size-28 mb-2.5 sm:mb-0 animate-pulse bg-slate-300" />
          </div>
          <div className="space-y-2.5">
            <div className="w-72 sm:w-96 h-10 rounded-xl bg-slate-300" />
            <div className="space-y-2.5">
              <div className="w-72 sm:w-96 h-5 rounded-xl bg-slate-300" />
              <div className="w-60 h-5 rounded-xl bg-slate-300" />
            </div>
            <div className="w-20 h-5 rounded-xl bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Cards Loading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16 px-5 lg:px-0">
        {Array(20)
          .fill(0)
          .map(() => (
            <div className="flex flex-col p-3 rounded-md shadow space-y-2.5 bg-white">
              <div className="w-10 h-3.5 bg-slate-300 rounded-md animate-pulse" />
              <div className="w-32 h-7 bg-slate-300 rounded-md animate-pulse" />
              <div className="w-32 h-3.5 bg-slate-300 rounded-md animate-pulse" />
            </div>
          ))}
      </div>
    </>
  );
}
