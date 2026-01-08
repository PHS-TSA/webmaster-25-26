import image from "@/images/image.png";
import { define } from "@/utils.ts";

export default define.page(({ Component }) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bridgeton Resources</title>
      <link rel="icon" type="image/x-icon" href={image} />
    </head>
    <body>
      <Component />
    </body>
  </html>
));
