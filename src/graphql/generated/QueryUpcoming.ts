/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_upcomingGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryUpcoming_upcomingGames_cover | null;
  developers: QueryUpcoming_upcomingGames_developers[];
  price: number;
}

export interface QueryUpcoming_showCase_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showCase_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showCase_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcoming_showCase_upcomingGames_highlight_background | null;
  floatImage: QueryUpcoming_showCase_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpcoming_showCase_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcoming_showCase_upcomingGames_highlight | null;
}

export interface QueryUpcoming_showCase {
  __typename: "Home";
  upcomingGames: QueryUpcoming_showCase_upcomingGames | null;
}

export interface QueryUpcoming {
  upcomingGames: QueryUpcoming_upcomingGames[];
  showCase: QueryUpcoming_showCase | null;
}
