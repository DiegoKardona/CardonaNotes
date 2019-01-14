import React, { Component } from "react";

/*Importing components*/
//HandleMenu controls the Header
import Header from "./containers/header/HandleMenu";
import MainHero from "./components/mainHero/MainHero";
import RecentPosts from "./components/posts/recent/RecentPosts";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Cardonanotes | A place to write anything";
  }

  render() {
    return (
      <div>
        <Header />
        <MainHero />
        <RecentPosts />
      </div>
    );
  }
}

export default HomePage;
