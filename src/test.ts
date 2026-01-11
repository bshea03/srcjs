import { Client } from "./core/client";

async function categoryTest() {
  // Create a new client
  const client = new Client();

  // Super Mario 64's game ID on speedrun.com
  const sm64GameId = "o1y9wo6q";

  try {
    // Fetch categories for Super Mario 64
    console.log("Fetching categories for Super Mario 64...");
    const categories = await client.games.getCategories(sm64GameId);

    console.log(`Found ${categories.length} categories:`);
    categories.forEach((category) => {
      console.log(`- ${category.name} (${category.type})`);
      console.log(`  ID: ${category.id}`);
      console.log(`  Rules: ${category.rules}`);
      console.log(`  Weblink: ${category.weblink}`);
      console.log("");
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

// Run the test
categoryTest();
