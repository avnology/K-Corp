import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig, Plugin } from "payload";
import { s3Storage } from '@payloadcms/storage-s3';
import { Messages } from "./collections/Messages";
import { Media } from "./collections/Media";
import { Home } from "./globals/home";

const plugins: Plugin[] = [];

if (!(process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY && process.env.S3_BUCKET)) {
  console.warn('S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, and S3_BUCKET are not set');
} else {
  plugins.push(
    s3Storage({
      collections: {
        media: true,
      },
      config: {
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION,
        forcePathStyle: process.env.S3_FORCE_PATH_STYLE === 'true',
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
      },
      bucket: process.env.S3_BUCKET,
    }),
  );
}

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Messages, Media],

  // Define and configure your globals in this array
  globals: [Home],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // PostgreSQL Database Adapter with Neon
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  plugins,
});
