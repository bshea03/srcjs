"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

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
