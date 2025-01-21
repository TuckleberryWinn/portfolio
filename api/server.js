import http from "node:http";
import fs from "node:fs/promises";
import { decode } from "base64-arraybuffer";
import { parse } from "node:path";
let goatCount = 0;

const dataDir = "../portfolio/public/";
const safeFileNameRegex = /^[a-zA-Z0-9\-_]+$/;
await fs.mkdir(dataDir, { recursive: true });

const handleRequestBody = (request) => {
    return new Promise((resolve) => {
        let body = "";
        request.on("data", function (data) {
            body += data;
            // console.log("Partial body: " + body);
        });
        request.on("end", function () {
            // console.log("Body: " + body);
            resolve(body);
        });
    });
};

// Create a local server to receive data from
const server = http.createServer(async (request, response) => {
    console.log("What is request.url?", request.url);

    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<h1>Welcome to Goat Page</h1>
            <p>${goatCount} goats have visited this page.</p>
            `);
    } else if (request.url === "/data") {
        response.writeHead(418, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
            goatCount,
            data: "Hello World!",
        }));
    } else if (request.url.startsWith("/submit") && request.method === "POST") {
        const body = await handleRequestBody(request);
        // console.log("What is body?", body);
        try {
            const parsed = JSON.parse(body);
            if (!parsed.destination) {
                throw new Error("Destination is required >:(");
            }
            if (!safeFileNameRegex.test(parsed.destination)) {
                throw new Error("Bad file name");
            }
            if (!parsed.thumbnail) {
                throw new Error("thumbnail required");
            }
            if (!parsed.thumbnailType) {
                throw new Error("No valid filetype for thumbnail");
            }
            if (
                ![
                    "image/png",
                    "image/jpg",
                    "image/jpeg",
                    "image/gif",
                    "image/webp",
                ].includes(parsed.thumbnailType)
            ) {
                throw new Error("Invalid thumbnail type");
            }
            let thumbnailExtension = parsed.thumbnailType.split("/").pop();
            if (thumbnailExtension === "jpeg") {
                thumbnailExtension = "jpg";
            }
            const thumbnailBuffer = decode(parsed.thumbnail);
            const fileName = dataDir + parsed.destination + ".json";
            const thumbnailName = dataDir + parsed.destination + "." +
                thumbnailExtension;
            const output = JSON.stringify({
                goatCount,
                parsed,
            });
            await fs.writeFile(fileName, output);
            const buffer = Buffer.from(thumbnailBuffer);
            //    console.log("what is buffer?", buffer);
            await fs.writeFile(thumbnailName, buffer);
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(output);
        } catch (error) {
            response.writeHead(400, { "Content-Type": "application/json" });
            response.end(JSON.stringify({
                error: error.message,
            }));
        }
    } else {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
            error: "Baaaahht found :<",
        }));
    }
    goatCount += 1;
});

server.listen(8181);
