import React from "react";

const MainHeader = () => (
  <header className="m-header">
    <h1 className="m-header__title">Can't Hurt Me</h1>
    <span className="m-header__subtitle">David Goggins</span>
  </header>
);

const MainSummary = () => (
  <section className="m-summary">
    <p className="m-summary__desc">
      This is a book about courage, mental toughness and resilience. There is a
      personal challenge that reflects the lessons that were learnt from the
      stories in each chapter.
    </p>
  </section>
);

const MainOutline = () => (
  <section className="m-outline">
    <h2 className="m-outline__title">Key Takeaways and Actionable Ideas</h2>
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
);

const MainSection = () => (
  <article className="m-section">
    <header>
      <h2>Your Bad Cards</h2>
    </header>
    <em>What?</em>
    <p>
      You have been dealt with circumstances that were both unfavourable and
      unwanted throughout your life. These are the bad cards that you were dealt
      with.
    </p>
    <em>How?</em>
    <p>Take a sheet of paper.</p>
    <p>
      Write down your bad cards: things that you hold resentment for,
      circumstances you thought were unfair, the trauma & injustices you've
      faced, failures and blame that were imposed on you, unlucky events and
      accidents.
    </p>
  </article>
);

const Forms = () => (
  <div id="forms">
    <br />
    <form>
      <label>Enter your name:</label>
      <br />
      <input type="text" required={true} />
      <br />
      <br />

      <label>Enter your password:</label>
      <br />
      <input type="password" required={true} />
      <br />
      <br />

      <input type="checkbox" />
      <label>Do you want to sign up to the newsletter?</label>

      <br />
      <hr />

      <label>Choose your adventure?</label>
      <br />
      <input type="radio" name="adventure" value="warrior" />
      <label>Warrior</label>
      <br />
      <input type="radio" name="adventure" value="mage" />
      <label>Mage</label>
      <br />
      <input type="radio" name="adventure" value="thief" />
      <label>Thief</label>
      <br />
      <input type="radio" name="adventure" value="archer" />
      <label>Archer</label>
      <br />
      <br />

      <label>Choose a color:</label>
      <input type="color" />
      <br />
      <br />

      <label>Enter your email:</label>
      <input type="email" required={true} />
      <br />
      <br />

      <label>Pick a number:</label>
      <input type="number" />
      <br />
      <br />

      <label>Search using a keyword:</label>
      <input type="search" />

      <br />
      <br />

      <input type="submit" />
    </form>
  </div>
);

const Main = () => (
  <main id="main" className="m">
    <MainHeader />
    <MainSummary />

    <br />

    <MainOutline />

    <br />

    <MainSection />
    {/* <Forms /> */}
  </main>
);
export default Main;
