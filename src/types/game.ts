export type Game = {
  id: string;
  names: {
    international: string;
    japanese: string;
    twitch: string;
  };
  abbreviation: string;
  weblink: string;
  released: number;
  "release-date": string;
  ruleset: {
    "show-milliseconds": boolean;
    "require-verification": boolean;
    "require-video": boolean;
    "run-times": Array<string>;
    "default-time": string;
    "emulators-allowed": boolean;
  };
  romhack: boolean;
  gametypes: Array<string>;
  platforms: Array<string>;
  regions: Array<string>;
  genres: Array<string>;
  engines: Array<string>;
  developers: Array<string>;
  publishers: Array<string>;
  moderators: {
    [key: string]: string;
  };
  created: string;
  assets: {
    logo: {
      uri: string;
      width: number;
      height: number;
    };
    "cover-tiny": {
      uri: string;
      width: number;
      height: number;
    };
    "cover-small": {
      uri: string;
      width: number;
      height: number;
    };
    "cover-medium": {
      uri: string;
      width: number;
      height: number;
    };
    "cover-large": {
      uri: string;
      width: number;
      height: number;
    };
    icon: {
      uri: string;
      width: number;
      height: number;
    };
    "trophy-1st": {
      uri: string;
      width: number;
      height: number;
    };
    "trophy-2nd": {
      uri: string;
      width: number;
      height: number;
    };
    "trophy-3rd": {
      uri: string;
      width: number;
      height: number;
    };
    "trophy-4th": {
      uri: string;
      width: number;
      height: number;
    } | null;
    background: {
      uri: string;
      width: number;
      height: number;
    };
    foreground: {
      uri: string;
      width: number;
      height: number;
    } | null;
  };
  links: Array<{
    rel: string;
    uri: string;
  }>;
};
