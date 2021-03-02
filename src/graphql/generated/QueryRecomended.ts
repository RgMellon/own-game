/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecomended
// ====================================================

export interface QueryRecomended_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecomended_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecomended_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryRecomended_recommended_section_highlight_background | null;
  floatImage: QueryRecomended_recommended_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryRecomended_recommended_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecomended_recommended_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryRecomended_recommended_section_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryRecomended_recommended_section_games_cover | null;
  developers: QueryRecomended_recommended_section_games_developers[];
  price: number;
}

export interface QueryRecomended_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryRecomended_recommended_section_highlight | null;
  games: QueryRecomended_recommended_section_games[];
}

export interface QueryRecomended_recommended {
  __typename: "Recommended";
  section: QueryRecomended_recommended_section | null;
}

export interface QueryRecomended {
  recommended: QueryRecomended_recommended | null;
}
