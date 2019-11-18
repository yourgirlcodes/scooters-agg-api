
const ctrl = {}

const limeBikeOptions = (ne_lat,ne_long,sw_lat,sw_long,user_lat,user_long) => {
    return {
      req: {
        'url': `https://web-production.lime.bike/api/rider/v1/views/map?ne_lat=${ne_lat}&ne_lng=${ne_long}&sw_lat=${sw_lat}&sw_lng=${sw_long}&user_latitude=${user_lat}&user_longitude=${user_long}&zoom=16`,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiWkw3S1dRRFJZTURUTSIsImxvZ2luX2NvdW50IjoyfQ.B69Kjmw_zdhZgjhWO_zwmgYnKzfb2HVGc1wV-a_pES8'
        }
      }
    }
  };
  
  function requestLimeScooters(ne_lat,ne_long,sw_lat,sw_long,user_lat,user_long) {
    return new Promise((resolve, reject) => {
      const headers = limeBikeOptions(ne_lat,ne_long,sw_lat,sw_long,user_lat,user_long).req;
      console.log(headers);
      request.cookie('_limebike-web_session=Mk9wSnE3U2pOakc0Wk0zOHpVeE9WaktGVGJPMUVUL1Z4VVNMM3hnZW1aaVIrMHRZVnZ1dHlZdzYrQnZZRzN5VTlqZUNCR3VUR3ZzM2lVUmZwZHl6Sld4TlNqV2s4K2tHOW1nQVJhOU5KWGhCeGwxd2xqSXRNTW1UbW9uOWRTTEtTNk10MWVUQ3hhV0U0WnNIT2pOek5jMWFDR0xxUDRvSldrclQ2RXIwOXJJREYzMWtXVWdBai9FTzdQM3EybkR5ZmJSa2NYSU5zN2pYVkppTCtaWE5NV0JRcVlEUDBMVFVsNzNvT0FpNXJFc2FYVDRyWHNoWHJkanhLODR5M3R5dUJtMDIrYlQ1YU9NRTh0VkZnWDBMYTk3LzRqR2c5VlkrZ2NKcWViSVV5RkJtd3lZaldGckJqcEtYNnJMY3VqWk9vUkM4Mm5JZkgzOXd3WS9GUU0vekZQVFBOT0NrWlBPeXp1UVBibFlRMWJjUVZkQm9yVVA1bFNvTDV5YURIZWp0eE5yK2pOZnRMT1NwVFJvZG1KM2hpREhJbDdIVzJ4bkZ5MUNzME50R3dvUT0tLXdrSmZNR25mTjFFaTBoTTIzdkZrcHc9PQ%3D%3D--ef06d75514f8147533efb105b2ef189a5923b7d4')
      request.get(headers, (error, response, body) => {
        if (error) reject(error);
        resolve(response.body);
      });
    });
  }
      
    ctrl.getScooters = (req, res, next) => {
      const ne_lat = req.query.ne_lat;
      const ne_long = req.query.ne_long;
      const sw_lat = req.query.sw_lat;
      const sw_long = req.query.sw_long;
      const user_lat = req.query.user_lat;
      const user_long = req.query.user_long;
  
        requestLimeScooters(ne_lat,ne_long,sw_lat,sw_long,user_lat,user_long)
        .then(limeRes => res.send(limeRes))
        .catch(err => console.error(err));
    }

    module.exports = ctrl;