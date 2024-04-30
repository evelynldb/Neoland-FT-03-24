const CalendarSchema = new mongoose.Schema(
  {
    activityId: { type: mongoose.Schema.Types.ObjectId, ref: "Activity" },
    startDate: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    endDate: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    avaibleSpots: { type: Number },
    monitorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    room: { type: String, enum: ["sala verde", "sala roja"], required: false },
  },
  {
    timestamps: true,
  }
);

const calendarioActividades = [
  {
    activityId: 12345,
    startDate: "2024-05-01 10:00",
    endDate: "2024-05-01 11:00",
    avaibleSpots: 30,
    monitorId: 98765,
    room: "sala verde",
  },
  {
    activityId: 12345,
    startDate: "2024-05-02 10:00",
    endDate: "2024-05-02 11:00",
    avaibleSpots: 30,
    monitorId: 98765,
    room: "sala verde",
  },
  {
    activityId: 12345,
    startDate: "2024-05-03 10:00",
    endDate: "2024-05-03 11:00",
    avaibleSpots: 30,
    monitorId: 98765,
    room: "sala verde",
  },
];

for (let i = 0; schedule.length > i; i++) {
  const requestOptions = {
    method: "POST", // Especifica el método HTTP POST
    headers: {
      "Content-Type": "application/json", // Especifica el tipo de contenido como JSON
    },
    body: JSON.stringify(schedule[i]), // Convierte los datos a formato JSON y los establece como el cuerpo de la solicitud
  };

  // Realiza la solicitud POST al servidor
  const response = await fetch(
    "https://ejemplo.com/api/endpoint",
    requestOptions
  );

  // Espera la respuesta del servidor y convierte los datos de la respuesta a formato JSON
  const responseData = await response.json();
}
