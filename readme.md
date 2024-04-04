<!-- This middleware is used to enable Cross-Origin Resource Sharing (CORS) in your Express application. CORS is a mechanism that allows resources on a web page to be requested from another domain outside the domain from which the resource originated. It's a security feature implemented by web browsers to prevent malicious scripts from executing and accessing sensitive data.

    .origin: This specifies which origins are allowed to access the resources of your server. In this case, it's being set dynamically from the environment variable CORS_ORIGIN. This could be a specific domain, a list of domains, or a wildcard (\*) to allow access from any origin.

    .credentials: This option indicates whether or not the server should include credentials such as cookies, authorization headers, or TLS client certificates in cross-origin requests. Setting it to true enables the server to include credentials.

app.use(
cors({
origin: process.env.CORS_ORIGIN,
credentials: true,
})
); -->

<!-- express.json() Middleware: This middleware is used to parse incoming request bodies with JSON payloads. It parses the incoming request body and makes it available under the req.body property. The limit option is used to specify the maximum size of the JSON payload that can be parsed. In this case, it's set to "16kb" which means that any incoming JSON payload larger than 16 kilobytes will be rejected with a 413 status code.

app.use(express.json({ limit: "16kb" })); -->

<!-- express.urlencoded() Middleware: This middleware is used to parse incoming request bodies with URL-encoded payloads. It parses the incoming request body and makes it available under the req.body property. The extended option determines whether to use the querystring library (when set to false) or the qs library (when set to true) to parse the URL-encoded data. The limit option, similar to express.json(), specifies the maximum size of the URL-encoded payload that can be parsed.

app.use(express.urlencoded({ extended: true, limit: "16kb" })); -->

<!-- express.static() Middleware: This middleware is used to serve static files such as images, CSS files, JavaScript files, etc., from the specified directory (public in this case). It allows you to serve these files directly to clients without the need for additional routing logic. In this configuration, any request made to the server will first check if there's a matching file in the public directory, and if found, it will be served as-is.

app.use(express.static("public")); -->
