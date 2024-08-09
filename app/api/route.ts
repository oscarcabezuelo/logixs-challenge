import type { NextApiRequest, NextApiResponse } from "next";
import { API_KEY, BOARD_ID, TOKEN } from "@/data/trelloKeys";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${API_KEY}&token=${TOKEN}`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
