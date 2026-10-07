const STORAGE_KEY = "carmemory-data-v2";

const imagePool = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Volvo%20XC90%20front-1.JPG",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Renault-Clio.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Chery%20Arrizo%205.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Seat%20Ibiza%201.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Enyaq.jpg"
];

const defaultData = {
  services: [
    {id:1, date:"10.08.2024", type:"Oil change", provider:"Autocare service", cost:70},
    {id:2, date:"15.07.2024", type:"Tire Rotation", provider:"Quick Tires", cost:45},
    {id:3, date:"20.06.2024", type:"Brake Inspection", provider:"BrakeMasters", cost:60},
    {id:4, date:"12.05.2024", type:"Diagnostics", provider:"Autocare service", cost:90}
  ],
  cars: [
    {id:1, name:"Volvo XC90", year:2022, mileage:84320, vin:"YV1XXXXXX123456", image:imagePool[0]},
    {id:2, name:"Renault Clio", year:2021, mileage:52100, vin:"VF1XXXXXX987654", image:imagePool[1]},
    {id:3, name:"Chery Arrizo 5", year:2020, mileage:60400, vin:"LVVXXXXXX445566", image:imagePool[2]},
    {id:4, name:"Seat Ibiza", year:2023, mileage:30200, vin:"VSSXXXXXX778899", image:imagePool[3]},
    {id:5, name:"Skoda Enyaq iV", year:2022, mileage:41800, vin:"TMBXXXXXX112233", image:imagePool[4]}
  ],
  reminders: [
    {id:1, title:"Oil change in 5 days", date:"2024-09-15", cost:70, provider:"AutoCare C...", icon:"🛢️"}
  ],
  documents: [
    {id:1, name:"Service Invoice", type:"Receipt", file:"service-invoice.pdf"},
    {id:2, name:"Insurance Policy", type:"Insurance", file:"insurance.pdf"}
  ],
  selectedCarId: 1
};

export function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? {...defaultData, ...JSON.parse(saved)} : structuredClone(defaultData);
  } catch {
    return structuredClone(defaultData);
  }
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { imagePool };
