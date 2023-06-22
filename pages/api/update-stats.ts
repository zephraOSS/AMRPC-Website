import { NextApiRequest, NextApiResponse } from "next";

import * as fs from "fs";
import * as path from "path"

import { UpdateStatsRes } from "../../@types/zephra";

export default async function APIRoute(req: NextApiRequest, res: NextApiResponse) {
    const filePath = path.join(process.cwd(), "public", "releases.json");

    let content: UpdateStatsRes;
    let updateReleases;

    if (fs.existsSync(filePath)) {
        content = JSON.parse(fs.readFileSync(filePath, "utf8"));
        updateReleases = Date.now() - new Date(content.lastUpdated).getTime() > 900000;
    } else {
        content = {
            lastUpdated: new Date().toISOString(),
            releases: []
        };

        fs.writeFileSync(filePath, JSON.stringify(content));

        updateReleases = true;
    }

    res.status(200).json({
        ...content,
        willUpdate: updateReleases
    });

    if (updateReleases) {
        let page = 1,
            releases: any[] = [];

        while (true) {
            const url = `https://api.github.com/repos/zephraOSS/Apple-Music-RPC/releases?page=${page}&per_page=100`,
                response = await fetch(url),
                data = await response.json();

            if (response.headers.has("X-RateLimit-Remaining")) {
                const remaining = parseInt(response.headers.get("X-RateLimit-Remaining") ?? ""),
                    resetTime = parseInt(response.headers.get("X-RateLimit-Reset") ?? "");

                console.log(`Rate limit remaining: ${remaining}`);

                if (remaining === 0) {
                    const currentTime = Math.floor(Date.now() / 1000),
                        timeToReset = resetTime - currentTime;

                    console.log(`Rate limit exceeded. Waiting for reset (${timeToReset} seconds)...`);

                    await new Promise(resolve => setTimeout(resolve, timeToReset * 1000));

                    console.log("Rate limit reset. Resuming...");
                }
            }

            if (data.length === 0) break;

            releases = releases.concat(data);
            page++;
        }

        releases.forEach((data: any) => {
            if (data.assets.length === 0)
                releases.splice(releases.indexOf(data), 1);
        });

        fs.writeFileSync(filePath, JSON.stringify({
            lastUpdated: new Date().toISOString(),
            releases
        }));
    }
}