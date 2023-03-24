import HomeList from "./HomeListStore";

import TrendingList from "./TrendingListStore";

import GameList from "./GameListStore";

import SaveList from "./SaveListStore";

import Theme from "./ThemeStore";

export const homeList = new HomeList();

export const gameList = new GameList();

export const trendingList = new TrendingList();

export const saveList = new SaveList();

export const toggleTheme = new Theme();
