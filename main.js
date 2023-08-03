const pollutionScale = [
    {
      scale: [0, 50],
      quality: "Good",
      src: "happy",
      background: "linear-gradient(to right, #45B649, #DCE35B)",
    },
    {
      scale: [51, 100],
      quality: "Moderate",
      src: "thinking",
      background: "linear-gradient(to right, #F3F9A7, #CAC531)",
    },
    {
      scale: [101, 150],
      quality: "Unhealthy",
      src: "unhealthy",
      background: "linear-gradient(to right, #F16529, #E44D26)",
    },
    {
      scale: [151, 200],
      quality: "Bad",
      src: "bad",
      background: "linear-gradient(to right, #ef473a, #cb2d3e)",
    },
    {
      scale: [201, 300],
      quality: "Very bad",
      src: "mask",
      background: "linear-gradient(to right, #8E54E9, #4776E6)",
    },
    {
      scale: [301, 500],
      quality: "Terrible",
      src: "terrible",
      background: "linear-gradient(to right, #7a2828, #a73737)",
    },
  ];

  const loader=document.querySelector('.loader')
  const emoji=document.querySelector('.emoji')
  const pCity=document.querySelector("#pCity") 

  async function dataPolution(){
    try{
        const repApi = await fetch('http://api.airvisual.com/v2/nearest_city?key=0b015984-13a0-4914-829c-6fedf21a8afd')
        const repData = await repApi.json()
        let aqius = repData.data.current.pollution.aqius
        console.log(repData)
        let dataApi ={
          city : repData.data.city,
          aqius
        }
    }
    catch(error){

    }
  }
  dataPolution()