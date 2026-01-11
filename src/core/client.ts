import { version } from "../../package.json";
import { Games } from "./game";

export class Client {
  private userAgent: string;
  private apiKey: string | null;
  private apiUrl: string;
  public games: Games;

  constructor(apiKey?: string, userAgent?: string) {
    this.apiKey = apiKey || null;
    this.userAgent = userAgent || `srcjs/${version}`;
    this.apiUrl = "https://www.speedrun.com/api/v1/";
    this.games = new Games(this);
  }

  async get(endpoint: string) {
    const response = await fetch(this.apiUrl + endpoint, {
      headers: { "user-agent": this.userAgent },
    });

    return response.json();
  }
}
