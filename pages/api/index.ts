import { Request, Response } from "express";

import { API_URL } from "../../lib/api";

export default async ({ body }: Request, res: Response) => {
 
 if (body) {
  const { Title, page } = JSON.parse(body);
   query = "";

    if(Title){
      
      query += `s=${(Title)}&r=json`;
      console.log(query)
      console.log('title', Title)
    } else{
      query += `s=Love&r=json`
    }
  
    if (page) {
      query += `&page=${page}`;
      console.log(query)
      
    } else{
      query += `&page=1`;
      console.log(query)

    }
  } else {
    var query = "s=Love&r=json&page=1";

  }
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c68ac95ac7mshee8e1a4c569985cp168f4cjsneef730348eee',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
      }
    };
    const data = await fetch(`${API_URL}?${query}`, options);
    const json = await data.json();
    res.status(200).json(json);
    console.log(json)
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

