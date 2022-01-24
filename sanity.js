import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  /**
   * Find your project ID and Dataset in sanity.json in your studio project
   * This is considered 'public',  but you can use environment variables
   * if you want differ between local dev and production
   */
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  /**
   * Set useCdn to 'false' if your application require the freshest possible
   * data always (potentially slightly sower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   */
  useCdn: process.env.NODE_ENV == "production",
};

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset
 * reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
