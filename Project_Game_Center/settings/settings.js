export const settings = {
  navbar: [
    //item 1
    {
      label: "Home",
      url: "/Projects/Project_Game_Center/index.html",
      id: "home",
    },
    //item 2
    {
      label: "About me",
      url: "/Projects/Project_Game_Center/about.html",
      id: "aboutme",
    },
    //item 3
    {
      label: "Games",
      url: "#",
      id: "games",
      children: [
        {
          label: "Sudoku",
          url: "/projects/Project_Game_Center/sudoku.html",
          id: "sudoku",
        },
        {
          label: "Sudoku",
          url: "/projects/Project_Game_Center/sudoku.html",
          id: "sudoku",
        },
        {
          label: "Sudoku",
          url: "/projects/Project_Game_Center/sudoku.html",
          id: "sudoku",
        },
      ],
    },
  ],
};
