export default function UserDetails({ user }) {
  const { picture, name, location, gender } = user;
  const { street, city, state, country, postcode, timezone } = location;

  return (
    <header className="pt-10 pb-16 max-w-full lg:max-w-4xl mx-auto px-5 lg:px-0">
      <main className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-10 bg-white rounded-xl shadow py-5 lg:py-10 px-5 lg:px-0">
        <div>
          <img className="rounded-full size-28 mb-2.5 sm:mb-0" src={picture.large} alt={`${name.title} ${name.first} ${name.last}`} />
        </div>
        <div className="space-y-2.5">
          <span className="relative text-[#E16259] text-3xl md:text-5xl font-semibold">
            {`${name.title} ${name.first} ${name.last}`} <span className="hidden sm:inline absolute bottom-1 left-0 w-full h-0.5 bg-[#E16259]" />
          </span>
          <address className="flex-row">
            <div>
              <span className="text-[#A259FF] font-medium">{street.number}</span> {`${street.name}  ${city} ${state}`} <span className="font-semibold">{`${country}`}</span>, {`${postcode}`}
            </div>
            <div>{`${timezone.offset} ${timezone.description} `}</div>
          </address>
          <span className="capitalize text-slate-400">{gender}</span>
        </div>
      </main>
    </header>
  );
}
