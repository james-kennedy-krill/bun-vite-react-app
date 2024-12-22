import { createClient } from "edgedb";

const client = createClient();

const INSERT_CONTENT = `
  with content := <array<tuple<title: str, value: str>>>$content
  for item in array_unpack(content) union (
    insert Content {
      title := item.title,
      value := item.value,
    }
  )
`;

const content = [
  { title: "The Matrix", value: "1999" },
  { title: "The Matrix Reloaded", value: "2003" },
  { title: "The Matrix Revolutions", value: "2003" },
];

await client.execute(INSERT_CONTENT, { content });

console.log(`Seeding complete.`);
process.exit();
