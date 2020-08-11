import React, { Component } from 'react'
import hulk1 from './Villians/hulk-1.jpg'
import venom1 from './Villians/venom-1.jpg'
import venom2 from './Villians/venom-2.jpg'





export class Header extends Component {
    render() {
        return (
            <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

        
        <div className="sample-wallpaper">
          <article className="wallpaper">
            <img src={hulk1} alt="Wallpaper #1" className="wallpaper" />
          </article>


          <article className="wallpaper">
            <img src={venom1} alt="Wallpaper #1" className="wallpaper" />
          </article>

        
          <article className="wallpaper">
            <img src={venom2} alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
      </div>
    </header>
        )
    }
}

export default Header
