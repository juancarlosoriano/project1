import React from "react";
import "../App.scss";

const App = () => (
  <div id="app">
    <nav id="navbar">
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
    <div class="window">
      <aside id="sidebar">
        <span>Books</span>
        <ul>
          <li>Can't Hurt Me</li>
          <li>Checklist Manifesto</li>
          <li>Atomic Habits</li>
        </ul>
      </aside>
      <main id="main" className="m">
        <header className="m-header">
          <h1 className="m-header__title">Can't Hurt Me</h1>
          <span className="m-header__subtitle">
            David Goggins, Ex-Navy Seal
          </span>
        </header>
        <section className="m-summary">
          <p className="m-summary__desc">
            This is a book about courage, mental toughness and resilience. There
            is a personal challenge that reflects the lessons that were learnt
            from the stories in each chapter.
          </p>
        </section>
        <section className="m-outline">
          <h2 className="m-outline__title">
            Key Takeaways and Actionable Ideas
          </h2>
          <ul className="m-outline__list">
            <li className="m-outline__list-item">
              <p>Your Bad Cards</p>
            </li>
            <li className="m-outline__list-item">
              <p>Accountability Mirror</p>
            </li>
            <li className="m-outline__list-item">
              <p>The Impossible Task</p>
            </li>
            <li className="m-outline__list-item">
              <p>The 40% Rule</p>
            </li>
            <li className="m-outline__list-item">
              <p>The Cookie Jar</p>
            </li>
          </ul>
        </section>
        <article className="m-section">
          <header>
            <h2>Your Bad Cards</h2>
          </header>
          <span>What?</span>
          <p>
            You have been dealt with circumstances that were both unfavourable
            and unwanted throughout your life. These are the bad cards that you
            were dealt with.
          </p>
          <span>How?</span>
          <p>Take a sheet of paper.</p>
          <p>
            Write down your bad cards: things that you hold resentment for,
            circumstances you thought were unfair, the trauma & injustices
            you've faced, failures and blame that were imposed on you, unlucky
            events and accidents.
          </p>
        </article>
      </main>
    </div>
  </div>
);

export default App;
