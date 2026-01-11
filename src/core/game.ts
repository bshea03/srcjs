import { Client } from "./client";
import { Game } from "../types/game";
import { Category } from "../types/category";

export class Games {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async get(id: string): Promise<Game> {
    const response = await this.client.get(`games/${id}`);
    return response.data;
  }

  async getCategories(gameId: string): Promise<Category[]> {
    const response = await this.client.get(`games/${gameId}/categories`);
    return response.data;
  }
}
