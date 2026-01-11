export type Category = {
  id: string;
  name: string;
  weblink: string;
  type: string;
  rules: string;
  players: {
    type: string;
    value: number;
  };
  miscellaneous: boolean;
  links: Array<{
    rel: string;
    uri: string;
  }>;
};
