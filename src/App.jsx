import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import Cards from "./components/Cards";
import Loading from "./components/Loading";

export default function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchUsers = async () =>
    await axios(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`)
      .then((res) => {
        const results = res.data.results;
        console.log(results, results[0]);
        setAllUsers(results);
        setUser(results[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="bg-gray-100">
      <section className="max-w-5xl mx-auto">
        <Navbar />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <UserDetails user={user} />
            <Cards allUsers={allUsers} user={user} setUser={setUser} />
          </>
        )}
      </section>
    </main>
  );
}
