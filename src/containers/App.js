import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { Scroll } from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import SearchBox from "../components/SearchBox";
import "./App.css";

export const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
  }, []
  )

  const filteredRobots = robots.filter(robot => {
    return robot.username
      .toLowerCase()
      .includes(searchfield.toLowerCase())
  })

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  return !robots.length ?
      <h1>Loading...</h1>
      :
    (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }