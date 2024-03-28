export default function Cards({ allUsers, user, setUser }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16 px-5 lg:px-0">
      {allUsers.map((i) => (
        <div onClick={() => setUser(i)} className={`${user.email === i.email ? "bg-[#A259FF]" : "bg-white"} flex flex-col p-3 rounded-md cursor-pointer shadow space-y-1`}>
          <span className={`${user.email === i.email ? "text-white" : ""} text-sm font-light`}>
            <span className="capitalize">
              {i.gender} &#x2022; {i.nat}
            </span>
          </span>
          <span className={`${user.email === i.email ? "text-white" : ""} font-semibold`}>
            <span>
              {i.name.title} {i.name.first} {i.name.last}
            </span>
          </span>
          <span className={`${user.email === i.email ? "text-white" : " text-[#E16259]"} text-sm font-light`}>{i.email}</span>
        </div>
      ))}
    </div>
  );
}
