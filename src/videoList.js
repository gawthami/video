import React from "react";

function LoadBackground() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const ObjectTest = {
    1: {
        id : 1,
        name:'ABC'
    },
    3: {
        id: 3,
        name:'DEF'
    }
};
  const {data1}=
  
    [{
      
      "id": 1,
      "name":"VID-20150508-WA0004",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
     
      "id": 2,
      "name":"VID-20150514-WA0007",
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }]

    

  React.useEffect(() => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);
   // alert(JSON.stringify(data))

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data1);
  }, [data1]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data1.map((user) => (
         alert(user)
        ))
      )}
    </div>
  );
}

export default LoadBackground;