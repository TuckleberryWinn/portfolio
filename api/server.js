import http from "node:http";
import fs from "node:fs/promises";
import { decode } from "base64-arraybuffer";

const dataDir = "../portfolio/public/";
const dataFilePath = "../portfolio/src/assets/data.json";
const imagedestination = "../portfolio/public/images/";
const safeFileNameRegex = /^[a-zA-Z0-9\-_]+$/;

//Ensure write directories are available
await fs.mkdir(dataDir, { recursive: true });
await fs.mkdir(imagedestination, { recursive: true });

const handleRequestBody = (request) => {
    return new Promise((resolve) => {
        let body = "";
        request.on("data", function (data) {
            body += data;
        });
        request.on("end", function () {
            resolve(body);
        });
    });
};

// Create a local server to receive data from
const server = http.createServer(async (request, response) => {
    console.log("What is request.url?", request.url);

    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<h1>Welcome to the API page</h1>
            <p>TODO: CMS related documentation</p>
            <p>Visit /data for currently available information</p>
            `);
    } else if (request.url === "/data") {
        response.writeHead(418, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
            title: "Hello API data!",
            data_destination: dataDir,
            image_destination: imagedestination,
            current_project_data: currentData,
        }));
    } else if (request.url.startsWith("/submit") && request.method === "POST") {
        const body = await handleRequestBody(request);
        try {
            const parsed = JSON.parse(body);
            //Validating form data
            if (!parsed.id) {
                throw new Error("Destination is required.");
            }
            if (!safeFileNameRegex.test(parsed.id)) {
                throw new Error("Bad file name.");
            }
            if (!parsed.thumbnail) {
                throw new Error("thumbnail required.");
            }
            if (!parsed.thumbnailType) {
                throw new Error("No valid filetype for thumbnail.");
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
                throw new Error("Invalid thumbnail type.");
            }
            //------------------Actual Work Being Done------------------
            //
            //Access project data
            const rawJSON = await fs.readFile(dataFilePath, "utf-8");
            const projectData = JSON.parse(rawJSON);
            // format names always come in as image/jpg, image/gif, etc.
            let thumbnailExtension = parsed.thumbnailType.split("/").pop();
            if (thumbnailExtension === "jpeg") {
                thumbnailExtension = "jpg";
            }
            const thumbnailBuffer = decode(parsed.thumbnail);
            const thumbnailName = parsed.id +
                "-thumb." +
                thumbnailExtension;
            const thumbnailAbsolutePath = imagedestination +
                thumbnailName;
            const buffer = Buffer.from(thumbnailBuffer);
            await fs.writeFile(thumbnailAbsolutePath, buffer);
            parsed.thumbnail = "images/" + thumbnailName;
            delete parsed.thumbnailType;

            projectData.items = projectData.items.filter((item) => {
                return item.id !== parsed.id;
            });
            projectData.items.push(parsed);
            const encodedNewData = JSON.stringify(projectData);
            await fs.writeFile(dataFilePath, encodedNewData);
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(parsed));
            //----------------------------------------------------------
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
});

const portNumber = 8181;
server.listen(portNumber, () => {
    console.log(`Server has started at http://localhost:${portNumber}`);
});
