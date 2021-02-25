/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighLightFragment
// ====================================================

export interface HighLightFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighLightFragment_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HighLightFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighLightFragment_background | null;
  floatImage: HighLightFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
