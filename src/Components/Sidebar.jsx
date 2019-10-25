import React from "react";

const Sidebar = () => {
  const books = [
    {
      title: "Can't Hurt Me",
      author: "David Goggins",
      selected: true
    },
    {
      title: "Checklist Manifesto",
      author: "Dr. Atul Gawande",
      selected: false
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      selected: false
    }
  ];

  const getListItemClass = isSelected => {
    if (isSelected) {
      return "sb-list-item sb-list-item--selected";
    } else {
      return "sb-list-item";
    }
  };

  return (
    <aside id="sidebar" className="sb">
      <header className="sb-header">
        <span className="sb-title">Books</span>
      </header>
      <ul className="sb-list">
        {books.map((book, index) => (
          <li
            className={getListItemClass(book.selected)}
            key={index}
            onClick={() => console.log("Clicked")}
          >
            <span className="sb-list-item__title">{book.title}</span>
            <span className="sb-list-item__author">{book.author}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
