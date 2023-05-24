const util = require("util");

export async function fetchGraphQL(query: string) {
  const path = `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }/graphql`;

  return fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

export async function getPhotos() {
  const photos = await fetchGraphQL(
    `
      query {
        photos {
          data {
            id
            attributes {
              name
              img {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  console.log(util.inspect(photos, false, null, true));
  return photos;
}
