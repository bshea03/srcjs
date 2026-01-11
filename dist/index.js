// package.json
var version = "0.0.1";

// src/core/game.ts
var Games = class {
  client;
  constructor(client) {
    this.client = client;
  }
  async get(id) {
    const response = await this.client.get(`games/${id}`);
    return response.data;
  }
  async getCategories(gameId) {
    const response = await this.client.get(`games/${gameId}/categories`);
    return response.data;
  }
};

// src/core/client.ts
var Client = class {
  userAgent;
  apiKey;
  apiUrl;
  games;
  constructor(apiKey, userAgent) {
    this.apiKey = apiKey || null;
    this.userAgent = userAgent || `srcjs/${version}`;
    this.apiUrl = "https://www.speedrun.com/api/v1/";
    this.games = new Games(this);
  }
  async get(endpoint) {
    const response = await fetch(this.apiUrl + endpoint, {
      headers: { "user-agent": this.userAgent }
    });
    return response.json();
  }
};

// src/index.ts
var index_default = Client;
export {
  index_default as default
};
